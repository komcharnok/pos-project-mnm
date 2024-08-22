import { useState } from 'react';
import { useEffect } from 'react';
import * as React from 'react';


// UI components 
import {  Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';

// date-time
import { th } from 'date-fns/locale';
import { format } from 'date-fns';


function TableSale() {
  

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col gap-6 w-[1110px]  rounded-xl'>
      <div className='w-[1110px] flex justify-between items-center  p-4  bg-white rounded-2xl shadow-xl'>
        <h1 className='text-center px-1 bg-indigo-200 rounded-xl text-3xl font-semibold text-black/70'>การขาย</h1>
        <div>
          <div className="stat flex flex-col items-center">
            <div className="stat-title text-black/70">{format(currentTime, 'd   MMMM   yyyy ', { locale: th })}</div>
            <div className="stat-value text-black/70">{format(currentTime, 'HH:mm:ss', { locale: th })}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <input type="text" placeholder="Type here" className="input input-bordered w-full shadow-xl bg-white " />
          <button className='bg-white  shadow-xl p-2 rounded-r-2xl text-black hover:bg-slate-50 px-8'>ค้นหา</button>
        </div>
        <div className='flex flex-col gap-3 border rounded-4xl shadow-xl bg-white'>
          <TableContainer sx={{ maxHeight: 600 }} className='h-[600px] bg-white'>
            <Table stickyHeader aria-label="sticky table"   >
              <TableHead>
                <TableRow>
                  <TableCell align="right">ที่</TableCell>
                  <TableCell align="center" className='w-40'>บาร์โค๊ต</TableCell>
                  <TableCell align="center" className='w-70'>ชื่อสินค้า</TableCell>
                  <TableCell align="center" className='w-20'>ราคา</TableCell>
                  <TableCell align="center" className='w-20'>จำนวน</TableCell>
                  <TableCell align="center" className='w-20'>ส่วนลด</TableCell>
                  <TableCell align="center" className='w-20'>รวม</TableCell>
                  <TableCell align="center" className='w-20'>ลบ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                  <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center" className='w-12'></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">
                      {/* <input type="number" value="" className=' w-[34px] border border-stone-200 rounded-sm' /> */}
                    </TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">
                      {/* <button className="btn btn-link  text-red-500">ลบ</button> */}
                    </TableCell>
                  </TableRow>
               
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className='bg-white'
          /> */}
        </div>
      </div>
    </div>
  )
}

export default TableSale