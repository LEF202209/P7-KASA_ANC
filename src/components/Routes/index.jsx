import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home"
import About from "../../pages/About"
import Accomodation from "../../pages/Accomodation"
import Error from "../../pages/Error"

// défini les routes, c'ette fonction est appelé dans index.js
function Routes() {
    const router = createBrowserRouter([
        { path:"/", element:<Home />, errorElement:<Error /> },
        { path: "/about", element: <About />, errorElement:<Error /> },
        { path: "/accomodation/:id", element: <Accomodation />, errorElement:<Error /> },
        { path: "*", element: <Error /> }  // toutes les routes non trouvées iront vers errorPage
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
        
}

export default Routes