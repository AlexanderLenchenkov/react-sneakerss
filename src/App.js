import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const sneakers = [
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12999,
		imageUrl: './img/sneakers/1.jpg',
	},
	{ name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: './img/sneakers/2.jpg' },
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8499,
		imageUrl: './img/sneakers/3.jpg',
	},
	{ name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: './img/sneakers/4.jpg' },
	{
		name: 'Мужские Кроссовки Under Armour Curry 8',
		price: 15199,
		imageUrl: './img/sneakers/5.jpg',
	},
	{ name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageUrl: './img/sneakers/6.jpg' },
	{
		name: 'Мужские Кроссовки Jordan Air Jordan 11',
		price: 10799,
		imageUrl: './img/sneakers/7.jpg',
	},
	{ name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: './img/sneakers/8.jpg' },
];

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
					{sneakers.map((obj) => (
						<Card name={obj.name} price={obj.price} src={obj.imageUrl} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
