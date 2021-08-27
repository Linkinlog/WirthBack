import React from 'react'

export const Navbar = () => {
    return (
        <div className="container">
        <div class="hero"></div>
            <div className="container mt-3">
                <ul className="nav separator justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href=" ">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=" ">Blog</a>
                    </li>
                </ul>
            </div>
            <div className="page-divider"></div>
        </div>
    )
}
