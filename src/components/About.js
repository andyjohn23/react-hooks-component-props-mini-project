import React from 'react'

function About(props) {
    const aboutImage = props.image
    return (
        <div id='about'>
            <aside>
                {aboutImage ? <img src={props.image} alt="blog logo" /> :
                    <img src="https://via.placeholder.com/215" alt='blog logo' />}
                <p>{props.about}</p>
            </aside>
        </div>
    );
}

export default About