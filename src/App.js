import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components'

import StickyHeader from './containers/StickyHeader'
import { useScrollPosition } from "./components/hooks/useScrollPosition";
import Location from './components/Location'
import MealSelector from './components/MealSelector'
import FoodList from './components/FoodList'
import Cart from './components/Cart'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  background-color: white;
  align-items: center;
  box-shadow: 0px 8px 10px 0px rgba(10,31,68,0.1);
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
`;

function App() {
	const [isCartActive, setCartActive] = useState(false);
	const [isModalShow, setModalShow] = useState(false);

  const [sticky, setSticky] = useState(false);

	useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
  )

  return (
    <Container>
      {isModalShow && <Location showModal={setModalShow}/>}
      <StickyHeader showModal={setModalShow}/>
      <MealSelector sticky={sticky}/>
      <FoodList setCartActive={setCartActive}/>
      {isCartActive && <Cart/>}
    </Container>
  );
}

export default App;
