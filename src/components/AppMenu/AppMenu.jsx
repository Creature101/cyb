import React from 'react';
import CybLink from '../CybLink';
import './AppMenu.css';

const Logo = props => (
    <CybLink { ...props } className='logo'>logo</CybLink>
);

export const LogoLink = ({ onClick, ...props }) => (
    <div className='menu-logo'>
        <Logo { ...props } dura='' onClick={ onClick } />
    </div>
);

export const AppStoreLink = (...props ) => (
    <CybLink { ...props } dura='apps.cyb' className='app-store-link'>
        App Store
    </CybLink>
);

const Items = ({ item, deleteAppFromMenu, ...props }) => (
    <span className='bookmarks__item' key={ item.rootDura }>
        <CybLink { ...props } dura={ item.rootDura }>
            {item.name}
        </CybLink>
        <button
          type='button'
          className='bookmarks__remove-btn'
          onClick={ () => deleteAppFromMenu(item.rootDura) }
        >
        &#128465;
        </button>
    </span>
);

export const Bookmarks = ({ items, deleteMenuItem, ...props }) => (
    <div className='bookmarks'>
        {items.map(item => (
            <Items
              {...props}
              key={ item.rootDura }
              item={ item }
              deleteAppFromMenu={ deleteMenuItem }
            />
        ))}
    </div>
);
