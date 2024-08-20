import { useState } from 'react';
import { useEffect } from 'react';
import useSum from '../../stores/useSum';



// ui component
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function ManageProduct() {
  const { subtotal, discount, total, calculateTotal, rows } = useSum();
  const [value, setValue] = useState('1');
  const [money, setMoney] = useState("");
  const [moneyChange, setMoneyChange] = useState(0)


  useEffect(() => {
    calculateTotal(rows);
  }, [rows]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // แบงค์ 20 50 100 500 1000
  const hdlTwenty = () => {
    const x = 20
    if (x < total) {
      setMoney(0)
      setMoneyChange(0)
    } else {
      const y = x - total
      setMoney(x)
      setMoneyChange(y)
    }
  }

  const hdlfifty = () => {
    const x = 50
    if (x < total) {
      setMoney(0)
      setMoneyChange(0)
    } else {
      const y = x - total
      setMoney(x)
      setMoneyChange(y)
    }

  }

  const hdlonehundred = () => {
    const x = 100
    if (x < total) {
      setMoney(0)
      setMoneyChange(0)
    } else {
      const y = x - total
      setMoney(x)
      setMoneyChange(y)
    }

  }

  const hdlfivehundred = () => {
    const x = 500
    if (x < total) {
      setMoney(0)
      setMoneyChange(0)
    } else {
      const y = x - total
      setMoney(x)
      setMoneyChange(y)
    }

  }

  const hdlonethousand = () => {
    const x = 1000
    if (x < total) {
      setMoney(0)
      setMoneyChange(0)
    } else {
      const y = x - total
      setMoney(x)
      setMoneyChange(y)
    }

  }

  useEffect(() => {
    const moneyValue = parseInt(money)
    if (money === '') {
      setMoneyChange("")
    } else if (money <= total) {
      setMoneyChange(0)
    } else if (money < total) {
      setMoneyChange("")
    } else {
      const x = moneyValue - total;
      setMoneyChange(x);
    }
  }, [money, total]);
  return (
    <div className='flex flex-col gap-6 w-[400px]'>
      <div className='bg-white   h-auto rounded-2xl p-4 shadow-2xl'>
        <div className='flex flex-col gap-2'>
          {/* สรุปรายการ */}
          <div className='flex justify-between'>
            <p className='bg-green-200 px-1 rounded-xl'>ยอดรวมย่อย</p>
            <p>{subtotal}</p>
          </div>

          {/* ส่วนลด  */}
          <div className='flex justify-between pb-4 border-b'>
            <p className='bg-yellow-200 px-1 rounded-xl'>ส่วนลด</p>
            <p>-{discount}</p>
          </div>
        </div>


        {/* ยอดชำระ  */}
        <div className='flex justify-between pb-2 mt-4 p-2 bg-red-100 rounded-xl'>
          <h1 className='text-2xl font-semibold text-black/70'>ยอดที่ต้องชำระ</h1>
          <h1 className='text-2xl font-semibold text-black/70'>{total}</h1>
        </div>
      </div>
      <div className='bg-white rounded-2xl  h-auto  p-2 shadow-2xl'>
        <div className=''>

          <TabContext value={value}>
            <Box className='border-b-blue-500 flex justify-center'>
              <TabList onChange={handleChange} aria-label="lab API tabs example" >
                <Tab label="Money" value="1" />
                <Tab label="QrCode" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" className='w-auto flex justify-center '>
              <div className=' rounded-lg flex flex-col gap-3'>
                <div className='flex gap-2'>

                  <Button onClick={hdlTwenty} variant="outlined" href="#contained-buttons" color="success" className='bg-green-800'>20</Button>
                  <Button onClick={hdlfifty} variant="outlined" href="#contained-buttons" color="primary">50</Button>
                  <Button onClick={hdlonehundred} variant="outlined" href="#contained-buttons" color="error">100</Button>
                  <Button onClick={hdlfivehundred} variant="outlined" href="#contained-buttons" color="primary">500</Button>
                  <Button onClick={hdlonethousand} variant="outlined" href="#contained-buttons" color="error">1000</Button>

                </div>

                <div className='flex justify-between'>
                  <p className='bg-green-200 px-1 rounded-xl'>เงินสด</p>
                  <p className='text-green-600'>{money}</p>
                </div>
                <div className='flex justify-between pb-4 border-b'>
                  <p className='bg-red-200 px-1 rounded-xl'>เงินทอน</p>
                  <p className='text-red-600'>{moneyChange}</p>
                </div>


                {/* <div className='grid grid-cols-3 gap-4 mx-auto  '>
                <Button onClick={() => setMoney(money + "7")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>7</Button>
                <Button onClick={() => setMoney(money + "8")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>8</Button>
                <Button onClick={() => setMoney(money + "9")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>9</Button>
                <Button onClick={() => setMoney(money + "4")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>4</Button>
                <Button onClick={() => setMoney(money + "5")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>5</Button>
                <Button onClick={() => setMoney(money + "6")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>6</Button>
                <Button onClick={() => setMoney(money + "1")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>1</Button>
                <Button onClick={() => setMoney(money + "2")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>2</Button>
                <Button onClick={() => setMoney(money + "3")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>3</Button>
                <Button onClick={() => setMoney(money + "0")} variant="outlined" href="#contained-buttons" className='w-full h-16' color='success'>0</Button>
                <Button variant="outlined" href="#contained-buttons" className='w-full h-16' color='error'>Clr</Button>
                <Button variant="outlined" href="#contained-buttons" className='w-full h-16' color='error'>ลบ</Button>
              </div> */}
                <div className='flex justify-center items-center '>
                  <div className='grid grid-cols-3 gap-2 w-[260px]  p-4 '>
                    <button onClick={() => setMoney(money + "7")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>7</button>
                    <button onClick={() => setMoney(money + "8")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>8</button>
                    <button onClick={() => setMoney(money + "9")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>9</button>
                    <button onClick={() => setMoney(money + "4")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>4</button>
                    <button onClick={() => setMoney(money + "5")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>5</button>
                    <button onClick={() => setMoney(money + "6")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>6</button>
                    <button onClick={() => setMoney(money + "1")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>1</button>
                    <button onClick={() => setMoney(money + "2")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>2</button>
                    <button onClick={() => setMoney(money + "3")} className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>3</button>
                    <button className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>0</button>
                    <button className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>Clr</button>
                    <button className=' btn btn-outline border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-500 shadow-lg text-[18px] font-semibold    h-16 w-16 '>D</button>



                  </div>

                </div>

                <div className='flex mx-auto'>
                  <button className='btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:border-red-500 hover:text-white shadow-lg  rounded-2xl  w-[224px]  h-12'>ชำระเงิน</button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </div>
      </div>

    </div>
  )
}

export default ManageProduct
