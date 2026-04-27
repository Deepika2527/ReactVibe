import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Myproducts() {
    const [products, setproducts] = useState([])
    const [searchProducts, setSearchProducts] = useState("")
    const [categoryList, setcategoryList] = useState([])
    const [category, setCategory] = useState("")

    // using useffect for categoryList
    useEffect(() => {
        async function catgeoryListApi() {
            const { data } = await axios.get("https://dummyjson.com/products/category-list")
            console.log(data);
            setcategoryList(data)



        }
        catgeoryListApi()
    }, [])
    // using multiple apis catgeory,search,products


    useEffect(() => {
        async function categoryApi() {
            let api;
            if (category) {
                api = `https://dummyjson.com/products/category/${category}`
            }
            else if (searchProducts) {
                api = `https://dummyjson.com/products/search?q=${searchProducts}`
            }
            else {
                api = `https://dummyjson.com/products?limit=100`
            }
            let { data } = await axios.get(api)
            console.log(data);
            setproducts(data.products)


        }
        categoryApi()
    }, [category,searchProducts])




    return (
        <>

            <div className="container">
                <div className="row justify-content-between mt-4">
                    {/* Search bar  */}
                    <div className="col-md-5 text-center">
                        <input type="search" className='form-control' placeholder="Enter the product to search..."
                            value={searchProducts}
                            onChange={(e) => {
                                setCategory("")
                                setSearchProducts(e.target.value)


                            }} />
                    </div>
                    {/* CategroyList */}
                    <div className="col-md-5 text-center">
                        <select className='form-control text-center' value={category} onChange={(e) => {
                            setSearchProducts('')
                            setCategory(e.target.value)
                        }}>
                            <option value="">---All Categories---</option>
                            {
                                categoryList.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row g-3">
                    {
                        products.map(item => (
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
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Myproducts