import { Fragment, useState } from 'react';
import { IoBusiness, IoLocationSharp } from 'react-icons/io5';
import { MdDirectionsBus, MdKeyboardArrowDown, MdAirlineSeatReclineExtra } from 'react-icons/md';
import { userSearchRidesResultAtom } from '../../../recoil/userSearchRidesResult';
import { IoBus } from 'react-icons/io5';
import { RiBusWifiLine } from 'react-icons/ri';
import { FaAddressBook } from 'react-icons/fa';
import { moneyFormat } from '../../../Utils';
import { useRecoilState } from 'recoil';
import _, { isEmpty } from 'lodash';
import NoEntity from '../../NoEntity';
import { BookingForm } from '..';
import { formatTime } from '../../../Utils';
import './RideResults.css';
import 'animate.css';

const RideResults = () => {

  const [searchRideResult] = useRecoilState(userSearchRidesResultAtom);
  const [selectRide, setSelectedRide] = useState(null);
  const [amount, setAmount] = useState(0);
  const [proceed, setProceed] = useState(true);
  const [summary, setSummary] = useState({});
  const [previewRides, setPreviewRides] = useState(false);

  const bookNow = (bus, amt, ride, rideBus) => {
    setSelectedRide(bus);
    setSummary({
      departure_time: _.get(rideBus, 'departure_time', null),
      starting_point: _.get(ride, 'starting_point', null),
      destination: _.get(ride, 'destination', null),
      return_percentage: _.get(rideBus, 'return_percentage', null),
    });
    setAmount(amt);
    setProceed(false);
  }

  const displayRides = (index) => {
    const elemBlock = document.getElementById(`ride${index}`);
    if (index !== (undefined || null)) {
      if (elemBlock.classList.contains("custom-hide")) {
        elemBlock.classList.remove("custom-hide")
      } else {
        elemBlock.classList.add("custom-hide");
      }
    }
  };

  return (
    <Fragment>
        {proceed &&
          <div className="row px-4 result-heading">
            <h4 className="overline text-uppercase fs-14">Results</h4>
          </div>
        }

        {proceed &&
          <div className="row">
            {(!isEmpty(searchRideResult))
              ? searchRideResult.map((ride, index) => (
                  <div key={_.get(ride, 'id', null)} className="col-xl-12 col__transition">
                    <div className="card card__ride shadow-sm animate__animated animate__fadeInDown">
                      <div className="card-body d-flex ride">
                        <div className="ride__body">

                          <div className="ride__content">
                            <div className="d-flex">
                              <IoBusiness className="m-r-2" size={24} />
                              <h5 className="m-0 fs-20">{_.get(ride, 'park.park_name', null)}</h5>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                              <MdDirectionsBus className="m-r-2" size={22} />
                              <p className="m-0 fs-14"><span className="bagde badge-pill badge-danger font-w600 mr-1">{_.size(_.get(ride, 'buses', []))}</span> Rides Available</p>
                            </div>
          
                          </div>

                          <div className="ride__extra d-flex justify-content-between">
                            <div className="mr-sm-2">
                              <div className="m-0 text-uppercase letter__wide fs-14 d-flex align-items-center">
                                <RiBusWifiLine className="mr-1 text-danger" />
                                <span>Starting Point</span>
                              </div>
                              <p className="m-0 mt-2 font-w800 fs-16 badge badge-pill badge-dark">{_.get(ride, 'starting_point', null)}</p>
                            </div>

                            <div>
                              <div className="m-0 text-uppercase letter__wide fs-14 d-flex align-items-center">
                                <IoLocationSharp className="mr-1 text-danger" />
                                <span>Destination</span>
                              </div>
                              <p className="m-0 mt-2 font-w800 fs-16 badge badge-pill badge-dark">{_.get(ride, 'destination', null)}</p>
                            </div>
                          </div>
                        
                        </div>
                        
                        <div className="ride__actions">
                          <div className="badge badge-pill badge-btn badge-pink fs-18 font-w600">{moneyFormat.to(_.get(ride, 'price', null))}</div>
                          <button 
                            onClick={() => displayRides(index)}
                            disabled={(_.size(_.get(ride, 'buses', [])) > 0) ? false : true}
                            className="btn btn-sm btn-primary btn-flex"
                          >
                            View Rides
                          </button>
                        </div>
                      </div>

                      <div className="card-body pt-0 list custom-hide animate__animated" id={`ride${index}`}>
                        <h5 className="letter_wide text-uppercase fs-14 font-w600">Ride List</h5>
                        <div className="row list__row text-left list">
                          {(_.get(ride, 'buses', [])).map((rideBus) => (
                            <div key={_.get(rideBus, 'id', null)} className="col-xl-12 mb-2 animate__animated animate__slideInDown">
                              <div className="d-flex list__item py-2 rounded">
                                <div className="d-flex align-items-center mr-4">
                                  <span>{_.get(rideBus, 'ride_name', null)}</span>
                                  <span className="ml-2 badge badge-blue-light">{formatTime(_.get(rideBus, 'departure_time', null))}</span>
                                </div>
                                <button
                                  onClick={() => bookNow(_.toNumber(_.get(rideBus, 'id', null)), _.toNumber(_.get(ride, 'price', 0)), ride, rideBus)}
                                  className="btn btn-sm btn-rounded btn-primary"
                                >
                                  <FaAddressBook className="m-r-2" />
                                  Book Now
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                        
                      {/* Rides Lists */}

                    </div>
                  </div>
                ))
              : <NoEntity 
                  title={"No Rides At the Moment"} 
                  copy={""}
                  imgUrl={<img alt="" src="data:image/svg+xml;base64,PHN2ZyBpZD0iYmUzZTFhNDMtMGM3Yi00NTRkLTkwMGEtNTYyMDk5MmUwNjFkIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijk5Ny44NjEyMiIgaGVpZ2h0PSI0NTAuODA4MSIgdmlld0JveD0iMCAwIDk5Ny44NjEyMiA0NTAuODA4MSI+PHJlY3QgeD0iODcxLjk5MTUyIiB5PSIxODEuNTU4MDQiIHdpZHRoPSIzMC4xNTk0NCIgaGVpZ2h0PSIxMDQuMzk4MDYiIGZpbGw9IiNmMmYyZjIiLz48cG9seWdvbiBwb2ludHM9IjkyMi4wNjggMjY2LjMxNyA4NDguNzE1IDE3OS4wNTIgNzAxLjQ3NSAxODAuMzk4IDYxMi4xNTYgMjY3LjM5NiA2MTMuOTYxIDI2OC41NTYgNjEzLjMxNiAyNjguNTU2IDYxMy4zMTYgNDQ5LjUxMyA5MjEuODcxIDQ0OS41MTMgOTIxLjg3MSAyNjguNTU2IDkyMi4wNjggMjY2LjMxNyIgZmlsbD0iI2YyZjJmMiIvPjxwb2x5Z29uIHBvaW50cz0iODQ4Ljc5MiAxNzkuMjM4IDc1Ny4xNTQgMjg2LjY3NCA3NTcuMTU0IDQ0OS41MTMgOTIxLjg3MSA0NDkuNTEzIDkyMS44NzEgMjY2LjIzNiA4NDguNzkyIDE3OS4yMzgiIGZpbGw9IiNlNmU2ZTYiLz48cmVjdCB4PSI4MjMuMjcyNDIiIHk9IjM1OS40NjA4MyIgd2lkdGg9IjMzLjYzOTQiIGhlaWdodD0iMjkuNzMzMzMiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI4MjMuMjcyNDIiIHk9IjMwNy45OTU2OCIgd2lkdGg9IjMzLjYzOTQiIGhlaWdodD0iMjkuMjYxODEiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI4MjMuMjcyNDIiIHk9IjM1OS40NjA4MyIgd2lkdGg9IjMzLjYzOTQiIGhlaWdodD0iMjkuNzMzMzMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI4MjMuMjcyNDIiIHk9IjMwNy45OTU2OCIgd2lkdGg9IjMzLjYzOTQiIGhlaWdodD0iMjkuMjYxODEiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI2NzMuNzc2NjEiIHk9IjM1MS41NzEyOCIgd2lkdGg9IjMzLjYzOTQiIGhlaWdodD0iMjkuNzMzMzMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI2NzMuNzc2NjEiIHk9IjMwMC4xMDYxMyIgd2lkdGg9IjMzLjYzOTQiIGhlaWdodD0iMjkuMjYxODEiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSI2MzMuOTkxNTIiIHk9IjE4MS41NTgwNCIgd2lkdGg9IjMwLjE1OTQ0IiBoZWlnaHQ9IjEwNC4zOTgwNiIgZmlsbD0iI2YyZjJmMiIvPjxwb2x5Z29uIHBvaW50cz0iNjg0LjA2OCAyNjYuMzE3IDYxMC43MTUgMTc5LjA1MiA0NjMuNDc1IDE4MC4zOTggMzc0LjE1NiAyNjcuMzk2IDM3NS45NjEgMjY4LjU1NiAzNzUuMzE2IDI2OC41NTYgMzc1LjMxNiA0NDkuNTEzIDY4My44NzEgNDQ5LjUxMyA2ODMuODcxIDI2OC41NTYgNjg0LjA2OCAyNjYuMzE3IiBmaWxsPSIjZjJmMmYyIi8+PHBvbHlnb24gcG9pbnRzPSI2MTAuNzkyIDE3OS4yMzggNTE5LjE1NCAyODYuNjc0IDUxOS4xNTQgNDQ5LjUxMyA2ODMuODcxIDQ0OS41MTMgNjgzLjg3MSAyNjYuMjM2IDYxMC43OTIgMTc5LjIzOCIgZmlsbD0iI2U2ZTZlNiIvPjxyZWN0IHg9IjU4NS4yNzI0MiIgeT0iMzU5LjQ2MDgzIiB3aWR0aD0iMzMuNjM5NCIgaGVpZ2h0PSIyOS43MzMzMyIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjU4NS4yNzI0MiIgeT0iMzA3Ljk5NTY4IiB3aWR0aD0iMzMuNjM5NCIgaGVpZ2h0PSIyOS4yNjE4MSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjU4NS4yNzI0MiIgeT0iMzU5LjQ2MDgzIiB3aWR0aD0iMzMuNjM5NCIgaGVpZ2h0PSIyOS43MzMzMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjU4NS4yNzI0MiIgeT0iMzA3Ljk5NTY4IiB3aWR0aD0iMzMuNjM5NCIgaGVpZ2h0PSIyOS4yNjE4MSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjQzNS43NzY2MSIgeT0iMzUxLjU3MTI4IiB3aWR0aD0iMzMuNjM5NCIgaGVpZ2h0PSIyOS43MzMzMyIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjQzNS43NzY2MSIgeT0iMzAwLjEwNjEzIiB3aWR0aD0iMzMuNjM5NCIgaGVpZ2h0PSIyOS4yNjE4MSIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjM4MC4xNTM2IiB5PSI5MS40NjAyMSIgd2lkdGg9IjQwLjMwMDMyIiBoZWlnaHQ9IjEzOS41MDExMiIgZmlsbD0iI2YyZjJmMiIvPjxwb2x5Z29uIHBvaW50cz0iNDQ3LjA2OCAyMDQuNzE4IDM0OS4wNTEgODguMTEyIDE1Mi4zMDIgODkuOTEgMzIuOTUxIDIwNi4xNjEgMzUuMzYyIDIwNy43MTEgMzQuNTAxIDIwNy43MTEgMzQuNTAxIDQ0OS41MTMgNDQ2LjgwNCA0NDkuNTEzIDQ0Ni44MDQgMjA3LjcxMSA0NDcuMDY4IDIwNC43MTgiIGZpbGw9IiNmMmYyZjIiLz48cG9seWdvbiBwb2ludHM9IjM0OS4xNTMgODguMzYgMjI2LjcwMiAyMzEuOTIxIDIyNi43MDIgNDQ5LjUxMyA0NDYuODA0IDQ0OS41MTMgNDQ2LjgwNCAyMDQuNjExIDM0OS4xNTMgODguMzYiIGZpbGw9IiNlNmU2ZTYiLz48cmVjdCB4PSIzMTUuMDUzMDYiIHk9IjMyOS4xODE0NyIgd2lkdGg9IjQ0Ljk1MDM5IiBoZWlnaHQ9IjM5LjczMDk0IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMzE1LjA1MzA2IiB5PSIyNjAuNDExNTYiIHdpZHRoPSI0NC45NTAzOSIgaGVpZ2h0PSIzOS4xMDA4OCIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjMxNS4wNTMwNiIgeT0iMzI5LjE4MTQ3IiB3aWR0aD0iNDQuOTUwMzkiIGhlaWdodD0iMzkuNzMwOTQiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIzMTUuMDUzMDYiIHk9IjI2MC40MTE1NiIgd2lkdGg9IjQ0Ljk1MDM5IiBoZWlnaHQ9IjM5LjEwMDg4IiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMTE1LjI5MDQxIiB5PSIzMTguNjM5MTIiIHdpZHRoPSI0NC45NTAzOSIgaGVpZ2h0PSIzOS43MzA5NCIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjExNS4yOTA0MSIgeT0iMjQ5Ljg2OTIiIHdpZHRoPSI0NC45NTAzOSIgaGVpZ2h0PSIzOS4xMDA4OCIgZmlsbD0iI2ZmZiIvPjxyZWN0IHk9IjQ0OC42MTk5NyIgd2lkdGg9Ijk2My45NTA3OSIgaGVpZ2h0PSIyIiBmaWxsPSIjM2YzZDU2Ii8+PGVsbGlwc2UgY3g9IjE1MS44NzIyMyIgY3k9IjM1Mi40NzIwNCIgcng9IjI5LjA5OTMyIiByeT0iNTkuMzc0MzciIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNMjU1LjYyODgyLDY3NC4yNTQyNWMtMTEuNjU0NTgtNjkuOTI1MjYtLjExNzM0LTEzOS41OTc4OS4wMDA1Ni0xNDAuMjkyOTNsMi4yNjcuMzg0Yy0uMTE3MzQuNjkxNjctMTEuNTg4MzQsNjkuOTk4MjUuMDAwNTYsMTM5LjUzMTY0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMS4wNjkzOSAtMjI0LjU5NTk1KSIgZmlsbD0iI2ZlNjM0ZSIvPjxyZWN0IHg9IjI1MS4wMjU3IiB5PSI1NzEuMjAyMTQiIHdpZHRoPSIyOS44NDEzNiIgaGVpZ2h0PSIyLjI5OTcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzM5LjU4MTU2IC0zMS41MDA5NSkgcm90YXRlKC0yOC4xNDE2KSIgZmlsbD0iI2ZlNjM0ZSIvPjxyZWN0IHg9IjIzNy4wMjMxOSIgeT0iNTY0LjQ4NTA5IiB3aWR0aD0iMi4yOTk3MiIgaGVpZ2h0PSIyOS44NDIzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ4Ni4xMjQ2OCAyOTEuMzcxNDcpIHJvdGF0ZSgtNjEuODQyMDQpIiBmaWxsPSIjZmU2MzRlIi8+PGVsbGlwc2UgY3g9IjgxLjk1NTIiIGN5PSIyNjAuOTAzNDIiIHJ4PSI1Ni45MTQ4NCIgcnk9IjExNi4xMjkyNyIgZmlsbD0iI2ZlNjM0ZSIvPjxwYXRoIGQ9Ik0xODkuMzY0LDY3NS40MDQwNWMtMjIuNzY0NTktMTM2LjU4NTI5LS4yMjk2My0yNzIuNjczMTYuMDAwNTYtMjc0LjAzMTgxbDIuMjY3LjM4NGMtLjIyOTYyLDEuMzU1MjgtMjIuNjk4MzQsMTM3LjA3NzEuMDAwNTcsMjczLjI3MDUyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMS4wNjkzOSAtMjI0LjU5NTk1KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjE3OS4yNzY0OCIgeT0iNDc1LjEyNTIyIiB3aWR0aD0iNTguMzY3NjEiIGhlaWdodD0iMi4yOTk3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwMS4wNjI0IC02OS45NzIxNikgcm90YXRlKC0yOC4xNDE2KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjE1Mi45ODkzNiIgeT0iNDYwLjg4ODgyIiB3aWR0aD0iMi4yOTk3MiIgaGVpZ2h0PSI1OC4zNjc2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1MS43NDI0OCAxNzAuMTExKSByb3RhdGUoLTYxLjg0MjU4KSIgZmlsbD0iIzNmM2Q1NiIvPjxlbGxpcHNlIGN4PSIyMTYuNzUzNTEiIGN5PSIxOTEuMDA4IiByeD0iNzcuODgzNDciIHJ5PSIxNTguOTEzNzQiIGZpbGw9IiNmZTYzNGUiLz48cGF0aCBkPSJNMzI2LjkxNjEsNjc1LjQwNDA1Yy0zMS4xMzk5LTE4Ni44MzcxNy0uMzE0NC0zNzIuOTkyMi4wMDA1Ni0zNzQuODUwNTFsMi4yNjcuMzg0Yy0uMzE0NCwxLjg1NDk0LTMxLjA3MzY2LDE4Ny42NDM5My4wMDA1NiwzNzQuMDg5MjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjA2OTM5IC0yMjQuNTk1OTUpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMzEyLjY5NDIxIiB5PSI0MDEuODMxMTQiIHdpZHRoPSI3OS44NzEyNiIgaGVpZ2h0PSIyLjI5OTcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LjQ1MDAyIC0xMC42Mzg3NSkgcm90YXRlKC0yOC4xNDE2KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjI3Ny4xNDU4NiIgeT0iMzgxLjkyNjAzIiB3aWR0aD0iMi4yOTk3MiIgaGVpZ2h0PSI3OS44NzEyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyNi4wMzU4MyAyNDMuNTU3OTMpIHJvdGF0ZSgtNjEuODQzMjkpIiBmaWxsPSIjM2YzZDU2Ii8+PGVsbGlwc2UgY3g9Ijg3MS4wMjkzNCIgY3k9IjM1Mi40NzIwNCIgcng9IjI5LjA5OTMyIiByeT0iNTkuMzc0MzciIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNOTY5LjQxMTUzLDY3NC4yNTQyNWMxMS42NTQ1OS02OS45MjUyNi4xMTczNC0xMzkuNTk3ODktLjAwMDU2LTE0MC4yOTI5M2wtMi4yNjcuMzg0Yy4xMTczMy42OTE2NywxMS41ODgzMyw2OS45OTgyNS0uMDAwNTYsMTM5LjUzMTY0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMS4wNjkzOSAtMjI0LjU5NTk1KSIgZmlsbD0iI2ZlNjM0ZSIvPjxyZWN0IHg9Ijk1Ny45NDQxMiIgeT0iNTU3LjQzMTMyIiB3aWR0aD0iMi4yOTk3MiIgaGVpZ2h0PSIyOS44NDEzNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5LjAyNTQ1IDkyMy41MTkyOCkgcm90YXRlKC02MS44NTg0KSIgZmlsbD0iI2ZlNjM0ZSIvPjxyZWN0IHg9Ijk3MS45NDYxMSIgeT0iNTc4LjI1NjQzIiB3aWR0aD0iMjkuODQyMzkiIGhlaWdodD0iMi4yOTk3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1Ny42OTc3MyAzMDkuNjgzNCkgcm90YXRlKC0yOC4xNTc5NikiIGZpbGw9IiNmZTYzNGUiLz48ZWxsaXBzZSBjeD0iOTQwLjk0NjM4IiBjeT0iMjYwLjkwMzQyIiByeD0iNTYuOTE0ODQiIHJ5PSIxMTYuMTI5MjciIGZpbGw9IiNmZTYzNGUiLz48cGF0aCBkPSJNMTAzNS42NzYzMiw2NzUuNDA0MDVjMjIuNzY0NTktMTM2LjU4NTI5LjIyOTYyLTI3Mi42NzMxNi0uMDAwNTYtMjc0LjAzMTgxbC0yLjI2Ny4zODRjLjIyOTYyLDEuMzU1MjgsMjIuNjk4MzQsMTM3LjA3NzEtLjAwMDU2LDI3My4yNzA1MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuMDY5MzkgLTIyNC41OTU5NSkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSIxMDE1LjQzMDIxIiB5PSI0NDcuMDkxMjgiIHdpZHRoPSIyLjI5OTcyIiBoZWlnaHQ9IjU4LjM2NzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wNjYzNSA5MjMuNDQ3NjEpIHJvdGF0ZSgtNjEuODU4NCkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSIxMDQxLjcxNzMzIiB5PSI0ODguOTIyNzYiIHdpZHRoPSI1OC4zNjc2MSIgaGVpZ2h0PSIyLjI5OTcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA1LjU5NjA5IDMzOC43NTU2OCkgcm90YXRlKC0yOC4xNTc0MikiIGZpbGw9IiMzZjNkNTYiLz48ZWxsaXBzZSBjeD0iODA2LjE0ODA2IiBjeT0iMTkxLjAwOCIgcng9Ijc3Ljg4MzQ3IiByeT0iMTU4LjkxMzc0IiBmaWxsPSIjZmU2MzRlIi8+PHBhdGggZD0iTTg5OC4xMjQyNiw2NzUuNDA0MDVjMzEuMTM5OS0xODYuODM3MTcuMzE0MzktMzcyLjk5MjItLjAwMDU2LTM3NC44NTA1MWwtMi4yNjcuMzg0Yy4zMTQ0LDEuODU0OTQsMzEuMDczNjUsMTg3LjY0MzkzLS4wMDA1NiwzNzQuMDg5MjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjA2OTM5IC0yMjQuNTk1OTUpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iODcxLjI2MDY1IiB5PSIzNjMuMDQ1MzciIHdpZHRoPSIyLjI5OTcyIiBoZWlnaHQ9Ijc5Ljg3MTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjUyNDI4IDc1Ny41OTYzNCkgcm90YXRlKC02MS44NTg0KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjkwNi44MDkiIHk9IjQyMC43MTE4IiB3aWR0aD0iNzkuODcxMjYiIGhlaWdodD0iMi4yOTk3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4OC4xMDE5NSAyNzIuMDgxMzYpIHJvdGF0ZSgtMjguMTU2NzEpIiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTY5MC42NzM3NiwzMjYuMDYxODZsOS4yMDU2OS03LjM2MjhjLTcuMTUxNDktLjc4OS0xMC4wODk5LDMuMTExMjctMTEuMjkyNDgsNi4xOTgzNy01LjU4Ny0yLjMyLTExLjY2OTE5LjcyMDQ2LTExLjY2OTE5LjcyMDQ2bDE4LjQxODg5LDYuNjg2N0ExMy45Mzc5MiwxMy45Mzc5MiwwLDAsMCw2OTAuNjczNzYsMzI2LjA2MTg2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMS4wNjkzOSAtMjI0LjU5NTk1KSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik00NjUuNjczNzYsMjYxLjA2MTg2bDkuMjA1NjktNy4zNjI4Yy03LjE1MTQ5LS43ODktMTAuMDg5OSwzLjExMTI3LTExLjI5MjQ4LDYuMTk4MzctNS41ODctMi4zMi0xMS42NjkxOS43MjA0Ni0xMS42NjkxOS43MjA0NmwxOC40MTg4OSw2LjY4NjdBMTMuOTM3OTIsMTMuOTM3OTIsMCwwLDAsNDY1LjY3Mzc2LDI2MS4wNjE4NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuMDY5MzkgLTIyNC41OTU5NSkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNODMyLjY3Mzc2LDIzMi4wNjE4Nmw5LjIwNTY5LTcuMzYyOGMtNy4xNTE0OS0uNzg5LTEwLjA4OTksMy4xMTEyNy0xMS4yOTI0OCw2LjE5ODM3LTUuNTg3LTIuMzItMTEuNjY5MTkuNzIwNDYtMTEuNjY5MTkuNzIwNDZsMTguNDE4ODksNi42ODY3QTEzLjkzNzkyLDEzLjkzNzkyLDAsMCwwLDgzMi42NzM3NiwyMzIuMDYxODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjA2OTM5IC0yMjQuNTk1OTUpIiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTg1MS4yNjAzNCw2NjEuNjQ4YTEzLjkxNzcyLDEzLjkxNzcyLDAsMCwwLTYuOTY5NTUsMS44Njk3NUExNC45ODE3NSwxNC45ODE3NSwwLDAsMCw4MTkuMjYwMzQsNjc0LjY0OGg0NS45NDk1MkExMy45OTA0NSwxMy45OTA0NSwwLDAsMCw4NTEuMjYwMzQsNjYxLjY0OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuMDY5MzkgLTIyNC41OTU5NSkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNMzg0LjI2MDM0LDY2MS42NDhhMTMuOTE3NzIsMTMuOTE3NzIsMCwwLDAtNi45Njk1NSwxLjg2OTc1QTE0Ljk4MTc1LDE0Ljk4MTc1LDAsMCwwLDM1Mi4yNjAzNCw2NzQuNjQ4aDQ1Ljk0OTUyQTEzLjk5MDQ1LDEzLjk5MDQ1LDAsMCwwLDM4NC4yNjAzNCw2NjEuNjQ4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMS4wNjkzOSAtMjI0LjU5NTk1KSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik02MjMuMjYwMzQsNjYxLjY0OGExMy45MTc3MiwxMy45MTc3MiwwLDAsMC02Ljk2OTU1LDEuODY5NzVBMTQuOTgxNzUsMTQuOTgxNzUsMCwwLDAsNTkxLjI2MDM0LDY3NC42NDhoNDUuOTQ5NTJBMTMuOTkwNDUsMTMuOTkwNDUsMCwwLDAsNjIzLjI2MDM0LDY2MS42NDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjA2OTM5IC0yMjQuNTk1OTUpIiBmaWxsPSIjM2YzZDU2Ii8+PHBvbHlnb24gcG9pbnRzPSI0NzEuNzU5IDQwNC4yMjggMzM5LjE5MSA0MDQuMjI4IDMzOS4xOTEgNDA4LjUwNCAzNTkuODY2IDQwOC41MDQgMzU5Ljg2NiA0NDkuMTMgMzY0LjE0MiA0NDkuMTMgMzY0LjE0MiA0MDguNTA0IDQ0NC42NjkgNDA4LjUwNCA0NDQuNjY5IDQ0OS4xMyA0NDguOTQ2IDQ0OS4xMyA0NDguOTQ2IDQwOC41MDQgNDcxLjc1OSA0MDguNTA0IDQ3MS43NTkgNDA0LjIyOCIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjMzOS40NTE5MSIgeT0iMzkxLjQzNDA0IiB3aWR0aD0iMTMyLjU2ODA4IiBoZWlnaHQ9IjQuMjc2MzkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSIzMzkuNDUxOTEiIHk9IjM4MC43NDMwNiIgd2lkdGg9IjEzMi41NjgwOCIgaGVpZ2h0PSI0LjI3NjM5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iMzM5LjQ1MTkxIiB5PSIzNzAuMDUyMDkiIHdpZHRoPSIxMzIuNTY4MDgiIGhlaWdodD0iNC4yNzYzOSIgZmlsbD0iIzNmM2Q1NiIvPjxwb2x5Z29uIHBvaW50cz0iNjc4Ljc1OSA0MDQuMjI4IDU0Ni4xOTEgNDA0LjIyOCA1NDYuMTkxIDQwOC41MDQgNTY2Ljg2NiA0MDguNTA0IDU2Ni44NjYgNDQ5LjEzIDU3MS4xNDIgNDQ5LjEzIDU3MS4xNDIgNDA4LjUwNCA2NTEuNjY5IDQwOC41MDQgNjUxLjY2OSA0NDkuMTMgNjU1Ljk0NiA0NDkuMTMgNjU1Ljk0NiA0MDguNTA0IDY3OC43NTkgNDA4LjUwNCA2NzguNzU5IDQwNC4yMjgiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI1NDYuNDUxOTEiIHk9IjM5MS40MzQwNCIgd2lkdGg9IjEzMi41NjgwOCIgaGVpZ2h0PSI0LjI3NjM5IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNTQ2LjQ1MTkxIiB5PSIzODAuNzQzMDYiIHdpZHRoPSIxMzIuNTY4MDgiIGhlaWdodD0iNC4yNzYzOSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjU0Ni40NTE5MSIgeT0iMzcwLjA1MjA5IiB3aWR0aD0iMTMyLjU2ODA4IiBoZWlnaHQ9IjQuMjc2MzkiIGZpbGw9IiMzZjNkNTYiLz48L3N2Zz4=" />
                  }
                />
            }
            
          </div>
        }

        {!proceed && <BookingForm busId={selectRide} rideAmount={amount} summary={summary} />}
      
    </Fragment>
  );
}

export default RideResults;
