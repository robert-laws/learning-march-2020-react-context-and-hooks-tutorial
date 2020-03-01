import React, { useState } from 'react'

export const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addSong(title);

    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Song name:</label>
      <input type="text" name="title" id='title' value={title} required onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="Add Song"/>
    </form>
  )
}
