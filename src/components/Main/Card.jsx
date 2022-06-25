import React from 'react';


function Card(props) {
    const {id,title,image,desc}=props
  return (
    <div className='cards' key={id}>
        <div className="title">
            <h1>{title}</h1>
        </div>
        <img src={image} alt="" />
        <div className="card-over">
            <p>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default Card