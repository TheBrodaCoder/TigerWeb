import React from 'react'

//svg
import { ReactComponent as GithubLogo } from './github.svg'
import { ReactComponent as GmailLogo } from './email.svg'
import { ReactComponent as LinkedinLogo } from './linkedin.svg'
import { ReactComponent as PdfLogo } from './pdf.svg'
//cv
import pdf from './CV_Junior_Developer_Ruben_Tigre_06052021.pdf'
//style
import './Icons.scss'

const Icons = (props) => {

    const svgStyle = {width: '3em', height: '3em', display: 'block', margin: 'auto', alignSelf: 'center'}

    const getIcon = (name) => {
        switch(name) {
            case 'github':
                return <a href={props.link} target='_blank' rel='noreferrer'><GithubLogo className='logo' style={svgStyle}/></a>
            case 'linkedin':
                return <a href={props.link} target='_blank' rel='noreferrer'><LinkedinLogo className='logo' style={svgStyle}/></a>
            case 'email':
                return <a href={`mailto: ${props.link}`} target='_blank' rel='noreferrer'><GmailLogo className='logo' style={svgStyle}/></a>
            case 'cv':
                //you must upload your cv to this folder
                return <a href={pdf} target='_blank' rel='noreferrer'><PdfLogo className='logo' style={svgStyle}/></a>
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
