import React, {Fragment} from 'react';
import styles from '../styles/Layout.module.css'
import Nav from "./Nav";

const Layout = ({ children }) => {
    return <Fragment>
        <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </Fragment>
}

export default Layout
