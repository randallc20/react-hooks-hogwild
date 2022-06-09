import React, {useState} from 'react'

function Hog({name, specialty, greased, weight, image, highest}) {
    const[hogDetails, setHogDetails] = useState(false)

    function handleHogDetails(){
        setHogDetails((hogDetails) => !hogDetails)
    }

  return (
    <div className='ui eight wide column'>
        <div className='image-container'>
            <img className='hog-img'
                width='60%'
                src={image} alt=''
                onClick={handleHogDetails}
            />
        </div>
        <div className='details'>
            <h3>{name}</h3>
            <div style = {{display: hogDetails ? "block" : "none"}}>
                <p>{specialty}</p>
                <p>{weight}</p>
                <p>{highest}</p> 
                <p>{greased ? "Greased" : "Not Greased"}</p>
            </div> 
        </div>
    </div>
  )
}

export default Hog