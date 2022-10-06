import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Restaurant from "./components/Restaurant/Restaurant";
import Main from "./layout/main";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
      {
        errorElement: <ErrorPage/>,
        children:[
          {
            path: '/restaurant',
            element: <Restaurant/>,
            loader: async ()=> fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
          },
        ],
      }
     ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
