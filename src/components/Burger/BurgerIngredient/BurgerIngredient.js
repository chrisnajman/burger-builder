import React, {Component} from 'react'
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'


class BurgerIngredient extends Component {

    render() {
        let ingredient = null

        switch(this.props.type) {
            case('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        Bread Top
                        <div className={classes.Seeds1}>Seeds 1</div>
                        <div className={classes.Seeds2}>Seeds 2</div>
                    </div>)
                break
            case('meat'):
                ingredient = <div className={classes.Meat}>Meat</div>
                break
            case('cheese'):
                ingredient = <div className={classes.Cheese}>Cheese</div>
                break
            case('salad'):
                ingredient = <div className={classes.Salad}>Salad</div>
                break
            case('bacon'):
                ingredient = <div className={classes.Bacon}>Bacon</div>
                break
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}>Bread Bottom</div>
                break
            default:
                ingredient = null
        }
        return ingredient
    }
}


/*
// FUNCTIONAL COMPONENT WILL WORK AS WELL

const BurgerIngredient = (props)=> {
    let ingredient = null

    switch(props.type) {
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
            break
        case('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>)
            break
        case('meat'):
            ingredient = <div className={classes.Meat}></div>
            break
        case('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break
        case('salad'):
            ingredient = <div className={classes.Salad}></div>
            break
        case('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break
        default:
            ingredient = null
    }
    return ingredient
}

*/


BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient






