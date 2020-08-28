import React, { useState } from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 375px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
	align-items: flex-start;
	justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const CartButton = styled.button`
	display: flex;
  flex-direction: row;
	align-items: center;		
	justify-content: space-between;
	background-color: #a23530;
	color: white;
	width: 93%;
	height: 50px;
	border: none;
	border-radius: 8px;
	font-size: 14px;
	cursor: pointer;
	margin-bottom: 16px;
	

	.text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 4px;

		.mainText {
			margin: 0;
			font-size: 14px;
		}
		
		.description {
			margin: 0;
			font-size: 12px;
		}
	}

	.cartIcon {
		display: flex;
		flex-direction: row;
	}
`;

const Icon = styled.svg`
	fill: white;
`

function Cart() {
	const [meal, setMeal] = useState('Lunch');

	function toggleMeal(v) {
		if (meal !== v) setMeal(v);
	}

  return (
    <Container>
			<CartButton>
				<div className="text">
					<h3 className="mainText">5 Items | Rp 125,000</h3>
					<p className="description">Termasuk ongkos kirim</p>
				</div>
				<div className="cartIcon">
					<Icon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></Icon>
					<Icon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></Icon>
				</div>
			</CartButton>
    </Container>
  );
}

export default Cart;
