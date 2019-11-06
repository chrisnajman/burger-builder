import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
]

const BuildControls = (props)=> {

    const dollarSign = `\u0024`
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <b>{dollarSign}{props.price.toFixed(2)}</b></p>
            {controls.map((ctrl) => {
                return <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label}
                            added={()=> props.ingredientAdded(ctrl.type)}
                            removed={()=> props.ingredientRemoved(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}
                        />
            })}


            <button 
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.ordered}
            >
                    Order Now
            </button>            

        </div>
    )
}

export default BuildControls