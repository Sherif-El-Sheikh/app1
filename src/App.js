import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MasterLayout from './components/master page/MasterLayout';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import NotFound from './components/notfound/NotFound';

const router = createBrowserRouter([
  {path: '', element: <MasterLayout/>, children: [
    // {path: '', element: <Home/>},
    {index: true, element: <Home/>},
    {path: 'home', element: <Home/>},
    {path: 'about', element: <About/>},
    {path: 'portfolio', element: <Portfolio/>},
    {path: 'contact', element: <Contact/>},
    {path: '*', element: <NotFound/>},
  ]}
])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
