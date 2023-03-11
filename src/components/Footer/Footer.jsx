import { useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Modal from "../Modal/Modal";

import "./Footer.css";

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <footer>
      <div className="link">
        <div className="footer-content">
          {/* PODCAST */}
          <div className="podcasts">
            <h4>Podcasts</h4>

            <FaMicrophoneAlt
              className="modal-btn"
              onClick={() => setOpenModal(true)}
            />

            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
          {/* SOCIAL MEDIA */}

          <div className="social-media">
            <h4>Réseaux Sociaux</h4>
            <div className="media-link">
              <a
                href="https://www.facebook.com/icilondewebradio"
                target="_blank"
                alt="lien facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/icilonderadio/"
                target="_blank"
                alt="lien instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="credit">
          <a
            id="credit"
            href="https://www.linkedin.com/in/mat%C3%A9o-le-duc-0b0287210/?originalSubdomain=fr"
            alt="lien vers le linkedin du développeur"
          >
            ©MateoLDC
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
