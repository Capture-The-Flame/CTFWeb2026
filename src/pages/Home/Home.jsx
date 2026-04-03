import "./Home.css"
import { useState } from "react";
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
import logica from "../../assets/pieces/logica_logo.png";
import wicys from "../../assets/pieces/wicys_logo.png"



import About from "../../sections/About/About.jsx";
import Schedule from "../../sections/Schedule/Schedule.jsx";
import FAQ from "../../sections/FAQ/FAQ.jsx";
import Sponsors from "../../sections/Sponsors/Sponsors.jsx";
import Team from "../../sections/Team/Team.jsx";
import SocialMedia from "../../sections/SocialMedia/SocialMedia.jsx";

export default function Home() {
    const [activeOverlay, setActiveOverlay] = useState(null); // 'schedule' | 'faq' | null

    return (
        <div className="home">

            <section id="home" className="slide slide--home">
                <img src={home} alt="chicago skyline" className="slide-art"/>
                <img src={logo} alt="logo" className="logo"/>

                <a 
                    href="https://luma.com/gahbzqu6"
                    className="cloud-btn cloud-btn--left"
                    aria-label="Register"
                >
                    <img src={cloud} alt="register"/>
                    <span className="cloud-label">Register</span>
                </a>

                <a 
                    href="https://dolomite-milkshake-eae.notion.site/Capture-The-Flame-317487455f7b80aeb22cd592199ea7cf"
                    className="cloud-btn cloud-btn--right"
                    aria-label="cyberpack"
                >
                    <img src={cloud} alt="cyberpack"/>
                    <span className="cloud-label">Cyberpack</span>
                </a>
            </section>

            <section id="about" className="slide slide--about">
                <div className="mobile-scroll-wrap">
                    <img src={mobileScroll} alt="mobile-scroll" className="mobile-scroll" />
                    <div className="overlay overlay--about">
                        <div className="overlay-card overlay-card--full">
                            <About />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="schedule" className="slide slide--begPath" style={{ zIndex: activeOverlay === 'schedule' ? 30 : 5 }}>
                <img src={begPath} alt="top path" className="slide-art"/>

                <div className="overlay overlay--schedule">
                    <div className="overlay-card overlay-card--full">
                        <Schedule 
                            onOpen={() => setActiveOverlay('schedule')}
                            onClose={() => setActiveOverlay(null)}
                        />
                    </div>
                </div>
            </section>

            <section id="faq" className="slide slide--midPath" style={{ zIndex: activeOverlay === 'schedule' ? 9 : 10 }}>
                <img src={midPath} alt="mid path" className="slide-art"/>

                <div className="overlay overlay--faq">
                    <div className="overlay-card">
                        <FAQ 
                            onOpen={() => setActiveOverlay('faq')}
                            onClose={() => setActiveOverlay(null)}
                        />
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
                <img src={wicys} className="footer-logo wicys" />
                <div className="footer-text">
                    <h1>University of Illinois Chicago</h1>
                    <h1>Capture the Flame</h1>
                </div>
                <img src={logica} className="footer-logo logica" />
            </footer>
        </div>
    )
}
