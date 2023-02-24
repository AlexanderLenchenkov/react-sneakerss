function Card() {
	return (
		<div className="card">
			<div className="absolute cursor-pointer">
				<img src="./img/liked.svg" alt="liked" />
			</div>
			<img className="mx-auto" width={133} height={112} src="./img/sneakers1.jpg" alt="skeakers" />
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
	);
}

export default Card;
