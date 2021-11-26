import { Fragment, useEffect, Suspense } from 'react';
import { NavBar, MainSlider, Footer, MiniFooter, Subscribe } from '../../Components';
import { Link } from 'react-router-dom';
import { BookRide } from '../../Components/Partials';
import { AppStats, HomeSection } from '../../Components';
import { SkeletonBlock } from 'skeleton-elements/react';
import { LoadScripts } from '../../Hooks';
import "skeleton-elements/skeleton-elements.css";
import './Home.css';

const Home = () => {

  LoadScripts("js/bootstrap.min.js");
  LoadScripts("js/smoothscroll.min.js");
  LoadScripts("js/jquery.stellar.min.js");
  LoadScripts("assets/slider-pro/js/jquery.sliderPro.min.js");
  LoadScripts("js/scrollspy.min.js");
  LoadScripts("js/wow.min.js");
  LoadScripts("assets/owl-carousel/owl.carousel.min.js");
  LoadScripts("js/metisMenu.min.js");
  LoadScripts("js/theme.min.js");

  useEffect(() => {
  }, []);

  return (
    <Fragment>
      <NavBar />
      <MainSlider />
      
      {/*<BookRide />*/}
        
      {/* =========================
          SERVICES
      ============================== */}
      <section className="def-section home-services cards_center">
        <div className="container">
          <div className="row cards_center">
            {/* === SERVICE ITEM === */}	
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="service">				
                <div className="service-icon">
                  <i className="flaticon-transport222" />
                </div>
                <h3>ROAD TRIPS</h3>
                <div className="service-text">
                  <p>Let’s be your partner in taking you from here to there with as minimum hassles as possible by bringing you all rates available, <br />available terminals,<br /> available routes at a glance so you can make quicker comparisons and decisions.</p>
                </div>
                <div className="service-button">
                  <Link to="/">
                    <div className="my-btn my-btn-default">
                      <div className="my-btn-bg-top" />
                      <div className="my-btn-bg-bottom" />
                      <div className="my-btn-text">
                        MORE
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* === SERVICE ITEM === */}
            {/*<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" id="service-mark">
              <div className="service-mark-border-top" />
              <div className="service-mark-border-right" />
              <div className="service-mark-border-bottom" />
              <div className="service-mark-border-left" />
              <div className="service">
                <div className="service-icon">
                  <i className="flaticon-transport358" />
                </div>
                <h3>air freight</h3>
                <div className="service-text">
                  <p>Integer congue, elit semper laoreet sed<br />lectus orci posuh nisl tempor<br />lacus felis ac mauris.<br />elit non in urna.</p>
                </div>
                <div className="service-button">
                  
                 href="05_service_detail.html">
                    <div className="my-btn my-btn-default">
                      <div className="my-btn-bg-top" />
                      <div className="my-btn-bg-bottom" />
                      <div className="my-btn-text">
                        MORE
                      </div>
                    </div>
                  </a>
                </div>
              </div>
    </div>*/}
            {/* === SERVICE ITEM === */}
            {/*<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="service">
                <div className="service-icon">
                  <i className="flaticon-transport548" />
                </div>
                <h3>ocean freight</h3>
                <div className="service-text">
                  <p>Integer congue, elitse mper laoreet sed<br />lectus orci posuh nisl tempor<br />lacus felis ac mauris.<br />elit non in urna.</p>
                </div>
                <div className="service-button">
                  <a href="05_service_detail.html">
                    <div className="my-btn my-btn-default">
                      <div className="my-btn-bg-top" />
                      <div className="my-btn-bg-bottom" />
                      <div className="my-btn-text">
                        MORE
                      </div>
                    </div>
                  </a>
                </div>
              </div>
  </div>*/}
            {/* === SERVICE ITEM === */}
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="service">
                <div className="service-icon">
                  <i className="flaticon-road40" />
                </div>
                <h3>EXPEDITED</h3>
                <div className="service-text">
                  <p>Searching for rides and booking tickets can be accomplished more quickly from wherever you are.<br /> All it takes is a few clicks and you're ready.</p>
                </div>
                <div className="service-button">
                  <Link to="/">
                    <div className="my-btn my-btn-default">
                      <div className="my-btn-bg-top" />
                      <div className="my-btn-bg-bottom" />
                      <div className="my-btn-text">
                        MORE
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================
        END SERVICES
      ============================== */}

      {/* ===================================
          SECTION ABOUT US AND GET QUOTE
        ======================================== */}
      <section className="def-section about-quote">
        <div className="section-bg-left" />
        <div className="section-bg-right" />
        <div className="container">
          <div className="row">
            {/* === ABOUT US === */}	
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 home-about">
              {/* === TITLE GROUP === */}	
              <div className="title-group">
                <h2>ABOUT US</h2>
                <div className="subtitle with-square">MILE9INE</div>
              </div>
              {/* === ABOUT US TEXT === */}	
              <p>
                Mile9ine is more than just a website. 
                We intend to offer the best online ticket booking experience so that booking and planning for your road trips can be as hitch free as possible. 
                We are on a mission to make bookings for- holidays, business, excursions, education, adventure, field trips etc- a comfortable activity. 
                Hopefully, we can help bridge the gaps and improve on the services of bus/car terminals.
              </p>
              <div className="home-about-video">
                {/* === PLAY VIDEO BUTTON === */}	
                <div className="play-video" id="play-video">
                  <div className="my-btn my-btn-primary">
                    <div className="my-btn-bg-top" />
                    <div className="my-btn-bg-bottom" />
                    <div className="my-btn-text">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                </div>
                {/* === STOP VIDEO BUTTON === */}	
                <div className="stop-video" id="stop-video">
                  <div className="my-btn my-btn-primary">
                    <div className="my-btn-bg-top" />
                    <div className="my-btn-bg-bottom" />
                    <div className="my-btn-text">
                      <i className="fa fa-pause" />
                    </div>
                  </div>
                </div>
                {/* === VIDEO === */}	
                <video id="aboutvideo" loop="loop" preload="auto">
                  <source src="media/video/trucks.mp4" />
                  <source src="media/video/trucks.webm" type="video/webm" />
                </video>
                {/* === READ MORE BUTTON === */}	
                {/*<Link to="/"><div className="home-about-button">
                    <div className="my-btn my-btn-primary">
                      <div className="my-btn-bg-top" />
                      <div className="my-btn-bg-bottom" />
                      <div className="my-btn-text">
                        READ
                      </div>
                    </div>
                </div></Link>*/}
              </div>
            </div>
            {/* === GET QUOTE === */}	
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 get-quote" id="bookaride">
              {/* === TITLE GROUP === */}
              <div className="title-group">
                <h2>BOOK A RIDE</h2>
              </div>
              {/* === GET QUOTE TEXT === */}
              <p>
              </p>
              {/* === GET QUOTE FORM=== */}
              <div className="get-quote-form">
                <div className="send-result" />
                
                <BookRide />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================================
        END SECTION ABOUT US AND GET QUOTE
      ======================================== */}


      <HomeSection />

      <Suspense fallback={<SkeletonBlock 
          width='100%'
          height='230px'
          effect='fade'
        />}
      >
        <AppStats />
      </Suspense>


      {/* ===================================
          BLOG SECTION
        ======================================== */}
      {false && <section className="def-section home-blog" id="blog">
        <div className="container">
          <div className="row">
            {/* === TITLE GROUP === */}
            <div className="title-group">
              <h2>BLOG</h2>
              <div className="subtitle with-square">MILE9INE</div>
            </div>
            {/* === BLOG ITEM === */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="home-blog-item home-blog-item-mark">
                <div className="home-blog-item-date">
                  <div className="home-blog-item-date-number">26</div>MAY
                </div>
                <div className="home-blog-item-image">
                  <img src="/media/blog/1.jpg" alt="" />
                </div>
                <div className="home-blog-item-desc">
                  <div className="home-blog-item-desc-title">
                    <Link to="/">Curabitur lorem uism quis</Link>
                  </div>
                  <div className="home-blog-item-desc-info">
                    <Link to="/">Admin</Link>
                    <span className="comments-icon"><i className="fa fa-comments" /></span>
                    <Link to="/">15</Link>
                  </div>
                  <div className="home-blog-item-desc-text">
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. 
                      Aenean non donec ...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* === BLOG ITEM === */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="home-blog-item">
                <div className="home-blog-item-date">
                  <div className="home-blog-item-date-number">22</div>MAY
                </div>
                <div className="home-blog-item-image">
                  <img src="/media/blog/2.jpg" alt="" />
                </div>
                <div className="home-blog-item-desc">
                  <div className="home-blog-item-desc-title">
                    <Link to="/">Curabitur lorem uism quis</Link>
                  </div>
                  <div className="home-blog-item-desc-info">
                    <Link to="/">Admin</Link>
                    <span className="comments-icon"><i className="fa fa-comments" /></span>
                    <Link to="/">15</Link>
                  </div>
                  <div className="home-blog-item-desc-text">
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. 
                      Aenean non donec ...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* === BLOG ITEM === */}				
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="home-blog-item">
                <div className="home-blog-item-date">
                  <div className="home-blog-item-date-number">20</div>MAY
                </div>
                <div className="home-blog-item-image">
                  <img src="/media/blog/3.jpg" alt="" />
                </div>
                <div className="home-blog-item-desc">
                  <div className="home-blog-item-desc-title">
                    <Link to="/">Curabitur lorem uism quis</Link>
                  </div>
                  <div className="home-blog-item-desc-info">
                    <Link to="/">Admin</Link>
                    <span className="comments-icon"><i className="fa fa-comments" /></span>
                    <Link to="/">15</Link>
                  </div>
                  <div className="home-blog-item-desc-text">
                    <p>Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. 
                      Aenean non donec ...</p>
                  </div>
                </div>
              </div>
            </div>
            {/* === BLOG ITEM === */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="home-blog-item">
                <div className="home-blog-item-date">
                  <div className="home-blog-item-date-number">15</div>MAY
                </div>
                <div className="home-blog-item-image">
                  <img src="/media/blog/4.jpg" alt="" />
                </div>
                <div className="home-blog-item-desc">
                  <div className="home-blog-item-desc-title">
                    <Link to="/">Curabitur lorem uism quis</Link>
                  </div>
                  <div className="home-blog-item-desc-info">
                    <Link to="/">Admin</Link>
                    <span className="comments-icon"><i className="fa fa-comments" /></span>
                    <Link to="/">15</Link>
                  </div>
                  <div className="home-blog-item-desc-text">
                    <p>
                      Mile9ine is more than just a website. 
                      We intend to offer the best online ticket booking experience so that booking and planning for your road trips can be as hitch free as possible...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* === BLOG READ MORE BUTTON === */}
            <div className="row home-blog-more">
              <Link to="/about"><div className="my-btn my-btn-primary">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    MORE
                  </div>
                </div></Link>
            </div>
          </div>
        </div>
      </section>}
      {/* ===================================
        END BLOG SECTION
      ======================================== */}


      {/* ===================================
          CLIENTS SECTION
        ======================================== */}
      {false && <section className="def-section" id="clients-section">
        <div className="home-big-image" data-stellar-background-ratio="0.4" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="home-clients">
                {/* === TITLE GROUP === */}
                <div className="title-group">
                  <h2>CLIENTS</h2>
                  <div className="subtitle with-square">ALIQUAM MALESUADA</div>
                </div>
                <p>
                  Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut nisl quis enim dignissim sagittis. 
                  Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio. 
                </p>
                {/* === OWL CAROUSEL === */}
                <div className="home-clients-carousel owl-carousel owl-theme" id="owl-clients">
                  {/* === OWL CAROUSEL ITEM === */}
                  <div className="home-clients-carousel-block">
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client1.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item ">
                      <a href={null}><img src="/media/clients/client2.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client3.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client4.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client5.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client6.png" alt="" /></a>
                    </div>
                    <div className="home-clients-carousel-hline" />
                    <div className="home-clients-carousel-vline1" />
                    <div className="home-clients-carousel-vline2" />
                  </div>
                  {/* === OWL CAROUSEL ITEM === */}
                  <div className="home-clients-carousel-block">
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client1.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item ">
                      <a href={null}><img src="/media/clients/client2.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client3.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client4.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client5.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client6.png" alt="" /></a>
                    </div>
                    <div className="home-clients-carousel-hline" />
                    <div className="home-clients-carousel-vline1" />
                    <div className="home-clients-carousel-vline2" />
                  </div>
                  {/* === OWL CAROUSEL ITEM === */}
                  <div className="home-clients-carousel-block">
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client1.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item ">
                      <a href={null}><img src="/media/clients/client2.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client3.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client4.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client5.png" alt="" /></a>
                    </div>
                    {/* === client item === */}
                    <div className="home-clients-carousel-item">
                      <a href={null}><img src="/media/clients/client6.png" alt="" /></a>
                    </div>
                    <div className="home-clients-carousel-hline" />
                    <div className="home-clients-carousel-vline1" />
                    <div className="home-clients-carousel-vline2" />
                  </div>
                </div>
                {/* === OWL CAROUSEL BUTTONS === */}
                <div className="home-clients-buttons">
                  <a id="prev-clients" href={null}><div className="my-btn my-btn-primary">
                      <div className="my-btn-bg-top" />
                      <div className="my-btn-bg-bottom" />
                      <div className="my-btn-text">
                        <i className="fa fa-angle-left" />
                      </div>
                    </div></a>
                  <a id="next-clients" href={null}><div className="my-btn my-btn-grey">
                      <div className="my-btn-bg-top" />
                      <div className="my-btn-bg-bottom" />
                      <div className="my-btn-text">
                        <i className="fa fa-angle-right" />
                      </div>
                    </div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
      {/* ===================================
        END CLIENTS SECTION
      ======================================== */}

      <Subscribe />
      <Footer />
      <MiniFooter />
    </Fragment>
  );
}

export default Home;
