import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedTable() {
    const isTableLoggedin = localStorage.getItem("table")

    if (!isTableLoggedin) {
        return <Navigate to="/color-game/select-table" />
    }
    return <Outlet />


}

