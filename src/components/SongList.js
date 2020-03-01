import React, { useState, useEffect } from 'react'

import { NewSongForm } from './NewSongForm';

export const SongList = () => {
  const mySongs = [
    { id: 1, title: 'this wild darkness' },
    { id: 2, title: 'memory gospel' },
    { id: 3, title: 'time for some sleep' },
    { id: 4, title: 'going places' }
  ]

  const [songs, setSongs] = useState(mySongs);

  const addSong = (title) => {
    const idValue = songs.length + 1
    const song = { id: idValue, title };
    setSongs([...songs, song])
  }

  useEffect(() => {
    console.log('use effect hook', songs);
  }, [songs])

  return (
    <div className='song-list'>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            {song.title.toUpperCase()}
          </li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  )
}
