"use client";

import { StaggeredMenu } from '@/components/ui/StaggeredMenu';

export default function StaggeredMenuWrapper() {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'WORKS', ariaLabel: 'Learn about us', link: '/works' },
        { label: 'SKILLS', ariaLabel: 'View our services', link: '/skills' },
        { label: 'CAREER', ariaLabel: 'Get in touch', link: '/career' },
        { label: 'CONTACT', ariaLabel: 'Get in touch', link: '/contact' },
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];
    return (
        <StaggeredMenu
            position = "left"
            items = { menuItems }
            socialItems = { socialItems }
            displaySocials = { true}
            displayItemNumbering = { true}
            menuButtonColor = "#000"
            openMenuButtonColor = "#000"
            changeMenuColorOnOpen = { true}
            colors = { ['#B19EEF', '#5227FF']}
            logoUrl = "/next.svg"
            accentColor = "#ff6b6b"
            isFixed = { false}
            onMenuOpen = {() => console.log('Menu opened')}
            onMenuClose = {() => console.log('Menu closed')}
            />
    );
}
