import React from 'react'
import './Poster.css'

const Poster = () => {
  return (
    <div className="poster">
        <div className="poster-image-container">
        <img src="https://img.freepik.com/premium-vector/lap-letter-logo-design-technology-company-lap-logo-design-black-white-color-combination-lap-logo-lap-vector-lap-design-lap-icon-lap-alphabet-lap-typography-logo-design_229120-161809.jpg" alt="Poster" className="poster-image" />
        </div>
        <div className="poster-content">
      <h2 className="poster-title">Poster Title</h2>
      <p className="poster-description">This is a description of the poster. If there's more text, you can scroll through it without seeing a scrollbar.</p>
    </div>
    </div>
  )
}

export default Poster