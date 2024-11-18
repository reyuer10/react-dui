import React from 'react'
import { useForm } from 'react-hook-form'
import { createNewTable } from '../api/tableApi'
import { getColorGameTable } from '../api/colorGameApi'

function ModalNewTable({ isOpenNewTable, newTable, setNewTable, socket }) {
    if (!isOpenNewTable) {
        return false
    }

    const handleCancelNewTable = () => {
        setNewTable(prevValue => ({
            ...prevValue,
            isOpenNewTable: false,
            newTableName: "",
            newTableMin: 0,
            newTableMax: 0
        }))
    }

    const handleSubmitNewTable = async (data) => {
        try {
            const response = await createNewTable({
                table_name: data.newTableName,
                table_min: data.newTableMin,
                table_max: data.newTableMax
            })

            if (response && socket && socket.readyState === WebSocket.OPEN) {
                const updateTable = await getColorGameTable()
                socket.send(JSON.stringify({
                    type: "update_tableInfo",
                    response: updateTable,
                }))

                setNewTable(prevNewTable => ({
                    ...prevNewTable,
                    isOpenNewTable: false,
                    newTableName: "",
                    newTableMin: 0,
                    newTableMax: 0,
                }));

                return response
            }

        } catch (error) {
            if (error.response?.data?.errors) {
                error.response.data.errors.map(e => {
                    const { errorName, errorMessage } = e;
                    console.log(errorMessage)
                    if (errorName === "table_name") {
                        setError("newTableName", {
                            type: "manual",
                            message: errorMessage
                        })
                    }
                    if (errorName === "table_min") {
                        setError("newTableMin", {
                            type: "manual",
                            message: errorMessage
                        })
                    }
                    if (errorName === "table_max") {
                        setError("newTableMax", {
                            type: "manual",
                            message: errorMessage
                        })
                    }
                })
            }
        }
    }


    const { handleSubmit, register, formState: { errors }, setError } = useForm();

    return (
        <div className='flex-col font-rubik inset-0 absolute h-screen z-20 justify-center flex items-center bg-black bg-opacity-50'>
            <div className='text-center bg-zinc-700 p-6 rounded-xl'>
                <div>
                    <p className='text-[42px] text-white font-black primary-drop-shadow my-2'>New Table</p>
                </div>
                <form onSubmit={handleSubmit(handleSubmitNewTable)} className='space-y-6'>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex flex-col text-center'>
                            <label className='text-white text-left' htmlFor="">Table Name</label>
                            <input autoComplete='off' {...register("newTableName")} className={`transition ${errors.newTableName ? "outline-[2px] outline-red-500" : ""} bg-zinc-300 outline-none px-2 py-2 rounded-md`} type="text" />
                            {errors.newTableName && <p className='text-red-500 py-2'>{errors.newTableName.message}</p>}
                        </div>
                        <div className='flex items-center space-x-4 '>
                            <div className='flex flex-col text-left'>
                                <label className='text-white' htmlFor="">Table Min</label>
                                <input placeholder='0' {...register("newTableMin")} className={`transition ${errors.newTableMin ? "outline-[2px] outline-red-500" : ""} outline-none px-2 py-2 rounded-md bg-zinc-300`} type="number" />
                                {errors.newTableMin && <p className='text-red-500 py-2'>{errors.newTableMin.message}</p>}

                            </div>
                            <div className='flex flex-col text-left'>
                                <label className='text-white' htmlFor="">Table Max</label>
                                <input placeholder='0' {...register("newTableMax")} className={`transition ${errors.newTableMax ? "outline-[2px] outline-red-500" : ""} outline-none px-2 py-2 rounded-md bg-zinc-300`} type="number" />
                                {errors.newTableMax && <p className='text-red-500 py-2'>{errors.newTableMax.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='text-right space-x-4'>
                        <button onClick={handleCancelNewTable} className='bg-white text-black px-4  py-2 rounded-md font-bold ' type='submit'>Cancel</button>
                        <button className='bg-black text-white px-4  py-2 rounded-md font-bold ' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalNewTable