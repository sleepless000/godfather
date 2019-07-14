import React from 'react';
import styled from 'styled-components';

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

const Slider = styled.input`
  width: 100%;
  cursor: pointer;
`;

const SubTitle = styled.h2``;
const Paragraph = styled.p`
  font-size: 1.5em;
`;

const Bio = styled.h5`
  padding: 1em;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  justify-content: center;
  align-items: center;
`;

export default function Employee(props) {
  const { image, name, popularity, biography, changeData } = props;
  const path = `${process.env.PUBLIC_URL}/_images/Profile/${image}`;

  function handleChange(e) {
    changeData(+e.target.value)(name);
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
