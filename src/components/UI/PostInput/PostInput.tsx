import React from "react";
import classes from "./PostInput.module.css";

type PostInputProps = {
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const PostInput = React.forwardRef((props:PostInputProps, ref) => {
    return (
        <input {...props} className={classes.PostInput}/>
    );
});



export default PostInput;