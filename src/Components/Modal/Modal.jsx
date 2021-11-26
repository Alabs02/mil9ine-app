import { Fragment, useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const Modal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Fragment>
      <span onClick={toggleModal} className="span__link">TERM OF USE</span>

      <PureModal
        footer={
          <Fragment>
            <button onClick={toggleModal} className="btn btn-primary">Close</button>
          </Fragment>
        }
        isOpen={isModalOpen}
        className="app__modal"
        scrollable={true}
        draggable={true}
        onClose={toggleModal}
      >
        <div className="modal__content">
          <div style={{ display: 'flex' }} className="modal-header">
            <h5 style={{ color: '#9E9E9E', margin: 0 }} className="modal-title">TERM OF USE</h5>
          </div>
          <div className="modal-body">
            <p className="text-light text-justify">
              These Terms of Use (“Terms”) herein shall govern access and use of this website including all its pages (“Website”).
            </p>

 
            <p className="text-light text-justify">
              Intellectual property
            </p><br />

            <section style={{ marginLeft: '2rem' }} className="text-light text-justify">
              ·   Mile9ine’s property rights are non-transferable. The license to use the services of this Website is non-exclusive and revocable.<br />

              ·   The user is not permitted to alter, modify or change the licensed materials including distinctive brand features, in anyway whatsoever.<br />

              ·   There is no permission to use the licensed materials in any manner that is disparaging or otherwise portrays Mile9ine or anyone else negatively.<br />

              ·   The use acknowledges that s/he has not acquired and will not acquire any right, interest or title to the Mile9ine brand.<br />

              ·   Mile9ine reserves exclusively, all its intellectual property rights in the licensed material including title and interest.
            </section><br />

            <section>
              <h6 className="text-light text-justify">
                Limitation of liability
              </h6>

              <p className="text-light text-justify">
                Mile9ine will not be liable for any indirect, special or consequential damages, or any monetary loss in the course of facilities/devices used or negligence on the part of the user.
              </p>
            </section><br />

            <section className="text-light">
              <h6 className="text-light text-justify">Representations and warranties</h6>

              <p className="text-light text-justify">The user hereby represents and warrants to Mile9ine the following;</p>

              <section className="text-light text-justify">
                ·   S/he has accepted these Terms which create legal, valid and binding obligations, enforceable in accordance with these Terms.<br />

                ·   Such acceptance, performance and consummation of transactions on this Website will not conflict with or violate any provision of law, rule, regulation or agreement to which s/he is subject to.
              </section>
            </section><br />

            <section>
              <h6 className="text-light text-justify">Indemnification</h6>
              <p className="text-light text-justify">
                The user hereby agrees to indemnify, defend and hold harmless Mile9ine, its shareholders, officers, directors, employees, agents, successors and assigns, from and against any and all claims, losses, liabilities, damages or expenses (including legal fees and costs) of any nature whatsoever incurred or suffered by Mile9ine (collectively the “Losses”), in so far as such losses (or actions in respect thereof) arise out of or are based on the breach of these Terms.
              </p>
            </section><br />

            <section>
              <h6 className="text-light text-justify">Entire Terms</h6><br />
              <p className="text-light text-justify">
                The provisions contained herein constitute the entire Terms between the parties with respect to the subject matter, and no statement or inducement with respect to such subject matter by any party which is not contained in these Terms shall be valid or binding between the parties.
              </p>
              <p className="text-light text-justify">
                You agree that any comment, suggestion or feedback we receive as regards our services are done voluntarily and can be used as we deem fit with no obligation to you.
              </p>
              <p className="text-light text-justify">
                These Terms may be revised periodically. We will notify the user via email or notification on the Website. By continuing to use our services after the changes are done will be deemed consent.
              </p>
              <p className="text-light text-justify">Mile9ine’s failure to enforce any of the provisions of these Terms will not be deemed a waiver of such provisions.</p>
              <p className="text-light text-justify">A breach of these Terms may result to actions including legal proceedings and suspending access to the Website.</p>
            </section><br />
          </div>
        </div>
      </PureModal>
    </Fragment>
  );
}

export default Modal;
