import React, { useState } from 'react'

function AddTrackForm({ onFormSubmit }) {

  const initialFormState = {
    image: "",
    title: "",
    artist: "",
    BPM: ""
  }

  const [ formData , setFormData ] = useState(initialFormState)

  const handleFormChange = (e) => {
    setFormData({...formData , [e.target.name] : e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8001/tracks` , {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        ...formData,
        BPM: parseInt(formData.BPM)
      })
    })
    .then(r => r.json())
    .then(onFormSubmit)

  }


  return (
      <form onSubmit={handleFormSubmit} >
        <div>
          <input onChange={handleFormChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleFormChange} value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleFormChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleFormChange} value={formData.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm