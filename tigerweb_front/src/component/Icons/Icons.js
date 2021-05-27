import React from 'react'

//svg
import { ReactComponent as GithubLogo } from './github.svg'
import { ReactComponent as GmailLogo } from './email.svg'
import { ReactComponent as LinkedinLogo } from './linkedin.svg'

const Icons = (props) => {

    const svgStyle = {width: '3em', height: '3em', display: 'block', margin: 'auto', alignSelf: 'center'}

    const getIcon = (name) => {
        switch(name) {
            case 'github':
                return <a href={props.link}><GithubLogo style={svgStyle}/></a>
            case 'linkedin':
                return <a href={props.link}><LinkedinLogo style={svgStyle}/></a>
            case 'email':
                return <a href={`mailto: ${props.link}`}><GmailLogo style={svgStyle}/></a>
            default:
                return null
        }
    }

    
    return (
        <div style={{position: 'relative', width: 'auto', height: 'auto'}}>
          {getIcon(props.icon)}
        </div>
    )
}

export default Icons
