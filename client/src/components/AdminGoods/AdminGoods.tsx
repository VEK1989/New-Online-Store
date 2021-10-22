import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import style from './AdminGoods.module.css'

const AdminGoods: React.FC = () => {
	const goods = useTypedSelector(state => state.goods.goods)

	return (
		<div>
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
						goods.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td><img src={`http://localhost:5000/${product.img}`} alt='product' width='20px' height='25px' /></td>
								<td>{product.name}</td>
								<td>{product.price} &#8381;</td>
								<td>{product.rating}</td>
								<td>Действия</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	);
};

export default AdminGoods;