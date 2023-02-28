import React, { useState } from "react";
import "./Modal.css";

import { SlClose } from "react-icons/sl";
import { SiGooglepodcasts } from "react-icons/si";
import { SiPodcastaddict } from "react-icons/si";
import { SiCastbox } from "react-icons/si";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal-container">
        <h2>Plateformes de Podcast :</h2>
        <div className="link-box">
          <a className="podcast-link" href="#" alt="lien google podcast">
            <SiGooglepodcasts />
          </a>
          <p>Google Podcast</p>
        </div>
        <div className="link-box">
          <a className="podcast-link" href="http://" alt="lien castbox">
            <SiCastbox />
          </a>
          <p>CastBox</p>
        </div>
        <div className="link-box">
          <a className="podcast-link" href="http://" alt="lien podcastaddict">
            <SiPodcastaddict />
          </a>
          <p>PodcastAddict</p>
        </div>
        <SlClose onClick={onClose} className="close-btn" alt="close window" />
      </div>
    </div>
  );
};

export default Modal;
