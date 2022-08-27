import React from 'react'
import "../Assets/Project.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <>
    
    <footer className="footer-07">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						<h2 className="footer-heading logo">Vivek's Portfolio</h2>
						<p className="menu">
							<a href="#home">Home</a>
							<a href="/">Work</a>
							<a href="/">Education</a>
							<a href="/">Experience</a>
							<a href="/">About</a>
							<a href="/">Contact</a>
						</p>
						<ul className="ftco-footer-social p-0">
              <li className="ftco-animate"><a href="/" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter">{<InstagramIcon/>}</span></a></li>
              <li className="ftco-animate"><a href="/" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook">{<GitHubIcon/>}</span></a></li>
              <li className="ftco-animate"><a href="/" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram">{<FacebookIcon/>}</span></a></li>
              <li className="ftco-animate"><a href="/" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram">{<LinkedInIcon/>}</span></a></li>
            </ul>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-md-12 text-center footer_line">
						<p className="copyright">
					  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |Designed With  <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="/" >Vivek Choudhary</a>
					  </p>
					</div>
				</div>
			</div>
		</footer>
    
    </>
  )
}
