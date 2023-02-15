import React, { useState } from "react";
import './Calculator.css'


class CalcButton {
    constructor (display, operator) {
        this.display = display;
        this.operator = operator;
    }
}

export default function Calculator() {
    const [calcDisplay, setCalcDisplay] = useState("");
    // const calcButtons = [
    //     "1", "2", "3", "+",
    //     "4", "5", "6", "-",
    //     "7", "8", "9", "x",
    //     "C", "0", "=", "/",
    //     "^", "%", "D>B", "B>D",
    // ]

    const calcButtons = [
        new CalcButton("1"), new CalcButton("2"), new CalcButton("3"), new CalcButton("+"),
        new CalcButton("4"), new CalcButton("5"), new CalcButton("6"), new CalcButton("-"),
        new CalcButton("7"), new CalcButton("8"), new CalcButton("9"), new CalcButton("x"),
        new CalcButton("C"), new CalcButton("0"), new CalcButton("="), new CalcButton("/"),
        new CalcButton("^"), new CalcButton("%"), new CalcButton("D>B"), new CalcButton("B>D"),
    ]
    const calcButtonsArray =  [];

    calcButtons.map((value) => {
        calcButtonsArray.push(createCalcButton(value));
    })

    return (
        <div id="calc-wrapper">
            <div id="calc-out-display">
                <h1>{calcDisplay}</h1>
            </div>
            <div id="calc-buttons">
                {calcButtonsArray}
            </div>
        </div>
    );
}

const createCalcButton = (display, func) => {
    return (
        <div className="calc-btn"><p>{display}</p></div>
    )
}