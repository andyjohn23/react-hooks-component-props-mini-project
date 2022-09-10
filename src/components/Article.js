import React from 'react'

function Article({ title, date, preview, minutes }) {
    const articleDate = date
    const defaultDate = "January 1, 1970"
    return (
        <div id='article'>
            <article>
                <h3>{title}</h3>
                <small>{articleDate ? date : defaultDate}</small>
                <p>{preview}</p>
            </article>
        </div>
    );
}

export default Article