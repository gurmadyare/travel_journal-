import React from 'react'

const Journal = (props) => {
  return (
    <div className='container'>
      <div className="img">
        <img src={props.item.img} alt="" />
      </div>

      <div className="info-side">
        {/* location & googlemap link */}
        <div className="row">
          <div>
            <img src="src/travel_journal(4th proj)/images/placeholder.png" alt="" />
            <h5>{props.item.location}</h5>
          </div>
        
          {/* link */}
          <a href="#">view on Google maps</a>

        </div>

        {/* title */}
        <h1>{props.item.title}</h1>

        {/* start & end date */}
        <h3>{props.item.startDate} - {props.item.endDate}</h3>

        {/* Description */}
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Journal