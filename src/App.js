import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		fetch('https://63f8f160deed51d7badb58d2.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddToCart = (obj) => {
		console.log(obj);
		setCartItems((prev) => [...prev, obj]);
	};

	return (
		<div className="wrapper">
			{cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems} />}

			<Header
				onCartClick={() => {
					setCartOpened(true);
				}}
			/>

			<div className="content p-[40px]">
				<div className="flex justify-between items-center mb-[30px]">
					<h1>Все кроссовки</h1>
					<div className="search-block flex">
						<img src="./img/search.svg" alt="search" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>

				<div className="sneakers flex flex-wrap">
					{items.map((item, i) => (
						<Card
							key={i}
							name={item.name}
							price={item.price}
							src={item.imageUrl}
							onPlus={(obj) => {
								onAddToCart(item);
							}}
							onFavorite={() => {
								console.log('favorite');
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
