import {useState} from 'react';
import './App.css';

function App() {

	const [color, setColor] = useState('red');
	const [colorTxt, setColorTxt] = useState('blue');
	const onButtonClick = () => {
		if (color === 'blue') {
			setColor('red');	
			setColorTxt('blue');
		} else {
			setColor('blue');	
			setColorTxt('red');
		}
	};

	const [btnEnabled, setBtnEnabled] = useState(false);
	const onCheckBoxChange = (checked) => {
		setBtnEnabled(checked);
	};

	

  return (
		<div>
			<button disabled={btnEnabled} onClick={onButtonClick} style={{backgroundColor: color}}>Change to {colorTxt}</button>
			<input onChange={(e) => {onCheckBoxChange(e.target.checked)}} type='checkbox' />
		</div>
  );
}

export default App;
