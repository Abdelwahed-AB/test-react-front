import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/components/Header.css";
import { useContext } from "react";
import { LoggedInUserContext } from "../App";

const Header = () => {
    const { userId, setUserId } = useContext(LoggedInUserContext);
    const navigate = useNavigate();

    function handleLogout() {
        setUserId(0);
        navigate("/");
    }

    return (
        <header className="header">
            <h2 className="logo">Library</h2>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        All books
                    </Link>
                </li>
                {userId > 0 ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-books">
                                My books
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/wishlist">
                                Wishlist
                            </Link>
                        </li>
                        <li>
                            <a className="nav-link" onClick={handleLogout}>
                                Logout
                            </a>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
};

export default Header;
