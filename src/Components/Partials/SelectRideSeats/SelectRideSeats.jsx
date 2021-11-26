import { Fragment, useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RiSecurePaymentFill } from 'react-icons/ri';
// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
// import { withUser, withUserProfile } from '../../../recoil/parkUser';
import { userRideBookedSeatsAtom } from '../../../recoil/userRideBookedSeats';
import _, { isEmpty } from 'lodash';
import { formatTime, moneyFormat, slugify, locationRef } from '../../../Utils';
import { postRequest } from '../../../Utils/axiosClient';
// import { userCurrentBeneficiaryAtom } from '../../../recoil/userCurrentBeneficiary';
// import { withUserAgent } from '../../../recoil/ParkAgent';
// import { getUserTypeAtom } from '../../../recoil/getUserType'
import { catchAxiosErrors, transformToFormData, getToken } from '../../../Utils';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import Modal from 'react-pure-modal';
import { CgClose } from 'react-icons/cg';
import PropTypes from 'prop-types';
// import { localForage } from '../../../Services';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import './SelectRideSeats.css';

const createHost = require('cross-domain-storage/host');
// const createGuest = require('cross-domain-storage/guest');

const hostList = (process.env.NODE_ENV === 'production') 
  ? [
      {
        origin: 'https://mile9ine.com',
        allowedMethods: ['get', 'set', 'remove'],
      },
      {
        origin: 'https://www.mile9ine.com',
        allowedMethods: ['get', 'set', 'remove'],
      },
      {
        origin: 'https://app.mile9ine.com',
        allowedMethods: ['get', 'remove'],
      },
      {
        origin: 'https://www.app.mile9ine.com',
        allowedMethods: ['get', 'remove'],
      },
    ]
  : [
      {
        origin: 'http://localhost:3001',
        allowedMethods: ['get', 'set', 'remove'],
      },
      {
        origin: 'http://localhost:3000',
        allowedMethods: ['get', 'remove'],
      },
    ]; 

const storageHost = createHost(hostList);

