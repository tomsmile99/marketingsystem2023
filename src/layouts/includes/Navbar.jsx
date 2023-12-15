import { NavLink, useLocation } from 'react-router-dom';
// import {encryptStorage} from '../../security/EncryptStorage'


import { Base64 } from "js-base64";
import { userToken } from '../../recoilstore/userStores';
import { useRecoilValue } from 'recoil';

import {BASE_URL_Dashboardd} from '../../apiUrl/Api_Url'

const Navbar = ({FullnamePer}) => {
  let location = useLocation();
  
  const getstore = useRecoilValue(userToken)
  const _AgU = Base64.decode(getstore.AgU)
  //const _PerPST = Base64.decode(getstore.PerPST)
  const _PerWP = Base64.decode(getstore.PerWP)



  return (
    <>
      <aside className="main-sidebar elevation-4 sidebar-light-primary">
        {/* Brand Logo */}
        <NavLink to="/" className="brand-link">
          <img
            src={import.meta.env.BASE_URL + `assets/img/img_icon/logo saksiam59(150x150px).png`}
            alt="Saksiam Logo"
            className="brand-image img-circle elevation-3"
          />
          <span className="brand-text" style={{fontSize: '12.5pt', fontWeight: 'bold'}}>SAKERP (MRK)</span>
        </NavLink>
        {/* Sidebar */}
        <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">

          <div className="os-resize-observer-host observed">
            <div
              className="os-resize-observer"
              style={{ left: 0, right: "auto" }}
            />
          </div>
          <div
            className="os-size-auto-observer observed"
            style={{ height: "calc(100% + 1px)", float: "left" }}
          >
            <div className="os-resize-observer" />
          </div>
          <div className="os-content-glue"
            style={{ margin: "0px -8px", width: 249, height: 155 }}
          />

          <div className="os-padding">
            <div
              className="os-viewport os-viewport-native-scrollbars-invisible"
              style={{ overflowY: "scroll" }}
            >
              <div
                className="os-content"
                style={{ padding: "0px 8px", height: "100%", width: "100%" }}
              >
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img
                      src={import.meta.env.BASE_URL + `assets/img/user_icon(40x40).png`}
                      alt="User Image"
                      className="img-circle elevation-2"
                    />
                  </div>
                  <div className="info">
                    <span style={{fontSize: 14, fontWeight: 'bold'}} className="d-block">คุณ{FullnamePer}</span>
                  </div>
                </div>
                
                {/* Sidebar Menu */}
                <nav className="mt-2">
                  <ul
                    className="nav nav-pills nav-sidebar flex-column nav-child-indent nav-legacy"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    {/* Add icons to the links using the .nav-icon class
                      with font-awesome or any other icon font library */}
                    <li className="nav-item">
                      <a className="nav-link" href={BASE_URL_Dashboardd}>
                        <i className="nav-icon fas fa-reply"></i>
                        <p>กลับหน้าหลัก</p>
                      </a>
                    </li>
                    {(_AgU === 'AGAD' || _PerWP === 'WP0012') && (
                      <>
                    <li className="nav-header">เมนูการจัดการ</li>
                    
                    <li className="nav-item">
                      <NavLink to="/" className={`${location.pathname === '/' ? 'active' : ''} nav-link click-text`}>
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>Dashboard</p>
                      </NavLink>
                    </li>
          



                    <li className={`${location.pathname === '/DataSolarRoofTops' || location.pathname === '/DataSolarRoofTops/AddDataForm' ? 'menu-open' : ''} nav-item`}>
                      <a href="#" className={`${location.pathname === '/DataSolarRoofTops' || location.pathname === '/DataSolarRoofTops/AddDataForm' ? 'active' : ''} nav-link`}>
                        <i className="nav-icon fas fa-solar-panel" />
                        <p>
                          งานขายโซลาร์รูฟท็อป
                          <i className="right fas fa-angle-left" />
                        </p>
                      </a>
                      <ul className="nav nav-treeview" style={{display: location.pathname === '/DataSolarRoofTops' || location.pathname === '/DataSolarRoofTops/AddDataForm' ? 'block' : 'none'}}>
                        <li className="nav-item">
                          <NavLink to="/DataSolarRoofTops" className={`${location.pathname === '/DataSolarRoofTops' || location.pathname === '/DataSolarRoofTops/AddDataForm' ? 'active' : ''} nav-link`}>
                            <i className="fas fa-angle-right nav-icon" />
                            <p>ข้อมูลใบจองโซลาร์รูฟท็อป</p>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/AppTest2" className={`${location.pathname === '/AppTest2' ? 'active' : ''} nav-link`}>
                          <i className="fas fa-angle-right nav-icon" />
                            <p>รอส่งแบบสำรวจ</p>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/AppTest3" className={`${location.pathname === '/AppTest3' ? 'active' : ''} nav-link`}>
                          <i className="fas fa-angle-right nav-icon" />
                            <p>รอแจ้งเลขรับอกสาร</p>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/AppTest4" className={`${location.pathname === '/AppTest4' ? 'active' : ''} nav-link`}>
                          <i className="fas fa-angle-right nav-icon" />
                            <p>รอยืนยันการทำสินเชื่อ</p>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/AppTest4" className={`${location.pathname === '/AppTest4' ? 'active' : ''} nav-link`}>
                          <i className="fas fa-angle-right nav-icon" />
                            <p>สถานะการติดตั้งโซลาร์</p>
                          </NavLink>
                        </li>
                      </ul>
                    </li>


            
                    <li className="nav-header">รายงาน</li>
             
                    
                        <li className="nav-item">
                          <NavLink to="/report" className={`${location.pathname === '/report' ? 'active' : ''} nav-link`}>
                            <i className="nav-icon fas fa-chart-bar"/>
                            <p>รายงานสรุปการขายโซลาร์รูฟฯ</p>
                          </NavLink>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
                {/* /.sidebar-menu */}
              </div>
            </div>
          </div>

          
          <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track">
              <div
                className="os-scrollbar-handle"
                style={{ width: "100%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track">
              <div
                className="os-scrollbar-handle"
                style={{ height: "15.7544%", transform: "translate(0px, 215px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar-corner" />
        </div>
        {/* /.sidebar */}
      </aside>



    </>
  )
}

export default Navbar