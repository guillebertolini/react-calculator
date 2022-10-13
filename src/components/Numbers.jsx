import React from "react"
import PropTypes, { number } from "prop-types"
import Button from "./Button/Button"

const numbers = [7,8,9,4,5,6,1,2,3,0]

const renderButtons = onClickNumber =>{

    const renderButton = number => (
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber} type={"number"}
        />
    )

    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) =>{
    return(
        <section className="numbers">
               {
                renderButtons(onClickNumber) 
               }
        </section>
    )
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers