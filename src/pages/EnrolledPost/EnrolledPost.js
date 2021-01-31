import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EnrolledPostCard from '../../components/EnrolledPostCard/PostCard';
import Spinner from '../../components/Spinner/Spinner';
import { getAllTutorPosts } from '../../actions/tutorPost';
const EnrolledPost = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
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
          allPosts?.map((post) => (
            <EnrolledPostCard
              key={post?._id}
              postId={post?._id}
              tutorName={`${post.tutor_profile[0]?.firstName} ${post.tutor_profile[0]?.lastName}`}
              tutorId={post.tutorId}
              image={post?.tutor_profile[0]?.profile?.image}
              qualification={post?.tutor_profile[0]?.profile}
              subjectName={post.subjectName}
              time={post.time}
              days={post.days}
              payment={post.payment}
              note={post.note}
              date={post.date}
              enrolledStudent={post.enrolled}
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

export default EnrolledPost;
