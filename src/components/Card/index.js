import { useState, useEffect } from 'react';
import styles from './Card.module.scss';

function Card({ name, price, src, onFavorite, onPlus }) {
	const [isAdded, setIsAdded] = useState(false);

	const onPlusClick = () => {
		onPlus({ name, price, src });
		setIsAdded(!isAdded);
	};

	return (
		<div className={styles.card}>
			<div className="absolute cursor-pointer" onClick={onFavorite}>
				<img src="./img/liked.svg" alt="Favorite" />
			</div>
			<img className="mx-auto" width={133} height={112} src={src} alt="Sneakers" />
			<h5>{name}</h5>
			<div className="flex justify-between items-center mt-[15px]">
				<div className="flex flex-col text-[13px]">
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					src={isAdded ? './img/checked.svg' : './img/unchecked.svg'}
					alt="Plus"
					onClick={() => onPlusClick()}
				/>
			</div>
		</div>
	);
}

export default Card;
