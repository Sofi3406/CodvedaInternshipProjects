import React, { useState, useEffect } from 'react';  // ← ADD THIS LINE
import axios from 'axios';
import { useDebounce } from '../hooks/useDebounce';

function Search() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true);
      setError(null);
      axios.get(`${import.meta.env.VITE_GITHUB_SEARCH}${debouncedQuery}`)
        .then(res => {
          setUsers(res.data.items || []);
          setLoading(false);
        })
        .catch(err => {
          setError('Search failed—check network or try again.');
          setUsers([]);
          setLoading(false);
        });
    } else {
      setUsers([]);
    }
  }, [debouncedQuery]);

  return (
    <div className="page-container">
      <h1 className="page-title">GitHub User Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users (debounced)..."
        className="search-input"
      />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul className="users-grid">
        {users.map(user => (
          <li key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <h3 className="username">{user.login}</h3>
            <a href={user.html_url} className="profile-link" target="_blank" rel="noopener noreferrer">Profile</a>
          </li>
        ))}
      </ul>
      {!query && <p className="no-query">Enter a search term above.</p>}
    </div>
  );
}

export default Search;
