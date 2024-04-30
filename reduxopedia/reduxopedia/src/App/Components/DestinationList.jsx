import React from 'react'
import { useSelector } from 'react-redux'

function DestinationList() {
    debugger;
  const destnationList = useSelector((state) => state.destinationStore.destinations)
  return destnationList.map((destination,index) => {
    return(
    <div>
        <div>{index}</div>
        <div>{destination.name}</div>
        <div>{destination.days}</div>
        <div>{destination.fact}</div>
    </div>
    )    
  })
}

export default DestinationList
