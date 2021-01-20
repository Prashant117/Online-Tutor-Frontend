import React from 'react';
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

const Dashboard = () => {
  const { loading, user } = useSelector((state) => state.auth);
  return (
    <div className="dashboard">
      <div className="container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="row my-4">
              {user?.status === 'tutor' && (
                <>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                    <EnrolledStudent />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                    <TutorPost />
                  </div>
                </>
              )}

              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <Link to="/live-class/index">
                  <OnlineStreaming />
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <Message />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <Link
                  to={
                    user?.status === 'tutor'
                      ? '/view-profile/tutor'
                      : '/view-profile/student'
                  }
                >
                  <Profile />
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
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
