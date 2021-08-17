import React, { useEffect,useState } from 'react'
import InfoCard from './InfoCard'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../action/restaurantActions'
function Home() {
    const [filterResult, setFilterResult] = useState("")
    const dispatch = useDispatch()

    const restaurantsList = useSelector(state => state.restaurantList)

    const { loading, restaurants, error } = restaurantsList

    useEffect(() => {
        dispatch(listRestaurants())
    }, [dispatch])
    return (
        <>
          <div className="sticky top-0 z-50 grid grid-cols-1 bg-white shadow-md p-5 md:px-109 ">
                <input
                    className="flex-grow outline-none ml-2 text-gray-500"
                    placeholder="Search By Location"
                    type="text"
                    value={filterResult}
                    onChange={(e) => setFilterResult(e.target.value)} />
            </div>
            {loading ? <h4>Loading...</h4> : error ? (<h4>{error}</h4>) : (
                <div className="flex flex-col">
                    {restaurants.filter((item) => {
                         if(filterResult === ""){
                             return item
                         }
                         else if(item.neighborhood.toLowerCase().includes(filterResult.toLowerCase())){
                             return item
                         }
                    }).map(restaurant => (
                        <InfoCard
                            id={restaurant.id}
                            name={restaurant.name}
                            image={restaurant.photograph}
                            type={restaurant.cuisine_type}
                            address={restaurant.address}
                            neighborhood={restaurant.neighborhood}
                            reviews={restaurant.reviews} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Home
