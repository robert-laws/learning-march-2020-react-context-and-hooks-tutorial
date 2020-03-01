import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext';

export const BookList = () => {
  const { light, dark, themeCurrentToggle } = useContext(ThemeContext);

  const theme = themeCurrentToggle ? light : dark;

  return (
    <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
      <ul>
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </ul>
    </div>
  )
}
