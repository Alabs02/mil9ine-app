import { Fragment, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { ThreeDots } from 'react-loading-icons';
import { useRecoilState } from 'recoil';
import { TextField } from '../../FormField';
import { isEmpty } from 'lodash';
import { catchAxiosErrors } from '../../../Utils';
import { userSearchRidesResultAtom } from '../../../recoil/userSearchRidesResult';
import { getRequest } from '../../../Utils/axiosClient';
import { RideResults } from '..';
import './BookRide.css';

const initialFormVal = () => {
  return {
    starting_point: '',
    destination : '',
  }
}

const searchRideSchema = object().shape({
  starting_point: string()
    .required('Required!'),
  destination: string()
    .required('Required!')
});

const BookRide = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [searchRideResult, setSearchRideResult] = useRecoilState(userSearchRidesResultAtom);
  const [hasSearch, setHasSearch] = useState(false);

  return (
    <Fragment>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body search-card">
              <Formik
                initialValues={initialFormVal()}
                validationSchema={searchRideSchema}
                onSubmit={ async (values) => {
                  try {
                    setHasSearch(false);
                    setIsLoading(true);
                    const { data, status, statusText } = await getRequest(`/get-search-rides`, {params: values});

                    if (data) {
                      // console.log(data, status, statusText);
                      setSearchRideResult(data);
                      setTimeout(() => {
                        setHasSearch(true);
                      }, 0);
                      setIsLoading(false);
                    }

                  } catch (err) {
                    catchAxiosErrors(err, setIsLoading, null);
                  }
                }}
              >
                {props => (
                  <Form>
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <label>Starting Point</label>
                        <Field name="starting_point" as={TextField} placeholder="Abuja" />
                        <ErrorMessage name="starting_point">
                          {msg => <div className="text-white fs-4">{msg}</div>}
                        </ErrorMessage>
                      </div> 

                      <div className="col-sm-12 col-md-6">
                        <label>Destination</label>
                        <Field name="destination" as={TextField} placeholder="Abuja" />
                        <ErrorMessage name="destination">
                          {msg => <div className="text-white fs-4">{msg}</div>}
                        </ErrorMessage>
                      </div> 

                      <div className="col-sm-12">
                        {isLoading
                          ? <div style={{
                            display: 'grid',
                            placeItems: 'center',
                            width: '100%',
                            marginTop: '1.5rem',
                          }}>
                              <ThreeDots fill='#ffffff' width={'4rem'} height={'4rem'} />
                            </div>
                          : <div className="get-quote-form-button">
                              <button type="submit" id="gq-submit"><span className="my-btn my-btn-grey">
                                  <span className="my-btn-bg-top" />
                                  <span className="my-btn-bg-bottom" />
                                  <span className="my-btn-text">
                                    SEARCH
                                  </span>
                                </span></button>
                            </div>
                        }
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      {hasSearch && <RideResults />}
    </Fragment>
  );
}

export default BookRide;
