import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const { user } = useAuth();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await axios.get('/api/tasks', { withCredentials: true });
    setTasks(data);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/tasks', newTask, { withCredentials: true });
    setTasks([...tasks, data]);
    setNewTask({ title: '', description: '' });
  };

  const toggleComplete = async (id, completed) => {
    const { data } = await axios.patch(`/api/tasks/${id}`, { completed: !completed }, { withCredentials: true });
    setTasks(tasks.map(t => t._id === id ? data : t));
  };

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`, { withCredentials: true });
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div>
      <form onSubmit={handleCreate} className="mb-8 p-6 bg-white rounded-xl shadow">
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="w-full p-3 mb-4 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button type="submit" className="btn-primary">Add Task</button>
      </form>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task._id} className="p-6 bg-white rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => toggleComplete(task._id, task.completed)}
                className={`px-4 py-2 rounded ${task.completed ? 'bg-green-600' : 'btn-primary'}`}
              >
                {task.completed ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
