import facebook from '../assets/svg_icon/fbLogo.svg';
import redditLogo from '../assets/svg_icon/redditLogoIcon.svg';
import vimeoLogo from '../assets/svg_icon/vimeoLogoIcon.svg';
import mediumLogo from '../assets/svg_icon/mediumLogoIcon.svg';
import youtubeLogo from '../assets/svg_icon/youtubeLogoIcon.svg';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="socialIcons">
          <img
            src={facebook}
            alt="facebook Icon"
            className="footerIcon facebookIcon"
          />
          <img src={redditLogo} alt="reddit logo" className="footerIcon" />
          <img src={vimeoLogo} alt=" vimeo logo" className="footerIcon" />
          <img src={mediumLogo} alt="medium Logo" className="footerIcon" />
          <img src={youtubeLogo} alt="Youtube Icon" className="footerIcon" />
        </div>

        <div className="footerFlex">
          <p className="footerP">thank you for visiting</p>
          <p className="siteTitle">4FunShopping</p>
          <p className="footerP">made Jan 2024</p>
        </div>
      </footer>
    </>
  );
}
