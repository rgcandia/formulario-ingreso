import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import Index from "./component/Index/Index.jsx";
import Error404 from './component/Error404/Error404.jsx'
const router = createBrowserRouter([
    {
      path: '/',
      errorElement:<Error404/>,
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