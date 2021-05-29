import React from 'react'
import './Container.scss'
import ProfilePic from '../profilePic/ProfilePic'
import LinkIcons from '../LinkIcons/LinkIcons'



const Container = () => {
    
    return (
        <div className='card'>
            <ProfilePic/>
            <div className='info-block'>
                <h1>Welcome!</h1>
                <p>
                My name is Ruben Tigre &#128006;, I am a Full Stack Developer actively looking for a job.
                <br/>
                <br/>
                After finishing my studies I decided to specialize in the development sector, for this I used different resources such as 'The Modern React Bootcamp' by Colt Steele and <span id='fullstack'><a href='https://fullstackopen.com/en/about' rel='noreferrer' target='_blank'>'Full Stack Open'</a></span> by the University of Helsinki. Is for this that im more used to work on the <span id='Mern'><a href='https://wikitia.com/index.php?title=MERN_(solution_stack)' target='_blank' rel='noreferrer'>MERN</a></span> stack, but i feel confident on any JavaScript library or framework. Also im so willed to learn so i dont discard work with other languages. 
                <br/>
                <br/>
                In my github you will find the project of <span id='github-repository'><a href='https://github.com/TheBrodaCoder/TigerWeb' target='_blank' rel='noreferrer'>this</a></span> website, as well as different projects and deliveries. I love to keep working and learning, so you'll probably see some activity!
                <br/>
                <br/>
                Feel free to <span id='contact'><a href='mailto:donowenrt@gmail.com'>contact</a></span> me if you have any questions or proposals for me.
                </p>
                
            <LinkIcons/>
            
            </div>
        </div>
    )
}

export default Container