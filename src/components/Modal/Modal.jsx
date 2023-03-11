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
          <a
            className="podcast-link"
            href="https://podcasts.google.com/feed/aHR0cDovL3Jzcy5jYXN0Ym94LmZtL2V2ZXJlc3QvN2EyMTVjM2RkZjkyNDNhMDhiNDQyNzRhYWVkN2Q2NDIueG1s?sa=X&ved=2ahUKEwjkqKHv5dP9AhVwnCcCHbeCBfQQ9sEGegQIARAC"
            target="_blank"
            alt="lien google podcast"
          >
            <SiGooglepodcasts />
          </a>
          <p>Google Podcast</p>
        </div>
        <div className="link-box">
          <a
            className="podcast-link"
            href="https://castbox.fm/channel/ICI-L'ONDE---la-webradio-du-Haut-Limousin-id3933510?country=fr"
            target="_blank"
            alt="lien castbox"
          >
            <SiCastbox />
          </a>
          <p>CastBox</p>
        </div>
        <div className="link-box">
          <a
            className="podcast-link"
            href="https://podcastaddict.com/podcast/3361744"
            target="_blank"
            alt="lien podcastaddict"
          >
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
