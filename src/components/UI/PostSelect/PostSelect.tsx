import React from "react";
import { PostSelectComponent } from "../../../types/type";

const PostSelect = ({defaultValue, options, value, onChange}:PostSelectComponent) => {

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