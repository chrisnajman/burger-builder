import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const Burger = (props)=> {


    // Get array of object keys - values not part of the array
    let transformedIngredients = Object.keys(props.ingredients)

    // map over every key
    .map(igKey => {

        // return an array for each element with length 
        // return an array with undefined elements corresponding to the 
        // number value of each key - so salad would be [undefined]
        // cheese would be [undefined undefined]
        return [...Array(props.ingredients[igKey])]

        // '_' because the element is empty (undefined), 'i' to get
        // index of the element
        .map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })

    // flatten the array with reduce i.e. extract all
    // the arrays and return an empty array
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }


    // console.log(transformedIngredients)


    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
        
    )
}

export default Burger