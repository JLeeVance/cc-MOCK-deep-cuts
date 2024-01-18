import React from 'react'
import Track from "./Track"

function TracksList({ tracks }) {

  const tracksToRender = tracks.map((trackObj) => <Track key={trackObj.id} {...trackObj}   />)

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {tracksToRender}
      </tbody>
    </table>
  )
}

export default TracksList