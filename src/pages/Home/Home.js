import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEnrolledPostByStudentId } from '../../actions/enroll';
import { getAllTutorPosts } from '../../actions/tutorPost';
import PostCard from '../../components/PostCard/PostCard';
import Spinner from '../../components/Spinner/Spinner';
const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllTutorPosts());
  }, [user, dispatch]);
  const { allPosts, loading } = useSelector((state) => state.post);

  return (
    <div className="container my-4">
      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          allPosts?.map((post) => (
            <PostCard
              key={post?._id}
              postId={post?._id}
              tutorName={post.tutorName}
              tutorId={post.tutorId}
              image={post.image}
              qualification={post.qualification}
              subjectName={post.subjectName}
              time={post.time}
              days={post.days}
              payment={post.payment}
              note={post.note}
              date={post.date}
              enroll={post.enrolled.find((enroll) =>
                enroll === user?._id ? true : false
              )}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
