import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children,addedClass='', ...props}) => {
    return (
        <button {...props} className={classes.myBtn + ' ' + addedClass}>
            {children}
        </button>
    );
};

export default MyButton;