import API, { setAxiosConfig } from "@/service/api";
import { postRefreshToken } from "@/service/auth/api";
import type { RefreshToken } from "@/service/auth/type";
import { router } from "@/routes/index";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface User {
  accessToken: string;
  refreshToken: string;
  username: string;
  email: string;
  image: string;

}

interface Context {
  user: User | null;
  changeUser: (user: User | null) => void;
  logout: () => void;
}

const contextValue = {
  user: {
    accessToken: "",
    refreshToken: "",
    username: "",
    email: "",
    image: "",
  },
  changeUser: () => {},
  logout: () => {},
};

interface Props {
  children: ReactNode;
}

const TokenContext = createContext<Context>(contextValue);

export const TokenProvider = ({ children }: Readonly<Props>) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? (JSON.parse(storedUser) as User)
      : {
          accessToken: "",
          refreshToken: "",
          username: "",
          email: "",
          image: "",
        };
  });

  // Use refs to track current state in interceptor
  const userRef = useRef(user);
  const changeUserRef = useRef<(user: User | null) => void>(() => {});

  const refreshAuthToken = async () => {
    try {
      const payload = userRef.current?.refreshToken || "";
      const response = await postRefreshToken(payload);

      const { accessToken, refreshToken } = response as RefreshToken;
      return { accessToken, refreshToken };
    } catch (error) {
      console.error("[Token Refresh Error]", error);
      return null;
    }
  };

  const changeUser = useCallback((user: User | null) => {
    setUser(user);
    userRef.current = user;

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.navigate("/");
    } else {
      localStorage.removeItem("user");
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setUser({
      accessToken: "",
      refreshToken: "",
      username: "",
      email: "",
      image: "",
    });
    userRef.current = null;
    router.navigate("/login");
  }, []);

  // Keep changeUserRef up-to-date
  useEffect(() => {
    changeUserRef.current = changeUser;
  }, [changeUser]);

  // Keep userRef up-to-date
  useEffect(() => {
    userRef.current = user;
  }, [user]);

  // Setup interceptor with refs to avoid scope issues
  useEffect(() => {
    const interceptor = API.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          try {
            const refreshResponse = await refreshAuthToken();

            if (refreshResponse) {
              const nextUser = {
                accessToken: refreshResponse.accessToken || "",
                refreshToken: refreshResponse.refreshToken || "",
                username: userRef.current?.username || "",
                email: userRef.current?.email || "",
                image: userRef.current?.image || "",
              };
              changeUserRef.current(nextUser);
              setAxiosConfig(refreshResponse.accessToken || "");
              error.config.headers["Authorization"] =
                `Bearer ${refreshResponse.accessToken}`;
              return API(error.config);
            } else {
              // Token refresh failed, logout user
              changeUserRef.current(null);
              return Promise.reject(error);
            }
          } catch (err) {
            console.error("[Token Refresh Failed]", err);
            changeUserRef.current(null);
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      },
    );

    // Cleanup interceptor on unmount
    return () => {
      API.interceptors.response.eject(interceptor);
    };
  }, []);

  const tokenContextValue = useMemo(
    () => ({
      user,
      changeUser,
      logout,
    }),
    [user, changeUser, logout],
  );

  useEffect(() => {
    if (user) {
      setAxiosConfig(user?.accessToken);
    }
  }, [user]);

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);

  if (context === undefined) {
    throw new Error("Error, useToken must be use within TokenContext");
  }

  return context;
}