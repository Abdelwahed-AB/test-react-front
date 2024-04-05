import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/styles/vars.css";
import Header from "./components/Header";
import ROUTES from "./core/routes";
import { createContext, useState } from "react";

const LoggedInUserContext = createContext<{
    userId: number;
    setUserId: (userId: number) => void;
}>(null);

function App() {
    const [loggedInUserId, setLoggedInUserId] = useState(0);
    return (
        <>
            <LoggedInUserContext.Provider
                value={{ userId: loggedInUserId, setUserId: setLoggedInUserId }}
            >
                <BrowserRouter>
                    <Header />
                    <main className="main-container">
                        <Routes>
                            {ROUTES &&
                                ROUTES.map((route) => (
                                    <Route
                                        path={route.path}
                                        Component={route.component}
                                    />
                                ))}
                        </Routes>
                    </main>
                </BrowserRouter>
            </LoggedInUserContext.Provider>
        </>
    );
}

export { App, LoggedInUserContext };
