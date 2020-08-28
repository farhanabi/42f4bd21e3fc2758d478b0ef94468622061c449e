import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  background-color: white;
	align-items: center;
	justify-content: center;
  width: 100%;
`;

const ListDate = styled.h1`
	font-size: 14px;
	color: #424749;
	background: transparent;
	margin: 8px auto 8px 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
	justify-content: flex-start;
	height: 400px;
	width: 90%;
	max-width: 340px;
	font-size: 12px;
	background: transparent;	
  box-shadow: 0px 8px 10px 0px rgba(10,31,68,0.1);
	margin: 8px 0;
	border-radius: 10px;
	overflow: hidden;
`;

const CardImage = styled.img`
	height: 64%;
	width: auto;
	max-width: 340px;
	background: transparent;
`;

const CardTextBox = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	height: 36%;
	width: 90%;
	max-width: 340px;
	padding: 16px;

	.rating {
		display: flex;
		margin: 4px 0;
		align-items: center;
		flex-direction: row;
		font-size: 14px;
	}

	.title {
		margin: 4px 0;
		font-size: 14px;
		color: #424749;
	}
	
	.subtitle {
		margin: 4px 0;
		font-size: 12px;
		font-weight: 500;
		color: #6e7679;
	}

	.price-container {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		font-size: 14px;
		font-weight: 700;
		color: #424749;
	}
`;

const Star = styled.svg`
	fill: #f9243a;
	width: 14px;
	height: 14px;
`;

const Add = styled.svg`
	fill: white;
	width: 16px;
	height: 16px;
`;

const AddButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f9243a;
	color: white;
	width: 95px;
	height: 35px;
	border: none;
	border-radius: 7px;
	font-size: 14px;
	cursor: pointer;
`;

const img1 = require("../assets/images/menu-1-roasted-chicken.png");
const img2 = require("../assets/images/menu-2-roasted-chicken.png");

const Data = [
	{
		"date": "Kamis. 13 Maret 2019",
		"foodCard": [
			{"img":img1},
			{"img":img2},
			{"img":img2}
		]
	},
	{
		"date": "Jumat. 14 Maret 2019",
		"foodCard": [
			{"img":img1},
			{"img":img2},
			{"img":img2}
		]
	}
]

function FoodList({setCartActive}) {
	function FoodCard({img}) {
		return (
			<Card>
				<CardImage src={img}/>
				<CardTextBox>
					<div className="rating">
						4.5
						<Star xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></Star>
						<Star xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></Star>
						<Star xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></Star>
						<Star xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></Star>
						<Star xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/></g></g></g></Star>
					</div>
					<h1 className="title">Roasted Chicken with Scrambled Egg</h1>
					<h2 className="subtitle">by Kulina • Uptown Lunch</h2>
					<div className="price-container">
						Rp 35,0000
						<AddButton onClick={()=>setCartActive(true)}>
							ADD
							<Add xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></Add>
						</AddButton>
					</div>
				</CardTextBox>
			</Card>
		)
	}

  return (
		<Container>
			{Data.map(d => (
				<Container>
					<ListDate>{d.date}</ListDate>
					{d.foodCard.map(f => <FoodCard img={f.img}/>)}
				</Container>
			))}
		</Container>
  );
}

export default FoodList;
