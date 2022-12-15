import { NextPageWithLayout } from '@/models/common'
import { useAuth } from 'hooks'
import { useRouter } from 'next/router'

const LoginPage: NextPageWithLayout = () => {

    const router = useRouter()
    const { profile, login, logout } = useAuth({
        revalidateOnMount: false
    })

    const handleLogin = async () => {
        try {
            await login();
            router.push('/about');
        } catch (error) {
            console.log('failed to login', error);            
        }
    }

    const handleLogout = async () => {
        try {
            await logout();
            router.push('/login');
        } catch (error) {
            console.log('failed to logout', error);            
        }
    }

    return (
        <div>
            <h1>Login Page</h1>

            <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

            <button onClick={handleLogin}>Login</button>
            <button onClick={() => router.push('/about')}>Go to about</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LoginPage