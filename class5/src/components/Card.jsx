import React from 'react'
import hero from "../assets/hero.png"
const Card = (props) => {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={props.src} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Card