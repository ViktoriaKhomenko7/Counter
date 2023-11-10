import React, {useState} from 'react';
import {Button} from "./Button";

export const Counter = () => {

    let [count, setCount] = useState<number>(0)

    const onClickIncButtonHandler = () => {
        if (count < 5) {
            setCount(++count)
        }
    }
    const onClickResetButtonHandler = () => {
        setCount(0)
    }
    return (
        <div className="counter-wrapper">
            <div className="counter-number">
                <h1 className={count === 5 ? "red" : ""}>{count}</h1>
            </div>
            <div className="counter-buttons">
                <Button name="inc" disabled={count >= 5} callback={onClickIncButtonHandler}/>
                <Button name="reset" disabled={count === 0} callback={onClickResetButtonHandler}/>
            </div>
        </div>
    );
};