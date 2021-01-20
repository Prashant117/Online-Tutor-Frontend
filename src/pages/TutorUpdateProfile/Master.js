import React from 'react';
import { useSelector } from 'react-redux';

const Master = ({
  register,
  masterDegree,
  setMasterDegree,
  masterSubject,
  setMasterSubject,
  masterBoard,
  setMasterBoard,
  masterPassingYear,
  setMasterPassingYear,
  masterResult,
  setMasterResult,
}) => {
  const { board, years, master } = useSelector((state) => state.education);
  return (
    <div>
      <div className="row row-space">
        <div className="input-group">
          <label className="label">[If applicable] Master Degree</label>
          <div className="ssc">
            <div className="row">
              <div className="col-md-6">
                <label className="label">Degree</label>
              </div>
              <div className="col-md-6">
                <select
                  ref={register}
                  value={masterDegree}
                  onChange={(e) => setMasterDegree(e.target.value)}
                  className="input--style-4 select"
                  name="masterDegree"
                  id=""
                >
                  <option value="">Select one</option>
                  {master?.length > 0 &&
                    master.map((mt) => (
                      <option value={mt.master_degree} key={mt._id}>
                        {mt.master_degree}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Subject</label>
              </div>
              <div className="col-md-6">
                <input
                  ref={register}
                  value={masterSubject}
                  onChange={(e) => setMasterSubject(e.target.value)}
                  style={{ paddingLeft: '27px' }}
                  className="input--style-4 result"
                  name="masterSubject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Board</label>
              </div>
              <div className="col-md-6">
                <select
                  ref={register}
                  value={masterBoard}
                  onChange={(e) => setMasterBoard(e.target.value)}
                  className="input--style-4 select"
                  name="masterBoard"
                  id=""
                >
                  <option value="">Select one</option>
                  {board?.length > 0 &&
                    board.map((bd) => (
                      <option value={bd.board_name} key={bd._id}>
                        {bd.board_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Passing Year</label>
              </div>
              <div className="col-md-6">
                <select
                  ref={register}
                  value={masterPassingYear}
                  onChange={(e) => setMasterPassingYear(e.target.value)}
                  className="input--style-4 select"
                  name="masterPassingYear"
                  id=""
                >
                  <option value="">Select one</option>
                  {years?.length > 0 &&
                    years.map((yr) => (
                      <option value={yr.passing_year} key={yr._id}>
                        {yr.passing_year}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Result</label>
              </div>
              <div className="col-md-6">
                <input
                  ref={register}
                  value={masterResult}
                  onChange={(e) => setMasterResult(e.target.value)}
                  style={{ paddingLeft: '27px' }}
                  className="input--style-4 result"
                  name="masterResult"
                  type="text"
                  placeholder="Result"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
