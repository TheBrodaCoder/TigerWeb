import React from 'react'
import './Container.scss'
import ProfilePic from '../profilePic/ProfilePic'
import LinkIcons from '../LinkIcons/LinkIcons'



const Container = () => {

    let Text = "My name is Ruben Tigre, I am a Full Stack Developer actively looking for a job.|| After finishing my studies I decided to specialize in the development sector, for this I used different resources such as 'The Modern React Bootcamp' by Colt Steele and 'Full Stack Open' by the University of Helsinki.|| In my github you will find the project of this page, as well as different tests and deliveries that I have been doing.|| Feel free to contact me if you have any questions."

    
    return (
        <div className='card'>
            <ProfilePic/>
            <div className='info-block'>
                <h1>Welcome!</h1>
                {Text.split('||').map(line => <p key={line.substr(1, 3)}>{line}</p>)}
            <LinkIcons/>
            
            </div>
        </div>
    )
}

export default Container