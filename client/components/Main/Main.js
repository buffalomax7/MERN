import React from 'react';
import PropTypes from 'prop-types';
import Notifications from 'react-notification-system-redux';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function Main(props) {
  const { location, children, alerts } = props;
  return (
    <div>
      <Notifications notifications={alerts} />
      <Navigation pathname={location.pathname} />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  alerts: PropTypes.array.isRequired,
};
