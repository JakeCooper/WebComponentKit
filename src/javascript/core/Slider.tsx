import React from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames';

import styles from 'styles/core/Slider.mod.scss';

interface SliderProps {
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}

const Slider = (props: SliderProps) => {
    return (
        <label className={classNames(styles.switch, props.className)}>
            <input type="checkbox" checked={props.checked} onChange={props.onChange} />
            <span className={styles.slider} />
        </label>
    );
};

export default Slider;
