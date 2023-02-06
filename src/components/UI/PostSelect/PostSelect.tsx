import React from "react";

type PostSelectProps = {
    defaultValue: string,
    value: string,
    onChange: (e: string) => void,
    options: {    
        value: string,
        label: string,
    }[],
}

const PostSelect = ({defaultValue, options, value, onChange}:PostSelectProps) => {

    return (
        <div>
            <select value={value}
                onChange={e => onChange(e.target.value)}>
                <option disabled value="">{defaultValue}</option>
                {options.map((option) => 
                    <option key={option.value} value={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    )
}

export default PostSelect;