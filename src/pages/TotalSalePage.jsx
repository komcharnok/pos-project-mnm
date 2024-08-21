import React from 'react'
import TotalSale from '../components/TotalSale/TotalSale'

function TotalSalePage({ opentap }) {
    return (
        <>
            {opentap === 'sumsale' && (
                <div className='rounded-2xl flex flex-col gap-4'>
                    <div className='flex gap-6 justify-between h-auto'>
                        <TotalSale />
                    </div>
                </div>

            )}
        </>
    )
}

export default TotalSalePage
