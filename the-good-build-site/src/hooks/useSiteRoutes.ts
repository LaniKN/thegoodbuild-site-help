import React from 'react';
import { redirect } from 'react-router';
import { redirects } from '../utils';


export interface SiteRoute {
    label: string;
    path: string;
    id: string;
    element?: React.ReactNode | null;
}

export const useSiteRoutes = (): SiteRoute[] => {

    const routes: SiteRoute[] = [];

    routes.push({id: 'how-it-works', path: redirects.howItWorks, label: "How It Works"});
    routes.push({id: 'about', path: redirects.about, label: "About"});
    routes.push({id: 'faq', path: redirects.faq, label: "FAQ"});
    // routes.push({id: 'how-works', path: redirects.howItWorks, label: "How It Works"});

    return routes;
}