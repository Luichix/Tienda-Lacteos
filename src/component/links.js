import React from "react";
import {
  FaFacebook,
  FaTelegramPlane,
  FaMailBulk,
  FaInstagram,
  FaWhatsapp,
  FaShoppingBasket,
} from "react-icons/fa";

function links() {
  return (
    <div className="body-carousel">
      <header className="main-header">
        <div className="header-wrapper">
          {/* <div className="main-logo">MoGo</div> */}
          <nav>
            <ul className="main-menu">
              <li>
                <a href="#section-2">Inicio</a>
              </li>
              <li>
                <a href="#section-5">Tienda</a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <FaShoppingBasket />
                  </span>
                </a>
              </li>
              <div className="social-link">
                <a
                  href="https://github.com/Luichix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaFacebook />
                  </i>
                </a>
                <a
                  href="https://twitter.com/Luichix_Rex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaInstagram />
                  </i>
                </a>
                <a
                  href="https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaWhatsapp />
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/in/luisreynaldopch"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaTelegramPlane />
                  </i>
                </a>
                <a
                  href="mailto:luichix.rex@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaMailBulk />
                  </i>
                </a>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default links;
