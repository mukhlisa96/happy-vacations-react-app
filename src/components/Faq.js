import React from 'react'
import leafbgIll from "../assets/images/illustration/bird-illustration.png"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'
import { useTranslation } from "react-i18next"

export default function Example() {

    const { i18n, t } = useTranslation(["home"])


    const answers = [
        {
            uuid: 0,
            heading: t("q1"),
            content: t("a1")
        },
        {
            uuid: 1,
            heading: t("q2"),
            content: t("a2")
        },
        {
            uuid: 2,
            heading: t("q3"),
            content: t("a3")
        },
        {
            uuid: 3,
            heading: t("q4"),
            content: t("a4")
        }
    ]

    return (

        <div id="qa" class="faq_style__one z-1 lg:pt-30 pt-24 mt-30 bg-gradient-to-t to-[#FFF1EC] from-white relative ">
            <div class="absolute top-[5%] right-[1%] max-w-[9%] z-minus lg:inline-block hidden">
                <img src={leafbgIll} alt="leaf" />
            </div>
            <div class="container">
                <div class="text-center lg:pb-[60px] pb-[40px]">
                    <h5 class="section-sub-title-v1">{t("faq_sub_h")}</h5>
                    <h2 class="section-title-v1">{t("faq_h")}</h2>
                </div>
                <div class="accordion gap-base grid lg:grid-cols-1 grid-cols-1">
                    <div class="col-span-1 space-y-base">
                        <Accordion>
                            {answers.map((item) => (
                                <div class="single__accordion shadow-custom-1 bg-white">
                                    <AccordionItem key={item.uuid}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="toggle px-5 py-5 leading-1.5 text-2md text-start w-full text-dark-1 font-serif">
                                                {item.heading}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="inner px-5 pb-5">
                                            <p className="text-base font-sans text-dark-3 leading-1.9">
                                                {item.content}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>
                    </div>


                    {/* <div class="col-span-1 space-y-base">

                        <Accordion>
                            {answers.map((item) => (
                                <div class="single__accordion shadow-custom-1 bg-white">
                                    <AccordionItem key={item.uuid}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="toggle px-5 py-5 leading-1.5 text-2md text-start w-full text-dark-1 font-serif">
                                                {item.heading}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="inner px-5 pb-5">
                                            <p className="text-base font-sans text-dark-3 leading-1.9">
                                                {item.content}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </div>
                            ))}
                        </Accordion>

                    </div> */}
                </div>
            </div>
        </div >


    )
}