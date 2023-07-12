import Home from '../pages/Home'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
}


const routes: RouteType[] = [
    {
        path: '/home',
        component: Home,
        name: "Home Screen",
    },
    {
        path: '/about',
        component: About,
        name: "About",
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: "Dashboard",
    },
    
]

export default routes