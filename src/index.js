import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Eroor from './components/Error';
import Contact from "./components/Contact"
import Body from './components/body';
import RestrauntManu from './components/RestrauntManu';
import Cart from './components/Cart';
// import Help from './components/Help';

const Help =  lazy(()=>import("./components/Help"))
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Eroor />,
    children:[
      {
        path:'/',
        element: <Body />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path:'/restaurant/:res_id',
        element: <RestrauntManu />
      },
      {
        path:'/cart',
        element: <Cart />
      },
      {
        path:'/Help',
        element:(
          <Suspense fallback={<h1>Thoda Ruko sabar kro Load ho rha hai....</h1>}>
            <Help />
          </Suspense>)
      }
    ]
  },
  
  
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);


reportWebVitals();
