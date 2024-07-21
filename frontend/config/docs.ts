import { DocsConfig } from '@/types';

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: 'Pricing',
            href: '/pricing',
        },
        {
            title: 'Docs',
            href: '/docs',
        },
        {
            title: 'Changelog',
            href: '/changelog',
        },
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
    ],
    sidebarNav: [
        {
            title: 'Getting Started',
            items: [
                {
                    title: 'Introduction',
                    href: '/docs',
                },
                {
                    title: 'Index BookMarks',
                    href: '/docs/index-bookmarks',
                },
                {
                    title: 'Chrome Extension',
                    href: '/docs/extension-user-guide',
                },
                {
                    title: 'Search Engine',
                    href: '/docs/search-engine',
                },
            ],
        },
        {
            title: 'Open Source',
            items: [
                {
                    title: 'One Click Deployment',
                    href: '/docs/one-click-deploy-ai-search',
                },
            ],
        },
    ],
};
