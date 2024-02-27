import Logo from '../Image/Capture.PNG'
import { Link } from 'react-router-dom'
import { useIsOnline } from '../utils/useApiFetch'
import { useSelector } from 'react-redux'
// import store from '../store'



function Header() {
    const isOnline = useIsOnline()
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)
    if(!isOnline){
        return(<h1>Are you offline</h1>)
    }
  return (
    <div className='flex justify-between mb-2'>
        <div >
            <Link to="/">
                <img className='h-20' src={Logo} alt="logo"  />
            </Link>
        </div>
        <div >
            <ul className='flex p-7'>
                <li className='p-3'>
                    <Link to="/">
                        Home
                    </Link>
                </li >
                <li className='p-3'>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li className='p-3'>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className='p-3'>
                    <Link to="/cart">
                        Cart- {cartItems.length}
                    </Link>
                </li>
                <li className='p-3'>
                    <Link to="/help">
                        Help
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header