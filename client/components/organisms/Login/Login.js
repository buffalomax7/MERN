import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Input from '_molecules/Input';

export default function Login(props) {
  const { remember, username, password, updateUsername, updatePassword, rememberMe, login } = props;

  return (
    <div className="box">
      <h3 className="title is-3">
        Login
      </h3>
      <hr className="separator" />
      <p className="has-space-below">
        {'Not Registered Yet? '}
        <Link to="/register">
          Create an account.
        </Link>
      </p>

      <Input
        onChange={e => updateUsername(e.target.value)}
        placeholder="Username"
        value={username}
        leftIcon="user"
      />

      <Input
        onChange={e => updatePassword(e.target.value)}
        placeholder="Password"
        value={password}
        leftIcon="lock"
        type="password"
      />

      <p className="has-space-below">
        <Link to="/recovery">
          Forgot your password?
        </Link>
      </p>
      <hr className="separator" />
      <p className="control is-clearfix">
        <button type="button" className="button is-success is-pulled-right" onClick={login}>
          Login
        </button>
        <input type="checkbox" onChange={rememberMe} checked={remember} />
        &nbsp; Remember me
      </p>
    </div>
  );
}

Login.propTypes = {
  remember: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  rememberMe: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};