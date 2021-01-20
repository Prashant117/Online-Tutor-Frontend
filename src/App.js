import React, { useEffect } from 'react';
import Routes from './Routes/Routes';
import { loadUser } from './actions/auth';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
function App() {
  const dispatch = useDispatch();

  const token = Cookies.get('Token');
  const people = Cookies.get('people');

  useEffect(() => {
    if (token && people) {
      dispatch(loadUser(token, people));
    }
  }, [token, people, dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
