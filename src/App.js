import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import Header from '~/layouts/components/Header'
import Footer from '~/layouts/components/Footer'

function App() {
    return (
        <Router>
            <div className='App'>
                <Header/>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        return <Route key={index} path={route.path} element={<Page/>}/>
                    })}
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;
