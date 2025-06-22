import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
const App = () => {
  return (
    <div className="w-full h-screen">
      <Login />
      <AdminDashboard />
      <EmployeeDashboard />
    </div>
  );
};

export default App;
