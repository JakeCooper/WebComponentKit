import React from 'react';

import classNames from 'classnames';

import styles from 'styles/core/Section.mod.scss';

interface Props {
    children: any;
    height?: string;
    className?: any;
    role?: 'primary' | 'accent';
    alignment?: 'left' | 'center' | 'right';
}

function Section({ children, height, role, alignment, className }: Props) {
    const addedStyles = {
        height
    };
    let roleStyles = styles.primary;
    if (role === 'accent') {
        roleStyles = styles.secondary;
    }
    let alignmentStyles = styles.center;
    if (alignment === 'left') {
        alignmentStyles = styles.left;
    } else if (alignment === 'right') {
        alignmentStyles = styles.right;
    }

    return (
        <div style={addedStyles} className={classNames(styles.section, roleStyles, alignmentStyles)}>
            <div className={classNames(styles.sectionContent, className)}>{children}</div>
        </div>
    );
}

export default Section;
