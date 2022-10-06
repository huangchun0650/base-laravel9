import './bootstrap';
import '../css/app.css';

import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import NavBar from './NavBar';
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <BrowserRouter>
                <Switch>
                    <NavBar>
                        <App {...props} />
                    </NavBar>
                </Switch>
            </BrowserRouter>
        );
    },
});

InertiaProgress.init({ color: '#4B5563' });