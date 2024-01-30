import shopImg from '../assets/images/shopsNight.jpg';

export default function LandingPage() {
  return (
    <>
      <main className="LangingPage">
        <h2 className="tagLine">
          Discover the Extraordinary: Where Every Shopping Experience is a
          Whimsical Adventure!
        </h2>
        <img src={shopImg} alt="shops at night" className="landingImg" />
        <div className="imgInfo">
          Image by{' '}
          <a href="https://pixabay.com/users/matthiaskost-15902545/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5992277">
            Matthias Kost
          </a>{' '}
          from{' '}
          <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5992277">
            Pixabay
          </a>
        </div>
      </main>
    </>
  );
}
