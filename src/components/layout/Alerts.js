import React from "react";
import { connect } from "react-redux";

const Alerts = ({ alert: { alerts } }) => {
  return (
    alerts.length > 0 &&
    alerts.map((alert, index) => (
      <div key={index} className={`alert alert_${alert.type}`}>
        <i className='fas fa-bell'></i> {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(
  mapStateToProps,
  {}
)(Alerts);
