import React from 'react'
import { Redirect } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

import Libraries from '../pages/Libraries'

import Books from '../pages/Books'

import Users from '../pages/Users'

import Contact from '../pages/Contact'

import Page404 from '../pages/Page404'

import Login from '../pages/Login'

import Register from '../pages/Register'

import AddLibrary from '../pages/LibraryDashboard/AddLibrary'

import LibAdmin from '../pages/LibraryDashboard/LibAdmin'

const userRoutes = [

    { path: '/dashboard', component: Dashboard },
    { path: '/libraries', component: Libraries },
    { path: '/libraries/:libraryID/admin/:active_tab', component: LibAdmin },
    { path: '/libraries/add-library', component: AddLibrary },
    { path: '/books', component: Books },
    { path: '/users', component: Users },
    { path: '/contact', component: Contact },

    { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
    { path: "*", component: Page404 },

]

const authRoutes = [

    { path: '/login', component: Login },
    { path: '/register', component: Register }

]

export { userRoutes, authRoutes }