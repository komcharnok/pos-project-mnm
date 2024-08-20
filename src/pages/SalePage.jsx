import React from 'react'
import TableSale from './../components/Seles/table/TableSale';
import SumSale from './../components/Seles/sum/SumSale';


function SalePage({ opentap }) {
  return (
    <>
      {opentap === 'sale' && (
        <div className='rounded-2xl flex flex-col gap-4'>


          <div className='flex gap-6 justify-between h-auto'>
            <TableSale />
            <SumSale />
          </div>
        </div>

      )}
    </>
  )
}

export default SalePage
