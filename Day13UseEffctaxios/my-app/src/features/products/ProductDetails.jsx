import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loader from '../../components/Loader'

const ProductDetails = () => {
    const [loading, setLoading] = useState(true)
    const [product, setproduct] = useState([])

    // useEffect(()=>{
    //     async function productApi(){
    //         const data = await fetch("https://dummyjson.com/products")
    //         // console.log(data);

    //         const {products} = await data.json()
    //         console.log(products);

    //     }
    //     productApi()

    // },[])
    useEffect(() => {
        async function productApi() {
            const { data } = await axios.get("https://dummyjson.com/products?limit=100")
            console.log(data.products);

            setproduct(data.products)
            setLoading(false)

            // setTimeout(()=>{
            //     setproduct(data.products)
            // setLoading(false)
            // },2000)


        }
        productApi()

    }, [])


    return (
        <>
            {loading ? <Loader /> : <div className='container mt-5'>
                <div className="row g-5">
                    {
                        product.map((item) => (
                            <div className="col-md-4" key={item.id}>
                                <div className="card h-100 shadow-sm border-0 rounded-3">
                                    <img
                                        src={item.images[0]}
                                        className="card-img-top rounded-top"
                                        alt={item.title}
                                        style={{ height: "200px" }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title fw-bold">{item.title}</h6>
                                        <p className="card-text text-muted small">
                                            {item.description.length > 50
                                                ? item.description.slice(0, 50) + "..."
                                                : item.description}
                                        </p>
                                        <div className="d-flex justify-content-center mt-auto">
                                            <a href="#" className="btn btn-primary btn-sm">
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }


                </div>

            </div>}
        </>

    )
}

export default ProductDetails