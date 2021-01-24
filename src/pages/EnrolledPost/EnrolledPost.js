import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEnrolledPostByStudentId } from '../../actions/enroll';
import { getAllTutorPosts } from '../../actions/tutorPost';
import EnrolledPostCard from '../../components/EnrolledPostCard/PostCard';
import Spinner from '../../components/Spinner/Spinner';
const EnrolledPost = () => {
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
        ) : getEnrolledPost?.length > 0 ? (
          allPosts?.map((post) => (
            <EnrolledPostCard
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
                getEnrolledPost?.find((enroll) => enroll.postId === post._id) &&
                true
              }
            />
          ))
        ) : (
          <h5>You don't have any enrolled post</h5>
        )}
      </div>
    </div>
  );
};

export default EnrolledPost;