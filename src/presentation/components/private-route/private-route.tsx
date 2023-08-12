import { currentAccountState } from '@/presentation/components'

import React from 'react'
import { Navigate, Outlet, type RouteProps } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const PrivateRoute: React.FC<RouteProps> = () => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  return getCurrentAccount()?.accessToken
    ? <Outlet />
    : <Navigate to='/login' replace={true} />
}

export default PrivateRoute
