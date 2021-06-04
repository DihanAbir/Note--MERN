import React, { Fragment } from "react";
import Facebook from "../Assets/facebook.png";
import Pinterest from "../Assets/Pinterest.png";
import Instagrame from "../Assets/Instagrame.png";
import EducationIcon from "../Assets/educationicon.svg";
import Twitter from "../Assets/Twitter.png";
import MainLogo from "../Assets/MainLogo.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

import '../Mycss/Footer.css';

function Footer() {
  return (
    <Fragment>
      <div className="footer_style">
        <div className="footer_item">
          <div className="footer_part1">
            <div className="logo_education">
              <img src={MainLogo} alt="" height="50px" width="50px" />
              <h3 style={{ color: "#fff",paddingLeft:'10px' }}>For education</h3>
            </div>

            <div className="footer_information">
              <LocationOnIcon style={{ color: "#fff" }} />
              <span>1500 Treat Ave, Suite 200 San Francisco, CA 94110</span>
            </div>
            <div className="footer_information">
              <EmailIcon style={{ color: "#fff" }} />
              <span>vctung@outlook.com</span>
            </div>
            <div className="footer_information">
              <PhoneIcon style={{ color: "#fff" }} />
              <span>1-800-800-2299 (Support)</span>
            </div>
          </div>
          <div className="footer_part2">
            <div className="item_1">
              <strong>Community</strong>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
            </div>
            <div className="item_2">
              <strong>Informations</strong>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
            </div>
            <div className="item_3">
              <strong>More</strong>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
              <span>some</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="copyright_part1">Copyright © 2021 Tung Chi Vo</div>
        <div className="copyright_part2">
          <img src={Facebook} alt="" />
          <img src={Pinterest} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagrame} alt="" />
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
