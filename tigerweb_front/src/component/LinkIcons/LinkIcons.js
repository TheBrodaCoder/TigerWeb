import React from 'react'
import Icons from '../Icons/Icons'
import data from './data.json'
import './LinkIcons.scss'

const LinkIcons = () => {

    const renderIcons = (links) => {
        let rendered = links.map(link => {
            return <Icons key={link.icon} link={link.Link} icon={link.icon} />
        })
        console.log(rendered)
        return rendered
    }

    return (
        <div className="List-Grid">
        <div className='List-Icons'>
            {renderIcons(data.icons)}
        </div>
        </div>
        
    )
}

export default LinkIcons
