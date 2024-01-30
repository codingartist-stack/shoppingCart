import shopImg from '../assets/images/shopsNight.jpg';
import storeFront from '../assets/images/storeFront.jpg';

export default function LandingPage() {
  return (
    <>
      <main className="LangingPage">
        <h2 className="tagLine">
          Discover the Extraordinary: Where Every Shopping Experience is a
          Whimsical Adventure!
        </h2>
        <img src={storeFront} alt="shops at night" className="landingImg" />
        <div className="imgInfo">
          Image by{' '}
          <a href="https://pixabay.com/users/bruceemmerling-93533/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=215287">
            Bruce Emmerling
          </a>{' '}
          from{' '}
          <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=215287">
            Pixabay
          </a>
        </div>
      </main>
    </>
  );
}
