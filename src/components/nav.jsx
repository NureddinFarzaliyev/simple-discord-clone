import { FaAtom, FaDiscord, FaGithub, FaPlus } from 'react-icons/fa'
import { BsFillLightningChargeFill } from 'react-icons/bs'

const Nav = () => {

    const Icon = ({ icon, text }) => {
        return (
            <div className="sidebar-icon group shadow-lg">
                {icon}
                <span class="sidebar-tooltip">
                    {text}
                </span>
            </div>
        )
    }

    return (
        <div className="h-screen flex flex-col bg-dc-gray-1 w-[4.5rem]">
            <Icon icon={<FaDiscord />} text="Discord"></Icon>
            <div className='h-[2.5px] my-1.5 bg-dc-gray-2 w-[86%] ml-[7%] rounded'></div>
            <Icon icon={<FaAtom />} text="Atom"></Icon>
            <Icon icon={<FaPlus />} text="Plus"></Icon>
            <Icon icon={<BsFillLightningChargeFill />} text="Zeus"></Icon>
            <Icon icon={<FaGithub />} text="Github"></Icon>
        </div >
    )


}

export default Nav