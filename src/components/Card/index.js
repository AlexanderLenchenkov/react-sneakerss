import styles from './Card.module.scss';

function Card(props) {
	return (
		<div className={styles.card}>
			<div className="absolute cursor-pointer">
				<img src="./img/liked.svg" alt="Favorite" />
			</div>
			<img className="mx-auto" width={133} height={112} src={props.src} alt="Sneakers" />
			<h5>{props.name}</h5>
			<div className="flex justify-between items-center mt-[15px]">
				<div className="flex flex-col text-[13px]">
					<span>Цена:</span>
					<b>{props.price} руб.</b>
				</div>
				<button>
					<img src="./img/plus.svg" alt="" />
				</button>
			</div>
		</div>
	);
}

export default Card;
