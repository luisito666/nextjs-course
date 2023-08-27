import { FC } from 'react';
import styles from './Navbar.module.css';

import { ActiveLink } from "./ActiveLink";


type MenuItemType = {
    text: string,
    href: string
}

type MenuItemsType = MenuItemType[]

const menuItems: MenuItemsType = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar: FC = () => {
    return (
        <nav className={styles['menu-container']}>
            { menuItems.map(({text, href}) => (
                <ActiveLink key={href} text={text} href={href} />
            ))}
        </nav>
    );
}
