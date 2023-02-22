function App() {
	return (
		<div className="wrapper">
			<header className="flex justify-between items-center p-[40px]">
				<div className="flex justify-between items-center cursor-pointer">
					<img width={45} height={45} className="mr-[15px]" src="./img/logo.png" alt="logo" />
					<div className="headerInfo">
						<h3 className="headerTitle">React sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="headerMenu flex">
					<li className="flex items-center mr-[30px]">
						<img src="./img/cart.svg" alt="cart" />
						<span className="ml-[10px]">1205 руб.</span>
					</li>
					<li className="mr-[30px]">
						<img src="./img/favorite.svg" alt="favorite" />
					</li>
					<li>
						<img src="./img/user.svg" alt="user" />
					</li>
				</ul>
			</header>

			<div className="content p-[40px]">
				<h1>Все кроссовки</h1>

				<div className="sneakers flex flex-wrap">
					<div className="card">
						<img
							className="mx-auto"
							width={133}
							height={112}
							src="./img/sneakers1.jpg"
							alt="skeakers"
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="flex justify-between items-center mt-[15px]">
							<div className="flex flex-col text-[13px]">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button>
								<img src="./img/plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="card">
						<img
							className="mx-auto"
							width={133}
							height={112}
							src="./img/sneakers1.jpg"
							alt="skeakers"
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="flex justify-between items-center mt-[15px]">
							<div className="flex flex-col text-[13px]">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button>
								<img src="./img/plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="card">
						<img
							className="mx-auto"
							width={133}
							height={112}
							src="./img/sneakers1.jpg"
							alt="skeakers"
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="flex justify-between items-center mt-[15px]">
							<div className="flex flex-col text-[13px]">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button>
								<img src="./img/plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="card">
						<img
							className="mx-auto"
							width={133}
							height={112}
							src="./img/sneakers1.jpg"
							alt="skeakers"
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="flex justify-between items-center mt-[15px]">
							<div className="flex flex-col text-[13px]">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button>
								<img src="./img/plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="card">
						<img
							className="mx-auto"
							width={133}
							height={112}
							src="./img/sneakers1.jpg"
							alt="skeakers"
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="flex justify-between items-center mt-[15px]">
							<div className="flex flex-col text-[13px]">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button>
								<img src="./img/plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="card">
						<img
							className="mx-auto"
							width={133}
							height={112}
							src="./img/sneakers1.jpg"
							alt="skeakers"
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="flex justify-between items-center mt-[15px]">
							<div className="flex flex-col text-[13px]">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button>
								<img src="./img/plus.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="card">
						<img
							className="mx-auto"
							width={133}
							height={112}
							src="./img/sneakers1.jpg"
							alt="skeakers"
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="flex justify-between items-center mt-[15px]">
							<div className="flex flex-col text-[13px]">
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button>
								<img src="./img/plus.svg" alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
