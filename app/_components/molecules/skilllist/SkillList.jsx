import styles from './skillList.module.scss';

import { HtmlIcon } from "../../atoms/icons/Icons";

export const SkillList = () => {

    const skillList = [
        {skillName: "Html", skillIcon: <HtmlIcon />},
        {skillName: "Html", skillIcon: <HtmlIcon />},
        {skillName: "Html", skillIcon: <HtmlIcon />},
        {skillName: "Html", skillIcon: <HtmlIcon />},
        {skillName: "Html", skillIcon: <HtmlIcon />},
        {skillName: "Html", skillIcon: <HtmlIcon />},
        {skillName: "Html", skillIcon: <HtmlIcon />},
    ]

    return (
        <div className={styles.skillwrap}>
            <ul className="unset">
                {
                    skillList.map((skill, index) => {
                        return(
                            <li key={index}>
                                <div className="imgsec">
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
