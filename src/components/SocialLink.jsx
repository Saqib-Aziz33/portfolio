// icons
import { AiOutlineWhatsApp } from 'react-icons/ai'
import {RiLinkedinLine} from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

function SocialLink({ to, children }) {

    const iconSize = '1.2rem'

    return <a href={to} rel="noreferrer" target={'_blank'} className="btn btn-ghost btn-sm rounded-btn">
        {children.toLowerCase() === 'github' && <AiOutlineGithub size={iconSize} />}
        {children.toLowerCase() === 'whatsapp' && <AiOutlineWhatsApp size={iconSize} />}
        {children.toLowerCase() === 'mail' && <AiOutlineMail size={iconSize} />}
        {children.toLowerCase() === 'linkedin' && <RiLinkedinLine size={iconSize} />}
    </a>;
}

export default SocialLink;