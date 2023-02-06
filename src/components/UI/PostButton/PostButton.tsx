import React from "react";
import classes from './PostButton.module.css';
import { PostBtn } from "../../../types/type";

const PostButton = (props:PostBtn) => {
    return (
        <button {...props} className={classes.PostBtn}>
            {props.children}        
        </button>
    )
}

export default PostButton;