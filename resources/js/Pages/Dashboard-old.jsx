import React from 'react';
import NavBar from '@/Layouts/NavBarLayout';
import styles from '../style';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <NavBar auth={props.auth} errors={props.errors}>
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                123
            </section>
        </NavBar>
    );
}
