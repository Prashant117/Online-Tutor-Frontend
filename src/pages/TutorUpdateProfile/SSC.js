import React from 'react';
import { useSelector } from 'react-redux';

const SSC = ({
  register,
  sscExamination,
  setSscExamination,
  sscBoard,
  setSscBoard,
  sscGroup,
  setSscGroup,
  sscPassingYear,
  setSscPassingYear,
  sscResult,
  setSscResult,
}) => {
  const { ssc, board, group, years } = useSelector((state) => state.education);

  return (
    <div>
      <div className="row row-space">
        <div className="input-group">
          <label className="label">
            SSC <span style={{ textTransform: 'lowercase' }}>or</span>{' '}
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
                  value={sscExamination}
                  onChange={(e) => setSscExamination(e.target.value)}
                  className="input--style-4 select"
                  name="sscExamination"
                  id=""
                >
                  <option value="">Select one</option>
                  {ssc?.length > 0 &&
                    ssc.map((sc) => (
                      <option value={sc.ssc_level} key={sc._id}>
                        {sc.ssc_level}
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
                  value={sscBoard}
                  onChange={(e) => setSscBoard(e.target.value)}
                  className="input--style-4 select"
                  name="sscBoard"
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
                <label className="label">Group</label>
              </div>
              <div className="col-md-6">
                <select
                  ref={register}
                  value={sscGroup}
                  onChange={(e) => setSscGroup(e.target.value)}
                  className="input--style-4 select"
                  name="sscGroup"
                  id=""
                >
                  <option value="">Select one</option>
                  {group?.length > 0 &&
                    group.map((gp) => (
                      <option value={gp.group_name} key={gp._id}>
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
                  value={sscPassingYear}
                  onChange={(e) => setSscPassingYear(e.target.value)}
                  className="input--style-4 select"
                  name="sscPassingYear"
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
                  value={sscResult}
                  onChange={(e) => setSscResult(e.target.value)}
                  style={{ paddingLeft: '27px' }}
                  className="input--style-4 result"
                  name="sscResult"
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

export default SSC;
