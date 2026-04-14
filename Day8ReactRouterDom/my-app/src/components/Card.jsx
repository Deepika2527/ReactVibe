import React from 'react'

function Card() {
  return (
    <div className='container d-flex justify-content-between m-4 p-2 flex-wrap'>
        {/* card 1 */}
        <div className="card" style={{width: "18rem"}}>
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yt4IymSTNt7yY04u_KDMTPx6ZSK_YfQo9w&s"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>alert("Added to cart")}>Add to Cart</a>
  </div>
</div>

{/* card 2 */}
    <div className="card" style={{width: "18rem"}}>
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yt4IymSTNt7yY04u_KDMTPx6ZSK_YfQo9w&s"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary"onClick={()=>alert("Added to cart")}>Add to Cart</a>
  </div>
</div>
{/* card 3 */}
    <div className="card" style={{width: "18rem"}}>
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yt4IymSTNt7yY04u_KDMTPx6ZSK_YfQo9w&s"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary"onClick={()=>alert("Added to cart")}>Add to Cart</a>
  </div>
</div>
{/* card 4 */}
    <div className="card" style={{width: "18rem"}}>
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yt4IymSTNt7yY04u_KDMTPx6ZSK_YfQo9w&s"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary"onClick={()=>alert("Added to cart")}>Add to Cart</a>
  </div>
</div>
{/* card 5 */}
    <div className="card" style={{width: "18rem"}}>
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yt4IymSTNt7yY04u_KDMTPx6ZSK_YfQo9w&s"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary"onClick={()=>alert("Added to cart")}>Add to Cart</a>
  </div>
</div>
{/* card 6 */}
    <div className="card" style={{width: "18rem"}}>
  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yt4IymSTNt7yY04u_KDMTPx6ZSK_YfQo9w&s"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary"onClick={()=>alert("Added to cart")}>Add to Cart</a>
  </div>
</div>
    </div>
  )
}

export default Card