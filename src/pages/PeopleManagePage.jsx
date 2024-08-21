import React from 'react'
import PeopleManage from '../components/People/PeopleManage'

function PeopleManagePage({ opentap }) {
    return (
        <>
            {opentap === 'managepeoplo' && (
                <div className='rounded-2xl flex flex-col gap-4'>
                    <div className='flex gap-6 justify-between h-auto'>
                        <PeopleManage />
                    </div>
                </div>

            )}
        </>
    )
}

export default PeopleManagePage
