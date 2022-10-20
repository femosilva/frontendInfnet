import { Home, UpdatePage } from 'pages'
import { Route, Routes } from 'react-router-dom'

const UnauthenticatedApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:id' element={<UpdatePage />} />
        </Routes>
    )
}

export default UnauthenticatedApp
