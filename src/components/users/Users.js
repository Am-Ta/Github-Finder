import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import UserItem from "./UserItem";

const Users = ({ user: { users, loading } }) => {
  return (
    <div className='users'>
      {!loading &&
        users !== null &&
        users.map((user, index) => <UserItem key={index} user={user} />)}
    </div>
  );
};

Users.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {}
)(Users);
