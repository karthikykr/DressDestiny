import React from 'react'
import './Item.css'
const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">

                </div>
                <idv className="item-price-old">
                    
                </idv>
            </div>
        </div>
    )
}

export default Item