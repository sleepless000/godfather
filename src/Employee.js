import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from './Provider';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 5%;
  grid-gap: 2em;
`;

const Image = styled.img`
  height: 200px;
  margin-top: 70%;
  margin-left: 10%;
  border: 1px white solid;
`;
const Info = styled.div`
  padding-top: 25%;
  letter-spacing: 1px;
  color: white;
`;

const Title = styled.div`
  font-size: 2em;
`;
const Popularity = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
`;

const Bio = styled.h5`
  padding: 2em;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  justify-content: center;
  align-items: center;
`;

export default function Employee(props) {
  const path = `${process.env.PUBLIC_URL}/_images/Profile/${props.image}`;
  const { changeData } = useContext(UserContext);

  function handleChange(e) {
    changeData(e)(props.name);
  }

  return (
    <>
      <Grid>
        <Image src={path} />
        <Info>
          <Title>{props.name}</Title>
          <Popularity>
            <h2>Popularity:</h2>
            <input
              type="range"
              min="1"
              max="10"
              value={props.popularity}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </Popularity>
          <Bio>
            <p style={{ fontSize: '1.5em' }}>Biography:</p>
            {props.biography}
          </Bio>
        </Info>
      </Grid>
    </>
  );
}
