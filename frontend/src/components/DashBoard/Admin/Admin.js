import React,{useState,useEffect} from 'react'
import './Admin.css'
import './AdminContent.css'
import SideBar from './SideBar'
import { isMobile } from 'react-device-detect';
import AdminContent from './AdminContent';
const Admin = () => {
    
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  useEffect(() => {
    // console.log('mobile=', isMobile);
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, []);
  return (      
      <div class="maindiv">
          
  <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <AdminContent/>
    </div>

  )
}

export default Admin
