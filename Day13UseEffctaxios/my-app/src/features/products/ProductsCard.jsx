import React from 'react'

function ProductsCard({item}) {
  return (
    <div className='container'>
     <div className="col-md-4" key={item.id}>
                                <div className="card" style={{width: "18rem"}}>
                                    <img src={item.images[0]} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description.length >50 ? item.description.slice(0,50)+"...": item.description}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
    </div>
  )
}

export default ProductsCard