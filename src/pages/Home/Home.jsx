import "./Home.css"
import home from "../../assets/backgroundArt/ctf_city_skyline_ALT.svg";
import begPath from "../../assets/backgroundArt/CTF_Background_PathwayTop_Final.svg";
import midPath from "../../assets/backgroundArt/CTF_Background_PathwayMiddle_Final.svg";
import endPath from "../../assets/backgroundArt/CTF_Background_PathwayBottom_Final.svg";
import ground from "../../assets/backgroundArt/CTF_Grass-Stone1.svg";
import stoneTransition from "../../assets/backgroundArt/CTF_Stone2.svg";
import stone from "../../assets/backgroundArt/CTF_Stone3.svg";
import dragon from "../../assets/backgroundArt/dragon_lair.svg";
import cloud from "../../assets/pieces/ctf_cloud.svg";
import scroll from "../../assets/pieces/scroll.svg";
import bunting from "../../assets/pieces/sponsors_banner.svg";
import logo from "../../assets/pieces/CTF_Logo_Horizontal_Webpage.svg";
import mobileScroll from "../../assets/pieces/about_paper.svg";



import About from "../../sections/About/About.jsx";
import Schedule from "../../sections/Schedule/Schedule.jsx";
import FAQ from "../../sections/FAQ/FAQ.jsx";
import Sponsors from "../../sections/Sponsors/Sponsors.jsx";
import Team from "../../sections/Team/Team.jsx";
import SocialMedia from "../../sections/SocialMedia/SocialMedia.jsx";

export default function Home() {
    return (
        <div className="home">

            <section id="home" className="slide slide--home" style={{ "--transition-img": `url(${scroll})` }}>
                <img src={home} alt="chicago skyline" className="slide-art"/>
                <img src={logo} alt="logo" className="logo"/>

                <a 
                    href="#register"
                    className="cloud-btn cloud-btn--left"
                    aria-label="Register"
                >
                    <img src={cloud} alt="register"/>
                    <span className="cloud-label">Register</span>
                </a>

                <a 
                    href="#cyberpack"
                    className="cloud-btn cloud-btn--right"
                    aria-label="cyberpack"
                >
                    <img src={cloud} alt="cyberpack"/>
                    <span className="cloud-label">Cyberpack</span>
                </a>
            </section>

            <div className="mobile-scroll-wrap" aria-hidden="true">
                <img src={mobileScroll} alt="mobile-scroll" className="mobile-scroll"/>
            </div>

            {/* About Anchor */}
            <div id="about" className="anchor anchor--seam">
                <div className="overlay overlay--about">
                    <div className="overlay-card overlay-card--full">
                        <About />
                    </div>
                </div>
            </div>

            <section id="schedule" className="slide slide--begPath">
                <img src={begPath} alt="top path" className="slide-art"/>

                <div className="overlay overlay--schedule">
                    <div className="overlay-card overlay-card--full">
                        <Schedule />
                    </div>
                </div>
            </section>

            <section id="faq" className="slide slide--midPath">
                <img src={midPath} alt="mid path" className="slide-art"/>

                <div className="overlay overlay--faq">
                    <div className="overlay-card">
                        <FAQ />
                    </div>
                </div>
            </section>

            <section id="sponsors" className="slide slide--endPath">
                <img src={endPath} alt="end path" className="slide-art"/>

                <div className="overlay overlay--sponsors">

                    <div className="bunting">
                      <img src={bunting} alt="Sponsors Pennant Bunting" />
                    </div>

                    <div className="overlay-card overlay-card--full">          
                        <Sponsors />
                    </div>

                </div>
            </section>

            <section className="slide slide--ground">
                <img src={ground} alt="ground" className="slide-art"/>
            </section>

            <section className="slide slide--stoneTransition">
                <img src={stoneTransition} alt="transition to stone" className="slide-art"/>
            </section>

            <section id="team" className="slide slide--stone">
            
                <img src={stone} alt="stone" className="slide-art"/>
                <img src={stone} alt="stone" className="slide-art"/>
                <img src={stone} alt="stone" className="slide-art hide-abv-350px"/>
                <img src={stone} alt="stone" className="slide-art hide-abv-350px"/>
                <img src={stone} alt="stone" className="slide-art hide-abv-400px"/>
                <img src={stone} alt="stone" className="slide-art hide-abv-450px"/>
                <img src={stone} alt="stone" className="slide-art hide-abv-450px"/>
                <img src={stone} alt="stone" className="slide-art hide-abv-600px"/>
                <img src={stone} alt="stone" className="slide-art hide-abv-700px"/>
                <img src={stone} alt="stone" className="slide-art hide-abv-1025px"/>
                <div className="overlay overlay--team">
                    <div className="overlay-card--team">
                        <Team />
                    </div>
                </div>
            </section>

            <section id="social-media" className="slide slide--dragon">
                <img src={dragon} alt="dragon" className="slide-art"/>

                <div className="overlay overlay--socials">
                    <div className="overlay-card">
                        <SocialMedia />
                    </div>
                </div>
            </section>
            
            <footer className="footer">
                <h1> University of Illinois Capture the Flag</h1>
            </footer>
        </div>
    )
}
