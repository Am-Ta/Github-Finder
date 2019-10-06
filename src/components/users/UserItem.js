import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { avatar_url, login } = user;
  return (
    <div className='users__item'>
      <div className='users__img-box'>
        <img src={avatar_url} alt={login} className='users__img' />
      </div>
      <p className='users__text'>{login}</p>
      <div className='users__btn'>
        <Link to='#' className='btn btn__success'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
