import discordBackground from "../assets/discord-background.png";
import discordLogo from "../assets/discord-logo-white.png";
import menuIcon from "../assets/menu-icon.png";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <header className="header">
          <div className="content">
            <img src={discordLogo} alt="discordLogo" className="logo" />
            <img src={menuIcon} alt="menuIcon" className="icon" />
            <h1 className="title">IMAGINE A PLACE...</h1>
            <p>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <button>Donwload for Mac</button>
            <button>Open Discord in your browser</button>
          </div>
          <img src={discordBackground} alt="discordBackground" className="background"/>
        </header>
      </div>
    </>
  );
}

export default LandingPage;
