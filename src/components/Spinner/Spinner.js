import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { css } from '@emotion/react';

function Spinner() {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className="sweet-loading">
      <FadeLoader color={'#fff'} css={override} size={80} />
    </div>
  );
}

export default Spinner;
