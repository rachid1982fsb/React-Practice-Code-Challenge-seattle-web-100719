import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () =>{
    return  props.sushis.map(sushi => <Sushi budget={props.budget} oneSushi ={sushi} key={sushi.id} onHandleEatenSushi={props.onHandleEatenSushi} onAddToEatenSushi={props.onAddToEatenSushi} onRemainBudget={props.onRemainBudget}/>)
   }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton onMoreSushi={props.onMoreSushi}/>
      </div>
    </Fragment>
  )
}



export default SushiContainer