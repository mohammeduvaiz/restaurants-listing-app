import React from 'react'
import {Link} from 'react-router-dom'
function InfoCard({ id, name, image, type, address, neighborhood,reviews}) {
    return (
        <Link to={`/restaurant/${id}`}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 py-7 px-2 border-b cursor-pointer hover:opacity-80 
        hover:shadow-lg pr-4 transition duration-200 ease-out">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <img src={image} className="rounded-2xl" alt={id}/>
            </div>
            <div className="flex flex-col flex-grow items-center pl-3">
                <h1 className="text-xl text-gray-600">{name}</h1>
                <p className="pt-4 text-gray-500 font-extralight">Cusine: <span className="font-semibold">{type}</span></p>
            </div>
            <div className="px-5 flex flex-col md:mt-3 mt-3">  
                    <h4 >{neighborhood}</h4>
                    <p>{address}</p>
            </div>          
        </div>
        </Link>
    )
}

export default InfoCard
