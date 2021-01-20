import React from 'react';

const Exam = ({ degree, board, result, passingYear, subject }) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontWeight: '600' }}>Degree: </span>
        <span>{degree} </span>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontWeight: '600' }}>Subject: </span>
        <span>{subject} </span>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontWeight: '600' }}>Board: </span>
        <span>{board} </span>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontWeight: '600' }}>Passing Year: </span>
        <span>{passingYear} </span>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontWeight: '600' }}>Result: </span>
        <span>{result} </span>
      </div>
    </div>
  );
};

export default Exam;
