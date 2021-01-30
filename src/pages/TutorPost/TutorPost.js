import React, { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificTutorPosts } from '../../actions/tutorPost';
import Spinner from '../../components/Spinner/Spinner';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddTutorPost from '../../components/AddTutorPost/AddTutorPost';
import './TutorPost.css';
import { tutorViewProfile } from '../../actions/profile';
import axios from 'axios';

const TutorPost = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getSpecificTutorPosts(user?._id));
    dispatch(tutorViewProfile(user?._id));
  }, [dispatch, user]);
  const { specificTutorPosts, loading } = useSelector((state) => state.post);

  return (
    <div className="container my-4">
      <div className="text-center">
        <AddCircleIcon onClick={handleShow} className="add-new" />
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Spinner />
        ) : specificTutorPosts?.data?.length > 0 ? (
          specificTutorPosts?.data?.map((post) => (
            <PostCard
              key={post?._id}
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
              enrolled_student={post.enrolled_student}
            />
          ))
        ) : (
          <h4>You don't have any post</h4>
        )}
      </div>
      <AddTutorPost
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
    </div>
  );
};

export default TutorPost;
