import React from 'react'

function ModalSpinResults({ isOpenModal, children }) {

    if (!isOpenModal) {
        return false
    }
    return (
        <div className='inset-0 absolute h-screen z-20 justify-center flex items-center bg-black bg-opacity-50'>{children}</div>
    )
}

export default ModalSpinResults