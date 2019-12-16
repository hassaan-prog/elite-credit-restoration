import React from 'react';

const InputField = ({ label, type = "text", name, required = false }) => {
    return (
        <div className="form-group">
            <input type={type} name={name} autoComplete="off" required={required} />
            <span>{label}</span>
        </div>
    )
};

export default InputField;