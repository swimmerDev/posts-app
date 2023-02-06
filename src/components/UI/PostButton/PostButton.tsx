import React from "react";
import classes from './PostButton.module.css';

type PostBtnProps = {
    children: string,
    disabled?: boolean,
    onClick?: (e: React.SyntheticEvent) => void,
}

const PostButton = (props:PostBtnProps) => {
    return (
        <button {...props} className={classes.PostBtn}>
            {props.children}        
        </button>
    )
}

export default PostButton;