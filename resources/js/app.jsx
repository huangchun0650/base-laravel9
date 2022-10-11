import './bootstrap';
import '../css/app.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx')
        const breezePage = [
            'Welcome',
            'Auth/Login'
        ]
        
        let page = `./Pages/${name}.jsx`

        if (!breezePage.includes(name)) {
            page = `./Pages/AdminLayout.jsx`
        }
        return resolvePageComponent(page, pages)
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
            root.render(
                <BrowserRouter>
                    <Switch>
                        <App {...props} />
                    </Switch>
                </BrowserRouter>
            );
    },
});

InertiaProgress.init({ color: '#4B5563' });