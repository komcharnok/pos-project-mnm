import React from 'react'

function ProductManagePage({opentap}) {
  return (
    <>
      {opentap === 'manageproduct' && (
        <div>
          <h1>Product</h1>
        </div>
        
      )}
    </>
  )
}

export default ProductManagePage
