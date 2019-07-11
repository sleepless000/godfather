import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
`;

const Image = styled.img`
  padding-top: 50%;
  width: 200px;
  margin: 1em;
`;
const Info = styled.div`
  padding-top: 20%;
  letter-spacing: 1px;
  color: white;
`;

const Title = styled.div`
  font-size: 2em;
`;

const Bio = styled.p`
  padding: 2em;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  justify-content: center;
  align-items: center;
`;

export default function Employee(props) {
  const path = `${process.env.PUBLIC_URL}/_images/Profile/${props.image}`;
  return (
    <>
      <Grid>
        <Image src={path} />
        <Info>
          <Title>{props.name}</Title>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue={props.popularity}
          />
          <Bio>{props.biography}</Bio>
        </Info>
      </Grid>
    </>
  );
}
