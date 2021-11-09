import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GoodsActionCreator } from '../../store/action-creators/goodsActionCreator'
import ModalGoods from '../Modals/ModalGoods/ModalGoods'
import MyButton from '../ui/MyButton/MyButton'
import style from './AdminGoods.module.css'

const AdminGoods: React.FC = () => {
	const { goods, totalCount } = useTypedSelector(state => state.goods)
	const dispatch = useDispatch()

	const [visible, setVisible] = useState(false)

	const removeProduct = (id: number) => {
		dispatch(GoodsActionCreator.removeOneProduct(id))
	}

	useEffect(() => {
		dispatch(GoodsActionCreator.getAllGoods(null, null, totalCount))
	}, [])

	return (
		<div>
			<MyButton onClick={() => setVisible(true)}>Добавить товар</MyButton>
			<table className={style.goodsTable}>
				<tbody>
					<tr>
						<th>id</th>
						<th>Изображение</th>
						<th>Название товара</th>
						<th>Цена</th>
						<th>Рейтинг</th>
						<th>Действия</th>
					</tr>
					{
						goods.length > 0
							? goods.map((product) => (
								<tr key={product.name}>
									<td>{product.id}</td>
									<td><img src={`http://localhost:5000/${product.img}`} alt='product' width='20px' height='25px' /></td>
									<td>{product.name}</td>
									<td>{product.price} &#8381;</td>
									<td>{product.rating}</td>
									<td><MyButton onClick={() => removeProduct(product.id)}>X</MyButton></td>
								</tr>
							))
							: null
					}
				</tbody>
			</table>
			<ModalGoods
				visible={visible}
				onHide={() => setVisible(false)}
			/>
		</div>
	);
};

export default AdminGoods;