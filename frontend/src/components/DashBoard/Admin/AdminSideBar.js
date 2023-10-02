import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome
// } from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTasks } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';
// import {Link } from 'react-router';

// import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // console.log('mobile=', isMobile);
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  const handleClick = () => {
    // console.log('handle click');
    if (mobile) {
      toggle();
    }
  };
  const handleClick2 = () => {
    // console.log('handle click');
    if (mobile) {
      toggle();
    }

    localStorage.removeItem('token');
    // window.location.href = '/';
  };

  return (
    <div
      className={classNames('sidebar', { 'is-open': isOpen })}
      id="navigation"
    >
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: '#fff' }}>
          &times;
        </span>
        {/* <h3>Bootstrap Sidebar</h3> */}
        <div className="logo_db">
          <Link to="/">
            <img
              src="/images/logo/spardha-logo-white.png"
              alt="spardha-logo"
              className="hidden-sm spardha-logo"
            />
            {/* <img src="/images/logo/spardha-small-white.png" alt="spardha-logo" className="visible-xs visible-sm circle-logo"/> */}
          </Link>
        </div>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3 navi">
          {/* <p>Dummy Heading</p> */}
          {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}

          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/dashboard/home'}
              onClick={() => {
                handleClick();
              }}
            >
              {/* <FontAwesomeIcon icon={faHome} className="mr-2 icon_bar" /> */}
              <FaHome className="mr-2 icon_bar" />
              DashBoard
            </NavLink>
          </NavItem>
          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={"/admin/allusers"}
              onClick={() => {
                handleClick();
              }}
            >
              {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2 icon_bar" /> */}
              <FaTasks className="mr-2 icon_bar" />
              <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9545 5.08929C14.3795 5.08929 15.5455 3.94411 15.5455 2.54464C15.5455 1.14522 14.3795 0 12.9545 0C11.5296 0 10.3637 1.14522 10.3637 2.54464C10.3637 3.94411 11.5296 5.08929 12.9545 5.08929ZM6.04548 5.08929C7.47044 5.08929 8.63635 3.94411 8.63635 2.54464C8.63635 1.14522 7.47044 0 6.04548 0C4.62052 0 3.45452 1.14522 3.45452 2.54464C3.45452 3.94411 4.62052 5.08929 6.04548 5.08929ZM6.04548 6.95536C4.01579 6.95536 0 7.93072 0 9.92411V12.2143H12.2143V9.92411C12.2143 7.93072 8.07504 6.95536 6.04548 6.95536ZM12.9545 7.422C12.6956 7.422 12.5166 7.422 12.2143 7.46429C13.2078 8.18535 13.5714 8.65179 13.5714 9.92411V12.2143H19V9.92411C19 7.93072 14.9842 7.422 12.9545 7.422Z" fill="white"/>
</svg>

            All Users
            </NavLink>
          </NavItem>
          {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/admin/showtable'}
              onClick={() => {
                handleClick();
              }}
            >
              {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
            

              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5274 0.228399C13.2228 -0.0761329 12.7377 -0.0761329 12.4332 0.228399L6.55447 6.10709C6.46157 6.19485 6.39964 6.30838 6.35834 6.43225L5.39835 9.63742C5.31575 9.91098 5.39318 10.2052 5.59448 10.4064C5.73898 10.5561 5.94027 10.6335 6.14157 10.6335C6.2138 10.6335 6.29124 10.6232 6.3635 10.6026L9.56864 9.64258C9.69254 9.60128 9.80607 9.53935 9.8938 9.44645L15.7725 3.56774C15.9171 3.42324 15.9996 3.22711 15.9996 3.02065C15.9996 2.81422 15.9171 2.61808 15.7725 2.47355L13.5274 0.228399Z" fill="white"/>
<path d="M15.2258 7.22709C14.7981 7.22709 14.4516 7.57386 14.4516 8.00128V13.1626C14.4516 13.8743 13.8727 14.4529 13.1613 14.4529H2.83871C2.12727 14.4529 1.54839 13.8743 1.54839 13.1626V2.83999C1.54839 2.1283 2.12727 1.54967 2.83871 1.54967H8C8.42767 1.54967 8.77419 1.20289 8.77419 0.775475C8.77419 0.348058 8.42767 0.00128174 8 0.00128174H2.83871C1.27344 0.00128174 0 1.27497 0 2.83999V13.1626C0 14.7276 1.27344 16.0013 2.83871 16.0013H13.1613C14.7266 16.0013 16 14.7276 16 13.1626V8.00128C16 7.57386 15.6535 7.22709 15.2258 7.22709Z" fill="white"/>
</svg>


             Sports Registration
            </NavLink>
          </NavItem>
          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/'}
              onClick={() => {
                handleClick2();
              }}
            >
              {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
              {/* <FaSignOutAlt className="mr-2 icon_bar" /> */}
              <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6722 3.58817H9.41667C9.21076 3.58817 9.04188 3.38923 9.04188 3.1495V2.01924C9.04188 1.22222 8.42101 0.575195 7.65826 0.575195H1.38048C0.620872 0.575195 0 1.22222 0 2.01924V15.1983C0 15.9921 0.620872 16.6423 1.38048 16.6423H10.6722C11.435 16.6423 12.0527 15.9921 12.0527 15.1983V5.03221C12.0527 4.2352 11.435 3.58817 10.6722 3.58817Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0503 15.1983C11.0503 15.4405 10.8808 15.6369 10.6724 15.6369H1.38064C1.17473 15.6369 1.00586 15.4405 1.00586 15.1983V2.01924C1.00586 1.77637 1.17473 1.58057 1.38064 1.58057H7.65842C7.86684 1.58057 8.03634 1.77637 8.03634 2.01924V3.1495C8.03634 3.94338 8.65408 4.5904 9.41683 4.5904H10.6724C10.8808 4.5904 11.0503 4.78934 11.0503 5.03221V15.1983Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.51115 5.59576H6.53081C6.80766 5.59576 7.03052 5.37047 7.03052 5.09308C7.03052 4.81632 6.80766 4.59039 6.53081 4.59039H2.51115C2.2343 4.59039 2.0083 4.81632 2.0083 5.09308C2.0083 5.37047 2.2343 5.59576 2.51115 5.59576Z" fill="#5041BC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.54163 7.26929H2.51115C2.2343 7.26929 2.0083 7.49208 2.0083 7.77197C2.0083 8.04873 2.2343 8.27152 2.51115 8.27152H9.54163C9.82162 8.27152 10.0445 8.04873 10.0445 7.77197C10.0445 7.49208 9.82162 7.26929 9.54163 7.26929Z" fill="#5041BC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.54163 9.94507H2.51115C2.2343 9.94507 2.0083 10.1704 2.0083 10.4478C2.0083 10.7245 2.2343 10.9504 2.51115 10.9504H9.54163C9.82162 10.9504 10.0445 10.7245 10.0445 10.4478C10.0445 10.1704 9.82162 9.94507 9.54163 9.94507Z" fill="#5041BC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.54163 12.624H2.51115C2.2343 12.624 2.0083 12.8499 2.0083 13.1266C2.0083 13.4034 2.2343 13.6293 2.51115 13.6293H9.54163C9.82162 13.6293 10.0445 13.4034 10.0445 13.1266C10.0445 12.8499 9.82162 12.624 9.54163 12.624Z" fill="#5041BC"/>
</svg>

             Doc Verification
            </NavLink>
          </NavItem>
          <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/admin/allgames'}
              onClick={() => {
                handleClick2();
              }}
            >
              {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
             
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8877 7.19525H15.9993C15.8746 5.96112 15.4641 4.77301 14.8005 3.7251C13.7626 4.6111 13.0826 5.8446 12.8877 7.19525Z" fill="white"/>
<path d="M12.8877 8.80322C13.0828 10.154 13.7627 11.3877 14.8005 12.2742C15.464 11.2259 15.8745 10.0376 15.9993 8.80322H12.8877Z" fill="white"/>
<path d="M8.80322 7.19517H11.2627C11.4698 5.34541 12.3828 3.64694 13.8115 2.45387C12.4901 1.06218 10.7128 0.191364 8.80322 0V7.19517Z" fill="white"/>
<path d="M4.73624 7.19517H7.19574V0C5.28621 0.191364 3.50891 1.06218 2.1875 2.45387C3.61583 3.64721 4.52879 5.34554 4.73624 7.19517Z" fill="white"/>
<path d="M0 8.80322C0.124773 10.0376 0.535204 11.2259 1.19879 12.2742C2.23658 11.3877 2.91645 10.154 3.11156 8.80322H0Z" fill="white"/>
<path d="M1.19879 3.7251C0.535107 4.77301 0.124663 5.96112 0 7.19525H3.11156C2.91662 5.8446 2.2367 4.6111 1.19879 3.7251Z" fill="white"/>
<path d="M11.2627 8.80322H8.80322V15.9992C10.7126 15.8071 12.4896 14.9364 13.8115 13.5453C12.3832 12.3516 11.4703 10.653 11.2627 8.80322Z" fill="white"/>
<path d="M7.19574 8.80322H4.73624C4.52919 10.653 3.61616 12.3515 2.1875 13.5445C3.50891 14.9362 5.28621 15.807 7.19574 15.9984V8.80322Z" fill="white"/>
</svg>

             All Games
            </NavLink>
          </NavItem>
          {/* <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem> */}
        </Nav>
      </div>
    </div>
  );
};

// const submenus = [
//   [
//     {
//       title: "Home 1",
//       target: "Home-1",
//     },
//     {
//       title: "Home 2",
//       target: "Home-2",
//     },
//     {
//       itle: "Home 3",
//       target: "Home-3",
//     },
//   ],
//   [
//     {
//       title: "Page 1",
//       target: "Page-1",
//     },
//     {
//       title: "Page 2",
//       target: "Page-2",
//     },
//   ],
// ];

export default SideBar;
