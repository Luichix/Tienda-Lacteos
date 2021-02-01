import React from "react";

function xD() {
  return (
    <div>
      <section id="section-1">
        <div className="content-slider">
          <input
            type="radio"
            id="banner1"
            className="sec-1-input"
            name="banner"
            defaultChecked
          />
          <input
            type="radio"
            id="banner2"
            className="sec-1-input"
            name="banner"
          />
          <input
            type="radio"
            id="banner3"
            className="sec-1-input"
            name="banner"
          />
          <input
            type="radio"
            id="banner4"
            className="sec-1-input"
            name="banner"
          />
          <div className="slider">
            <div id="top-banner-1" className="banner">
              <div className="banner-inner-wrapper">
                <h1>
                  <p>Bienvenidos</p>
                </h1>
                <h2>
                  <p>A nuestra</p>
                  <p>Tienda Online</p>
                </h2>
                <div className="line"></div>
                <div className="learn-more-button">
                  <a href="#section-2">ir a la Tienda</a>
                </div>
              </div>
            </div>
            <div id="top-banner-2" className="banner">
              <div className="banner-inner-wrapper">
                <h1>
                  <p>Entregamos</p>
                </h1>
                <h2>sabor a su hogar</h2>
                <div className="line"></div>
                <div className="learn-more-button">
                  <a href="#section-4">ir a la Tienda</a>
                </div>
              </div>
            </div>
            <div id="top-banner-3" className="banner">
              <div className="banner-inner-wrapper">
                <h1>
                  <p>Ahora</p>
                </h1>
                <h2>más cerca de usted</h2>
                <div className="line"></div>
                <div className="learn-more-button">
                  <a href="#section-6">ir a la Tienda</a>
                </div>
              </div>
            </div>
            <div id="top-banner-4" className="banner">
              <div className="banner-inner-wrapper">
                <h1>
                  <p>Contactenos</p>
                </h1>
                <h2>Permitanos servirle</h2>
                <div className="line"></div>
                <div className="learn-more-button">
                  <a href="#main-footer">ir a la Tienda</a>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="controls">
              <label htmlFor="banner1">
                <span className="progressbar">
                  <span className="progressbar-fill"></span>
                </span>
                <span>01</span> Inicio
              </label>
              <label htmlFor="banner2">
                <span className="progressbar">
                  <span className="progressbar-fill"></span>
                </span>
                <span>02</span> Productos
              </label>
              <label htmlFor="banner3">
                <span className="progressbar">
                  <span className="progressbar-fill"></span>
                </span>
                <span>03</span> Nosotros
              </label>
              <label htmlFor="banner4">
                <span className="progressbar">
                  <span className="progressbar-fill"></span>
                </span>
                <span>04</span> Contacto
              </label>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default xD;
