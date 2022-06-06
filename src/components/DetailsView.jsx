import React from 'react'
import { useParams } from 'react-router-dom'


const DetailsView = () => {
    const {id} = useParams()
  return (
    <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl mt-10 text-white md:text-5xl font-bold">{id}</h1>

    </div>
  )
}

export default DetailsView