const SelectRideSeats = ({ formData, summary }) => {

  const history = useHistory();
  // const userProfile = useRecoilValue(withUserProfile);
  // const userDetails = useRecoilValue(withUser);  
  const [userType, setUserType] = useState('user');
  // console.log(userType);
  
  const [seating_positions, setSeatingPositions] = useState([]);
  const availableSeats = useRecoilValue(userRideBookedSeatsAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  // console.log('FormData:', formData);
  // console.log('Availables:', availableSeats);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const increaseFare = (fare) => {
    const newFare = fare * _.get(summary, 'return_percentage', 0);
    return newFare;
  }  

  useEffect(() => {
    // console.log(formData?.busId);
    // console.log('Selected Seats:', seating_positions);
  }, [seating_positions]);

  const choosePosition = (position, index, element) => {
    const busSeat = document.getElementById(element);
    if (availableSeats[index]?.booked === false) {
      if (busSeat.classList.contains("bus-ride__selected")) {
        busSeat.classList.remove("bus-ride__selected");
        setSeatingPositions(seating_positions.filter(item => item !== position));
      } else {
        if (seating_positions.length < +_.get(formData, 'seats', 0)) {
          busSeat.classList.add("bus-ride__selected");
          setSeatingPositions(prevItems => [...prevItems, position]);
        } else {
          toast.warning(`You have exceeded the intended number of seats!`);
        }
      }
    }
  }

  const setPayload = async () => {
    const forageData = {
      ...formData,
      ...summary,
      seating_positions: seating_positions,
      actual_amount: (_.get(formData, 'travel_type', null) === 'one_way') ? (_.toNumber(_.get(formData, 'fare_amount', 0))*_.get(formData, 'seats', 0)) : (_.toNumber(_.get(formData, 'fare_amount', 0))*_.get(formData, 'seats', 0)) + increaseFare(formData.fare_amount*formData.seats),
    }
    localStorage.setItem('payload', JSON.stringify(forageData));
    localStorage.setItem('hasPayload', true);
  }

  const handleBooking = async () => {
    if ((+_.get(formData, 'seats', 0) - seating_positions.length) === 0) {
      await setPayload();
      locationRef('/park/user/signin')
    } else {
      toast.warning(`You have ${_.get(formData, 'seats', 0)-seating_positions.length} seat left to select!`);
    }
  }

  return (
    <Fragment>
      <div className="d-app-flex">
        <h4 className="overline text-uppercase font-14">Select Seats</h4>
      </div>

      <div className="row">
        <div className="col-md-10 col-sm-12">
          <div className="bus-ride">
            <div className="bus-ride__grid">
              {availableSeats.map((busRide, index) => (
                <div onClick={() => choosePosition(_.get(busRide, 'seat_position', 0), index, `bus_ride_${index}`)} key={index} id={`bus_ride_${index}`} className={`${_.get(busRide, 'booked', null) == false ? 'bus-ride__seat' : 'bus-ride__seat bus-ride__taken'} bus-ride__seat`}>
                  {_.get(busRide, 'seat_position', 0)}
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex w-100 justify-content-end flex-justify-end mt-3">
            <button onClick={toggleModal} type="button" className="btn btn-dark btn-lg px-5 rounded-md mt-2">Proceed</button>

              <Modal
                isOpen={isModalOpen}
                scrollable={true}
                draggable={false}
                portal={false}
                className="custom-modal"
                closeButton={<CgClose onClick={toggleModal} size={20} className="text-muted" />}
                onClose={() => {
                  setIsModalOpen(false);
                  return true;
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title m-0">Booking Summary</h5>
                </div>
                <div className="modal-body">
                  <div className="d-flex flex-sm-column flex-md-row justify-content-md-between justify-content-sm-start  align-items-center mb-2">
                    <div>
                      <h5>Departure Time</h5>
                      <div className="badge badge-danger-light">{formatTime(_.get(summary, 'departure_time', null))}</div>
                    </div>
                  </div>

                  <div className="d-flex flex-sm-column flex-justify-content-between justify-content-sm-start  align-items-center">
                    <div>
                      <h5>Starting Point</h5>
                      <div className="badge badge-gray-light">{_.get(summary, 'starting_point', null)}</div>
                    </div>
                    <div>
                      <h5>Destination</h5>
                      <div className="badge badge-gray-light">{_.get(summary, 'destination', null)}</div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5>Number of Seats</h5>
                      <p className="seats">[{seating_positions.toString()}] Seats</p>
                    </div>
                    <div>
                      <h5>Price</h5>
                      <div className="badge bg-dark-yellow badge-lg">{moneyFormat.to((_.get(formData, 'travel_type', null) === 'one_way') ? (_.toNumber(_.get(formData, 'fare_amount', 0))*_.get(formData, 'seats', 0)) : (_.toNumber(_.get(formData, 'fare_amount', 0))*_.get(formData, 'seats', 0)) + increaseFare(formData.fare_amount*formData.seats))}</div>
                    </div>
                  </div>

                  {(userType !== 'agent') &&
                    <div className="d-flex w-100 justify-content-end flex-justify-end mt-4">
                      <button
                        onClick={handleBooking}
                        type="button"
                        className="btn add-menu-sidebar btn-primary btn-lg m-0 px-4">
                        <RiSecurePaymentFill className="mr-2" fill='#fff' size={20} />
                        Proceed to Payment
                      </button>
                    </div>
                  }
                </div>
              </Modal>
          </div>
        </div>

        <div className="col-md-2 col-sm-12">
          <div className="d-flex align-items-center mb-2">
            <div className="indicator indicator__available mr-3"></div>
            <span className="font-16 letter__wide">Available Seat</span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="indicator indicator__selected mr-3"></div>
            <span className="font-16 letter__wide">Selected Seat</span>
          </div>

          <div className="d-flex align-items-center">
            <div className="indicator indicator__booked mr-3"></div>
            <span className="font-16 letter__wide">Booked Seat</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

SelectRideSeats.propTypes = {
  formData: PropTypes.object,
  summary: PropTypes.object,
}

export default SelectRideSeats;


