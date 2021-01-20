import React from 'react';
import { useSelector } from 'react-redux';

const Graduation = ({
  register,
  graduationDegree,
  setGraduationDegree,
  graduationSubject,
  setGraduationSubject,
  graduationBoard,
  setGraduationBoard,
  graduationPassingYear,
  setGraduationPassingYear,
  graduationResult,
  setGraduationResult,
}) => {
  const { board, years, graduation } = useSelector((state) => state.education);
  return (
    <div>
      <div className="row row-space">
        <div className="input-group">
          <label className="label">[If applicable] Graduation level</label>
          <div className="ssc">
            <div className="row">
              <div className="col-md-6">
                <label className="label">Degree</label>
              </div>
              <div className="col-md-6">
                <select
                  ref={register}
                  value={graduationDegree}
                  onChange={(e) => setGraduationDegree(e.target.value)}
                  className="input--style-4 select"
                  name="graduationDegree"
                  id=""
                >
                  <option value="">Select one</option>
                  {graduation?.length > 0 &&
                    graduation.map((gd) => (
                      <option value={gd.graduation_degree} key={gd._id}>
                        {gd.graduation_degree}
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
                  value={graduationSubject}
                  onChange={(e) => setGraduationSubject(e.target.value)}
                  style={{ paddingLeft: '27px' }}
                  className="input--style-4 result"
                  name="graduationSubject"
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
                  value={graduationBoard}
                  onChange={(e) => setGraduationBoard(e.target.value)}
                  className="input--style-4 select"
                  name="graduationBoard"
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
                  value={graduationPassingYear}
                  onChange={(e) => setGraduationPassingYear(e.target.value)}
                  className="input--style-4 select"
                  name="graduationPassingYear"
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
                  value={graduationResult}
                  onChange={(e) => setGraduationResult(e.target.value)}
                  style={{ paddingLeft: '27px' }}
                  className="input--style-4 result"
                  name="graduationResult"
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

export default Graduation;
