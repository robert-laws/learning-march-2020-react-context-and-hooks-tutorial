import React, { createContext, useState } from 'react'

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {id: 1, title: 'the new book'},
    {id: 2, title: 'walk in the park'},
    {id: 3, title: 'watching for the leaders'},
  ])

  return (
    <BookContext.Provider value={{books}}>
      {children}
    </BookContext.Provider>
  )
}
