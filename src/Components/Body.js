import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import StudentList from "./StudentList";
import StudentDetails from "./StudentDetails";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
import NotFound from "./NotFound";


const Body = () =>{
    const appRouter = createBrowserRouter([
    {
        path: '/',
        element:<Home/>
    },
    {
        path:'/studentslist',
        element:<StudentList/>
    },
    {
        path:'/students:id',
        element:<StudentDetails/>
    },
    {
        path:'/add-student',
        element:<AddStudent/>
    },
    {
        path:'/edit-student/:id',
        element:<EditStudent/>
    },
    // {
    //     path:'*',
    //     element:<NotFound/>
    // },
]);
    return([
        <div>
            <RouterProvider router={appRouter}/> 
        </div>
    ])
}

export default Body;