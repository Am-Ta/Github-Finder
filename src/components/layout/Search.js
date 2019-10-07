import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUser, clearUsers } from "../../actions/userAction";
import { setAlert } from "../../actions/alertAction";

const Search = ({ user: { users }, searchUser, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  // handle change in searchbox
  const handleChange = e => setText(e.target.value);

  // handle submit search
  const handleSubmit = e => {
    e.preventDefault();
    if (!text) {
      setAlert("Please enter a name", "danger");
    } else {
      searchUser(text);
      setText("");
    }
  };

  // Handle click for clear users
  const handleClick = () => {
    clearUsers();
  };

  return (
    <form className='form' autoComplete='off' onSubmit={handleSubmit}>
      <div className='form__group'>
        <input
          type='text'
          placeholder='Search user...'
          className='form__item'
          name='text'
          value={text}
          onChange={handleChange}
        />
      </div>
      <div className='form__group'>
        <input
          type='submit'
          value='Search'
          className='btn btn_block btn__primary'
        />
      </div>
      {users !== null && users.length > 0 && (
        <div className='form__group'>
          <button onClick={handleClick} className='btn btn_block btn__danger'>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { searchUser, clearUsers, setAlert }
)(Search);
