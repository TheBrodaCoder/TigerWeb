import React, { useState } from 'react'
import cvJpeg from './fotocv.jpeg'
import cvGif from './profileGif.gif'

const ProfilePic = () => {

    const [Img, setImg] = useState(cvJpeg)

    const handleHover = () => {
        setImg(Img === cvJpeg ? cvGif : cvJpeg)
    }


    return (
        <>
            <img src={Img}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                alt='Mi foto!'
                style={{
                    width: '6vw',
                    borderRadius: '5em'
                }}
            />
        </>
    )
}

export default ProfilePic
