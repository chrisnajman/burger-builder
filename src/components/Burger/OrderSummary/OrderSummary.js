import React, {Component} from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could be a functional component - only changed to
    // a class component so could run componentDidUpdate
    componentDidUpdate() {
        console.log('[Order Summary] DidUpdate')
    }
    render() {
        const dollarSign = `\u0024`
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: "capitalize"}}>
                            {igKey}
                        </span>
                        : {this.props.ingredients[igKey]}
                    </li>
                )
            })
        return(
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>Total Price: <b>{dollarSign}{this.props.price.toFixed(2)}</b></p>
                <p>Continue to Checkout?</p>

                <Button 
                    btnType="Danger"
                    clicked={this.props.purchaseCancelled}
                >
                    Cancel
                </Button>

                <Button 
                    btnType="Success"
                    clicked={this.props.purchaseContinued}
                >
                    Continue
                </Button>
            </>
        )
    }
}

export default OrderSummary