import { ApiContext } from '@/presentation/contexts'
import React, { useContext } from 'react'
import { type RouteProps, Route, Navigate, Routes } from 'react-router-dom'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useContext(ApiContext)
  const isAuthenticated = !!getCurrentAccount()?.accessToken

  return isAuthenticated ? <Routes><Route {...props} /></Routes> : <Navigate to="/login" replace={true} />
}

export default PrivateRoute
