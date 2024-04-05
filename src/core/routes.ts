import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage"
import BookDetailsPage from "../pages/book/BookDetailsPage"
import UserReadBooksPage from "../pages/book/UserReadBooksPage"

interface Route {
    path: string,
    component: ()=>JSX.Element
}

const ROUTES: Route[] = [
    {
        path: "/",
        component: MainPage,
    },
    {
        path: "/book/:id/details",
        component: BookDetailsPage,
    },
    {
        path: "/my-books",
        component: UserReadBooksPage,
    },
    {
        path: "/login",
        component: LoginPage
    }
];

export default ROUTES;