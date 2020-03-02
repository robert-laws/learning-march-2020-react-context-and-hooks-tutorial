import React from 'react';

import './App.scss';
import { Navbar } from './components/Navbar';
import { BookList } from './components/BookList';

import { ThemeContextProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { AuthContextProvider } from './context/AuthContext';
import { SongList } from './components/SongList';
import { BookContextProvider } from './context/BookContext';

function App() {
  return (
    <main className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
      <hr />
      <SongList />
    </main>
  );
}

export default App;
