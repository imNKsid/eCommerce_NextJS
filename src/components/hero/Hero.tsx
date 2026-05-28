import { ICONS } from "@/assets/icons";
import { IMAGES } from "@/assets/images";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hand-icon">
            <p>new</p>
            <Image width={100} height={100} src={IMAGES.hand_image} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <Image src={ICONS.arrow_white_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <Image width={800} height={800} src={IMAGES.hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
