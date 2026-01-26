import { useState } from 'react';
import { Button, Input } from '@sofiya/codveda-ui';  // ← YOUR LIBRARY!
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error === 'Invalid email' ? 'Please enter a valid email' : ''}
          required
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error === 'Invalid password' ? 'Password is incorrect' : ''}
          required
        />
        
        <Button 
          variant="primary" 
          type="submit" 
          size="lg"
          loading={loading}
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Signing in...' : 'Login'}
        </Button>
      </form>
      
      <div className="mt-6 text-center space-y-2 text-sm">
        <p>
          No account?{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
        <Link 
          to="/forgot-password" 
          className="text-blue-600 hover:underline inline-flex items-center gap-1"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
