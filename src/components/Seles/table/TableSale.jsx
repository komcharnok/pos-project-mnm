import { useState } from 'react';
import { useEffect } from 'react';
import * as React from 'react';


// UI components 
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';

// date-time
import { th } from 'date-fns/locale';
import { format } from 'date-fns';
import useSum from '../../../stores/useSum';


function TableSale() {
  const { rows } = useSum();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setData(rows);
  }, [rows])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
        <h1 className='text-center py-3 text-3xl font-semibold text-black/70'>การขาย</h1>
        <div>
          <div className="stat flex flex-col items-center">
            <div className="stat-title text-black/70">{format(currentTime, 'd   MMMM   yyyy ', { locale: th })}</div>
            <div className="stat-value text-black/70">{format(currentTime, 'HH:mm:ss', { locale: th })}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          {/* <TextField id="outlined-search" label="Search field" type="search" className='w-full bg-white' size="small" /> */}
          {/* <Button variant="contained" className='bg-white'>ค้นหา</Button> */}
          <input type="text" placeholder="Type here" className="input input-bordered w-full shadow-xl bg-white " />
          <button className='bg-white  shadow-xl p-2 rounded-r-2xl text-black hover:bg-slate-50 px-8'>ค้นหา</button>
        </div>
        <div className='flex flex-col gap-3 border rounded-4xl shadow-xl bg-white'>
            <TableContainer sx={{ maxHeight: 600 }} className='h-[600px] bg-white'>
              <Table stickyHeader aria-label="sticky table"  >
                <TableHead>
                  <TableRow>
                    <TableCell align="right">ที่</TableCell>
                    <TableCell align="center" className='w-40'>บาร์โค๊ต</TableCell>
                    <TableCell align="center" className='w-70'>ชื่อสินค้า</TableCell>
                    <TableCell align="center" className='w-12'>จำนวน</TableCell>
                    <TableCell align="center" className='w-20'>ราคา</TableCell>
                    <TableCell align="center" className='w-20'>ส่วนลด</TableCell>
                    <TableCell align="center" className='w-20'>รวม</TableCell>
                    <TableCell align="center">แก้ไข</TableCell>
                    <TableCell align="center">ลบ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="center" className='w-12'>{row.id}</TableCell>
                      <TableCell align="center">{row.barcode}</TableCell>
                      <TableCell align="left">{row.product}</TableCell>
                      <TableCell align="center">{row.quantity}</TableCell>
                      <TableCell align="center">{row.money}</TableCell>
                      <TableCell align="center">{row.cupon}</TableCell>
                      <TableCell align="center">{row.sum}</TableCell>
                      <TableCell align="center">แก้ไข</TableCell>
                      <TableCell align="center">ลบ</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20, 50, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              className='bg-white'
            />
         
        </div>

      </div>
    </div>
  )
}

export default TableSale
