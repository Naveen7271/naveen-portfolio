import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const socials = [
    { icons: <FaGithub />, path: "https://github.com/Naveen7271" },
    { icons: <FaLinkedinIn />, path: "https://www.linkedin.com/in/naveen-noonia-63225b200/" },
    { icons: <FaEnvelope />, path: "" },
];


const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icons}
                    </Link>
                );
            })}
        </div>
    )
}

export default Social;