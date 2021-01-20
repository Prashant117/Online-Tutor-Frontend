import React, { Component } from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }

  handleChange = (e) => this.setState({ url: e.target.value });

  join = () => {
    if (this.state.url !== '') {
      let url = this.state.url.split('/');
      window.location.href = `/live-class/${url[url.length - 1]}`;
    } else {
      let url = Math.random().toString(36).substring(2, 7);
      window.location.href = `/live-class/${url}`;
    }
  };

  render() {
    return (
      <div className="container2">
        <div>
          <h3 style={{ fontSize: '30px' }}>Start or join class</h3>
          <p style={{ fontWeight: '600' }}>
            share with your students or teacher
          </p>
        </div>

        <div
          style={{
            background: 'white',
            width: '30%',
            height: 'auto',
            padding: '20px',
            minWidth: '400px',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '100px',
          }}
        >
          <button
            className="btn btn--radius-2 btn--red"
            onClick={this.join}
            style={{ margin: '20px' }}
          >
            <VideoCallIcon style={{ marginRight: '10px' }} />
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
