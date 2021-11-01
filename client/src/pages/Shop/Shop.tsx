import React from 'react'
import GenreBar from '../../components/GenreBar/GenreBar'
import Goods from '../../components/Goods/Goods'
import Pagination from '../../components/Pagination/Pagination'
import Slider from '../../components/Slider/Slider'
import style from './Shop.module.css'

const Shop: React.FC = () => {
	return (
		<div className={style.shopBody}>
			<section className={style.startBlock}>
				<div className={style.wrapper}>
					<div className={style.mainHeaders}>
						<h3>Откывай новые миры &#128214;</h3>
						<h1 className={style.firstHeader}>Получи любимую книгу по лучшей цене &#129297;</h1>
						<div className={style.sliderBlock}>
							<h3>Последние поступления:</h3>
							<Slider />
						</div>
					</div>
					<div className={style.poster}>
					</div>
				</div>
			</section>
			<h2 className={style.shopHeader}>У нас в продаже</h2>
			<section className={style.shop}>
				<GenreBar />
				<Goods />
				<Pagination />
			</section>
		</div>
	);
};

export default Shop;