import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav style={{width:"500px", margin: "30px auto", display: "flex", justifyContent:"space-around"}}>
                    <Link to="/" >Main</Link>
                    <Link to="/posts/">Post</Link>
                    <Link to="posts/:1">Post Details</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default Header;
