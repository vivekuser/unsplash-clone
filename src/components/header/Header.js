import React from 'react';
import './header.css'
const Header = ({brand, className, children}) =>{
    return (
        <div className='header'>
        <div className={className}>
         <h3>{brand}</h3>
             {children}
         </div>
         </div>
    );
};
export default Header;