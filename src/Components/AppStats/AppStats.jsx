import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { withParksCountQuery } from '../../recoil/getParksCount';
import { get } from 'lodash';

const AppStats = () => {

  const parksCount = useRecoilValue(withParksCountQuery); 

  return (
    <Fragment>
      {/* ===================================
          SECTION STATS
        ======================================== */}
        <div className="def-section stats" id="home-stats" data-stellar-background-ratio="0.4">
        <div className="stats-overlay" />
        <div className="container">
          <div className="row">
            {/* === STATS ITEM === */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="stat-item">
                <div className="stat-item-icon">
                  <i className="flaticon-first33" />
                </div>
                <div className="stat-item-number" id="nu">
                  {get(parksCount, 'park_count', null)}
                </div>
                <div className="stat-item-text">
                  TERMINALS 
                </div>
              </div>
            </div>
            {/* === STATS ITEM === */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="stat-item stat-item-mark">
                <div className="stat-item-icon">
                  <i className="flaticon-shirt16" />
                </div>
                <div className="stat-item-number" id="nu">
                  {get(parksCount, 'route_count', null)}
                </div>
                <div className="stat-item-text">
                  ROUTES 
                </div>
              </div>
            </div>
            {/* === STATS ITEM === */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="stat-item">
                <div className="stat-item-icon">
                  <i className="flaticon-group2" />
                </div>
                <div className="stat-item-number" id="nu">
                  {get(parksCount, 'passengers_count', null)}
                </div>
                <div className="stat-item-text">
                  PASSENGERS 
                </div>
              </div>
            </div>
            {/* === STATS ITEM === */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="stat-item">
                <div className="stat-item-icon">
                  <i className="flaticon-clock96" />
                </div>
                <div className="stat-item-number" id="nu">
                  {get(parksCount, 'no_of_years_in_business', null)}
                </div>
                <div className="stat-item-text">
                  YEARS IN<br />BUSINESS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================================
        END SECTION STATS
      ======================================== */}
    </Fragment>
  );
}

export default AppStats;
