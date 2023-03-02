import { Disclosure } from "@headlessui/react"
import { FaPlus } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi"
import { BiHash } from "react-icons/bi"
import { AiFillSound } from "react-icons/ai"


const Channels = () => {
    return (
        <div className="bg-dc-gray-2 w-60 py-5 px-3">
            <h1 className="text-dc-text font-bold text-xl">Channels</h1>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-52 justify-between align-center mt-5">
                            <div className="flex align-center">
                                <FiChevronRight className={open ? "text-xl mt-0.5 text-dc-text transition-all rotate-90 transform" : "text-xl mt-0.5 text-dc-text"} />
                                <h1 className={open ? "ml-1 text-lg text-dc-text-blue font-bold" : "ml-1 text-lg text-dc-text font-bold"}>General</h1>
                            </div>
                            <FaPlus className="mt-1 text-sm text-dc-text" />
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <div className="flex mt-1 ml-5 text-l font-bold text-dc-text cursor-pointer transition duration-200 hover:text-pink-400">
                                <BiHash className="mt-[5px] mr-1" /><div>general-chat</div>
                            </div>
                            <div className="flex mt-1 ml-5 text-l font-bold text-dc-text cursor-pointer transition duration-200 hover:text-pink-400">
                                <BiHash className="mt-[5px] mr-1" /><div>global-chat</div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-52 justify-between align-center mt-5">
                            <div className="flex align-center">
                                <FiChevronRight className={open ? "text-xl mt-0.5 text-dc-text transition-all rotate-90 transform" : "text-xl mt-0.5 text-dc-text"} />
                                <h1 className={open ? "ml-1 text-lg text-dc-text-blue font-bold" : "ml-1 text-lg text-dc-text font-bold"}>Questions</h1>
                            </div>
                            <FaPlus className="mt-1 text-sm text-dc-text" />
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <div className="flex mt-1 ml-5 text-l font-bold text-dc-text cursor-pointer transition duration-200 hover:text-pink-400">
                                <BiHash className="mt-[5px] mr-1" /><div>react</div>
                            </div>
                            <div className="flex mt-1 ml-5 text-l font-bold text-dc-text cursor-pointer transition duration-200 hover:text-pink-400">
                                <BiHash className="mt-[5px] mr-1" /><div>bootstrap</div>
                            </div>
                            <div className="flex mt-1 ml-5 text-l font-bold text-dc-text cursor-pointer transition duration-200 hover:text-pink-400">
                                <BiHash className="mt-[5px] mr-1" /><div>vue</div>
                            </div>
                            <div className="flex mt-1 ml-5 text-l font-bold text-dc-text cursor-pointer transition duration-200 hover:text-pink-400">
                                <BiHash className="mt-[5px] mr-1" /><div>angular</div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-52 justify-between align-center mt-5">
                            <div className="flex align-center">
                                <FiChevronRight className={open ? "text-xl mt-0.5 text-dc-text transition-all rotate-90 transform" : "text-xl mt-0.5 text-dc-text"} />
                                <h1 className={open ? "ml-1 text-lg text-dc-text-blue font-bold" : "ml-1 text-lg text-dc-text font-bold"}>Voice Channels</h1>
                            </div>
                            <FaPlus className="mt-1 text-sm text-dc-text" />
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            <div className="flex mt-1 ml-5 text-l font-bold text-dc-text cursor-pointer transition duration-200 hover:text-pink-400">
                                <AiFillSound className="mt-[5px] mr-1" /><div>global-voice</div>
                            </div>
                            <div className="flex mt-1 ml-5 text-l font-bold text-dc-text cursor-pointer transition duration-200 hover:text-pink-400">
                                <AiFillSound className="mt-[5px] mr-1" /><div>english-voice</div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div >
    )
}

export default Channels