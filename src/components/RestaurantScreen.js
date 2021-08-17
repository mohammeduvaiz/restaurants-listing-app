import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import Header from './Header'
import Footer from './Footer'
function RestaurantScreen({ match }) {
    const [details, setDetails] = useState([])

    const detail = details.find(d => d.id == match.params.id)

    useEffect(() => {
        const fetchData = async () => {
            await fetch("/restaurants.json")
                .then(res => res.json())
                .then(data => {
                    setDetails(data.restaurants)
                })
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-col">
            <Header/>
            {detail ? (
                <div className="grid lg:grid-cols-3 ">
                    <div className="relative  w-1/4 md:h-52 md:w-80 flex-shrink-0 m-16 ml-2">
                        <Link to="/">
                            <button className="mb-3 px-4 py-2 border rounded-lg transition transform duration-100 ease-out
                             cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100">Back</button>
                        </Link>
                        <img src={detail.photograph1} alt={detail.name} className="rounded-2xl" />
                    </div>
                    <div className="relative md:h-52 md:w-80  m-16 ml-4">
                        <h1 className="text-2xl font-semibold text-gray-600">{detail.name}</h1>
                        <p className="pt-4 text-gray-500 font-extralight">Cusine: <span className="font-semibold">{detail.cuisine_type}</span></p>
                        <p className="pt-4 text-gray-500 font-extralight text-sm italic">{detail.description}</p>
                    </div>
                    <div className=" mt-20 pl-4 ml-10">
                        <p className="text-l  text-gray-600">{detail.neighborhood}</p>
                        <p className="text-l  text-gray-600">{detail.address}</p>
                        <div className="">
                            <p className="pt-4 text-gray-500 font-extralight">Opening Hours :</p>
                            {Object.entries(detail.operating_hours).map(([key, values]) => (
                                <div className="">
                                    <p className="pt-1 text-gray-500 font-extralight">{key} :</p><span className="font-sembold">{values}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : ("error")}
            {detail ? (<div className="mx-auto ml-5 mr-5">
                <h1 className="pt-4 text-gray-500 font-extralight">Reviews :</h1>
                {detail.reviews.map(review => (
                    <Rating
                        name={review.name}
                        date={review.date}
                        rating={review.rating}
                        comments={review.comments} />
                ))}
            </div>) : ("error")}
            <Footer/>
        </div>
    )
}

export default RestaurantScreen
