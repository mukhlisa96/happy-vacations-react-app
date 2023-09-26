import React, { useEffect, useState } from 'react'
import logoImg from "../assets/images/logo.png"
import logoBrandImg from "../assets/images/logo-brand-name.png"
import langImg from "../assets/images/lang.png"

import { Link } from 'react-scroll'

import { useTranslation } from "react-i18next"
import i18next from "i18next"

const Navbar = () => {

    const { i18n, t } = useTranslation(["common"])
    const [isActive, setIsActive] = useState(false)
    useEffect(
        () => {
            if (localStorage.getItem("i18nextLng")?.lenght > 2) {
                i18next.changeLanguage("en")
            }
        }, [])

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value)
    }


    const handleMenuClick = event => {
        setIsActive(current => !current)
    }
    return (
        <div>
            <header className="header-style">
                <div className="desktop-menu max-w-[1570px] mx-auto justify-between items-center xl:flex hidden">
                    <div className="basis-[20%]">
                        <a href="package-details.html" className="btn_primary__v1">
                            {t("navbar_button")}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="main-menu flex items-center uppercase">
                        <div className="menu-one">
                            <ul className="flex items-center nav-list">

                                {/* <!-- dropdown --> */}
                                <li className="group/step-one">
                                    <Link to="categories" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">
                                        {t("nav_li_1")}
                                    </Link>
                                    {/* <ul className="nav-dropdown">
                                        <li><a href="index.html">Home Classic</a></li>
                                        <li><a href="index-2.html">Home Dark</a></li>
                                        <li><a href="index-3.html">Home Parallax</a></li>
                                    </ul> */}
                                </li>

                                {/* <!-- dropdown --> */}
                                <li className="group/step-one">
                                    <Link to="tours" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">
                                        {t("nav_li_2")}
                                    </Link>
                                    {/* <ul className="nav-dropdown">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="destination.html">Destinations</a></li>
                                        <li><a href="destination-details.html">Destination Details</a></li>
                                        <li><a href="guide.html">Guides</a></li>
                                        <li><a href="gallery.html">Gallary</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="error.html">Error</a></li>
                                        <li><a href="auth.html">Sign Up / Sign In</a></li>
                                    </ul> */}
                                </li>

                                {/* <!-- mega dropdown --> */}
                                <li className="group/mega-dropdown">
                                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">
                                        {t("nav_li_3")}
                                    </Link>
                                    {/* <div className="nav-mega-dropdown grid grid-cols-6 gap-x-1">
                                        <div className="col-span-4 border-r">
                                            <a href="package-list-sidebar.html"
                                                className="py-2 flex items-center border-b border-stock-1 text-base text-dark-1 hover:text-primary-1 duration-200">
                                                Browse All Destination
                                                <div className="max-w-[20px] ml-2">
                                                    <svg className="group-hover/btn:translate-x-2 duration-200 " width="27"
                                                        height="14" viewBox="0 0 27 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                                                            fill="currentColor"></path>
                                                        <path
                                                            d="M20.7001 12.28L25.0467 7.9333C25.5601 7.41997 25.5601 6.57997 25.0467 6.06664L20.7001 1.71997"
                                                            stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                                            strokeLinecap="round"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                            <ul className="grid grid-cols-3 mega-dropdown-links">
                                                <li><a href="package-list.html">New York</a></li>
                                                <li><a href="package-list.html">London</a></li>
                                                <li><a href="package-list.html">Paris</a></li>
                                                <li><a href="package-list.html">Dubai</a></li>
                                                <li><a href="package-list.html">Miami</a></li>
                                                <li><a href="package-list.html">Rome</a></li>
                                                <li><a href="package-list.html">Seattle</a></li>
                                                <li><a href="package-list.html">Amsterdam</a></li>
                                                <li><a href="package-list.html">Chicago</a></li>
                                                <li><a href="package-list.html">Las vegas</a></li>
                                                <li><a href="package-list.html">Barcelona</a></li>
                                                <li><a href="package-list.html">Cox's Bazar</a></li>
                                                <li><a href="package-list.html">Istanbul</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-span-2">
                                            <a href="package-details.html">
                                                <img src="assets/images/backgrounds/offer-banner.webp"
                                                    alt="offer-banner w-full" />
                                            </a>
                                        </div>
                                    </div> */}
                                </li>

                            </ul>
                        </div>
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="shrink-0 xl:mx-9 mx-7">
                            <img className="w-logo" src={logoImg} alt="logo" />
                        </Link>
                        <div className="menu-one">
                            <ul className="flex items-center nav-list">
                                {/* <!-- dropdown --> */}
                                <li className="group/step-one">
                                    <Link to="testimonial" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">
                                        {t("nav_li_4")}
                                    </Link>
                                    {/* <ul className="nav-dropdown">
                                        <li><a href="blog-list.html">Blog List</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul> */}
                                </li>

                                {/* <!-- dropdown --> */}
                                <li className="group/step-one">
                                    <Link to="qa" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">
                                        {t("nav_li_5")}
                                    </Link>
                                    {/* <ul className="nav-dropdown">
                                        <li><a href="package-list.html">Package List</a></li>
                                        <li><a href="package-list-sidebar.html">Package List Sidebar</a></li>
                                        <li><a href="package-details.html">Package Details - Layout I</a></li>
                                        <li><a href="package-details-2.html">Package Details - Layout II</a></li>
                                        <li><a href="package-details-3.html">Package Details - Layout III</a></li>
                                    </ul> */}
                                </li>

                                <li>
                                    <Link to="contacts" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">
                                        {t("nav_li_6")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div >
                    <div className="basis-[20%] flex justify-end items-center">
                        <a href="#"
                            className="text-dark-1 font-medium text-base inline-flex items-center mr-8  hover:text-primary-1 duration-200">
                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" />
                                <path
                                    d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                                <path d="M12.25 13.75V14.68C12.25 15.03 12.07 15.36 11.76 15.54L11 16" stroke="currentColor"
                                    strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path
                                    d="M9.00007 22H15.0001C19.0201 22 19.7401 20.39 19.9501 18.43L20.7001 12.43C20.9701 9.99 20.2701 8 16.0001 8H8.00007C3.73007 8 3.03007 9.99 3.30007 12.43L4.05007 18.43C4.26007 20.39 4.98007 22 9.00007 22Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                                <path
                                    d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                            </svg> */}

                            <img src={langImg} className="langImg" />
                            <span className="ml-2">
                                <select value={localStorage.getItem("i18nextLng")}
                                    onChange={handleLanguageChange}
                                    className="languageDropdown"
                                >
                                    <option value="en">ENG</option>
                                    <option value="ru">RU</option>
                                    <option value="uz">UZ</option>
                                </select>

                            </span>
                        </a>
                        {/* <a href="auth.html"
                            className="shrink-0 inline-flex justify-center items-center bg-primary-1 rounded-full h-12 w-12 text-white hover:bg-primary-2 duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path
                                    d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </a> */}
                    </div>
                </div >
                <div className="mobile-menu xl:hidden flex justify-between items-center relative">
                    <Link to="hero" spy={true} smooth={true} offset={-150} duration={500} className="shrink-0">
                        <img className="w-logo" src={logoBrandImg} alt="logo" />
                    </Link>

                    {/* <h1 className="mobile-brand-name">Happy Vacations</h1> */}

                    <div className="space-x-4 flex items-center">
                        <a href="#"
                            className="text-dark-1 font-base text-base inline-flex items-center hover:text-primary-1 duration-200">
                            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" />
                                <path
                                    d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                                <path d="M12.25 13.75V14.68C12.25 15.03 12.07 15.36 11.76 15.54L11 16" stroke="currentColor"
                                    strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path
                                    d="M9.00007 22H15.0001C19.0201 22 19.7401 20.39 19.9501 18.43L20.7001 12.43C20.9701 9.99 20.2701 8 16.0001 8H8.00007C3.73007 8 3.03007 9.99 3.30007 12.43L4.05007 18.43C4.26007 20.39 4.98007 22 9.00007 22Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                                <path
                                    d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                            </svg> */}
                            {/* <span className="ml-2">Cart (01)</span> */}
                        </a>
                        {/* <a href="#"
                            className="shrink-0 inline-flex justify-center items-center bg-primary-2 rounded-full h-10 w-10 text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path
                                    d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                                    stroke="currentColor" strokeWidth=".5" strokeLinecap="round" />
                            </svg>
                        </a> */}
                        <button className={isActive ? 'hamburger hum-active' : 'hamburger'} id="hamburger" onClick={handleMenuClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div id="mobile-menu" className={isActive ? 'mobil-menu mm-active' : 'mobil-menu '}>
                        <ul>
                            <li className="group/step-one">
                                <Link to="categories" spy={true} smooth={true} offset={-150} duration={500} className="nav-link nav-link-sm ">
                                    {t("nav_li_1")}
                                </Link>
                                {/* <ul className="nav-dropdown-sm">
                                    <li><a href="index.html">Home Classic</a></li>
                                    <li><a href="index-2.html">Home Dark</a></li>
                                    <li><a href="index-3.html">Home Parallax</a></li>
                                </ul> */}
                            </li>
                            <li className="group/step-one">
                                <Link to="tours" spy={true} smooth={true} offset={50} duration={500} className="nav-link nav-link-sm ">
                                    {t("nav_li_2")}
                                </Link>
                                {/* <ul className="nav-dropdown-sm">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="destination.html">Destinations</a></li>
                                    <li><a href="destination-details.html">Destination Details</a></li>
                                    <li><a href="guide.html">Guides</a></li>
                                    <li><a href="gallery.html">Gallary</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="error.html">Error</a></li>
                                </ul> */}
                            </li>
                            <li className="group/step-one">
                                <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="nav-link nav-link-sm ">
                                    {t("nav_li_3")}
                                </Link>
                                {/* <ul className="nav-dropdown-sm">
                                    <li><a href="package-list.html">New York</a></li>
                                    <li><a href="package-list.html">London</a></li>
                                    <li><a href="package-list.html">Paris</a></li>
                                    <li><a href="package-list.html">Dubai</a></li>
                                    <li><a href="package-list.html">Miami</a></li>
                                    <li><a href="package-list.html">Rome</a></li>
                                    <li><a href="package-list.html">Seattle</a></li>
                                    <li><a href="package-list.html">Amsterdam</a></li>
                                    <li><a href="package-list.html">Chicago</a></li>
                                    <li><a href="package-list.html">Las vegas</a></li>
                                    <li><a href="package-list.html">Barcelona</a></li>
                                    <li><a href="package-list.html">Cox's Bazar</a></li>
                                    <li><a href="package-list.html">Istanbul</a></li>
                                </ul> */}
                            </li>
                            <li className="group/step-one">
                                <Link to="testimonial" spy={true} smooth={true} offset={50} duration={500} className="nav-link nav-link-sm ">
                                    {t("nav_li_4")}
                                </Link>
                                {/* <ul className="nav-dropdown-sm">
                                    <li><a href="blog-list.html">Blog List</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul> */}
                            </li>
                            <li className="group/step-one">
                                <Link to="qa" spy={true} smooth={true} offset={50} duration={500} className="nav-link nav-link-sm ">
                                    {t("nav_li_5")}
                                </Link>
                                {/* <ul className="nav-dropdown-sm">
                                    <li><a href="package-list.html">Package List</a></li>
                                    <li><a href="package-list-sidebar.html">Package List Sidebar</a></li>
                                    <li><a href="package-details.html">Package Details - Layout I</a></li>
                                    <li><a href="package-details-2.html">Package Details - Layout II</a></li>
                                    <li><a href="package-details-3.html">Package Details - Layout III</a></li>
                                </ul> */}
                            </li>
                            <li className="group/step-one">
                                <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} className="nav-link nav-link-sm ">
                                    {t("nav_li_6")}
                                </Link>
                            </li>
                            <li className="group/step-one">
                                <a href="#"
                                    className="text-dark-1 font-medium text-base inline-flex items-center mr-8  hover:text-primary-1 duration-200">
                                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" />
                                <path
                                    d="M12 19C14.2091 19 16 17.2091 16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15C8 17.2091 9.79086 19 12 19Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                                <path d="M12.25 13.75V14.68C12.25 15.03 12.07 15.36 11.76 15.54L11 16" stroke="currentColor"
                                    strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path
                                    d="M9.00007 22H15.0001C19.0201 22 19.7401 20.39 19.9501 18.43L20.7001 12.43C20.9701 9.99 20.2701 8 16.0001 8H8.00007C3.73007 8 3.03007 9.99 3.30007 12.43L4.05007 18.43C4.26007 20.39 4.98007 22 9.00007 22Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                                <path
                                    d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                                    stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"
                                    strokeLinecap="round" />
                            </svg> */}

                                    <img src={langImg} className="langImg" />
                                    <span className="ml-2">
                                        <select value={localStorage.getItem("i18nextLng")}
                                            onChange={handleLanguageChange}
                                            className="languageDropdown"
                                        >
                                            <option value="en">ENG</option>
                                            <option value="ru">RU</option>
                                            <option value="uz">UZ</option>
                                        </select>

                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Navbar
