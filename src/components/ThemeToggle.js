import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </>
  )
}
