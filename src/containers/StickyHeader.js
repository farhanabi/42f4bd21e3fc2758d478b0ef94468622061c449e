import React from 'react';
import styled from 'styled-components'
import Header from './../components/Header'
import DateSelector from './../components/DateSelector'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  min-height: 110px;
  max-width: 375px;
  background-color: white;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
`;

function StickyHeader({showModal}) {
  return (
    <Container>
      <Header showModal={showModal}/>
      <DateSelector/>
    </Container>
  );
}

export default StickyHeader;
