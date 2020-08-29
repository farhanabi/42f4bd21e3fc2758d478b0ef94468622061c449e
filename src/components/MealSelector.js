import React, { useState } from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 375px;
  background-color: white;
	align-items: center;
	justify-content: center;
  min-height: 50px;
  width: 100%;
  box-shadow: 0px 20px 20px 0px rgba(10,31,68,0.025);
`;

const Button = styled.button`
  display: flex;
	align-items: center;
	justify-content: center;
	height: 70%;
	width: 46%;
	font-size: 14px;
	font-weight: 500;
	border: 1px solid #f1f1f2;
	background: transparent;	
	color: #6e7679;
	cursor: pointer;

	${props => props.left && css`
		border-radius: 7px 0 0 7px;
	`}

	${props => props.right && css`
		border-radius: 0 7px 7px 0;
  `}

	${props => props.active && css`
		background: #424749;	
    color: white;
  `}
`;

function MealSelector() {
	const [meal, setMeal] = useState('Lunch');

	function toggleMeal(v) {
		if (meal !== v) setMeal(v);
	}

  return (
    <Container>
			<Button left active={meal==='Lunch'} onClick={() => toggleMeal('Lunch')}>Lunch</Button>
			<Button right active={meal==='Dinner'} onClick={() => toggleMeal('Dinner')}>Dinner</Button>
    </Container>
  );
}

export default MealSelector;
