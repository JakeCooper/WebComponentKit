import React from 'react';

import styles from 'styles/core/Footer.mod.scss';

class Footer extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.lower}>
                <div className={styles.socialbar}>
                    <a href="https://twitter.com/Darklaunch" target="_blank" className={styles.twitter} />
                    <a href="mailto:info@Darklaunch.me" className={styles.email} />
                    <a href="https://github.com/jakecooper" target="_blank" className={styles.github} />
                </div>
            </div>
        );
    }
}

export default Footer;
