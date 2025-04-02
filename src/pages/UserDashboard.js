import { useAuth } from "../context/AuthContext";

const UserDashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <h2>User Dashboards</h2>
            <p> welcome, {user?.name}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserDashboard;