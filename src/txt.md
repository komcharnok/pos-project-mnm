```jsx

import { useState, useEffect } from 'react';
import * as React from 'react';

// UI components 
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import Dialog from '@mui/material/Dialog';

// date-time
import { th } from 'date-fns/locale';
import { format } from 'date-fns';

// api 
import useProduct from '../../stores/useProduct';

function TableProduct() {
    // Get state and action from Zustand store
    const { products, fetchDataProduct } = useProduct(state => ({
        products: state.products,
        fetchDataProduct: state.fetchDataProduct
    }));
    
    const [currentTime, setCurrentTime] = useState(new Date());
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);

    // Fetch product data on component mount
    useEffect(() => {
        fetchDataProduct();
    }, [fetchDataProduct]);

    // Update current time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Handle dialog open and close
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Handle pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='flex flex-col gap-6 w-full rounded-xl'>
            <div className='flex justify-between'>
                <div className='w-[1250px] flex justify-between items-center p-4 bg-white rounded-2xl shadow-xl'>
                    <h1 className='text-center px-1 bg-red-200 rounded-xl text-3xl font-semibold text-black/70'>จัดการสินค้า</h1>
                    <div>
                        <div className="stat flex flex-col items-center">
                            <div className="stat-title text-black/70">{format(currentTime, 'd MMMM yyyy', { locale: th })}</div>
                            <div className="stat-value text-black/70">{format(currentTime, 'HH:mm:ss', { locale: th })}</div>
                        </div>
                    </div>
                </div>
                <div className='w-[260px] bg-white flex flex-col justify-center h-auto rounded-2xl p-4 shadow-2xl'>
                    <div className='flex flex-col gap-2 justify-between'>
                        <div className='flex justify-between'>
                            <p className='bg-green-200 px-1 rounded-xl'>สินค้าทั้งหมด</p>
                            <p>{products.length}</p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='bg-yellow-200 px-1 rounded-xl'>หมวดหมู่สินค้า</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                    <input type="text" placeholder="" className="input input-bordered w-full shadow-xl bg-white" />
                    <button className='bg-white shadow-xl p-2 text-black hover:bg-slate-50 px-8'>ค้นหา</button>
                    <select className="select select-bordered">
                        <option value="" disabled>หมวดหมู่สินค้า</option>
                        <option value="ทั้งหมด">ทั้งหมด</option>
                        <option value="เครื่องดื่ม">เครื่องดื่ม</option>
                        <option value="ของใช้ทั่วไป">ของใช้ทั่วไป</option>
                    </select>
                    <button onClick={handleClickOpen} className='bg-white shadow-xl p-2 rounded-r-2xl text-black hover:bg-slate-50 px-8 w-52'>เพิ่มสินค้า</button>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <div className='bg-white w-[500px] h-[600px] p-8 flex flex-col justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex justify-center mb-8'>
                                    <h1 className='text-[20px]'>เพิ่มสินค้า</h1>
                                </div>
                                <div className='flex justify-between items-end'>
                                    <p>รหัสบาร์โค้ต</p>
                                    <input type="text" placeholder="" className="input input-bordered input-sm w-full max-w-xs" />
                                </div>
                                <div className='flex justify-between items-end'>
                                    <p>ชื่อสินค้า</p>
                                    <input type="text" placeholder="" className="input input-bordered input-sm w-full max-w-xs" />
                                </div>
                                <div className='flex justify-between items-end'>
                                    <p>ประเภท</p>
                                    <select className="select select-bordered select-sm w-full max-w-xs">
                                        <option value="" disabled>เลือกประเภทสินค้า</option>
                                        <option value="เครื่องดื่ม">เครื่องดื่ม</option>
                                        <option value="ของใช้ทั่วไป">ของใช้ทั่วไป</option>
                                    </select>
                                </div>
                                <div className='flex justify-between items-end'>
                                    <p>หน่วย</p>
                                    <select className="select select-bordered select-sm w-full max-w-xs">
                                        <option value="" disabled>หน่วยสินค้า</option>
                                        <option value="ชิ้น">ชิ้น</option>
                                        <option value="แพค">แพค</option>
                                    </select>
                                </div>
                                <div className='flex justify-between items-end'>
                                    <p>จำนวนสินค้า</p>
                                    <input type="text" placeholder="" className="input input-bordered input-sm w-full max-w-xs" />
                                </div>
                                <div className='flex justify-between items-end'>
                                    <p>ราคาปลีก</p>
                                    <input type="text" placeholder="" className="input input-bordered input-sm w-full max-w-xs" />
                                </div>
                                <div className='flex justify-between items-end'>
                                    <p>ส่วนลด</p>
                                    <input type="text" placeholder="" className="input input-bordered input-sm w-full max-w-xs" />
                                </div>
                            </div>
                            <div className='flex justify-center gap-2'>
                                <button className='btn bg-green-500 hover:bg-green-600 border-none rounded-2xl w-full shadow-lg'>บันทึก</button>
                            </div>
                        </div>
                    </Dialog>
                </div>
                <div className='flex flex-col gap-3 border rounded-4xl shadow-xl bg-white'>
                    <TableContainer sx={{ maxHeight: 600 }} className='h-[600px] bg-white'>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right" className='w-10'>ที่</TableCell>
                                    <TableCell align="center" className='w-40'>บาร์โค๊ต</TableCell>
                                    <TableCell align="center" className='w-70'>ชื่อสินค้า</TableCell>
                                    <TableCell align="center" className='w-40'>ราคา</TableCell>
                                    <TableCell align="center" className='w-30'>จำนวน</TableCell>
                                    <TableCell align="center" className='w-30'>ส่วนลด</TableCell>
                                    <TableCell align="center" className='w-30'>รวม</TableCell>
                                    <TableCell align="center" className='w-30'>แก้ไข</TableCell>
                                    <TableCell align="center" className='w-30'>ลบ</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center" className='w-12'>{row.id}</TableCell>
                                        <TableCell align="center">{row.barcode}</TableCell>
                                        <TableCell align="left">{row.product}</TableCell>
                                        <TableCell align="center">{row.money}</TableCell>
                                        <TableCell align="center">
                                            <input type="number" value={row.quantity} className='w-[34px] border border-stone-200 rounded-sm' />
                                        </TableCell>
                                        <TableCell align="center">{row.cupon}</TableCell>
                                        <TableCell align="center">
                                            {row.quantity * row.money - row.cupon}
                                        </TableCell>
                                        <TableCell align="center">
                                            <button className="btn btn-link text-red-500">ลบ</button>
                                        </TableCell>
                                        <TableCell align="center">
                                            <button className="btn btn-link text-red-500">แก้ไข</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20, 50, 100]}
                        component="div"
                        count={products.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        className='bg-white'
                    />
                </div>
            </div>
        </div>
    );
}

export default TableProduct;
