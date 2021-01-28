import React from 'react'
import { FaFacebook, FaTelegramPlane, FaMailBulk, FaInstagram, FaWhatsapp, FaShoppingBasket } from 'react-icons/fa'
import { Carousel } from 'react-bootstrap'
import banner1 from '../assets/quesos1.jpeg'
import banner2 from '../assets/quesos2.jpg'
import banner3 from '../assets/quesos3.jpg'

function slideCard () {
  ///// Section-1 CSS-Slider /////
  // Auto Switching Images htmlFor CSS-Slider
  // function bannerSwitcher() {
  //   next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
  //   if (next.length) next.prop('checked', true);
  //   else $('.sec-1-input').first().prop('checked', true);
  // }

  // var bannerTimer = setInterval(bannerSwitcher, 5000);

  // $('nav .controls label').click(function() {
  //   clearInterval(bannerTimer);
  //   bannerTimer = setInterval(bannerSwitcher, 5000)
  // });


///// Anchor Smooth Scroll /////
//   $('.main-menu a, .learn-more-button a').click(function(e){

//     e.preventDefault();

//     var target = $(this).attr('href');

//     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
//     return false;
//   });


  return (
<div className="body-carousel">
  <header className="main-header">
    <div className="header-wrapper">
      {/* <div className="main-logo">MoGo</div> */}
      <nav>
        <ul className="main-menu">
          <li><a href="#section-2">Inicio</a></li>
          <li><a href="#section-5">Tienda</a></li>
          <li><a href="#"><span><FaShoppingBasket/></span></a></li>
          <div className="social-link">
            <a href="https://github.com/Luichix" target="_blank" rel="noreferrer" ><i><FaFacebook/></i></a>
            <a href="https://twitter.com/Luichix_Rex" target="_blank" rel="noreferrer" ><i><FaInstagram/></i></a>
            <a href="https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web" target="_blank" rel="noreferrer"><i><FaWhatsapp/></i></a>
            <a href="https://www.linkedin.com/in/luisreynaldopch" target="_blank" rel="noreferrer" ><i><FaTelegramPlane/></i></a>
            <a href="mailto:luichix.rex@gmail.com" target="_blank" rel="noreferrer" ><i><FaMailBulk/></i></a>
          </div>
        </ul>
        
      </nav>
    </div>
  </header>
  <section id="section-1">
    <div className="content-slider">
      <input type="radio" id="banner1" className="sec-1-input" name="banner" defaultChecked/>
      <input type="radio" id="banner2" className="sec-1-input" name="banner"/>
      <input type="radio" id="banner3" className="sec-1-input" name="banner"/>
      <input type="radio" id="banner4" className="sec-1-input" name="banner"/>
      <div className="slider">
        <div id="top-banner-1" className="banner">
          <div className="banner-inner-wrapper">
            
            <h1><p>Bienvenidos</p></h1>
            <h2><p>A nuestra</p><p>Tienda Online</p></h2>
            <div className="line"></div>
            <div className="learn-more-button"><a href="#section-2">ir a la Tienda</a></div>
          </div>
        </div>
        <div id="top-banner-2" className="banner">
          <div className="banner-inner-wrapper">
            <h1><p>Entregamos</p></h1>
            <h2>sabor a su hogar</h2>
            <div className="line"></div>
            <div className="learn-more-button"><a href="#section-4">ir a la Tienda</a></div>
          </div>
        </div>
        <div id="top-banner-3" className="banner">
          <div className="banner-inner-wrapper">
            <h1><p>Ahora</p></h1>
            <h2>más cerca de usted</h2>
            <div className="line"></div>
            <div className="learn-more-button"><a href="#section-6">ir a la Tienda</a></div>
          </div>
        </div>
        <div id="top-banner-4" className="banner">
          <div className="banner-inner-wrapper">
            <h1><p>Contactenos</p></h1>
            <h2>Permitanos servirle</h2>
            <div className="line"></div>
            <div className="learn-more-button"><a href="#main-footer">ir a la Tienda</a></div>
          </div>
        </div>
      </div>
      <nav>
        <div className="controls">
          <label htmlFor="banner1"><span className="progressbar"><span className="progressbar-fill"></span></span><span>01</span> Inicio</label>
          <label htmlFor="banner2"><span className="progressbar"><span className="progressbar-fill"></span></span><span>02</span> Productos</label>
          <label htmlFor="banner3"><span className="progressbar"><span className="progressbar-fill"></span></span><span>03</span> Nosotros</label>
          <label htmlFor="banner4"><span className="progressbar"><span className="progressbar-fill"></span></span><span>04</span> Contacto</label>
        </div>
      </nav>
    </div>
  </section>
</div>
  )
}

export default slideCard
