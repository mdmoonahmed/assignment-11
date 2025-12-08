import { Outlet } from 'react-router';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';


const Root = () => {

  
    return (
        <div className='relative mx-auto'>
            <div className='sticky top-0 z-50'>
               <Navbar  />
            </div>
            <Outlet />
            <Footer />  
        
        </div>
    );
};

export default Root;