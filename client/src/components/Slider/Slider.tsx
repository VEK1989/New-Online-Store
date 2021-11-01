import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import style from './Slider.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Slide from '../Slide/Slide'

SwiperCore.use([Navigation, Pagination, Autoplay])

const Slider: React.FC = () => {
	const { goods } = useTypedSelector(state => state.goods)

	return (
		<Swiper
			autoplay
			navigation
			spaceBetween={50}
			slidesPerView={3}
		>
			{
				goods.map(item => {
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