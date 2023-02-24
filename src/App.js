import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	return (
		<div className="wrapper">
			<Drawer />

			<Header />

			<div className="content p-[40px]">
				<div className="flex justify-between items-center mb-[30px]">
					<h1>Все кроссовки</h1>
					<div className="search-block flex">
						<img src="./img/search.svg" alt="search" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>

				<div className="sneakers flex flex-wrap">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
