import React, {useState} from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 375px;
  background-color: white;
  align-items: center;
  height: 55px;
	width: 100%;
	border-bottom: 1px solid #f1f1f2;
	overflow-x: scroll;
`;

const Button = styled.button`
	display: flex;
	flex-direction: column;
	background-color: white;
	color: black;
	align-content: center;
	justify-content: center;
	min-height: 55px;
	min-width: 55px;
	text-decoration: none;
	border: none;
	cursor: pointer;

	${props => props.active && css`
		background-color: #424749;	
		border-radius: 50%;
		min-height: 40px;
		min-width: 40px;
		margin: 0 7.5px;

		p {
			background-color: transparent;
			color: white;
		}
	`}
	
	${props => props.disabled && css`
		cursor: not-allowed;
		
		p {
			background-color: transparent;
			color: #e2e2e4;
		}
  `}
`;

const DayBox = styled.p`
	display: grid;
	max-width: 375px;
	background-color: white;
	justify-items: center;
	margin: 0 auto;
	width: 100%;
	font-size: 7px;
`;

const DateBox = styled.p`
	display: grid;
	max-width: 375px;
	background-color: white;
	justify-items: center;
	margin: 0 auto;
	width: 100%;
	font-size: 12px;
`;

const Dates = [
	{'id':0,'date':10,'day':'SEN'},
	{'id':1,'date':11,'day':'SEL'},
	{'id':2,'date':12,'day':'RAB'},
	{'id':3,'date':13,'day':'KAM'},
	{'id':4,'date':14,'day':'JUM'},
	{'id':5,'date':15,'day':'SAB'},
	{'id':6,'date':16,'day':'MIN'},
	{'id':7,'date':17,'day':'SEN'},
	{'id':8,'date':18,'day':'SEL'},
	{'id':9,'date':19,'day':'RAB'},
	{'id':10,'date':20,'day':'KAM'},
	{'id':11,'date':21,'day':'JUM'},
	{'id':12,'date':22,'day':'SAB'},
	{'id':13,'date':23,'day':'MIN'},
];

function DateSelector() {
	const [selectedDateID, setSelectedDateID] = useState(0);

	function toggleDate(v) {
		if (selectedDateID !== v) setSelectedDateID(v);
	}

	function DateButton({id,day,date,active}) {
		return (
			<Button disabled={day==='SAB'||day==='MIN'} active={active} onClick={() => toggleDate(id)}>
				<DayBox>{day}</DayBox>
				<DateBox>{date}</DateBox>
			</Button>
		)
	}

  return (
    <Container>
			{ Dates.map(d => 
				<DateButton
					key={d.id}
					id={d.id}
					date={d.date}
					day={d.day}
					active={selectedDateID === d.id}/>
			)}
    </Container>
  );
}

export default DateSelector;
