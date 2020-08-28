import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 375px;
  background-color: white;
  align-items: center;
  height: 55px;
  width: 100%;
`;

const Link = styled.a`
  display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 48px;
	font-size: 18px;
`;

const BackIcon = styled.svg`
  flex: none;
`

const AlamatContainer = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 10px;
	display: flex;
  flex-direction: column;
`;

const Text = styled.p`
	display: flex;
	align-items: flex-end;	
	height: 25px;
	margin: 0;
	font-size: 8px;
`;

const AlamatSelector = styled.a`
	color: black;
	text-decoration: none;
  display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	cursor: pointer;
`;

const SelectIcon = styled.svg`
  fill: #f9243a;
`

function Header({showModal}) {
  return (
    <Container>
			<Link href="#">
				<BackIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
					<path d="M0 0h24v24H0z" fill="none"/>
					<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
				</BackIcon>
			</Link>
			<AlamatContainer>
				<Text>ALAMAT PENGANTARAN</Text>
				<AlamatSelector onClick={()=>showModal(true)}>
					Tokopedia Tower
					<SelectIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path d="M0 0h24v24H0z" fill="none"/>
						<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
					</SelectIcon>
				</AlamatSelector>
			</AlamatContainer>
    </Container>
  );
}

export default Header;
