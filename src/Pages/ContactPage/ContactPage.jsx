import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loading-icons';
import { NavBar, Footer, MiniFooter, Subscribe } from '../../Components';
import { postRequest } from '../../Utils/axiosClient';
import { transformToFormData, catchAxiosErrors } from '../../Utils';
import { LoadScripts } from '../../Hooks';

const ContactPage = () => {

  LoadScripts("js/bootstrap.min.js");
  LoadScripts("js/smoothscroll.min.js");
  LoadScripts("js/jquery.stellar.min.js");
  LoadScripts("assets/slider-pro/js/jquery.sliderPro.min.js");
  LoadScripts("js/scrollspy.min.js");
  LoadScripts("js/wow.min.js");
  LoadScripts("assets/owl-carousel/owl.carousel.min.js");
  LoadScripts("js/metisMenu.min.js");
  LoadScripts("js/theme.min.js");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValid = () => {
    if (name.length < 1) {
      toast.error('Please enter your full name');
      return false;
    }
    if (email.length < 1) {
      toast.error('Please enter your email');
      return false;
    }
    if (phone.length < 1) {
      toast.error('Please enter your phone number');
      return false;
    }
    if (message.length < 1) {
      toast.error('Please enter your message');
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    try {
      if (!isValid()) return;
      setIsLoading(true);
      const { data, status } = await postRequest(`/contact-us`, transformToFormData({
        name,
        email,
        phone,
        message
      }));

      if (data && status === 200) {
        toast.success('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsLoading(false);
      }
    } catch (err) {
      catchAxiosErrors(err, setIsLoading, null);
    }
  }

  return (
    <Fragment>
      <NavBar />
      {/* ===================================
          PAGE HEADER
        ======================================== */}
      <div className="page-header" data-stellar-background-ratio="0.4">
        <div className="page-header-overlay" />
        <div className="container">
          <div className="row">
            {/* === PAGE HEADER TITLE === */}
            <div className="page-header-title">
              <h2>CONTACTS</h2>
            </div>
            {/* === PAGE HEADER BREADCRUMB === */}
            <div className="page-header-breadcrumb">
              <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li className="active">CONTACTS</li>
              </ol>
            </div>
            {/* === PAGE HEADER BUTTON === */}
            {/*<div className="page-header-button">
              <Link to="#contactus">
                <div className="my-btn my-btn-primary">
                  <div className="my-btn-bg-top" />
                  <div className="my-btn-bg-bottom" />
                  <div className="my-btn-text">
                    CONTACT US
                  </div>
                </div>
              </Link>
            </div>*/}
          </div>
        </div>
      </div>
      {/* ===================================
        END PAGE HEADER
      ======================================== */}
      

    {/* =========================
      CONTACTS
    ============================== */}
    <div className="def-section" id="contactus">
      <div className="container">
        <div className="row">
          {/* === CONTACTS INFO === */}
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
            <div className="contacts-info">
              <div className="contacts-info-title">
                <div className="contacts-info-title-icon">
                  <i className="fa fa-comments" />
                </div>
                <h3>We will be glad<br />to help you</h3>
              </div>
              <div className="contacts-info-text">
                Easily reach out using the contact us form.
              </div>
              <div className="contacts-info-people">
                <div className="contacts-info-people-avatar">
                  <img src="/media/avatars/avatar1.png" alt="" />
                </div>
                <div className="contacts-info-people-name">
                  Fredrick 
                </div>
                <div className="contacts-info-people-company">
                  Director
                </div>
              </div>
            </div>
          </div>
          {/* === CONTACTS FORM === */}
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
            <div className="contacts-form row">
              <div className="send-result" />
              <form name="contact-form" id="contact-form">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 contacts-form-item">
                  <input onChange={e => setName(e.target.value)} value={name} type="text" name="contact-name" placeholder="Full Name*" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 contacts-form-item">
                  <input onChange={e => setEmail(e.target.value)} value={email} type="text" name="contact-email" placeholder="Email*" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 contacts-form-item">
                  <input onChange={e => setPhone(e.target.value)} value={phone} type="text" name="contact-phone" placeholder="Phone*" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contacts-form-item">
                  <textarea onChange={e => setMessage(e.target.value)} name="contact-message" placeholder="How can we help?" value={message} />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contacts-form-item contacts-form-button">
                  {isLoading
                    ? <>
                        <ThreeDots fill='#ec3238' width={'4rem'} height={'4rem'} />
                      </>
                    : <button onClick={handleSubmit} type='button'><span className="my-btn my-btn-grey">
                          <span className="my-btn-bg-top" />
                          <span className="my-btn-bg-bottom" />
                          <span className="my-btn-text">
                            SEND MESSAGE
                          </span>
                        </span>
                      </button>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* =========================
      CONTACTS DETAILS
    ============================== */}
    <div className="def-section contact-details">
      <div className="container">
        <div className="row">
          {/* === CONTACTS DETAILS ITEM === */}
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 contact-detail">
            <div className="contact-detail-icon">
              <i className="flaticon-map58" />
            </div>
            <div className="contact-detail-title">
              <h3>LOCATION</h3>
            </div>
            <div className="contact-detail-text">
              <a class="text-white letter__wide" href="https://mile9ine.com">MILE9INE.COM</a>
            </div>
          </div>
          {/* === CONTACTS DETAILS ITEM === */}
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 contact-detail contact-detail-mark">
            <div className="contact-detail-icon">
              <i className="flaticon-telephone5" />
            </div>
            <div className="contact-detail-title">
              <h3>PHONE | EMAIL</h3>
            </div>
            <div className="contact-detail-text">
              +234 903 362 9922<br />info@mile9ine.com
            </div>
          </div>
          {/* === CONTACTS DETAILS ITEM === */}
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 contact-detail">
            <div className="contact-detail-icon">
              <i className="flaticon-clock96" />
            </div>
            <div className="contact-detail-title">
              <h3>WORKING HOURS</h3>
            </div>
            <div className="contact-detail-text">
              Monday - Fri : 08:00hrs-17:00hrs <br />Saturday  : 09.00  14.0009:00hrs-16:00hrs
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* =========================
      END CONTACTS DETAILS
    ============================== */}

    {/* =========================
        CONTACTS MAP
      ============================== */}
    <div className="contact-map" id="contact-map">
    </div>
    {/* =========================
        END CONTACTS MAP
      ============================== */}

      <Subscribe />
      <Footer />
      <MiniFooter />
    </Fragment>
  );
}

export default ContactPage;
