import React from 'react';
import styles from '../style';
import NavBar from '@/Layouts/NavBarLayout';
import Paper from '@mui/material/Paper';
import { Head } from '@inertiajs/inertia-react';

export default function classicPage({ pageName, props }) {
    console.log(5555555)
    return (
        // <AuthenticatedLayout auth={props.auth} errors={props.errors}>
        <NavBar auth={props.auth} errors={props.errors}>
            <Head title={pageName}></Head>
        </NavBar>



        // <div className="bg-primary flex justify-center items-start">
        //             <div className="xl:max-w-[1280px] w-full">
        //                 <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        //                     <Paper variant="outlined" square>
        //                         <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        //                             <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        //                         </svg>
        //                         <div className="flex flex-row justify-between items-center w-full">
        //                             <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        //                                 The Next <br className="sm:block hidden" /> {" "}
        //                                 <span className="text-gradient">Generation</span> {" "}
        //                             </h1>
        //                             <div className="ss:flex hidden md:mr-4 mr-0">
        //                                 {/* <GetStarted /> */}
        //                             </div>
        //                         </div>
        //                     </Paper>
        //                     {/* <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                            
        //                 </div> */}

        //                 </section>
        //             </div>
        //         </div>
    );
}
