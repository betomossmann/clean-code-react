import { ApiContext } from '@/presentation/contexts'

import React, { useContext } from 'react'
import { Route, type RouteProps, Navigate, Routes } from 'react-router-dom'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useContext(ApiContext)
  const accessToken = getCurrentAccount()?.accessToken

  return accessToken
    ? <Routes><Route {...props} /></Routes>
    : <Navigate to="/login" replace={true} />
}

export default PrivateRoute
