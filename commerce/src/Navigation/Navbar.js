import React from 'react'
import { Link } from 'react-router-dom';
//import { Productos } from '../Api/Api';
import { SidebarData } from './SidebarData';
import './Navbar.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Navbar() {


  return (
    <div>
      <nav className='navbar' >

        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.link}>

                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}

        <li className='login'>
          <Link to='/cuenta'>

            <span className='cuenta'>crear cuenta</span>
          </Link>
          <Link to='/login'>

            <span>Login</span>
          </Link>
          <Link to='/carrito' className='link'>
            <AddShoppingCartIcon />

          
        </Link>
        </li>


        

      </nav>



    </div>
  )
}

export default Navbar