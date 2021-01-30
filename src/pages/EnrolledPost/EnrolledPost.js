import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { studentViewProfile } from '../../actions/profile';
import EnrolledPostCard from '../../components/EnrolledPostCard/PostCard';
import Spinner from '../../components/Spinner/Spinner';
const EnrolledPost = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user?.status === 'student') {
      dispatch(studentViewProfile(user?._id));
    }
  }, [user, dispatch]);
  const profile = useSelector((state) => state.profile);

  return (
    <div className="container my-4">
      <div className="row">
        {profile?.loading ? (
          <Spinner />
        ) : profile?.studentViewProfile?.enrolled_post?.length > 0 ? (
          profile?.studentViewProfile?.enrolled_post?.map((post, index) => (
            <EnrolledPostCard
              key={index}
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
              enroll={true}
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
