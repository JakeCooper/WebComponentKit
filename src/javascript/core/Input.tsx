import React from 'react';

import classNames from 'classnames';

import styles from 'styles/core/Input.mod.scss';

interface Props {
    className?: string;
    onChange?: (e: any) => void;
    placeholder?: string;
    onSubmit?: (string) => void;
}

class Input extends React.Component<Props, {}> {
    detectEnter = (e: any) => {
        if (e.key === 'Enter') {
            this.props.onSubmit(e.target.value);
        }
    };

    onChange = (e: any) => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    };

    render() {
        const { placeholder, onChange } = this.props;
        return (
            <input
                className={classNames(styles.input, this.props.className)}
                placeholder={placeholder}
                onChange={this.onChange}
                onKeyUp={this.detectEnter}
            />
        );
    }
}

export default Input;
