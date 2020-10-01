import React from 'react';
import Card from '../Card/Card.jsx';
import { Container } from './ListStyle';
import { DataProps } from '../../interfaces';
import { AllDataConfiguration } from '../../interfaces';

const ListData = (props: DataProps) => (
  <>
    {props && (
      <Container>
        {props.data.map((el: AllDataConfiguration) => (
          <Card
            id={el.id}
            name={el.name}
            srcImg={el.icon ?? null}
            key={props.genId()}
          />
        ))}
      </Container>
    )}
  </>
);

export default ListData;
