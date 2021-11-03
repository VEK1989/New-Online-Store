import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { privateRoutes, publicRoutes } from '../../router/route'
import { SHOP_ROUTE } from '../../utils/consts'
import style from './AppRouter.module.css'

const AppRouter: React.FC = () => {
	const isAuth = useTypedSelector(state => state.auth.isAuth)

	return (
		<div className={style.main}>
			<Switch>
				{
					isAuth && privateRoutes.map(({ path, Component }) => {
						return <Route key={path} path={path} component={Component} exact />
					})
				}
				{
					publicRoutes.map(({ path, Component }) => {
						return <Route key={path} path={path} component={Component} exact />
					})
				}
				<Redirect to={SHOP_ROUTE} />
			</Switch>
		</div>
	);
};

export default AppRouter;