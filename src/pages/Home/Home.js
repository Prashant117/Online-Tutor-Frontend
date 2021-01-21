import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTutorPosts } from '../../actions/tutorPost';
import PostCard from '../../components/PostCard/PostCard';
import Spinner from '../../components/Spinner/Spinner';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTutorPosts());
  }, [dispatch]);
  const { allPosts, loading } = useSelector((state) => state.post);
  return (
    <div className="container my-4">
      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          allPosts?.map((post) => <PostCard key={post?._id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
