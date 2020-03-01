import React from 'react';

import './App.scss';
import { Navbar } from './components/Navbar';
import { BookList } from './components/BookList';

function App() {
  return (
    <main className='App'>
      <Navbar />
      <BookList />
    </main>
  );
}

export default App;
