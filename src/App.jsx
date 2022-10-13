/* eslint no-eval: 0 */
import React, { useState } from "react"
import words from "lodash.words"
import Functions from "./components/Functions"
import Numbers from "./components/Numbers"
import Result from "./components/Result"
import MathOperations from "./components/MathOperations"
import './App.css'

const App = () => {

    const [stack, setStack] = useState("")
    
    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"

    console.log("renderizacion de la app:  ", items)
    return(
        <main className="react-calculator">
            <Result value={value}/>
            
            <Numbers onClickNumber={
                number => {
                    console.log("Number: ",number)
                    setStack(`${stack}${number}`)
                }
            }
            />

            <Functions onContentClear={
                () => {
                    console.log("clear")
                    setStack("")
                }
            }
            onDelete={
                () => {
                    if(stack.length > 0){
                        console.log("delete")
                        setStack(stack.substring(0, stack.length -1))
                    }
                    
                }
            }
            />

            <MathOperations onClickOperation={ 
                operation => {
                    console.log("operacion: ", operation)
                    setStack(`${stack}${operation}`)
                }
            } 
            onClickEqual={
                equal => {
                    console.log("equal: ",equal )
                    setStack(eval(stack).toString())
                }
            }  
             />
        </main>
    )
}

export default App