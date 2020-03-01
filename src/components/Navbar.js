import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const { light, dark, themeCurrentToggle } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  const theme = themeCurrentToggle ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.text }}>
      <h1>Context App</h1>
      {isAuthenticated ? <h4>Welcome, user</h4> : <button onClick={toggleAuth}>Log In</button> }
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
