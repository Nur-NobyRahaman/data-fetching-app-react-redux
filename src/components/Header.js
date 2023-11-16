import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Todo App</Link>
            <Link to={'/counterApp'}>Counter App</Link>
        </nav>
    );
};

export default Header;