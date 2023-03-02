import { FaAtom, FaDiscord, FaGithub, FaPlus } from 'react-icons/fa'
import { BsFillLightningChargeFill } from 'react-icons/bs'

const Nav = () => {

    const Icon = ({ icon, text }) => {
        return (
            <div className='w-[10rem] flex align-center justify-center group'>
                <div className='ml-2 transition duration-500 hover:bg-dc-green hover:text-white hover:rounded-2xl text-xl h-12 bg-dc-gray-1 my-2 w-12 rounded-full cursor-pointer flex items-center justify-center text-dc-green'>
                    {icon}
                </div>
                <div className='transition-all scale-0 group-hover:scale-100 w-20 h-8 bg-neutral-800 text-white mt-4 ml-4 flex justify-center align-center pt-1 rounded'>
                    <div>{text}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen flex flex-col bg-dc-gray-2 w-[4.5rem]">
            <Icon icon={<FaDiscord />} text="Discord"></Icon>
            <Icon icon={<FaAtom />} text="Atom"></Icon>
            <Icon icon={<FaPlus />} text="Plus"></Icon>
            <Icon icon={<BsFillLightningChargeFill />} text="Zeus"></Icon>
            <Icon icon={<FaGithub />} text="Github"></Icon>
        </div >
    )


}

export default Nav