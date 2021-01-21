import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const AddTutorPost = ({ show, handleClose, handleShow }) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                  {errors.password && <p className="days">day is required.</p>}
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
                  {errors.password && <p className="time">Time is required.</p>}
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
                  {errors.password && (
                    <p className="payment">Payment is required.</p>
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
                    name="days"
                    maxLength="50"
                  ></textarea>
                  {errors.password && <p className="days">Note is required.</p>}
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <button type="submit" className="btn btn--red">
            Add post
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddTutorPost;
