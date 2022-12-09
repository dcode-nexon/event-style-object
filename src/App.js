function App() {
	const box = {
		width: 100,
		height: 100,
		backgroundColor: 'gray',
		margin: 50,
	};

	const changeBg = (e, color) => {
		e.target.style.backgroundColor = color;
	};

	return (
		<div className='wrap'>
			<article style={box} onClick={(e) => changeBg(e, 'hotpink')}></article>
			<article style={box} onClick={(e) => changeBg(e, 'lightblue')}></article>
			<article style={box} onClick={(e) => changeBg(e, 'lightgreen')}></article>
		</div>
	);
}

export default App;
