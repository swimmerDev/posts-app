import React from "react";
import { PostInputComponent } from "../../../types/type";
import classes from "./PostInput.module.css";


const PostInput = React.forwardRef((props:PostInputComponent, ref) => {
    return (
        <input {...props} className={classes.PostInput}/>
    );
});



export default PostInput;