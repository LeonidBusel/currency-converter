import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { currenciesListFetch } from '@slice/currenciesListSlice';
import { geoLocationFetch } from '@slice/geoLocationSlice';
import 'antd/dist/antd.css';
import { Navigation, Routes } from '@components';

import './App.scss';
import { takeLatest } from 'redux-saga/effects';

const App = (props) => {
  // did mount
  useEffect(() => {
    const { currenciesListFetch, geoLocationFetch } = props;

    currenciesListFetch();
    geoLocationFetch();
  }, []);

  return (
    <div className="app-wrapper">
      <Navigation />

      <Routes />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    currenciesListFetch: currenciesListFetch,
    geoLocationFetch: geoLocationFetch
  }, dispatch);
}

App.propTypes = {
  currenciesListFetch: PropTypes.func.isRequired,
  geoLocationFetch: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(App);
