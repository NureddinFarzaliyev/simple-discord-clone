import { BiHash } from "react-icons/bi"
import { BsBell } from "react-icons/bs"
import { RiAccountCircleFill } from "react-icons/ri"

const Top = () => {
    return (
        <div className="bg-dc-gray-3 h-16 shadow-lg text-dc-text flex items-center justify-between px-4 fixed w-[81%]">
            <div className="flex text-lg font-bold">
                <BiHash className="mt-1.5" />
                <h1>general-chat</h1>
            </div>
            <div className="flex">
                <input type="text" name="seacrh" placeholder="Search..." className="pl-3 mx-2 bg-dc-gray-2 p-1 rounded w-52 shadow-md" />
                <BsBell className="text-2xl mt-1 mx-2 cursor-pointer" />
                <RiAccountCircleFill className="text-2xl mt-1 mx-2 cursor-pointer" />
            </div>
        </div>
    )
}

export default Top