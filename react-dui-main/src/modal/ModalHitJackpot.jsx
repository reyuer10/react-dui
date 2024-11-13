import React from 'react'

function ModalHitJackpot({ children, openModal }) {
    if (!openModal) {
        return false
    }
    return (
        <div className="inset-0 absolute h-screen z-20 justify-center flex items-center bg-black bg-opacity-50">
            {children}
        </div>
    )
}

export default ModalHitJackpot