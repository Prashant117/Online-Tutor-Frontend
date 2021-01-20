import React from 'react';
import { useSelector } from 'react-redux';

const HSC = ({
  register,
  hscExamination,
  setHscExamination,
  hscBoard,
  setHscBoard,
  hscGroup,
  setHscGroup,
  hscPassingYear,
  setHscPassingYear,
  hscResult,
  setHscResult,
}) => {
  const { hsc, board, group, years } = useSelector((state) => state.education);
  return (
    <div>
      <div className="row row-space">
        <div className="input-group">
          <label className="label">
            HSC <span style={{ textTransform: 'lowercase' }}>or</span>{' '}
            equivalent level
          </label>
          <div className="ssc">
            <div className="row">
              <div className="col-md-6">
                <label className="label">Examination</label>
              </div>
              <div className="col-md-6">
                <select
                  ref={register}
                  value={hscExamination}
                  onChange={(e) => setHscExamination(e.target.value)}
                  className="input--style-4 select"
                  name="hscExamination"
                  id=""
                >
                  <option value="">Select one</option>
                  {hsc?.length > 0 &&
                    hsc.map((hc) => (
                      <option value={hc.hsc_level} key={hc._id}>
                        {hc.hsc_level}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Board</label>
              </div>
              <div className="col-md-6">
                <select
                  ref={register}
                  value={hscBoard}
                  onChange={(e) => setHscBoard(e.target.value)}
                  className="input--style-4 select"
                  name="hscBoard"
                  id=""
                >
                  <option value="">Select one</option>
                  {board?.length > 0 &&
                    board.map((bd) => (
                      <option value={bd.bd_board_name} key={bd._id}>
                        {bd.board_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Group</label>
              </div>
              <div className="col-md-6">
                <select
                  ref={register}
                  value={hscGroup}
                  onChange={(e) => setHscGroup(e.target.value)}
                  className="input--style-4 select"
                  name="hscGroup"
                  id=""
                >
                  <option value="">Select one</option>
                  {group?.length > 0 &&
                    group.map((gp) => (
                      <option key={gp._id} value={gp.group_name}>
                        {gp.group_name}
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
                  value={hscPassingYear}
                  onChange={(e) => setHscPassingYear(e.target.value)}
                  className="input--style-4 select"
                  name="hscPassingYear"
                  id=""
                >
                  <option value="">Select one</option>
                  {years?.length > 0 &&
                    years.map((yr) => (
                      <option key={yr._id} value={yr.passing_year}>
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
                  value={hscResult}
                  onChange={(e) => setHscResult(e.target.value)}
                  style={{ paddingLeft: '27px' }}
                  className="input--style-4 result"
                  name="hscResult"
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

export default HSC;
