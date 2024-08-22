import { th } from 'date-fns/locale';
import { format } from 'date-fns';

import { useState } from 'react';
import { useEffect } from 'react';

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function TotalSale() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='flex flex-col gap-6 w-full  rounded-xl'>
            <div className='flex justify-between'>
                <div className='w-[1250px] flex justify-between items-center  p-4  bg-white rounded-2xl shadow-xl'>
                    <h1 className='text-center px-1 bg-red-200 rounded-xl text-3xl font-semibold text-black/70'>รายงานการขาย</h1>
                    <div>
                        <div className="stat flex flex-col items-center">
                            <div className="stat-title text-black/70">{format(currentTime, 'd   MMMM   yyyy ', { locale: th })}</div>
                            <div className="stat-value text-black/70">{format(currentTime, 'HH:mm:ss', { locale: th })}</div>
                        </div>
                    </div>
                </div>
                <div className='w-[260px] bg-white flex flex-col justify-center    h-auto rounded-2xl p-4 shadow-2xl'>
                    <div className='flex flex-col gap-2  justify-between '>
                        {/* สรุปรายการ */}
                        <div className='flex justify-between'>
                            <p className='bg-green-200 px-1 rounded-xl'>ยอดขายวันนี้</p>
                            <p>99</p>
                        </div>

                        {/* ส่วนลด  */}
                        <div className='flex justify-between'>
                            <p className='bg-yellow-200 px-1 rounded-xl'>ยอดขายสัปดาห์นี้</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 ml-auto'>
                    {/* <input type="text" placeholder="Type here" className="input input-bordered w-full shadow-xl bg-white " /> */}
                    {/* <button className='bg-white  shadow-xl p-2  text-black hover:bg-slate-50 px-8'>ค้นหา</button> */}
                    {/* <button className='bg-white  shadow-xl p-2   text-black hover:bg-slate-50 px-8 w-52'>เพิ่มหมวดหมู่</button> */}
                    <button className='bg-white  shadow-xl p-2   text-black hover:bg-slate-50 px-8 w-52'>เพิ่มยอดรายการ</button>
                </div>
                <div className='flex flex-col gap-3 border rounded-4xl shadow-xl bg-white h-[666px]'>
                    <div className='flex flex-col items-center justify-center  h-[666px]'>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'เครื่องดื่ม' },
                                        { id: 1, value: 15, label: 'ขนม' },
                                        { id: 2, value: 20, label: 'ของใช้ทั่วไป' },
                                        { id: 3, value: 30, label: 'อื่นๆ' },
                                    ],
                                },
                            ]}
                            width={800}
                            height={500}
                        />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TotalSale
