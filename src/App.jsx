import { useState } from 'react'

// component 
import SalePage from './pages/SalePage';
import ProductManagePage from './pages/ProductManagePage';
import PeopleManagePage from './pages/PeopleManagePage';
import TotalSalePage from './pages/TotalSalePage';


function App() {
  const [opentap, setOpentap] = useState('sale');

  return (
    <div className="h-screen bg-slate-100 flex">

      {/* tab  */}
      <div className='flex flex-col gap-2 '>
        <div className="bg-white  w-[250px]  h-screen py-3   ">
          {/* <div className='h-[80px] p-4 items-center text-center flex flex-col'>
            <h1 className=' h-full items-center flex justify-center text-3xl font-semibold w-full  rounded-xl text-black/70'>POS</h1>

          </div> */}
          <div className='flex flex-col gap-2 items-center'>
            <div>
              <div className="avatar online">
                <div className="w-24 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div>
              <p className='font-light'>Hi, 404kckc</p>
              {/* <p className='text-[12px]'>20 / 12 / 1999</p> */}
            </div>

          </div>
          <div className='flex flex-col gap-3 items-center  py-1 px-1  mt-4    '>
            <a onClick={() => setOpentap('sale')} onMouseDown={(e) => e.preventDefault()} className=' w-full cursor-pointer  py-2 px-14 flex gap-2 hover:bg-green-300 hover:text-green-900 font-light text-[18px]  ' >
              <p></p>
              <p>การขาย</p>
            </a>
            <a onClick={() => setOpentap('manageproduct')} onMouseDown={(e) => e.preventDefault()} className=' w-full cursor-pointer  py-2 px-14 flex gap-2 hover:bg-green-300 hover:text-green-900 font-light text-[18px]  ' >
              <p></p>
              <p>จัดการสินค้า</p>
            </a>
            <a onClick={() => setOpentap('managepeoplo')} onMouseDown={(e) => e.preventDefault()} className=' w-full cursor-pointer  py-2 px-14 flex gap-2 hover:bg-green-300 hover:text-green-900 font-light text-[18px]  ' >
              <p></p>
              <p>จัดการพนักงาน</p>
            </a>
            <a onClick={() => setOpentap('sumsale')} onMouseDown={(e) => e.preventDefault()} className=' w-full cursor-pointer  py-2 px-14 flex gap-2 hover:bg-green-300 hover:text-green-900 font-light text-[18px]  ' >
              <p></p>
              <p>รายงานการขาย</p>
            </a>
            <a onMouseDown={(e) => e.preventDefault()} className=' w-full cursor-pointer  py-2 px-14 flex gap-2 hover:bg-red-300 hover:text-red-900 font-light text-[18px]  ' >
              <p></p>
              <p>ออกจากระบบ</p>
            </a>

          </div>
        </div>
      </div>
      <div className="  w-full rounded-2xl px-16 py-8  ">

        {/* การขาย */}
        <SalePage opentap={opentap} />

        {/* จัดการสินค้า */}
        <ProductManagePage opentap={opentap} />

        {/* รายการคำสั่งซื้อ */}
        <PeopleManagePage opentap={opentap} />

        {/* ตรวจสอบสถานะการจัดส่ง */}
        <TotalSalePage opentap={opentap} />


      </div>

    </div>
  )
}

export default App
