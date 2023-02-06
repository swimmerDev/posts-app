import React from "react";
import classes from "./PostCreateModal.module.css"

type CreateModalProps = {
    visible: boolean,
    children: React.ReactNode,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const PostCreateModal = ({children, visible, setVisible}:CreateModalProps) => {

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