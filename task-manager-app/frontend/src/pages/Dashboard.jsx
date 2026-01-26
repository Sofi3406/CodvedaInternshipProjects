import { useAuth } from '../hooks/useAuth';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Welcome, {user?.name}!</h1>
          <p className="text-gray-600">Manage your tasks here.</p>
        </div>
        <button onClick={logout} className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
          Logout
        </button>
      </div>
      <TaskList />
    </div>
  );
};

export default Dashboard;
