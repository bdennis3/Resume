import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa"; 

const socials = [
  { icon: <FaGithub />, path: "https://github.com/bdennis3" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/braxton-dennis-58b3432a5/" },
  
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;