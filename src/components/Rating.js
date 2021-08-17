import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
function Rating({ name, date, rating, comments }) {

    return (
        <div>
            <div className="">
                <div className="flex items-center mt-2">
                    <h4 className="text-lg font-semibold">{name}-</h4>
                    <p className="ml-5">{rating}</p>
                    <StarIcon className="h-5 text-red-400" />
                    <p className="text-gray-400 ml-5">{date}</p>
                </div>
                <p className="text-sm italic">{comments}</p>
            </div>
        </div>
    )
}

export default Rating
