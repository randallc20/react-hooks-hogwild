import React, {useState} from 'react'
import Hog from './Hog'

function HogList({hogs, greased, sortValue}) {
    const [hogArray, setHogArray] = useState('')

    function handleSort(sortValue){
        if (sortValue === "All"){
            return hogs
        }
        else if (sortValue === "Weight"){
            let hogsSortedNames = [...hogs]
            hogsSortedNames.sort(function(a,b){
                let textA = a.name.toUpperCase();
                let textB = b.name.toUpperCase(); 
                return textA < textB ? -1 : textA > textB ? 1 : 0;
            })

        }
        else if (sortValue === "Name"){

        }
    }

    const filteredGreased = hogs.filter(hog => {
        if (greased === "All"){
            return true
        }
        else if (greased === "Greased"){
            return hog.greased
        }
        else{
            return !hog.greased
        }
    })

    let deck = filteredGreased.map((hog) => (
        <Hog
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            image={hog.image}
            greased={hog.greased}
            weight={hog.weight}
            highest={hog["highest medal achieved"]}
        />
        ))

  return (
    <div className='ui grid container'>
        {deck}
    </div>
  )
}

export default HogList