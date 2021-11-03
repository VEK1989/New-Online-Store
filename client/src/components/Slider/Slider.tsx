import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import style from './Slider.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Slide from '../Slide/Slide'
import { useDispatch } from 'react-redux'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator'

SwiperCore.use([Navigation, Pagination, Autoplay])

const Slider: React.FC = () => {
	const { newProducts, totalCount, limit } = useTypedSelector(state => state.goods)
	const dispatch = useDispatch()

	useEffect(() => {
		const lastPage = Math.floor(totalCount / limit) + 1
		dispatch(GoodsActionCreator.getNewGoods(null, null, limit, lastPage))
	}, [totalCount])

	return (
		<Swiper
			autoplay
			spaceBetween={50}
			slidesPerView={3}
		>
			{
				newProducts.reverse().map(item => {
					return <SwiperSlide
						key={item.id}
					>
						<Slide image={item.img} rating={item.rating} id={item.id} />
					</SwiperSlide>
				})
			}
		</Swiper>
	);
};

export default Slider;