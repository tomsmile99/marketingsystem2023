// import * as React from 'react';
// import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import { Base64 } from "js-base64";
import Swal from 'sweetalert2'
import {BASE_URL_Login} from './apiUrl/Api_Url'

import Header from './layouts/includes/Header'
import Navbar from './layouts/includes/Navbar'
import Footer from './layouts/includes/Footer'


import DataInsuranceForm from "./setDefaultPages/user/DataInsurance/DataInsuranceForm"; //รายการแจ้งข้อมูลประกันภัย
import AddInsuranceForm from "./setDefaultPages/user/DataInsurance/AddInsuranceForm"; //เพิ่มรายการแจ้งข้อมูลประกันภัย
//import DataISRs from "./setDefaultPages/admin/DataISRs";
//import AppTest3 from "./setDefaultPages/AppTest3";

import { userToken } from './recoilstore/userStores';
import { useRecoilValue } from 'recoil';

const App = () => {
  const getstore = useRecoilValue(userToken)
  const fullnamePer = Base64.decode(getstore.PerFuNas)
  const _PerST = Base64.decode(getstore.PerST)
  const _AgU = Base64.decode(getstore.AgU)
  const _PerPST = Base64.decode(getstore.PerPST)
  const _PerWP = Base64.decode(getstore.PerWP)
  const _PerExp_Token = Base64.decode(getstore.PerExp_Token)
  if(_AgU === 'AGAD' || _PerPST === 'PST003' || _PerPST === 'PST007' || _PerPST === 'PST009' || _PerPST === 'PST010' || _PerPST === 'PST011' || _PerPST === 'PST012' || _PerPST === 'PST013' || _PerPST === 'PST014' || _PerPST === 'PST015' || _PerPST === 'PST019' || _PerPST === 'PST020' || _PerPST === 'PST021' || _PerPST === 'PST022' || _PerPST === 'PST023' || _PerPST === 'PST024' || _PerPST === 'PST025' ||  _PerPST === 'PST083' || _PerPST ==='PST084' || _PerWP === 'WP0013' && _PerST == 1){
    if(_PerExp_Token * 1000 < Date.now()){
      //alert('ขออภัย Token ของท่านหมดอายุการใช้งาน กรุณา Login เข้าใช้ระบบใหม่');
      Swal.fire({
        icon: 'warning',
        title: 'Token ของท่านหมดอายุการใช้งาน',
        html: 'กรุณา Login เข้าใช้ระบบใหม่',
        confirmButtonText : 'ตกลง',
        confirmButtonColor : '#005b85' //
      }).then(() => {
        window.location.href = BASE_URL_Login
      })
    }else{
      return (
        <>
          {/* <Router basename={'/SAKInsurance/'}> */}
          <Router>
            <Header/>
            <Navbar FullnamePer={fullnamePer}/>
              <div className="content-wrapper">
                <Routes>
                  {/* FrontEnd */}
                  <Route>
                    <Route path="/" exact={true} element={<DataInsuranceForm/>}></Route>
                    <Route path="/AddInsuranceForm" exact={true} element={<AddInsuranceForm/>}></Route>
                    {/* <Route path="/AdminISR/DataISRs" exact={true} element={<DataISRs/>}></Route>
                    <Route path="/AppTest3" exact={true} element={<AppTest3/>}></Route> */}
                  </Route>
                </Routes>
              </div>
            <Footer/>
          </Router>
        </>
      )
    }
  }else{
    Swal.fire({
      icon: 'warning',
      title: 'สิทธิ์การเข้าถึงของท่านไม่ถูกต้อง',
      html: 'กรุณาติดต่อเจ้าหน้าที่',
      confirmButtonText : 'ตกลง',
      confirmButtonColor : '#005b85' //
    }).then(() => {
      window.location.href = BASE_URL_Login
    })
  }
}
export default App