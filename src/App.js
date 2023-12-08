import Layout from './components/Layout'
import BuyCar from './pages/BuyCar'
import SellCar from './pages/SellCar'
import TrafficLight from './pages/TrafficLight'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><BuyCar /></Layout>} />
          <Route path="/sellcar" element={<Layout><SellCar /></Layout>} />
          <Route path="/trafficlight" element={<Layout><TrafficLight /></Layout>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
