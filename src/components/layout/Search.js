import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUser } from "../../actions/userAction";

const Search = ({ searchUser }) => {
  const [text, setText] = useState("");

  // handle change in searchbox
  const handleChange = e => setText(e.target.value);

  // handle submit search
  const handleSubmit = e => {
    e.preventDefault();

    searchUser(text);
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
    </form>
  );
};

Search.propTypes = {
  searchUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchUser }
)(Search);
