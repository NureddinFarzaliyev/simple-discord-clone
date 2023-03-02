import { FaPlus } from "react-icons/fa"

const Input = () => {

    return (
        <div className="bg-dc-gray-2 h-12 fixed bottom-3 mx-[5%] w-[70%] rounded flex items-center">
            <FaPlus className="w-[2%] text-dc-gray-2 rounded-full bg-dc-green mx-[1.5%] h-[20px] p-0.5 cursor-pointer" />
            <input type="text" placeholder="Enter message..." className="w-[95%] h-[100%] bg-dc-gray-2 text-dc-text" />
        </div>
    )
}

export default Input