import IRoute from "../interfaces/route";
import Home from "../Home";
import SignUpForm from "../SignUpForm";


const routes: IRoute[] = [
    {
        path: '/', 
        name: 'SignUp Form Page', 
        component: SignUpForm,
        exact: true,
    },
    {
        path: '/',
        name: 'HomePage',
        component: Home,
        exact: true,
    }
]

export default routes;