import { useState, CSSProperties } from "react"
import RingLoader from "react-spinners/RingLoader";


export const Form = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false);


    const override = {
        margin: "0 auto",
        top: 100
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 4000)



    }
    return (
        <>
            <div className="w-full ">
                {
                    count == 0 ?
                        <form onSubmit={(e) => { handleSubmit(e), setCount(count + 1) }} className=" mx-auto pt-[20px] pb-[20px] w-[500px] border border-slate-100  bg-white rounded-[10px] shadow-xl">
                            <div className="text-center mb-[15px] text-[18px] font-[500]" > User Form </div>
                            <div className=" flex flex-row gap-[10px] mb-[15px] ml-[15px]">
                                <label className="" for="fname"> First Name </label>
                                <input type="text" id="fname" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} className=" border border-slate-200 shadow-lg shadow-slate-500/40 outline-none rounded-[5px]" />
                            </div>
                            <div className=" flex flex-row gap-[10px] mb-[15px] ml-[15px]">
                                <label className="" for="lname"> Last Name </label>
                                <input type="text" id="lname" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} className="border border-slate-200 shadow-lg shadow-slate-500/40 outline-none rounded-[5px]" />
                            </div>
                            <div className="flex flex-row gap-[46px] mb-[15px] ml-[15px]">
                                <label className="" for="email"> Email </label>
                                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-slate-200 shadow-lg shadow-slate-500/40 outline-none rounded-[5px]" />
                            </div>
                            <div className=" flex flex-row gap-[15px] mb-[15px] ml-[15px]">
                                <label for="number"> Phone No </label>
                                <input type="text" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} className="border border-slate-200 shadow-lg shadow-slate-500/40 outline-none rounded-[5px]" />
                            </div>
                            <div className="flex flex-row gap-[29px] ml-[15px]">
                                <div>

                                    <label for="address"> Address </label>
                                </div>
                                <div>

                                    <textarea name="address" rows="4" cols="50" onChange={(e) => setAddress(e.target.value)} className="border border-slate-200 shadow-lg shadow-slate-500/40 outline-none rounded-[5px]"> </textarea>
                                </div>

                            </div>
                            <div className="w-[100px]  mt-[20px] bg-blue-500 text-center text-white px-2 py-1 rounded-[4px] mx-auto">
                                <button type="submit" > Submit </button>
                            </div>
                        </form> : loading ?
                            <div>
                                <RingLoader
                                    color="#004DD7"
                                    loading={loading}
                                    cssOverride={override}
                                    size={60}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            </div> : <div className="border-white border-[1px]">

                                <div className="mx-auto mt-[100px] pt-[20px] pb-[20px] w-[500px] border border-slate-100  bg-white rounded-[10px] shadow-xl">
                                    <div className="flex flex-row mb-[15px] ml-[15px] gap-[15px]">
                                        <div className="w-[100px]"> First Name: </div>
                                        <div> {fname} </div>

                                    </div>
                                    <div className="flex flex-row mb-[15px] ml-[15px] gap-[15px]">
                                        <div className="w-[100px]"> Last Name: </div>
                                        <div> {lname} </div>

                                    </div>
                                    <div className="flex flex-row mb-[15px] ml-[15px] gap-[15px]">
                                        <div className="w-[100px]"> Email:</div>
                                        <div> {email} </div>

                                    </div>
                                    <div className="flex flex-row mb-[15px] ml-[15px] gap-[15px]">
                                        <div className="w-[100px]"> Phone No: </div>
                                        <div> {number} </div>

                                    </div>
                                    <div className="flex flex-row mb-[15px] ml-[15px] gap-[15px]">
                                        <div className="w-[100px]"> Address: </div>
                                        <div> {address} </div>

                                    </div>

                                </div>
                            </div>

                }



            </div>
        </>
    )
}