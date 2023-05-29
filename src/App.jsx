import React from 'react';

import { HashRouter, Route, Routes, Link } from 'react-router-dom';

import Authors from './components/Authors';
import Books from './components/Books';
import NewBook from './components/NewBook';

import styles from './App.module.scss';

const App = () => (
  <HashRouter>
    <div className={styles.navigation}>
      <Link to="/authors">authors</Link>
      <Link to="/books">books</Link>
      <Link to="/add">add book</Link>
    </div>

    <Routes>
      <Route path="/authors" element={<Authors />} />
      <Route path="/books" element={<Books />} />
      <Route path="/add" element={<NewBook />} />
    </Routes>
  </HashRouter>
);

export default App;
