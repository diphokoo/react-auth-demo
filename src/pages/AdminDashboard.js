import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    return (
        <div>
        <h2>Admin Dashboards </h2>
        <p> welcome, {user?.name} </p>

        <button onClick={logout}>Logout</button>
    </div>
    )
}

export default AdminDashboard;