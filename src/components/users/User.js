import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getUser, removeUser, getUserRepos } from "../../actions/gitAction";

const User = ({
  match,
  git: { user, repos },
  getUser,
  removeUser,
  getUserRepos
}) => {
  const {
    avatar_url,
    bio,
    blog,
    company,
    hireable,
    html_url,
    location,
    name,
    login,
    followers,
    following,
    public_gists,
    public_repos
  } = user;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  // Handle click for remove user
  const handleClick = () => removeUser();

  return (
    <div className='profile'>
      <div className='profile__header'>
        <Link to='/' className='btn btn__dark' onClick={handleClick}>
          <i className='fas fa-arrow-left'></i> Back
        </Link>{" "}
      </div>

      <div className='profile__introduce'>
        <div className='profile__img-box'>
          <img
            src={avatar_url}
            alt='the avatar image'
            className='profile__img'
          />
          <h2 className='profile__name'>{name}</h2>
        </div>

        <div className='profile__info'>
          <a href={html_url} className='btn btn__dark' target='_blank'>
            View Github Profile
          </a>

          <div className='profile__text '>
            <span>
              Hireable{" "}
              {hireable ? (
                <i className='far fa-check-circle text__success'></i>
              ) : (
                <i className='far fa-times-circle text__danger'></i>
              )}
            </span>

            {login && <h3>{login}</h3>}

            {blog && (
              <p>
                <strong>Website: </strong> {blog}
              </p>
            )}
            {company && (
              <p>
                <strong>Company: </strong> {company}
              </p>
            )}
            {location && (
              <p>
                <strong>Location: </strong> {location}
              </p>
            )}
            {bio && (
              <p>
                <strong>Bio: </strong> {bio}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className='profile__badges'>
        <span className='badge badge__primary'>Followers: {followers}</span>
        <span className='badge badge__success'>Following: {following}</span>
        <span className='badge badge__danger'>
          Public Gists: {public_gists}
        </span>
        <span className='badge badge__dark'>Public Repos: {public_repos}</span>
      </div>
      <div className='profile__repos'>
        {repos !== null &&
          repos.map((repo, index) => (
            <div key={index} className='profile__repo'>
              <a href={repo.html_url} className='profile__repo-link'>
                {repo.name}
              </a>
              <p className='profile__repo-desc'>{repo.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

User.propTypes = {
  match: PropTypes.object.isRequired,
  git: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  git: state.git
});

export default connect(
  mapStateToProps,
  { getUser, removeUser, getUserRepos }
)(User);
