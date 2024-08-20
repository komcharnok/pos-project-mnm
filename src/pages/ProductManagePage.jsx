import React from 'react'
import TableProduct from './../components/Products/TableProduct';
import ManageProduct from './../components/Products/ManageProduct';

function ProductManagePage({ opentap }) {
  return (
    <>
      {opentap === 'manageproduct' && (
        <div className='rounded-2xl flex flex-col gap-4'>
          <div className='flex gap-6 justify-between h-auto'>
            <TableProduct />
            {/* <ManageProduct /> */}
          </div>
        </div>

      )}
    </>
  )
}

export default ProductManagePage
