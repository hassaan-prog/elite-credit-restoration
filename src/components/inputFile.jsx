import React from 'react';

const InputFile = ({label, name}) => {
    return (
        <div class="form-group">
            <label>{label}</label>
            <input type="file" name={name}/>
        </div>
    )
};

export default InputFile;