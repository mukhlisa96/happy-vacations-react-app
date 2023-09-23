import React from 'react'
import { useTranslation } from "react-i18next"

const Blackline = () => {

    const { i18n, t } = useTranslation(["home"])

    return (
        <div>

            <div className="bg-dark-1 px-8 py-5 xl:mx-base mx-3 mt-base">
                <div className="marquee">
                    <ul className="marquee__content lg:text-2md text-base text-white">
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                    </ul>
                    {/* <!-- Mirrors the content above --> */}
                    <ul
                        className="marquee__content lg:text-2md text-base text-white"
                        aria-hidden="true"
                    >
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                        <li><a href="#">{t("black_line_text")}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blackline
