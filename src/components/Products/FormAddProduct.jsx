import Dialog from '@mui/material/Dialog';


function FormAddProduct({handleClickOpen, open}) {
    return (
        <Dialog
            open={open}
            onClose={handleClickOpen}
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
    )
}

export default FormAddProduct
