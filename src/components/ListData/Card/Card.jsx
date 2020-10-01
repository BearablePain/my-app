/* eslint-disable */

import React from 'react';
import { CardName, CardDiv } from './stylesCard';

const Card = (props) => {
  const { name, srcImg, id } = props;
  return (
    <>
      <CardDiv>
        <img src={srcImg} alt="icon" style={{ width: '60%' }} />

        <div>
          <CardName>{id}</CardName>
          <CardName>{name}</CardName>
        </div>
      </CardDiv>
    </>
  );
};

export default Card;
