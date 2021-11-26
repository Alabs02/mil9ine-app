import { Fragment } from 'react';

const HomeSection = () => {
  return (
    <Fragment>
      {/* ===================================
            SECTION REVIEWS AND FAQ
        ======================================== */}
      <section className="def-section">
        <div className="container">
          <div className="row">
            {/* === REVIEWS === */}
            {false && <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="testimonial">
              <div className="home-review">
                {/* === TITLE GROUP === */}
                <div className="title-group">
                  <h2>TESTIMONIALS</h2>
                  <div className="subtitle with-square">MILE9INE</div>
                </div>
                {/* === OWL CAROUSEL === */}
                <div className="home-review-carousel owl-carousel owl-theme" id="owl-review">
                  {/* === OWL CAROUSEL ITEM === */}
                  <div className="home-review-carousel-item">
                    <div className="home-review-carousel-text">
                      <div className="home-review-carousel-quote"><div><i className="fa fa-quote-left" /></div></div>
                      <p>Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis.
                        Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit 
                        amet eros.</p>
                    </div>
                    {/* === OWL CAROUSEL ITEM AUTHOR=== */}
                    <div className="home-review-carousel-people">
                      <div className="home-review-carousel-avatar">
                        <img src="/media/avatars/avatar1.png" alt="" />
                      </div>
                      <div className="home-review-carousel-name">
                        RICHARD GEAR
                      </div>
                      <div className="home-review-carousel-company">
                        Happy client
                      </div>
                    </div>
                  </div>
                  {/* === OWL CAROUSEL ITEM === */}
                  <div className="home-review-carousel-item">
                    <div className="home-review-carousel-text">
                      <div className="home-review-carousel-quote"><div><i className="fa fa-quote-left" /></div></div>
                      <p>Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis.
                        Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit 
                        amet eros.</p> 
                    </div>
                    {/* === OWL CAROUSEL ITEM AUTHOR=== */}
                    <div className="home-review-carousel-people">
                      <div className="home-review-carousel-avatar">
                        <img src="/media/avatars/avatar1.png" alt="" />
                      </div>
                      <div className="home-review-carousel-name">
                        RICHARD GEAR
                      </div>
                      <div className="home-review-carousel-company">
                        Happy client
                      </div>
                    </div>
                  </div>
                  {/* === OWL CAROUSEL ITEM === */}
                  <div className="home-review-carousel-item">
                    <div className="home-review-carousel-text">
                      <div className="home-review-carousel-quote"><div><i className="fa fa-quote-left" /></div></div>
                      <p>Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis.
                        Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit 
                        amet eros.</p>
                    </div>
                    {/* === OWL CAROUSEL ITEM AUTHOR=== */}
                    <div className="home-review-carousel-people">
                      <div className="home-review-carousel-avatar">
                        <img src="/media/avatars/avatar1.png" alt="" />
                      </div>
                      <div className="home-review-carousel-name">
                        RICHARD GEAR
                      </div>
                      <div className="home-review-carousel-company">
                        Happy client
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
            {/* === FAQ === */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="home-faq">
                {/* === TITLE GROUP === */}
                <div className="title-group">
                  <h2>WHY CHOOSE US</h2>
                  <div className="subtitle with-square">MILE9INE</div>
                </div>
                {/* === ACCORDION === */}
                <div className="panel-group" id="accordion">
                  {/* === ACCORDION ITEM === */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                          Get a view of terminals offering rides to your preferred destination.
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <p>
                          Get a view of terminals offering rides to your preferred destination.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* === ACCORDION ITEM === */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                        See ticket rates at a glance so as to make quick and informed decisions.
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p>
                          See ticket rates at a glance so as to make quick and informed decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* === ACCORDION ITEM === */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                        Affordability is an important factor, lets assist you.
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p>
                          Affordability is an important factor, lets assist you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================================
        END SECTION REVIEWS AND FAQ
      ======================================== */}
    </Fragment>
  );
}

export default HomeSection;
