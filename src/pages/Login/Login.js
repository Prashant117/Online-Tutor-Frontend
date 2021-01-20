import React from 'react';
import '../Registration/Registration.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { studentLogin, tutorLogin } from '../../actions/auth';

const Login = ({ studentLogin, tutorLogin }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    if (url.endsWith('student') === true) {
      studentLogin(data);
    } else if (url.endsWith('tutor') === true) {
      tutorLogin(data);
    }
    window.scrollTo(0, 0);
  };

  const url = window.location.href;
  let sendUrl;

  if (url.endsWith('student') === true) {
    sendUrl = '/register/student';
  } else {
    sendUrl = '/register/tutor';
  }

  return (
    <div className="auth-wrapper">
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title text-center">Login Form</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-space">
                  <div className="col-md-6">
                    <div className="input-group">
                      <label className="label">Email</label>
                      <input
                        className="input--style-4"
                        ref={register({ required: true })}
                        type="email"
                        name="email"
                      />
                      {errors.email && (
                        <p className="error">Email is required.</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <label className="label">Password</label>
                      <input
                        className="input--style-4"
                        ref={register({ required: true })}
                        type="password"
                        name="password"
                      />
                      {errors.password && (
                        <p className="error">Password is required.</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-t-15 text-center">
                  <button className="btn btn--radius-2 btn--red" type="submit">
                    Submit
                  </button>
                  <p className="p-t-10">
                    Don't have an account?{' '}
                    <Link to={sendUrl}>Registration</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.protoType = {
  studentRegister: PropTypes.func.isRequired,
  tutorRegister: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { studentLogin, tutorLogin })(Login);
