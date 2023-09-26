import React, { useState } from 'react'
import { useTranslation } from "react-i18next"
import { Link } from 'react-scroll'
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

import logoBrandLight from "../assets/images/logo-light.png"

const Footer = () => {
    const { i18n, t } = useTranslation(["common"])


    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        let mytext = `Message: %0A <b>Phone: </b>${phone}`

        const tkn = "6392180338:AAG1YEMUgO_SX3hDWnVi_1YID6SjQzwJZEU"
        const chatid = "-4056611549"
        const sendurl = `https://api.telegram.org/bot${tkn}/sendMessage?chat_id=${chatid}&text=${mytext}&parse_mode=html`


        let api = new XMLHttpRequest()
        api.open("GET", sendurl, true)
        api.send()
    }


    return (
        <div id="contacts">
            <div
                className="footer_style__one bg-center bg-cover bg-no-repeat mt-17 pt-17 bg-fixed overflow-hidden"

            >
                <div className="container">
                    <div
                        className="flex lg:justify-between justify-center items-center flex-wrap gap-base pb-base"
                    >
                        <a href="#">
                            <img src={logoBrandLight} alt="placeholder" className="brand-footer" />
                        </a>
                        <div
                            className="flex align-middle justify-center lg:gap-x-9 gap-y-5 gap-x-7 flex-wrap"
                        >
                            <a href="#" className="inline-flex items-center group">
                                <div className="social_icon_varient__one">
                                    <i className="bi bi-whatsapp"></i>
                                </div>
                                <h5 className="text-white lg:text-2md text-md font-serif font-bold">
                                    whatsapp
                                </h5>
                            </a>
                            <a href="#" className="inline-flex items-center group">
                                <div className="social_icon_varient__one">
                                    <i className="bi bi-twitter"></i>
                                </div>
                                <h5 className="text-white lg:text-2md text-md font-serif font-bold">
                                    Twitter
                                </h5>
                            </a>
                            <a href="#" className="inline-flex items-center group">
                                <div className="social_icon_varient__one">
                                    <i className="bi bi-pinterest"></i>
                                </div>
                                <h5 className="text-white lg:text-2md text-md font-serif font-bold">
                                    Pinterest
                                </h5>
                            </a>

                            <a href="#" className="inline-flex items-center group">
                                <div className="social_icon_varient__one">
                                    <i className="bi bi-instagram"></i>
                                </div>
                                <h5 className="text-white lg:text-2md text-md font-serif font-bold">
                                    Instagram
                                </h5>
                            </a>
                        </div>
                    </div>
                    <div
                        className="grid lg:grid-cols-12 lg:pt-17 pt-10 gap-base lg:pb-17 pb-12 gradient-border-top"
                    >
                        <div className="lg:col-span-4 col-span-12 text-center lg:text-start">
                            <h3
                                className="text-white lg:text-[25px] text-2md font-semibold leading-1.35"
                            >
                                {t("newsletter")}
                            </h3>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-5 md:max-w-[345px] max-w-[300px] lg:mx-0 mx-auto"
                            >
                                <div className="relative">
                                    {/* <input
                                        type="text"
                                        className="bg-[#0C0F13] bg-transparent h-12 py-3 pr-5 pl-12 outline-none border-stock-1 border border-opacity-40 w-full text-white text-sm placeholder:to-dark-5 focus:border-primary-2"
                                        placeholder={t("footer_input_ph")}
                                    /> */}


                                    <PhoneInput
                                        country={'uz'}
                                        value={phone}
                                        onChange={(value) => setPhone(value)}
                                        inputProps={{
                                            required: true
                                        }}
                                        className="footerInput bg-[#0C0F13] bg-transparent h-12 py-3 pr-5 outline-none border-stock-1 border border-opacity-40 w-full text-white text-sm placeholder:to-dark-5 focus:border-primary-2"

                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="text-base text-white font-semibold bg-primary-1 w-full mt-5 h-[50px] duration-300 hover:bg-primary-2"
                                >
                                    {t("footer_button_text")}
                                </button>
                            </form>


                        </div>
                        <div
                            className="lg:col-span-8 col-span-12 gap-base flex lg:flex-nowrap flex-wrap text-center lg:text-start lg:justify-between justify-center lg:pl-8"
                        >
                            <div className="flex-grow">
                                <div className="mb-base">
                                    <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">
                                        {t("footer_h1")}
                                    </h3>
                                </div>
                                <ul className="footer-link-list">
                                    <li>
                                        <a href="about.html" className="footer-nav-link">{t("f_li_11")}</a>
                                    </li>
                                    <li>
                                        <a href="about.html" className="footer-nav-link">{t("f_li_12")}</a>
                                    </li>
                                    <li>
                                        <a href="about.html" className="footer-nav-link">{t("f_li_13")}</a>
                                    </li>
                                    <li>
                                        <a href="about.html" className="footer-nav-link">{t("f_li_14")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-grow">
                                <div className="mb-base">
                                    <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">
                                        {t("footer_h2")}
                                    </h3>
                                </div>

                                <ul className="footer-link-list">
                                    <li>
                                        <a href="package-details.html" className="footer-nav-link">{t("f_li_21")}</a>
                                    </li>
                                    <li>
                                        <a href="package-details.html" className="footer-nav-link">{t("f_li_22")}</a>
                                    </li>
                                    <li>
                                        <a href="package-details.html" className="footer-nav-link">{t("f_li_23")}</a>
                                    </li>
                                    <li>
                                        <a href="package-details.html" className="footer-nav-link">{t("f_li_24")}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="max-w-[275px] flex-grow shrink-0">
                                <div className="mb-base">
                                    <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35"
                                    >{t("footer_h3")}</h3>
                                </div>

                                <ul>
                                    <li
                                        className="mt-5 first:mt-0 flex items-center lg:justify-start justify-end text-stock-1 hover:text-primary-1 duration-200"
                                    >
                                        <div className="text-primary-1 shrink-0">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.9999 11.1917C11.4358 11.1917 12.5999 10.0276 12.5999 8.5917C12.5999 7.15576 11.4358 5.9917 9.9999 5.9917C8.56396 5.9917 7.3999 7.15576 7.3999 8.5917C7.3999 10.0276 8.56396 11.1917 9.9999 11.1917Z"
                                                    stroke="#E8604C"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M3.01675 7.07484C4.65842 -0.141827 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C11.3251 18.7332 8.67508 18.7332 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>
                                        </div>
                                        <a href="#" className="leading-1.5 pl-[10px] text-base">{t("address")}</a>
                                    </li>


                                    <li
                                        className="mt-5 first:mt-0 flex items-center lg:justify-start justify-center text-stock-1 hover:text-primary-1 duration-200"
                                    >
                                        <div className="text-primary-1 shrink-0">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M14.1667 17.0832H5.83341C3.33341 17.0832 1.66675 15.8332 1.66675 12.9165V7.08317C1.66675 4.1665 3.33341 2.9165 5.83341 2.9165H14.1667C16.6667 2.9165 18.3334 4.1665 18.3334 7.08317V12.9165C18.3334 15.8332 16.6667 17.0832 14.1667 17.0832Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M14.1666 7.5L11.5582 9.58333C10.6999 10.2667 9.29158 10.2667 8.43325 9.58333L5.83325 7.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                        <a
                                            href="mailto:example@gmail.com"
                                            className="leading-1.5 pl-[10px] text-base">happyvacations@gmail.com</a>
                                    </li>
                                    <li
                                        className="mt-5 first:mt-0 flex items-center lg:justify-start justify-center text-stock-1 hover:text-primary-1 duration-200"
                                    >
                                        <div className="text-primary-1 shrink-0">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M18.3084 15.2748C18.3084 15.5748 18.2417 15.8832 18.1001 16.1832C17.9584 16.4832 17.7751 16.7665 17.5334 17.0332C17.1251 17.4832 16.6751 17.8082 16.1667 18.0165C15.6667 18.2248 15.1251 18.3332 14.5417 18.3332C13.6917 18.3332 12.7834 18.1332 11.8251 17.7248C10.8667 17.3165 9.90842 16.7665 8.95842 16.0748C8.00008 15.3748 7.09175 14.5998 6.22508 13.7415C5.36675 12.8748 4.59175 11.9665 3.90008 11.0165C3.21675 10.0665 2.66675 9.1165 2.26675 8.17484C1.86675 7.22484 1.66675 6.3165 1.66675 5.44984C1.66675 4.88317 1.76675 4.3415 1.96675 3.8415C2.16675 3.33317 2.48341 2.8665 2.92508 2.44984C3.45841 1.92484 4.04175 1.6665 4.65841 1.6665C4.89175 1.6665 5.12508 1.7165 5.33341 1.8165C5.55008 1.9165 5.74175 2.0665 5.89175 2.28317L7.82508 5.00817C7.97508 5.2165 8.08341 5.40817 8.15841 5.5915C8.23341 5.7665 8.27508 5.9415 8.27508 6.09984C8.27508 6.29984 8.21675 6.49984 8.10008 6.6915C7.99175 6.88317 7.83341 7.08317 7.63341 7.28317L7.00008 7.9415C6.90841 8.03317 6.86675 8.1415 6.86675 8.27484C6.86675 8.3415 6.87508 8.39984 6.89175 8.4665C6.91675 8.53317 6.94175 8.58317 6.95842 8.63317C7.10842 8.90817 7.36675 9.2665 7.73341 9.69984C8.10841 10.1332 8.50841 10.5748 8.94175 11.0165C9.39175 11.4582 9.82508 11.8665 10.2667 12.2415C10.7001 12.6082 11.0584 12.8582 11.3417 13.0082C11.3834 13.0248 11.4334 13.0498 11.4917 13.0748C11.5584 13.0998 11.6251 13.1082 11.7001 13.1082C11.8417 13.1082 11.9501 13.0582 12.0417 12.9665L12.6751 12.3415C12.8834 12.1332 13.0834 11.9748 13.2751 11.8748C13.4667 11.7582 13.6584 11.6998 13.8667 11.6998C14.0251 11.6998 14.1917 11.7332 14.3751 11.8082C14.5584 11.8832 14.7501 11.9915 14.9584 12.1332L17.7167 14.0915C17.9334 14.2415 18.0834 14.4165 18.1751 14.6248C18.2584 14.8332 18.3084 15.0415 18.3084 15.2748Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M13.5251 6.4749L16.4751 3.5249"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M16.4751 6.4749L13.5251 3.5249"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>

                                        <a
                                            href="tel:+998 90 122 68 88"
                                            className="leading-1.5 pl-[10px] text-base">998 90 122 68 88</a>
                                    </li>

                                    <li
                                        className="mt-5 first:mt-0 flex items-center lg:justify-start justify-center text-stock-1 hover:text-primary-1 duration-200"
                                    >
                                        <div className="text-primary-1 shrink-0">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M18.3084 15.2748C18.3084 15.5748 18.2417 15.8832 18.1001 16.1832C17.9584 16.4832 17.7751 16.7665 17.5334 17.0332C17.1251 17.4832 16.6751 17.8082 16.1667 18.0165C15.6667 18.2248 15.1251 18.3332 14.5417 18.3332C13.6917 18.3332 12.7834 18.1332 11.8251 17.7248C10.8667 17.3165 9.90842 16.7665 8.95842 16.0748C8.00008 15.3748 7.09175 14.5998 6.22508 13.7415C5.36675 12.8748 4.59175 11.9665 3.90008 11.0165C3.21675 10.0665 2.66675 9.1165 2.26675 8.17484C1.86675 7.22484 1.66675 6.3165 1.66675 5.44984C1.66675 4.88317 1.76675 4.3415 1.96675 3.8415C2.16675 3.33317 2.48341 2.8665 2.92508 2.44984C3.45841 1.92484 4.04175 1.6665 4.65841 1.6665C4.89175 1.6665 5.12508 1.7165 5.33341 1.8165C5.55008 1.9165 5.74175 2.0665 5.89175 2.28317L7.82508 5.00817C7.97508 5.2165 8.08341 5.40817 8.15841 5.5915C8.23341 5.7665 8.27508 5.9415 8.27508 6.09984C8.27508 6.29984 8.21675 6.49984 8.10008 6.6915C7.99175 6.88317 7.83341 7.08317 7.63341 7.28317L7.00008 7.9415C6.90841 8.03317 6.86675 8.1415 6.86675 8.27484C6.86675 8.3415 6.87508 8.39984 6.89175 8.4665C6.91675 8.53317 6.94175 8.58317 6.95842 8.63317C7.10842 8.90817 7.36675 9.2665 7.73341 9.69984C8.10841 10.1332 8.50841 10.5748 8.94175 11.0165C9.39175 11.4582 9.82508 11.8665 10.2667 12.2415C10.7001 12.6082 11.0584 12.8582 11.3417 13.0082C11.3834 13.0248 11.4334 13.0498 11.4917 13.0748C11.5584 13.0998 11.6251 13.1082 11.7001 13.1082C11.8417 13.1082 11.9501 13.0582 12.0417 12.9665L12.6751 12.3415C12.8834 12.1332 13.0834 11.9748 13.2751 11.8748C13.4667 11.7582 13.6584 11.6998 13.8667 11.6998C14.0251 11.6998 14.1917 11.7332 14.3751 11.8082C14.5584 11.8832 14.7501 11.9915 14.9584 12.1332L17.7167 14.0915C17.9334 14.2415 18.0834 14.4165 18.1751 14.6248C18.2584 14.8332 18.3084 15.0415 18.3084 15.2748Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                />
                                                <path
                                                    d="M13.5251 6.4749L16.4751 3.5249"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M16.4751 6.4749L13.5251 3.5249"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>

                                        <a
                                            href="tel:+998 90 123 68 88"
                                            className="leading-1.5 pl-[10px] text-base">998 90 123 68 88</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-dark-6 flex gap-4 flex-wrap lg:justify-between justify-center gradient-border-top py-7 relative"
                    >
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}
                            id="scrollTop"
                            className="text-white flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-0 w-[50px] h-[50px] rounded-full bg-primary-1 -translate-y-1/2 duration-300 hover:bg-primary-2"
                        >


                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.92 15.0501L13.4 8.53014C12.63 7.76014 11.37 7.76014 10.6 8.53014L4.07996 15.0501"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </Link>
                        <div className="w-full flex justify-between">
                            <p>{t("copywright")}</p>
                            <p>
                                <a href="#" className="hover:text-primary-1 duration-200">{t("wrights")}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
