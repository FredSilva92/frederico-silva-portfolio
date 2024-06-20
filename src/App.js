import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home'
import Career from './components/Career'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import './App.scss';
import LetsConnect from './components/LetsConnect';
import SitePath from './enums/path.ts';


function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={SitePath.CAREER} element={<Career />}/>
          <Route path={SitePath.EDUCATION} element={<Education />}/>
          <Route path={SitePath.PORTFOLIO} element={<Portfolio />}/>
          <Route path={SitePath.LETS_CONNECT} element={<LetsConnect />}/>
          <Route/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
