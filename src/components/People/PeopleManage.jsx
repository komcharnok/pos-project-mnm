import { th } from 'date-fns/locale';
import { format } from 'date-fns';

import { useState, useEffect } from 'react';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function PeopleManage() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [page, setPage] = useState(1); // เริ่มต้นที่หน้า 1
    const itemsPerPage = 6; // กำหนดจำนวนรายการต่อหน้า

    const rows = [
        // รายการของคุณ (ในตัวอย่างนี้ใช้ข้อมูลจำลอง)
        { id: 1, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 2, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 3, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 4, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 5, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 6, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 7, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 8, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 9, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        { id: 10, name: '404kckc aka', position: 'ผู้จัดการ', birthdate: '22 มิถุนายน 2545', age: 22, gender: 'ชาย' },
        // เพิ่มข้อมูลให้ครบตามที่ต้องการ
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // คำนวณดัชนีของรายการที่ต้องแสดง
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedRows = rows.slice(startIndex, endIndex);

    return (
        <div className='flex flex-col gap-6 w-full rounded-xl'>
            <div className='flex justify-between'>
                <div className='w-[1250px] flex justify-between items-center p-4 bg-white rounded-2xl shadow-xl'>
                    <h1 className='text-center px-1 bg-indigo-200 rounded-xl text-3xl font-semibold text-black/70'>จัดการพนักงาน</h1>
                    <div>
                        <div className="stat flex flex-col items-center">
                            <div className="stat-title text-black/70">{format(currentTime, 'd MMMM yyyy', { locale: th })}</div>
                            <div className="stat-value text-black/70">{format(currentTime, 'HH:mm:ss', { locale: th })}</div>
                        </div>
                    </div>
                </div>
                <div className='w-[260px] bg-white flex flex-col justify-center h-auto rounded-2xl p-4 shadow-2xl'>
                    <div className='flex flex-col gap-2 justify-between '>
                        {/* สรุปรายการ */}
                        <div className='flex justify-between'>
                            <p className='bg-green-200 px-1 rounded-xl'>พนักงานทั้งหมด</p>
                            <p>99</p>
                        </div>

                        {/* ส่วนลด  */}
                        <div className='flex justify-between'>
                            <p className='bg-yellow-200 px-1 rounded-xl'>ตำแหน่งทั้งหมด</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <input type="text" placeholder="" className="input input-bordered w-full shadow-xl bg-white " />
                    <button className='bg-white shadow-xl p-2 text-black hover:bg-slate-50 px-8'>ค้นหา</button>
                    {/* <button className='bg-white shadow-xl p-2 text-black hover:bg-slate-50 px-8 w-52'>เพิ่มตำแหน่ง</button> */}
                    <button className='bg-white shadow-xl p-2 rounded-r-2xl text-black hover:bg-slate-50 px-8 w-52'>เพิ่มพนักงาน</button>
                </div>
                <div className='flex flex-col gap-3 border rounded-4xl shadow-xl bg-white h-[666px] p-4'>
                    <div className='grid grid-cols-3 gap-5'>
                        {displayedRows.map((row) => (
                            <div key={row.id} className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Employee" />
                                </figure>
                                <div className="card-body w-[230px]">
                                    <div className='flex gap-2'>
                                        <h2 className="card-title">{row.name}</h2>
                                    </div>
                                    <div className='flex items-center gap-4 mt-6'>
                                        <h2 className="text-[15px] w-[48px]">ตำแหน่ง</h2>
                                        <h2 className="text-[13px]">{row.position}</h2>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <h2 className="text-[15px] w-[48px]">วันเกิด</h2>
                                        <h2 className="text-[13px]">{row.birthdate}</h2>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <h2 className="text-[15px] w-[48px]">อายุ</h2>
                                        <h2 className="text-[13px]">{row.age}</h2>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <h2 className="text-[15px] w-[48px]">เพศ</h2>
                                        <h2 className="text-[13px]">{row.gender}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <Stack spacing={2}>
                            <Pagination
                                count={Math.ceil(rows.length / itemsPerPage)} // จำนวนหน้าทั้งหมด
                                page={page} // หน้าปัจจุบัน
                                onChange={handleChangePage}
                                renderItem={(item) => (
                                    <PaginationItem
                                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                        {...item}
                                    />
                                )}
                            />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PeopleManage;
