import facebook from '../assets/svg_icon/fbLogo.svg';
import redditLogo from '../assets/svg_icon/redditLogoIcon.svg';

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
        </div>
        <div>thank you for visiting</div>
      </footer>
    </>
  );
}
