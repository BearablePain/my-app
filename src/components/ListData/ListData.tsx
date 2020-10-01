import React from 'react';
// import getId from './generatorId';
import Card from './Card/Card.jsx';
import { Container } from './ListStyle';
import { DataProps } from '../../interfaces';

const ListData = (props: DataProps) => {
  console.log(props);

  return (
    <>
      <Container>
        {props.data.map((el) => (
          <Card
            id={el.id}
            name={el.name}
            srcImg={el.icon ?? null}
            key={props.genId()}
          />
        ))}
      </Container>
    </>
  );
};

export default ListData;
