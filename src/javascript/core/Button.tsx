import React from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import styles from 'styles/core/Button.mod.scss';

const Button = (props) => {
    const role = props.role || 'primary'; // TODO: Make an exportable enum? Or do styles somehow

    return (
        <div className={classNames(styles.button, styles[role], props.className)} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default Button;
