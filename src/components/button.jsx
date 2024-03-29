import React from 'react';

const Button = ({redirectFunction, text}) => {
    return (
        <div className="form-group">
            <button id="submit" onClick={redirectFunction} type="button"> <strong>{text}<b></b> <i></i></strong> </button>
        </div>
    )
};

export default Button;
