import { useNavigate } from "react-router-dom";
import "../assets/styles/pages/LoginPage.css";
import useFetch from "../hooks/useFetch";
import User from "../models/User.model";
import { useContext, useState } from "react";
import { LoggedInUserContext } from "../App";

const LoginPage = () => {
    const users: User[] = useFetch("/users").data;
    const { setUserId } = useContext(LoggedInUserContext);
    const navigate = useNavigate();
    const [selectedUserId, setSelectedUserId] = useState(0);

    function handleLogin() {
        setUserId(selectedUserId);
        navigate("/");
    }

    function handleChange(event) {
        setSelectedUserId(event.target.value);
    }

    return (
        <section className="login-page">
            <h2>Login</h2>
            <form className="login-form" action="javascript:void(0)">
                <div className="form-control">
                    <label htmlFor="user-select">User</label>
                    <select
                        onChange={handleChange}
                        name="user"
                        id="user-select"
                        className="form-select"
                    >
                        <option defaultValue={0} selected disabled>
                            -- select a user --
                        </option>
                        {users &&
                            users.map((user) => <UserOption user={user} />)}
                    </select>
                </div>
                <div className="form-control">
                    <button onClick={handleLogin} className="btn btn-login">
                        Login
                    </button>
                </div>
            </form>
        </section>
    );
};

const UserOption = (props: { user: User }) => {
    const user = props.user;
    return <option value={user.id}>{user.username}</option>;
};

export default LoginPage;
