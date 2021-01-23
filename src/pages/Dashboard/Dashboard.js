import React, { useEffect } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TutorPost from '../../components/TutorPost/TutorPost';
import OnlineStreaming from '../../components/OnlineStreaming/OnlineStreaming';
import EnrolledStudent from '../../components/EnrolledStudent/EnrolledStudent';
import Message from '../../components/Message/Message';
import Spinner from '../../components/Spinner/Spinner';
import Profile from '../../components/Profile/Profile';
import Task from '../../components/Task/Task';
import { useDispatch } from 'react-redux';
import { tutorViewProfile, studentViewProfile } from '../../actions/profile';

const Dashboard = () => {
  const { loading, user } = useSelector((state) => state.auth);
  const { profileStatusCode } = useSelector((state) => state.profile);
  console.log(profileStatusCode);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.status === 'student') {
      dispatch(studentViewProfile(user?._id));
    } else if (user?.status === 'tutor') {
      dispatch(tutorViewProfile(user?._id));
    }
  }, [user, dispatch]);
  return (
    <div className="dashboard">
      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="row justify-content-center my-4">
              {user?.status === 'tutor' && (
                <>
                  <div className="my-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                    <EnrolledStudent />
                  </div>
                  <div className="my-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                    {profileStatusCode === 404 ? (
                      <Link to="/update-profile/tutor">
                        <TutorPost />
                      </Link>
                    ) : (
                      <Link to="/tutor-post">
                        <TutorPost />
                      </Link>
                    )}
                  </div>
                </>
              )}

              <div className="my-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <Link to="/live-class/index">
                  <OnlineStreaming />
                </Link>
              </div>
              <div className="my-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <Message />
              </div>

              <div className="my-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <Link
                  to={
                    user?.status === 'tutor'
                      ? profileStatusCode === 404
                        ? 'update-profile/tutor'
                        : '/view-profile/tutor'
                      : profileStatusCode === 404
                      ? 'update-profile/student'
                      : '/view-profile/student'
                  }
                >
                  <Profile />
                </Link>
              </div>
              <div className="my-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <Task />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
