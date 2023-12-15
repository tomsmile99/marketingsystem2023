import { NavLink } from 'react-router-dom';


const ReadDataInsurance = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="mt-2 row">
            <div className="col-md-6 text-left mb-2">
              <NavLink to="/DataSolarRoofTops/AddDataForm" type="button" className="text-white btn btn-outline-primary btn-rounded btn-sm  font-weight-bold">
                <i className="fas fa-file-medical mr-1"></i> ยื่นใบจองโซลาร์รูฟท็อป
              </NavLink>
            </div>
            <div className="col-md-6 text-right mb-2">
              <button type="button" className="btn btn-danger btn-sm" data-role="Click_PullData"><i className="fas fa-sync-alt" /></button>
            </div>
          </div>
        </div>
        <div className="p-0 card-body table-responsive">
        <table className="table table-hover table-sm">
          <thead className="bg-primary">
            <tr>
              <th className="text-center font-weight-bold">ลำดับ</th>
              <th className="text-center font-weight-bold">เลขที่ใบจอง</th>
              <th className="text-center font-weight-bold">ชื่อ-นามสกุล ลูกค้า</th>
              <th className="text-center font-weight-bold">รายละเอียดสินค้า</th>
              <th className="text-center font-weight-bold">วิธีชำระเงิน</th>
              <th className="text-center font-weight-bold">สาขาดำเนินเรื่อง</th>
              <th className="text-center font-weight-bold">ผู้ยื่นใบจอง</th>
              <th className="text-center font-weight-bold">วัน/เวลา ที่ยื่นใบจอง</th>
              <th className="text-center font-weight-bold">สถานะ</th>
            </tr>
          </thead>
          <tbody className="fadeIn">
            <tr >
              <td className="text-center"></td>
              <td className="text-left">
                
              </td>
              <td className="text-left">
                
              </td>
              <td className="text-center">
                
              </td>
              <td className="text-center">
              </td>
              <td className="text-left">
                
              </td>
              
              <td className="text-center">
                
              </td>
              <td className="text-center">
              
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="card-footer">

        </div>
      </div>  
    </>
  )
}

export default ReadDataInsurance