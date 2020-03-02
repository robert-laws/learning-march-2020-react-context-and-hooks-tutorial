import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';

export const BookList = () => {
  const { light, dark, themeCurrentToggle } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const theme = themeCurrentToggle ? light : dark;

  return (
    <div className="book-list" style={{ color: theme.text, background: theme.bg }}>
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}
