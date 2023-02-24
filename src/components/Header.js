function Header(props) {
	return (
		<header className="flex justify-between items-center p-[40px]">
			<div className="flex justify-between items-center cursor-pointer">
				<img width={45} height={45} className="mr-[15px]" src="./img/logo.png" alt="logo" />
				<div className="headerInfo">
					<h3 className="headerTitle">React sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="headerMenu flex">
				<li className="flex cursor-pointer items-center mr-[30px]" onClick={props.onCartClick}>
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
	);
}

export default Header;
