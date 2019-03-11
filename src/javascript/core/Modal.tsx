import React from 'react';

import styles from 'styles/core/Modal.mod.scss';

interface State {
    opened: Boolean;
}

interface Props {
    component: any;
}

class Modal extends React.Component<Props, State> {
    state = {
        opened: false
    };

    open = () => {
        this.setState({
            opened: true
        });
    };

    close = () => {
        this.setState({
            opened: false
        });
    };

    outClick = () => {
        this.close();
    };

    inClick = (e) => {
        e.stopPropagation();
    };

    render() {
        if (!this.props.component) {
            return this.props.children;
        }
        return (
            <div>
                <div onClick={this.open}>{this.props.children}</div>
                {this.state.opened ? (
                    <div className={styles.modal} onClick={this.outClick}>
                        <div className={styles.opacity} />
                        <div className={styles.modalContent} onClick={this.inClick}>
                            {this.props.component}
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Modal;
