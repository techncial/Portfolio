import React from "react";
import profile_img from '../profile_img.png';
import "../Assets/ContentProfile.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GlitchText from "react-glitch-effect/core/GlitchText";
import KeyboardArrowDownTwoToneIcon from "@material-ui/icons/KeyboardArrowDownTwoTone";
import Typed from "react-typed";

export default function Contentprofile() {
  return (
    <>
      <section className="first_section" id="home">
        <section className="Content_section">
          <div className="title_name">
            <h1 className="hi_there"> Hi There,</h1>
            <h1 className="Vivek_Choudhary"> I'm Vivek Choudhary</h1>
          </div>
          <div className="changeable">
            <h2 className="changeable_line">
              I Am into
              <span className="typing-text">
                <GlitchText>
                  <span id="typewriter">
                    <Typed
                      strings={[
                        "Frontend Development",
                        "Web Designing",
                        "Web Development",
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                  </span>
                </GlitchText>
              </span>
            </h2>
          </div>
          <div className="about_btn">
            <button className="AboutMe">
              
              About ME <KeyboardArrowDownTwoToneIcon />
            </button>
          </div>
          <div className="social_media">
            <div className="media">
              <InstagramIcon className='InstagramIcon' />
            </div>
            <div className="media">
              <GitHubIcon className='GitHubIcon' />
            </div>
            <div className="media">
              <FacebookIcon  className='FacebookIcon'/>
            </div>
            <div className="media">
              <LinkedInIcon  className='LinkedInIcon'/>
            </div>
          </div>
        </section>
        <section className="profile_pic">
          <div className="profile_img">
            <img
              className="face_img"
              src={profile_img}
              alt=""
            />
          </div>
        </section>
      </section>
    </>
  );
}
