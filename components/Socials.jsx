import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter,FaLink  } from "react-icons/fa";

const social = [
  {
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/in/bhaveshraut",
  },
  { icon: <FaGithub />, path: "https://github.com/alwaysbhavesh" },
  { icon: <FaTwitter />, path: "https://x.com/bhaveshraut01" },
  { icon: <FaLink />, path: "https://www.credly.com/users/bhaveshraut" },
  // {icon: <FaYoutube />, path: ""},
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
