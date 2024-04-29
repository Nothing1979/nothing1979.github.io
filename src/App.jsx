import * as react from 'react'
import './App.css'

import {DATA, DATA_00, DATA_01, DATA_02, DATA_03} from './Data'

const App = () => {

	const visible = [{
		id: 0,
		visible: true
	}, {
		id: 1,
		visible: false
	}]

	const element_01 = [{
		rows: [{
			id: 0,
			text: "76jhgjh"
		}]
	}]

	const element_02 = [{
		rows: [{
			id: 0,
			text: "sdfsdfsddf"
		}]
	}]

	const elements = [element_01, element_02]

	for(let i = 0; i < DATA.length; i++) (
		console.log(i)
	)

	return (
		<>
			{}
		</>
	);
};

export default App;

/*


	strings.forEach(string => {
		if(string.visible) {
			string.rows.map((row) => (
				console.log(row)
			))
		}
	})


				{strings.forEach(string => {
				if(string.visible) {
					string.rows.map((row) => (
						<div key={row.id}>{row.test}</div>
					))
				}
			})}

			{strings.forEach(string => {
				if(string.visible) {
					string.rows.map((row) => (
						<div key={row.id}>{row.text}</div>
					))
				}
			})}

			{strings.map((string) => (
				<div key={string.id}>{string.data[0].text}</div>
			))}

<div>
				{photos.map((photo) => (
					<img key={photo.id} src={photo.url} alt={photo.title} width={100} />
				))}
			</div>


function App() {
	const [count, setCount] = react.useState(0)

	const ELEMENTS = [{
		id: 0,
		visible: true,
		data: [{
			id: 0,
			title: "Element 0: Data 0"
		},{
			id: 1,
			title: "Element 0: Data 1"
		}]
	},{
		id: 1,
		visible: false,
		data: [{
			id: 0,
			title: "Element 1: Data 0"
		},{
			id: 1,
			title: "Element 1: Data 1"
		}]
	}]

	return (
		<>

			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App*/