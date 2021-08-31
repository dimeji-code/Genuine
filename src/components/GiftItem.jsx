import React from 'react'

const GiftItem = (props) =>{
    return(
        <div class="card bg-dark text-white gift-item">
            <img src={props.img} class="card-img" alt="..."/>

            <div class="item-inner">
            <div class="card-img-overlay">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text card-desc"> {props.desc}</p>

            </div>
            <div class="text-bottom">
            <p >${props.cost}</p>

            </div>
            </div>
        </div>
    )
}
export default GiftItem