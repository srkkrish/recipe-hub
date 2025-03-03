import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import RecipeHome from './components/RecipeHome/RecipeHome'
import DetailedRecipe from './components/DetailedRecipe/DetailedRecipe'
import Logout from './components/Logout/Logout'

function App() {
  const recipehubStyle = ["/logout"].includes(location.pathname)
    ? { margin: "0px" }
    : { margin: "16px 16px 0" };

  const HeaderWrapper = () => {
    const location = useLocation();
    const hideHeaderOnRoutes = ["/logout"];

    if (hideHeaderOnRoutes.includes(location.pathname)) {
      return null;
    }

    return <Header title="RecipeHub" />;
  }

  return (
    <Router>
      {<HeaderWrapper />}
      <section className='recipehub' style={recipehubStyle}>
        <Suspense fallback={<div style={{ fontSize: '1.25rem' }}>Loading &#x1F503; </div>}>
          <Routes>
            <Route path="/" element={<RecipeHome />} />
            <Route path="/recipe" element={<DetailedRecipe />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Suspense>
      </section>
    </Router>
  )
}

export default App
