import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Main from './components/Hero/main'
import Card from './components/Card'
import TypoGraph from './components/typoGraph'
import Sponsor from './components/Sponsor'
import RecruitmentBoard from './pages/RecruitmentBoard'

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Main />
              <Card />
              <TypoGraph />
              <Sponsor />
            </>
          } 
        />
        <Route path="/recruitment" element={<RecruitmentBoard />} />
      </Routes>
    </Router>
  )
}

export default App
