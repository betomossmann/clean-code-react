import { ApiContext } from '@/presentation/contexts'

import React, { useContext } from 'react'
import { type RouteProps, Route, Routes, Navigate } from 'react-router-dom'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useContext(ApiContext)
  return getCurrentAccount()?.accessToken
    ? (
    <Routes><Route {...props} /></Routes>
      )
    : (
    <Navigate to="/login" />
      )
}

export default PrivateRoute