import React from 'react';

const Exam = ({ examination, board, result, passingYear, group }) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontWeight: '600' }}>Examination: </span>
        <span>{examination} </span>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontWeight: '600' }}>Group: </span>
        <span>{group} </span>
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
