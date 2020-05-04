import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import faCompass from "@fortawesome/fontawesome-free-solid/faCompass"
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone"
import faClock from "@fortawesome/fontawesome-free-solid/faClock"
import faEnvelope from "@fortawesome/fontawesome-free-solid/faEnvelope"

class Footer extends Component {
  render() {
    return (
      <footer className="bck_b_dark">
        <div className="container">
          <div className="logo">Waves</div>
          <div className="wrapper">
            <div className="left">
              <h2>Contact Info</h2>
              <div className="info">
                <div className="tag">
                  <FontAwesomeIcon icon={faCompass} className="icon" />
                  <div className="nfo">
                    <div>Address</div>
                    <div>Lushpy 22</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  <div className="nfo">
                    <div>Phone</div>
                    <div>1394-121-123</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon icon={faClock} className="icon" />
                  <div className="nfo">
                    <div>Working Hours</div>
                    <div>MOn-Sun 9-5pm</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <div className="nfo">
                    <div>Email</div>
                    <div>vetal2sdf@ymail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <h2>Be the first to know</h2>
              <div className="">
                <div className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
