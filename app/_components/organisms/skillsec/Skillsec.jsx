import styles from './skillsec.module.scss';

import { HtmlIcon, CssIcon, SassIcon, TailwindIcon, BootstrapIcon, JavascriptIcon, NextjsIcon, WordpressIcon, PhotoshopIcon, FigmaIcon, ReactIcon } from "../../atoms/icons/Icons";

export const Skillsec = () => {

    const skillList = [
        {skillName: "Html", skillIcon: <HtmlIcon />},
        {skillName: "Css", skillIcon: <CssIcon />},
        {skillName: "Sass", skillIcon: <SassIcon />},
        {skillName: "Tailwind", skillIcon: <TailwindIcon />},
        {skillName: "Bootstrap", skillIcon: <BootstrapIcon />},
        {skillName: "Javascript", skillIcon: <JavascriptIcon />},
        {skillName: "React", skillIcon: <ReactIcon />},
        {skillName: "NextJs", skillIcon: <NextjsIcon />},
        {skillName: "Wordpress", skillIcon: <WordpressIcon />},
        {skillName: "Photoshop", skillIcon: <PhotoshopIcon />},
        {skillName: "Figma", skillIcon: <FigmaIcon />},
    ]

    return (
        <div className={styles.skillsec}>
            <ul className="unset">
                {
                    skillList.map((skill, index) => {
                        return(
                            <li key={index}>
                                <div className={styles.imgsec}>
                                    {skill.skillIcon}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
