import React, { useState, useRef } from "react";
import './Calculator.css'


class CalcButton {
    constructor (btnDisplay, operation) {
        this.btnDisplay = btnDisplay;
        this.operation = operation;
    }
}

export default function Calculator() {
    const [calcDisplay, setCalcDisplay] = useState("");
    const lastOperationWasCalculation = useRef(false);

    // If the last operation was a calculation, then we should clear
    const clearAfterAnswer = () => {
        if(lastOperationWasCalculation.current) {
            clearDisplay();
            lastOperationWasCalculation.current = false;
        }
    }


    const updateDisplay = (char) => {
        clearAfterAnswer();
        setCalcDisplay(setCalcDisplay => setCalcDisplay + char);
    }

    const binaryToDenary = () => {
        clearAfterAnswer();

        lastOperationWasCalculation.current = true;
        if(calcDisplay.length == 0) {
            setCalcDisplay("ERROR")
        }

        const denary = parseInt(calcDisplay, 2)
        setCalcDisplay(denary.toString())
    }

    const denaryToBinary = () => {
        clearAfterAnswer();

        lastOperationWasCalculation.current = true;
        if(calcDisplay.length == 0) {
            setCalcDisplay("ERROR")
        }

        const binary = parseInt(calcDisplay, 10).toString(2)
        setCalcDisplay(binary);
    }

    const clearDisplay = () => {
        setCalcDisplay("");
    }

    const calculate = () => {
        clearAfterAnswer();

        lastOperationWasCalculation.current = true;
        let value = eval(calcDisplay);

        setCalcDisplay(value);
    }

    const calcButtons = [
        new CalcButton("1", "1"), new CalcButton("2", "2"), new CalcButton("3", "3"), new CalcButton("+", "+"),
        new CalcButton("4", "4"), new CalcButton("5", "5"), new CalcButton("6", "6"), new CalcButton("-", "-"),
        new CalcButton("7", "7"), new CalcButton("8", "8"), new CalcButton("9", "9"), new CalcButton("x", "*"),
        new CalcButton("C", "C"), new CalcButton("0", "0"), new CalcButton("=", "="), new CalcButton("/", "/"),
        new CalcButton("^", "**"), new CalcButton("%", "%"), new CalcButton("D>B", ">>>"), new CalcButton("B>D", "!!"),
        new CalcButton("(", "("), new CalcButton(")", ")"),
    ]
    const createdCalcButtons = calcButtons.map((value, index) => {
        switch (value.operation) {
            case "C":
                return createCalcButton(value, clearDisplay, index);
            case "=":
                return createCalcButton(value, calculate, index);
            case ">>>":
                return createCalcButton(value, denaryToBinary, index);
            case "!!":
                return createCalcButton(value, binaryToDenary, index);
            default:
                return createCalcButton(value, updateDisplay, index);
        }
    })

    return (
        <div id="calc-wrapper">
            <div id="calc-out-display">
                <h1>{calcDisplay}</h1>
            </div>
            <div id="calc-buttons">
                {createdCalcButtons}
            </div>
        </div>
    );
}

const createCalcButton = (display, func, index) => {
    return (
        <div key={index} onClick={() => {func(display.operation)}} className="calc-btn"><p>{display.btnDisplay}</p></div>
    )
}