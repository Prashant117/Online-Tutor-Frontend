import React from 'react';
import './Dashboard.css';
import TutorPost from '../../components/TutorPost/TutorPost';
import OnlineStreaming from '../../components/OnlineStreaming/OnlineStreaming';
import EnrolledStudent from '../../components/EnrolledStudent/EnrolledStudent';
import Message from '../../components/Message/Message';
import Profile from '../../components/Profile/Profile';
import Task from '../../components/Task/Task';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row my-4">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <EnrolledStudent />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <TutorPost />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <OnlineStreaming />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <Message />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <Profile />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
