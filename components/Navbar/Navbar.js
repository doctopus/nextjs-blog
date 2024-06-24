import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;