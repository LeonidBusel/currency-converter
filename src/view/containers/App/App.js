import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { currenciesListFetch } from '@slice/currenciesListSlice';
import { geoLocationFetch } from '@slice/geoLocationSlice';
import 'antd/dist/antd.css';
import { Navigation, Routes } from '@components';

import './App.scss';

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

export default connect(null, mapDispatchToProps)(App);
