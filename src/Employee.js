import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 125px;
  margin-top: 12rem;
  margin-left: 4rem;
  border: 2px grey solid;
  border-radius: 3px;
`;

const Info = styled.div`
  margin-top: 12rem;
  letter-spacing: 1px;
  color: white;
`;

const Title = styled.div`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Popularity = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.h2`
  font-family: 'Roboto Regular';
  font-size: 1.2rem;
`;

const Slider = styled.input`
  width: 100%;
  cursor: pointer;
`;

const Bio = styled.h5`
  font-family: 'Roboto Regular';
  padding: 1em;
  background: rgba(0, 0, 0, 0.4);
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

export default function(props) {
  const { image, name, popularity, biography, changePopularity } = props;
  const path = `${process.env.PUBLIC_URL}/_images/Profile/${image}`;

  function handleChange(e) {
    changePopularity(+e.target.value)(name);
  }

  return (
    <>
      <Image src={path} />
      <Info>
        <Title>{name}</Title>
        <Popularity>
          <SubTitle>Popularity</SubTitle>
          <Slider
            type="range"
            min="1"
            max="10"
            step="0.01"
            defaultValue={popularity}
            onMouseUp={handleChange}
          />
        </Popularity>
        <Bio>
          <Paragraph>Biography</Paragraph>
          {biography}
        </Bio>
      </Info>
    </>
  );
}
