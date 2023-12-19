import { useState } from 'react';


import { NavLink } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";


import { ErrorMessage } from '@hookform/error-message';

import DatePicker  from "react-datepicker";
import { subDays } from 'date-fns';
import th from 'date-fns/locale/th';


import "react-datepicker/dist/react-datepicker.css";

import { DatetimeFM_database } from '../../../layouts/includes/setFuctions/Datetimethai'



const AddData = () => {

  const [TitlenameVal, setTitlenameVal] = useState(''); //ตัวแปรในการเลือกคำหน้าชื่อ
  //const [TitlenameOT, setTitlenameOT] = useState('');

  // const handleTitleChange = (event) => {
  //   setTitlenameVal(event.target.value);

  //   console.log(event.target.value)
  // };

  console.log(TitlenameVal)


  const {
    //register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur"
  },{ validateHiddenInputs: true });


  /*
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur"
  },{ validateHiddenInputs: true });
  */

  /*
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  */
  const sendForm = (data) => {
    //console.log(Datetimethai_ForApi(data.stc_BookingDate_Add))
    const dataSet = {
      stc_BookingDate_Add : DatetimeFM_database(data.stc_BookingDate_Add), // วันที่จอง
      stc_seller_affiliation_Add : 'SAK'  // สังกัดผู้จอง
    }

    // const newdatas = {
    //   firstNew: 'Wes',
    //   lastNew: 'Bos',
    // };


    const newDataSend = {
      ...dataSet,
      // ...newdatas
    };

    console.log(newDataSend)
  }
  


  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="mt-2 row">
            <div className="col text-left mb-2">
              <NavLink to="/DataSolarRoofTops"><b><i className="fas fa-reply"></i> ย้อนกลับ</b></NavLink>
            </div>
            <div className="col text-right mb-2">
              <b><i className="fas fa-file-alt"></i> ฟอร์มยื่นใบจองโซลาร์รูฟท็อป</b>
            </div>
          </div>
        </div>  {/* card-header */}
        <form onSubmit={handleSubmit(sendForm)}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 mb-2">
                <div className="callout callout-success col-md-12">
                  <span className="font-weight-bold h6 mt-1">ส่วนที่ 1 : รายละเลียดผู้จัดทำใบสั่งจองและผู้ขาย</span>
                </div>
              </div>
            </div>

            {/* <form onSubmit={handleSubmit(sendForm)}>
              <input {...register('firstName', { required: true })} />
              {errors.lastName && <p>Frist name is required.</p>}
              <input {...register('lastName', { required: true })} />
              {errors.lastName && <p>Last name is required.</p>}
              <input {...register('age', { required: true, pattern: /\d+/ })} />
              {errors.age && <p>Please enter number for age.</p>}
              <input type="submit" />
            </form> */}

          
            <div className="mt-2 row">
              <div className="col-md-2 mb-2">
                <div className="fontBoldHearder"><i className="fas fa-calendar-alt"></i> วันที่จอง <span style={{color: 'red'}}>*</span> : </div> 
                <Controller
                    name="stc_BookingDate_Add"
                    control={control}
                    rules={{ required : true }}
                    render={({ field }) => ( <DatePicker
                        className={`${errors.stc_BookingDate_Add ? 'borderRed' : ''} form-control cursor_P`}
                        id="stc_BookingDate_Add"
                        autoComplete="off" placeholderText="ว-ด-ป"
                        dateFormat="dd-MM-yyyy"
                        locale={th}
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        maxDate={subDays(new Date(), +1)}
                        // minDate={subDays(new Date(), 7)}
                      />
                    )}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="stc_BookingDate_Add"
                    render={() => <div className="text-red mt-1" style={{fontSize: '10pt'}}>*เลือกวันที่ลืมลงเวลา</div>}
                  />
              </div>
              <div className="col-md-10 mb-2">
                <div className="fontBoldHearder">สังกัดผู้จัดทำใบสั่งจอง<span style={{color: 'red'}}>*</span> :</div>
                <div className="form-group col-md-12">
                  <div className="form-check">
                    <input className="radio_stc_sa_Add form-check-input" type="radio" name="stc_seller_affiliation_Add" id="sa_SAK" defaultValue="SAK" style={{cursor: 'pointer'}} checked disabled />
                    <label className="form-check-label mr-2" htmlFor="sa_SAK"><span style={{fontSize: 16, cursor: 'pointer'}}>บมจ.ศักดิ์สยามลิสซิ่ง (ฝ่ายการตลาด)</span></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 mb-2">
                <div className="fontBoldHearder">คำนำหน้าชื่อ ผู้ขาย<span style={{color: 'red'}}>*</span> :</div>
                  {/* แบบ basic basic
                  <select className="form-control" id="stc_sa_Titlename_Add" name="stc_sa_Titlename_Add"
                    {...register("stc_sa_Titlename_Add", { required: true})}
                    style={{ border: errors.stc_sa_Titlename_Add ? '1px solid red' : '', width: '100%'}} value={TitlenameVal} 
                    onChange={handleTitleChange}>
                      <option value="">- เลือกคำนำหน้าเชื่อ -</option>
                      <option value="นาย">นาย</option>
                      <option value="นางสาว">นางสาว</option>
                      <option value="นาง">นาง</option>
                      <option value="OtherTitle">อื่นๆ</option>
                  </select>
                  {errors.stc_sa_Titlename_Add && errors.stc_sa_Titlename_Add.type === "required" && <div className="text-red mt-1" style={{fontSize: '10pt'}}>*กรุณาเลือก</div>} */}
               <Controller
                  name="stc_sa_Titlename_Add"
                  control={control}
                  rules={{ required : true }}
                  render={({ field }) => <Select
                    id="stc_sa_Titlename_Add"
                    placeholder={"เลือกคำนำหน้าเชื่อ"}
                    options={[
                      { value: "นาย", label: "นาย" },
                      { value: "นางสาว", label: "นางสาว" },
                      { value: "นาง", label: "นาง" },
                      { value: "OtherTitle", label: "อื่นๆ" }
                    ]} 
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        cursor: 'pointer',
                        border: errors.stc_sa_Titlename_Add ? '1px solid red' : ''
                      }),
                    }}
                    selected={field.value}
                    onChange={(data) => {
                      field.onChange(data.value)
                      setTitlenameVal(data.value)
                    }}
                  />}
                />
                <ErrorMessage
                errors={errors}
                  name="stc_sa_Titlename_Add"
                  render={() => <div className="text-red mt-1" style={{fontSize: '10pt'}}>*เลือกคำนำหน้าเชื่อ</div>}
                />
              </div>
              {TitlenameVal === 'OtherTitle' && (
                <div className="col-md-1 mb-3">
                  <label htmlFor="stc_sa_TitlenameOT_Add">ระบุ<span style={{color: 'red'}}>*</span> :</label>
                  <input type="text" className="form-control" name="stc_sa_TitlenameOT_Add" id="stc_sa_TitlenameOT_Add" maxLength={50} placeholder="ระบุ" /><span className="myErrors" />
                </div>
              )}
            </div>{/* /.row */}   



          </div> {/* card-body */}
          <div className="card-footer">
            <div className="row">
              <div className="col-md-6 text-left mb-2">
                <div className="textRed">วัน/เวลา ที่ยื่นใบจอง : 
                  <span className="fb"> {new Date().toLocaleString() + " น."}</span>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <button type="submit" className="btn btn-primary btn-sm mr-2" id="Confrim_SaveForm"><span style={{fontSize: '10pt', fontWeight: 'bold'}}><i className="far fa-save" /> บันทึกข้อมูล</span></button>
                <button type="button" className="btn btn-primary btn-sm disabled" id="Confrim_SaveForm_wait" style={{display: 'none'}}><span style={{fontSize: '10pt', fontWeight: 'bold'}}> <span className="mb-1 spinner-border spinner-border-sm" role="status" aria-hidden="true" /> กรุณารอสักครู่..</span></button>

                <NavLink to="/DataSolarRoofTops" type="button" className="btn btn-sm btn-secondary" id="btnback">
                  <span style={{fontSize: '10pt', fontWeight: 'bold'}}>ยกเลิก</span>
                </NavLink>
              </div>
            </div>
          </div> {/* card-footer */}
        </form>
        
      </div>  
    </>
  )
}

export default AddData