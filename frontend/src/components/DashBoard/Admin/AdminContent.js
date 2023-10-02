import React from 'react'
import './Admin.css'
import {useState,useEffect} from 'react'
import { isMobile } from 'react-device-detect';
import AdminSideBar from './AdminSideBar'
const Admin = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  
    useEffect(() => {
      // console.log('mobile=', isMobile);
      if (isMobile) {
        setSidebarOpen(false);
      }
    }, []);
  return (<>
    <AdminSideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
    <div class="course1">
  <div class='topbar'>
  <button class='oc'onClick={toggleSidebar}>
        {sidebarIsOpen ? '<-' : '->'}
      </button>

      <div class='logoutbtn'>Logout</div>
      <div class='admininfo'>
        <div class="spardha">Spardha</div>
        <div class="logo">LOGO</div>
      </div>
  </div>
         <section class="course">
        <div className='admin_dash_margin'>
        <h1>Admin Dashboard</h1>
        <h2>Access a comprehensive overview of all user data at a glance on this dedicated admin page.</h2>
        </div>
        <div class="row">
            <div class="course-col">
                <div className='icon_n_text'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none">
  <path d="M17.0454 6.69643C18.9204 6.69643 20.4546 5.18962 20.4546 3.34821C20.4546 1.50686 18.9204 0 17.0454 0C15.1705 0 13.6364 1.50686 13.6364 3.34821C13.6364 5.18962 15.1705 6.69643 17.0454 6.69643ZM7.95458 6.69643C9.82952 6.69643 11.3636 5.18962 11.3636 3.34821C11.3636 1.50686 9.82952 0 7.95458 0C6.07963 0 4.54542 1.50686 4.54542 3.34821C4.54542 5.18962 6.07963 6.69643 7.95458 6.69643ZM7.95458 9.15179C5.28393 9.15179 0 10.4352 0 13.058V16.0714H16.0714V13.058C16.0714 10.4352 10.6251 9.15179 7.95458 9.15179ZM17.0454 9.76579C16.7047 9.76579 16.4693 9.76579 16.0714 9.82143C17.3787 10.7702 17.8571 11.3839 17.8571 13.058V16.0714H25V13.058C25 10.4352 19.7161 9.76579 17.0454 9.76579Z" fill="#4D44B5"/>
</svg>
                <h3>All Users</h3>
                </div>
                <p>Registered users and their details</p>
                <a class="hero-btn" href="/admin/allusers">View</a>
            </div>

           
            <div class="course-col">
            <div className='icon_n_text'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M16.9086 0.285498C16.5279 -0.0951661 15.9215 -0.0951661 15.5409 0.285498L8.19248 7.63386C8.07636 7.74356 7.99894 7.88548 7.94732 8.04031L6.74732 12.0468C6.64408 12.3887 6.74086 12.7564 6.99248 13.0081C7.17311 13.1952 7.42473 13.2919 7.67635 13.2919C7.76665 13.2919 7.86344 13.279 7.95377 13.2532L11.9602 12.0532C12.1151 12.0016 12.257 11.9242 12.3666 11.8081L19.7151 4.45967C19.8957 4.27905 19.9989 4.03389 19.9989 3.77581C19.9989 3.51777 19.8957 3.2726 19.7151 3.09194L16.9086 0.285498Z" fill="#5041BC"/>
  <path d="M19.0323 9.03378C18.4977 9.03378 18.0645 9.46725 18.0645 10.0015V16.4531C18.0645 17.3428 17.3409 18.066 16.4516 18.066H3.54839C2.65908 18.066 1.93548 17.3428 1.93548 16.4531V3.54991C1.93548 2.66029 2.65908 1.93701 3.54839 1.93701H10C10.5346 1.93701 10.9677 1.50354 10.9677 0.969268C10.9677 0.434997 10.5346 0.00152588 10 0.00152588H3.54839C1.5918 0.00152588 0 1.59364 0 3.54991V16.4531C0 18.4094 1.5918 20.0015 3.54839 20.0015H16.4516C18.4082 20.0015 20 18.4094 20 16.4531V10.0015C20 9.46725 19.5668 9.03378 19.0323 9.03378Z" fill="#5041BC"/>
</svg>
                <h3>Sports Registration</h3>
                </div> 
                <p>Sports registrations and their details.</p>
                <a class="hero-btn" href="/admin/showtable">View</a>
            </div>

            <div class="course-col">
            <div className='icon_n_text'>   
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0529 4.24971H13.2819C12.9915 4.24971 12.7533 3.96911 12.7533 3.63098V2.03678C12.7533 0.912613 11.8776 0 10.8018 0H1.94713C0.875723 0 0 0.912613 0 2.03678V20.6254C0 21.7451 0.875723 22.6622 1.94713 22.6622H15.0529C16.1287 22.6622 17 21.7451 17 20.6254V6.28649C17 5.16233 16.1287 4.24971 15.0529 4.24971Z" fill="#5041BC"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5868 20.6256C15.5868 20.9672 15.3478 21.2443 15.0538 21.2443H1.94805C1.65762 21.2443 1.41943 20.9672 1.41943 20.6256V2.03695C1.41943 1.69439 1.65762 1.41821 1.94805 1.41821H10.8027C11.0967 1.41821 11.3357 1.69439 11.3357 2.03695V3.63114C11.3357 4.75089 12.207 5.6635 13.2829 5.6635H15.0538C15.3478 5.6635 15.5868 5.9441 15.5868 6.28666V20.6256Z" fill="#5041BC"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54226 7.08132H9.21188C9.60237 7.08132 9.91671 6.76354 9.91671 6.37229C9.91671 5.98193 9.60237 5.66327 9.21188 5.66327H3.54226C3.15177 5.66327 2.83301 5.98193 2.83301 6.37229C2.83301 6.76354 3.15177 7.08132 3.54226 7.08132Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4586 9.44177H3.54226C3.15177 9.44177 2.83301 9.75601 2.83301 10.1508C2.83301 10.5412 3.15177 10.8554 3.54226 10.8554H13.4586C13.8535 10.8554 14.1678 10.5412 14.1678 10.1508C14.1678 9.75601 13.8535 9.44177 13.4586 9.44177Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4586 13.2159H3.54226C3.15177 13.2159 2.83301 13.5337 2.83301 13.925C2.83301 14.3153 3.15177 14.634 3.54226 14.634H13.4586C13.8535 14.634 14.1678 14.3153 14.1678 13.925C14.1678 13.5337 13.8535 13.2159 13.4586 13.2159Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4586 16.9946H3.54226C3.15177 16.9946 2.83301 17.3132 2.83301 17.7036C2.83301 18.094 3.15177 18.4126 3.54226 18.4126H13.4586C13.8535 18.4126 14.1678 18.094 14.1678 17.7036C14.1678 17.3132 13.8535 16.9946 13.4586 16.9946Z" fill="white"/>
</svg>
                <h3>Doc Verification</h3>
                </div> 
                <p>Document verifications and their details</p>
                <a class="hero-btn" href="/">View</a>
            </div>
            <div class="course-col">
            <div className='icon_n_text'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M14.5 8.09448H18.0005C17.8602 6.70611 17.3985 5.3695 16.6518 4.19061C15.4842 5.18735 14.7193 6.57502 14.5 8.09448Z" fill="#5041BC"/>
  <path d="M14.5 9.9035C14.7195 11.4231 15.4843 12.811 16.6518 13.8083C17.3984 12.629 17.8601 11.2921 18.0005 9.9035H14.5Z" fill="#5041BC"/>
  <path d="M9.90332 8.09446H12.6702C12.9031 6.0135 13.9303 4.10275 15.5375 2.76056C14.0509 1.19493 12.0515 0.215281 9.90332 0V8.09446Z" fill="#5041BC"/>
  <path d="M5.32823 8.09446H8.09513V0C5.94693 0.215281 3.94751 1.19493 2.46094 2.76056C4.06779 4.10305 5.09485 6.01364 5.32823 8.09446Z" fill="#5041BC"/>
  <path d="M0 9.9035C0.140367 11.2921 0.602096 12.629 1.34862 13.8083C2.51612 12.811 3.28096 11.4231 3.50045 9.9035H0Z" fill="#5041BC"/>
  <path d="M1.34862 4.19061C0.601987 5.3695 0.140244 6.70611 0 8.09448H3.50045C3.28114 6.57502 2.51625 5.18735 1.34862 4.19061Z" fill="#5041BC"/>
  <path d="M12.6702 9.9035H9.90332V17.9989C12.0513 17.7828 14.0505 16.8033 15.5375 15.2383C13.9307 13.8954 12.9037 11.9845 12.6702 9.9035Z" fill="#5041BC"/>
  <path d="M8.09513 9.9035H5.32823C5.0953 11.9845 4.06816 13.8952 2.46094 15.2374C3.94751 16.803 5.94693 17.7827 8.09513 17.998V9.9035Z" fill="#5041BC"/>
</svg>
                <h3>All Games</h3>
                </div>
                <p>All Games of categories of Boy, Girl & Mixed</p>
                <a class="hero-btn" href="/admin/allgames">View</a>
            </div>

        </div>
       

    </section >
    </div></>
  )
}

export default Admin