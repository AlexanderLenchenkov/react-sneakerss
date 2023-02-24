import React from 'react';

function Drawer({ onClose, items = [] }) {
	return (
		<div className="overlay">
			<div className="drawer">
				<h2 className=" flex justify-between items-center mb-[30px]">
					Корзина
					<img
						className="removeBtn cursor-pointer"
						src="./img/remove.svg"
						alt="Close"
						onClick={onClose}
					/>
				</h2>
				<div className="items">
					{items.map((obj) => (
						<div className="cartItem flex items-center">
							<div
								style={{ backgroundImage: `url(${obj.imageUrl})` }}
								className="cartItemImg"></div>
							{/* <img
							className="mr-[20px]"
							width={70}
							height={70}
							src="./img/sneakers1.jpg"
							alt="sneakers"
						/> */}
							<div className="mr-[20px]">
								<p>{obj.name}</p>
								<b>{obj.price} руб.</b>
							</div>
							<img className="removeBtn" src="./img/remove.svg" alt="remove" />
						</div>
					))}
				</div>

				<div className="cartTotalBlock">
					<ul>
						<li className="flex">
							<span>Итого: </span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li className="flex">
							<span>Налог 5%: </span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className="greenButton">
						Оформить заказ
						<img src="./img/arrow.svg" alt="arrow" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
