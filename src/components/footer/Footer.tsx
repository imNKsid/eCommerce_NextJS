import { ICONS } from "@/assets/icons";
import { IMAGES } from "@/assets/images";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Image src={ICONS.logo_icon} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <Image src={IMAGES.instagram_black_image} alt="" />
        </div>
        <div className="footer-icons-container">
          <Image src={IMAGES.pinterest_black_image} alt="" />
        </div>
        <div className="footer-icons-container">
          <Image src={IMAGES.whatsapp_black_image} alt="" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @NK-Enterprises - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
