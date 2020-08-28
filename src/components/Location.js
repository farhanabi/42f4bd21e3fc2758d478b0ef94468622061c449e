import React, { useState } from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
	width: 100%;
  max-width: 375px;
  background-color: rgba(0, 0, 0, 0.65);
	align-items: flex-end;
	justify-content: center;
	height: 100vh;
	position: absolute;
	z-index: 10;
`;

const ShadowContainer = styled.div`
  display: flex;
  flex-direction: row;
	width: 100%;
  max-width: 375px;
	align-items: flex-end;
	justify-content: center;
	height: 100vh;
	position: absolute;
	z-index: 10;
`;

const LocationContainer = styled.div`
	display: flex;
  flex-direction: column;
	align-items: center;		
	justify-content: space-between;
	background-color: white;
	color: black;
	width: 100%;
	height: 86%;
	border: none;
	border-radius: 8px 8px 0 0;
	font-size: 14px;
	z-index: 11;

	.icon {
		align-items: flex-end;
	}

	.poweredBy {
		p { 
			display: flex;
			align-content: center;
			align-items: center;
			font-size: 11px;
			color: #424749;

			img {
				max-height: 20px;
				margin-left: 4px;
			}
		}
	}

`;

const SearchContainer = styled.div`
	padding: 16px;

	h3 {
		font-size: 24px;
		font-weight: 500;
	}

	input {
		width: 80%;
	}
`

const SearchResult = styled.div`
	padding: 16px;
	display: flex;
	flex-direction: row;
	align-content: flex-start;
	align-items: center;

	.locationCard {
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: flex-start;

		h3 { 
			margin: 0;
			font-size: 14px; 
		}

		p { 
			margin: 0;
			font-size: 12px; 
		}
	}
`

const Icon = styled.svg`
	fill: black;
	cursor: pointer;
`

function Location({showModal}) {

  return (
    <Container>
			<ShadowContainer onClick={()=>showModal(false)}/>
			<LocationContainer>
				<div className="icon">
					<Icon onClick={()=>showModal(false)} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></Icon>
				</div>
				<SearchContainer>
					<h3>Cek makanan yang tersedia di lokasi kamu!</h3>
					<input placeholder="Masukkan Lokasi"></input>
				</SearchContainer>
				<SearchResult>
					<Icon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></Icon>
					<div className="locationCard">
						<h3 className="locationName">Kulina</h3>
						<p className="locationDesc">Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...</p>
					</div>
				</SearchResult>
				<SearchResult>
					<Icon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></Icon>
					<div className="locationCard">
						<h3 className="locationName">Kulina</h3>
						<p className="locationDesc">Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...</p>
					</div>
				</SearchResult>
				<div className="poweredBy">
					<p className="description">powered by  <img src={require("../assets/images/google.png")}></img></p>
				</div>
			</LocationContainer>
    </Container>
  );
}

export default Location;
