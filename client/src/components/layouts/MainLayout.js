import {Link, Outlet} from "react-router-dom";
export default function MainLayout(){
      return(
        <>
             <nav className="nav-bar">
                <ul>
                <li>
                   <Link to="/">Home</Link>
                </li>
            <li>
                <Link to="todo">Todo</Link>
            </li>
            
            <li>
                <Link to="contact">Contact</Link>
            </li>
            
                </ul>
             </nav>
             <Outlet />
        </>
      );
}