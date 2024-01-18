import React , { useState , useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [ tracks , setTracks ] = useState([])

  const [ searchText , setSearchText ] = useState('')

  useEffect(() => {
    fetch(`http://localhost:8001/tracks`)
    .then(r => r.json())
    .then(setTracks)
  }, [] )

  const addNewTrack = (newTrack) => {
    // console.log(newTrack)
    // const updatedTracks = [...tracks , newTrack]
    setTracks([...tracks , newTrack])
  }
  
  const handleSearchText = (e) => {
    setSearchText(e.target.value)

    const filteredList = tracks.filter((track) => track.title.toLowerCase().includes(searchText.toLowerCase()))
    setTracks(filteredList)
  }

  return (
    <div>
      <Search 
      searchText={searchText}
      onSearchChange={handleSearchText}

      />
      <AddTrackForm 
      onFormSubmit={addNewTrack}
      />
      <TracksList tracks={tracks} />
    </div>
  )
}

export default TracksPage