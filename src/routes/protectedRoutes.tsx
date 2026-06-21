import { Outlet, useLocation } from 'react-router-dom'
import { useToken } from '@/hooks/useToken'

const ProtectedRoute = () => {
    const { pathname } = useLocation()
    const { user } = useToken()

    const tokenProtected = ["/", "/cv-page", "/todo", "/movies"]
    const auth = ["/login"]

    if (tokenProtected.includes(pathname)) {
        if (!user?.accessToken) {
            window.location.href = "/login"
        }
    }

    if (auth.includes(pathname)) {
        if (user?.accessToken) {
            window.location.href = "/"
        }
    }

    return <Outlet />
}

export default ProtectedRoute