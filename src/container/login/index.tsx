import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomFormField, Form } from "../../components/form";
import { loginSchema, type LoginSchema } from "@/service/auth/form";
import { Input } from "@/components/input";
import { postAuth } from "@/service/auth/api";
import { useToken } from "../../hooks/useToken";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const { changeUser } = useToken();
  const [loginError, setLoginError] = useState<string | null>(null);
  
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const { handleSubmit, control, formState: { isSubmitting } } = form;

  const onSubmit = async (data: LoginSchema) => {
    setLoginError(null);
    try {
      const response = await postAuth(data);

      if (response) {
        const user = {
          accessToken: response?.accessToken,
          refreshToken: response?.refreshToken,
          username: response?.username,
          email: response?.email,
          image: response?.image,
        };
        changeUser(user);
      } else {
        setLoginError("Incorrect credentials. Please verify your system parameters.");
      }
    } catch (error) {
      console.error(error);
      setLoginError("System link failure. Unable to contact authentication server.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative py-12 px-4 select-none">
      
      {/* Background technical corner tick marks (90-degree intersection visualizers) */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-neutral-300 pointer-events-none" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-neutral-300 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-neutral-300 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-neutral-300 pointer-events-none" />

      {/* Card Wrapper */}
      <div className="w-full max-w-[440px] bg-white border border-neutral-200 p-8 sm:p-10 z-10 rounded-xl shadow-[1px_1px_0_0_rgba(0,0,0,0.02)] transition-all hover:border-black hover:shadow-[3px_3px_0_0_#000] flex flex-col relative overflow-hidden animate-scale-in">
        
        {/* Faded Background padlock illustration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] text-neutral-900 pointer-events-none select-none z-0">
          <svg 
            className="w-64 h-64" 
            viewBox="0 0 100 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8"
          >
            <path d="M50 15 L80 32 L80 68 L50 85 L20 68 L20 32 Z" />
            <path d="M50 15 L50 85" />
            <path d="M20 32 L50 49 L80 32" />
            <path d="M50 49 L50 85" />
            <path d="M20 68 L50 49 L80 68" strokeDasharray="3 3" />
            <circle cx="50" cy="49" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Content Area */}
        <div className="relative z-10 w-full">
          {/* Sharp Monochromatic Headlines */}
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-black text-black tracking-tight uppercase">
              Sign In
            </h2>
            <p className="font-cascadia text-neutral-600 text-xs mt-1">
              Access the secure dashboard environment.
            </p>
          </div>

          {/* Error logs inside monochrome frame */}
          {loginError && (
            <div className="bg-neutral-50 border border-black text-black font-cascadia text-[11px] p-3 mb-6 text-left leading-relaxed">
              <span className="font-bold">[ERR_STATE]</span>: {loginError}
            </div>
          )}

          <Form {...form}>
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Username field */}
              <div className="text-left font-cascadia text-xs text-neutral-700">
                <CustomFormField<LoginSchema>
                  control={control}
                  name="username"
                  required
                  label="Username"
                >
                  {(field) => (
                    <Input
                      {...field}
                      placeholder="Username"
                      type="text"
                      className="bg-white border border-neutral-200 text-black placeholder-neutral-400 focus-visible:ring-black h-11 px-3 rounded-lg w-full font-cascadia"
                    />
                  )}
                </CustomFormField>
              </div>

              {/* Password field */}
              <div className="text-left font-cascadia text-xs text-neutral-700">
                <CustomFormField<LoginSchema>
                  control={control}
                  name="password"
                  required
                  label="Password"
                >
                  {(field) => (
                    <Input
                      {...field}
                      placeholder="Password"
                      type="password"
                      className="bg-white border border-neutral-200 text-black placeholder-neutral-400 focus-visible:ring-black h-11 px-3 rounded-lg w-full font-cascadia"
                    />
                  )}
                </CustomFormField>
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-neutral-800 text-white font-bold h-11 transition-all duration-200 cursor-pointer shadow-[2px_2px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] mt-4 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg uppercase text-xs tracking-wider font-cascadia"
              >
                {isSubmitting ? 'Verifying...' : 'Execute Sign In'}
              </button>

              <div className="text-neutral-500 text-xs mt-6 text-center font-cascadia p-2 border-black border-3 font-bold rounded-lg">
                Mock Account <br/>Email = emilys<br/> Password=emilyspass
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
