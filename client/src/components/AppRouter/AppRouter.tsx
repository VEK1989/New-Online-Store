import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { privateRoutes, publicRoutes } from '../../router/route'
import { SHOP_ROUTE } from '../../utils/consts'

const AppRouter = () => {
	const isAuth = useTypedSelector(state => state.auth)
	return (
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
	);
};

export default AppRouter;