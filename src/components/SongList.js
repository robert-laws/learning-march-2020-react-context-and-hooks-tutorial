import React, { useState } from 'react'

export const SongList = () => {
  const mySongs = [
    { id: 1, title: 'this wild darkness' },
    { id: 2, title: 'memory gospel' },
    { id: 3, title: 'time for some sleep' },
    { id: 4, title: 'going places' }
  ]

  const [songs, setSongs] = useState(mySongs);

  const addSong = () => {
    const idValue = songs.length + 1
    const song = { id: idValue, title: `A new beginning # ${idValue}` };
    setSongs([...songs, song])
  }

  return (
    <div className='song-list'>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            {song.title.toUpperCase()}
          </li>
        ))}
      </ul>
      <button onClick={addSong}>Add Song</button>
    </div>
  )
}
