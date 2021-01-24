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
    dispatch(getEnrolledPostByStudentId(user?._id));
  }, [user, dispatch]);
  const { allPosts, loading } = useSelector((state) => state.post);
  const { getEnrolledPost, postLoading } = useSelector((state) => state.enroll);
  return (
    <div className="container my-4">
      <div className="row">
        {loading && postLoading ? (
          <Spinner />
        ) : (
          allPosts?.map((post) =>
            getEnrolledPost?.length > 0 ? (
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
                enroll={
                  getEnrolledPost?.find((enroll) => enroll.postId === post._id)
                    ? true
                    : false
                }
              />
            ) : (
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
                enroll={false}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default Home;
