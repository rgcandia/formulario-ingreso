import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Index from "./component/Index/Index.jsx";
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
     children:[
      {
        index:true,
        element:<Index/>
      }
     ]
    },
    
  
  ]);
  
  export default router;