import React from 'react';
import { css } from '@emotion/react';
import { PropagateLoader } from 'react-spinners';
import '../component/Loading.css';
export const Loading = () => {
  const override = css`
    display: flex;
    justify-content: space-evenly;
    border-color: red;
  `;

  return (
    <div className="loader">
        <div><PropagateLoader css={override} size={15} color={'#303234'} loading={true} /></div>
      <div className='loader_text'><p>This might take few time...</p></div>
    </div>
  );
};

