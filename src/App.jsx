import React from 'react';

import { HashRouter, Route, Routes, Link } from 'react-router-dom';

import Authors from './components/Authors';
import Books from './components/Books';
import NewBook from './components/NewBook';
import Login from './components/Login';

import styles from './App.module.scss';
import { useApolloClient } from '@apollo/client';

const App = () => {
  const [token, setToken] = React.useState(null);
  const client = useApolloClient();

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };

  return (
    <HashRouter>
      <div className={styles.navigation}>
        <Link to="/authors"><button>authors</button></Link>
        <Link to="/books"><button>books</button></Link>
        {token && <Link to="/add"><button>add book</button></Link>}
        {token && <button onClick={logout}>logout</button>}
        {!token && <Link to="/login"><button>login</button></Link>}
      </div>

      <Routes>
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add" element={<NewBook />} />
        <Route
          path="/login"
          element={
            <Login setError={() => {}} setToken={setToken} />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
