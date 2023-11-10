import React from 'react';

type PropsType = {
    name: string
    callback: ()=>void
    disabled: boolean
}
export const Button = (props:PropsType) => {
    return (
        <button
            onClick={props.callback}
            disabled={props.disabled}
        >{props.name}</button>
    );
};