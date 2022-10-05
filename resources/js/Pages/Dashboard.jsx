import React from 'react';
import styles from '../style'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavBar from '@/Layouts/NavBarLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <NavBar auth={props.auth} errors={props.errors}>
        </NavBar>
    );
}
