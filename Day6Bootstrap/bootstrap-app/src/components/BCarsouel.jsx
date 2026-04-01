import React from 'react'

function BCarsouel() {
  return (
    <div>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={"https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg"} 
      className="d-block w-100"   alt="..." height={500} />
    </div>
    <div className="carousel-item">
      <img src={"https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg"} 
       className="d-block w-100" alt="..." height={500} />
    </div>
    <div className="carousel-item">
      <img src={"https://images.pexels.com/photos/417084/pexels-photo-417084.jpeg"} 
      className="d-block w-100" alt="..." height={500} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default BCarsouel