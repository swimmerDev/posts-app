import React from "react";
import classes from "./PostCreateModal.module.css"
import { CreateModalComponent } from "../../../types/type";

const PostCreateModal = ({children, visible, setVisible}:CreateModalComponent) => {

    const rootClasses = [classes.modal]

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
export default PostCreateModal;