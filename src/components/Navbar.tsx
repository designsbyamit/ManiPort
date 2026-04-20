import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/work" isAnchor={false}>Work</a>
                </li>
                {/* Other links */}
            </ul>
        </nav>
    );
};

export default Navbar;