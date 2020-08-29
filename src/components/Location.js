import React, { useState } from 'react';
import styled from 'styled-components'
import redimg from '../assets/images/baseline_place_red_18dp.png';

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
	position: absolute;
  bottom: 0;

	.icon {
		max-width: 30px;
		margin: 0 0 auto auto;
	}

	.poweredBy {
		height: 6%;

		p { 
			display: flex;
			align-content: center;
			align-items: center;
			margin: auto auto 12px auto; 
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
	height: 182px;

	h3 {
		width: 90%;
		font-size: 24px;
		font-weight: 600;
		margin: 8px 0 16px 0;
	}

	input {
		padding: 12px;
		background-color: white;
		background-image: url(${redimg});
		background-position: 4px 4px;
		background-repeat: no-repeat;
		padding-left: 50px;
		width: 80%;
		border: 1px solid #f1f1f2;
		border-radius: 4px;
		outline: none;
		caret-color: #f9243a;
		font-size: 14px;
	}
`

const SearchResultContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0;
	width: 100%;
	height: 65%;
	overflow: scroll;
`

const SearchResult = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	width: 90%;
	padding-top: 16px;

	img {
		padding-left: 4px;
	}

	.locationCard {
		padding-left: 8px; 
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		align-items: flex-start;
		border-bottom: 1px solid #f1f1f2;

		h3 {
			margin: 0;
			font-size: 16px;
			font-weight: 600; 
			color: #424749;
		}

		p { 
			margin: 0;
			padding-bottom: 12px;
			font-size: 12px; 
		}
	}
`

const Icon = styled.svg`
	fill: black;
	cursor: pointer;
`

function Location({showModal}) {
	const [inputLokasi, setInputLokasi] = useState('')

  return (
    <Container>
			<ShadowContainer onClick={()=>showModal(false)}/>
			<LocationContainer>
				<SearchContainer>
					<div className="icon">
						<Icon onClick={()=>showModal(false)} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></Icon>
					</div>
					<h3>Cek makanan yang tersedia di lokasi kamu!</h3>
					<input value={inputLokasi} onChange={e => setInputLokasi(e.target.value)} placeholder="Masukkan Lokasi"></input>
				</SearchContainer>
				{inputLokasi.length > 3 && <SearchResultContainer>
					<SearchResult>
						<img src={require('../assets/images/baseline_place_gray_18dp.png')} alt=""/>
						<div className="locationCard">
							<h3 className="locationName">Kulina</h3>
							<p className="locationDesc">Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...</p>
						</div>
					</SearchResult>
					<SearchResult>
						<img src={require('../assets/images/baseline_place_gray_18dp.png')} alt=""/>
						<div className="locationCard">
							<h3 className="locationName">Pancoran Riverside Apartment</h3>
							<p className="locationDesc">RT.6/RW.1,Pengadegan,Pancoran,South Jakart...</p>
						</div>
					</SearchResult>
					<SearchResult>
						<img src={require('../assets/images/baseline_place_gray_18dp.png')} alt=""/>
						<div className="locationCard">
							<h3 className="locationName">Jalan Tulodong Atas 28</h3>
							<p className="locationDesc">Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...</p>
						</div>
					</SearchResult>
					<SearchResult>
						<img src={require('../assets/images/baseline_place_gray_18dp.png')} alt=""/>
						<div className="locationCard">
							<h3 className="locationName">Block71 Jakarta</h3>
							<p className="locationDesc">Ariobimo Sentral, South Jakarta, RT.9/RW.4, Eas...</p>
						</div>
					</SearchResult>
				</SearchResultContainer>}
				<div className="poweredBy">
					<p className="description">powered by  <img src={require("../assets/images/google.png")} alt=""/></p>
				</div>
			</LocationContainer>
    </Container>
  );
}

export default Location;
