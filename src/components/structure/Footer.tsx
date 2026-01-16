import React from 'react';
import logo from '../../assets/images/logo.png'
import { navItems } from '../../utils/navItems';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-gray-50 text-base-content p-10">
                <aside>
                    <img src={logo} alt="" />
                </aside>
                <nav>
                    <h6 className="footer-title">Pages</h6>
                    {navItems.map((item) => <Link to={item.to} key={item.id} className='hover:underline'>{item.label}</Link>)}
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Chefs</a>
                    <a className="link link-hover">News</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <footer className="footer sm:footer-horizontal footer-center bg-gray-50 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Thatix</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;