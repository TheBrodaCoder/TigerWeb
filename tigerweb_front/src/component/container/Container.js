import React, { useEffect, useState } from 'react'
import './Container.scss'
import ProfilePic from '../profilePic/ProfilePic'
import LinkIcons from '../LinkIcons/LinkIcons'

import { Translate } from '../../hooks/translate'
import data from '../LinkIcons/data.json'



const Container = () => {

    const [Text, setText] = useState(`${data.text}`)
    const [Title, setTitle] = useState('Welcome!')

    useEffect(() => {
        const translateText = async () => {
            let translated = await Translate(`${Text}`)
            let translatedTitle = await Translate(`${Title}`)
            setText(translated)
            setTitle(translatedTitle)
        }
        translateText()
        // eslint-disable-next-line
    }, [])

    
    
    return (
        <div className='card'>
            <ProfilePic/>
            <div className='info-block'>
                <h1>{Title}</h1>
                {Text.split('||').map(line => <p key={line.substr(1, 3)}>{line}</p>)}
            <LinkIcons/>
            
            </div>
        </div>
    )
}

export default Container