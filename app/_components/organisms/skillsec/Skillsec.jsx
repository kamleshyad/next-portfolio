import styles from './skillsec.module.scss';

import { HtmlIcon, CssIcon, SassIcon, TailwindIcon, BootstrapIcon, JavascriptIcon, NextjsIcon, WordpressIcon, PhotoshopIcon, FigmaIcon, ReactIcon } from "../../atoms/icons/Icons";

export const Skillsec = () => {

    const skillList = [
        {skillName: "Html5", skillIcon: <HtmlIcon />, glowColor: "#ff5c13"},
        {skillName: "Css3", skillIcon: <CssIcon />, glowColor: "#0277bd"},
        {skillName: "Sass", skillIcon: <SassIcon />, glowColor: "#f06292"},
        {skillName: "Tailwind", skillIcon: <TailwindIcon />, glowColor: "#00acc1"},
        {skillName: "Bootstrap", skillIcon: <BootstrapIcon />, glowColor: "#6c19ff"},
        {skillName: "Javascript", skillIcon: <JavascriptIcon />, glowColor: "#ffd600"},
        {skillName: "React", skillIcon: <ReactIcon />, glowColor: "#00d6fd"},
        {skillName: "NextJs", skillIcon: <NextjsIcon />, glowColor: "#938e8e"},
        {skillName: "Wordpress", skillIcon: <WordpressIcon />, glowColor: "#01579b"},
        {skillName: "Figma", skillIcon: <FigmaIcon />, glowColor: "#e64a19"},
        {skillName: "Photoshop", skillIcon: <PhotoshopIcon />, glowColor: "#03a9f4"},
    ]

    return (
        <div className={styles.skillsec}>
            <ul className="unset">
                {
                    skillList.map((skill, index) => {
                        return(
                            <li key={index}>
                                <figure className={styles.imgsec} style={skill.glowColor ? { "--glow-color": skill.glowColor } : {} } title={skill.skillName} aria-label={skill.skillName}>
                                    {skill.skillIcon}
                                    <figcaption className="sr-only">{skill.skillName}</figcaption>
                                </figure>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
