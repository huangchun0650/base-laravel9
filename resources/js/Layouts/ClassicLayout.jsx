import React from 'react';
import styles from '../style';
import NavBar from '@/Layouts/NavBarLayout';
// import TestNavBar from '@/Layouts/TestNavBarLayout';
import { Container, Box } from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Head } from '@inertiajs/inertia-react';

export default function classicPage({ pageName, props }) {
    return (
        <>
            <NavBar auth={props.auth} errors={props.errors}>
                <Head title={pageName}></Head>
            </NavBar>
            <Container maxWidth="xl" disableGutters>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} mt={1}>
                    <ChevronLeftOutlinedIcon fontSize='large'/>
                </Box>
            </Container>
        </>
    );
}
