import React, { Fragment } from 'react'


const Sushi = (props) => {
const handleClick=()=>{
  if(props.budget>=props.oneSushi.price && !props.onHandleEatenSushi(props.oneSushi.id)){
    props.onAddToEatenSushi(props.oneSushi)
    props.onRemainBudget(props.oneSushi.price)
  }
}


  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
          props.onHandleEatenSushi(props.oneSushi.id)
          ?
            null
          :
            <img src={props.oneSushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
      {props.oneSushi.name} - ${props.oneSushi.price} 
      </h4>
    </div>
  )
}

export default Sushi