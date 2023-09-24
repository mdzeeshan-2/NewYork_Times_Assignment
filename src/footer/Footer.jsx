import { Link } from "react-router-dom";
import { MdSubscriptions, MdGames } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { GiCook } from "react-icons/gi";
import logo from "../images/new-york-times-logo.png";
// import { useGlobalContext } from "../context";
import style from "./footer.module.css";

import "./Footer.css";
const Footer = () => {
  // const { sections, formatSection } = useGlobalContext();

  // Scroll to top when a nav link is clicked
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <hr className={style.divider} />
      <footer className={style.footerContainer}>
        <Link to="/" onClick={scrollToTop}>
          <img src={logo} alt="New York Times logo" className={style.logo} />
        </Link>
        <div>
          <div className="footer-news">
            <h3 className="head">NEWS</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text" href="hi">Home Page</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">World</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Coronavirus</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">U.S News</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">U.S. Politics</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">New York</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Business</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Tech</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Science</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Sports</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Wildfire Tracker</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Obituaries</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Today's Paper</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Trending</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Correction</a>
              </li>
            </ul>
          </div>

          <div className="footer_opinion">
            <h3 className="head">OPINION</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text" href="hi">Today's Opinion</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Columnist</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Editorials</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Guest Essays</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Letters</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Sunday Opinion</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Opinion Video</a>
              </li>
            </ul>
          </div>

          <div className="footer_opinion">
            <h3 className="head">ARTS</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text" href="hi">Today's Arts</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Art & Design</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Books</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Best Sellar Book List</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Dance</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Movies</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Music</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Pop Culture</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Television</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Theater</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Videos: Arts</a>
              </li>
            </ul>
          </div>

          <div className="footer_opinion">
            <h3 className="head">LIVING</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text" href="hi">Automotive</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Games</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Education</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Food</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Health</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Jobs</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Magazine</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Parenting</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Real Estate</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Style</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">T Magazine</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Travel</a>
              </li>
            </ul>
          </div>

          <div className="footer_opinion">
            <h3 className="head">MORE</h3>
            <ul className="list">
              <li className="News">
                <a className="news_text" href="hi">Reader Center</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">The Athletic</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Wirecutter</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Cooking</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Headway</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Live Events</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">The Learning Network</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Tools & Service</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Podcasts</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Video</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Graphics</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">TimesMachine</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Times Stone</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">Manage My Account</a>
              </li>
              <li className="News">
                <a className="news_text" href="hi">NYTLicensing</a>
              </li>
            </ul>
          </div>
          <div className="footer_opinion">
            <div className="column" style={{ borderLeft: "1px solid #ddd" }}>
              <div className="column">
                <h3 className="head-subs">Subscribe</h3>
                <div className="subscribe-row">
                  <a className="subscribe-link" href="hi">
                    <p className="subs-row">
                      <BsNewspaper style={{ marginRight: "10px" }} /> Home
                      Delivery
                    </p>
                  </a>
                  <a className="subscribe-link"  href="hi">
                    <p className="subs-row">
                      <MdSubscriptions style={{ marginRight: "10px" }} />{" "}
                      Subscription
                    </p>
                  </a>
                  <a className="subscribe-link" href="hi">
                    <p className="subs-row">
                      <MdGames style={{ marginRight: "10px" }} /> Games
                    </p>
                  </a>
                  <a className="subscribe-link" href="hi">
                    <p className="subs-row">
                      <GiCook style={{ marginRight: "10px" }} /> Cooking
                    </p>
                  </a>
                </div>
                <ul className="News-list">
                  <li className="news-list">Email Newsletter</li>
                  <li className="news-list">Corporate Subscription</li>
                  <li className="news-list">Education Rate</li>
                </ul>
              </div>

              <div className="column">
                <div
                  className="column"
                  style={{
                    borderTop: "1px solid #ddd",
                    marginTop: "60px",
                    marginLeft: "10%",
                    paddingTop: "20px",
                  }}
                >
                  <ul className="News-list-bottom">
                    <li className="news-list-bottom">Mobile Application</li>
                    <li className="news-list-bottom">Replica Edition</li>
                    <li className="news-list-bottom">International</li>
                    <li className="news-list-bottom">Canada</li>
                    <li className="news-list-bottom">Espanol</li>
                  </ul>
                </div>
              </div>
          </div>
            </div>
          <div className={style.copyright}>
          <div className="copyright">
            <p>&copy; 2023 The New York Times Company</p>
            <p>NYT Co</p>
            <p>Contact Us</p>
            <p>Accessibility</p>
            <p>Work with us</p>
            <p>Advertise</p>
            <p>T Brand Studio</p>
            <p>Your Ad Choices</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Terms of Sale</p>
            <p>Site Map</p>
            <p>Help</p>
            <p>Subscriptions</p>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
