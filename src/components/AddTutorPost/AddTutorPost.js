import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { tutorPost } from '../../actions/tutorPost';

const AddTutorPost = ({ show, handleClose, handleShow }) => {
  const { handleSubmit, register, errors } = useForm();
  const { user } = useSelector((state) => state.auth);
  const { tutorViewProfile } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  let qualification;

  if (tutorViewProfile?.master) {
    qualification = tutorViewProfile?.master?.degree;
  } else if (tutorViewProfile?.graduation) {
    qualification = tutorViewProfile?.graduation?.degree;
  } else if (tutorViewProfile?.hsc) {
    qualification = tutorViewProfile?.hsc?.examination;
  } else if (tutorViewProfile?.ssc) {
    qualification = tutorViewProfile?.ssc?.examination;
  } else {
    qualification = 'N/A';
  }

  const onSubmit = (data) => {
    data.tutorId = user?._id;
    const name = user?.firstName + user?.lastName;
    data.tutorName = name;
    data.image = tutorViewProfile.image;
    data.qualification = qualification;
    console.log(data);
    dispatch(tutorPost(data));
    handleClose();
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row row-space">
              <div className="col-md-12">
                <div className="input-group">
                  <label className="label">Subject Name</label>
                  <input
                    className="input--style-4"
                    ref={register({ required: true })}
                    type="text"
                    name="subjectName"
                  />
                  {errors.subjectName && (
                    <p className="error">Subject name is required.</p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <label className="label">Days in a week</label>
                  <input
                    className="input--style-4"
                    ref={register({ required: true })}
                    type="number"
                    name="days"
                    max="7"
                    min="1"
                  />
                  {errors.days && <p className="error">day is required.</p>}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <label className="label">Time ex:(10am to 12pm)</label>
                  <input
                    className="input--style-4"
                    ref={register({ required: true })}
                    type="text"
                    name="time"
                  />
                  {errors.time && <p className="error">Time is required.</p>}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <label className="label">Payment</label>
                  <input
                    className="input--style-4"
                    ref={register({ required: true })}
                    type="number"
                    name="payment"
                  />
                  {errors.payment && (
                    <p className="error">Payment is required.</p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <label className="label">
                    Note for student (50 characters)
                  </label>
                  <textarea
                    className="input--style-4 text-area"
                    ref={register({ required: true })}
                    name="note"
                    maxLength="50"
                  ></textarea>
                  {errors.note && <p className="error">Note is required.</p>}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn--red">
                Add post
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddTutorPost;
