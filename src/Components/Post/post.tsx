import './post.css'
import React from 'react'
import Heart from '../../Images/heart.png'
import HeartOutline from '../../Images/heart-outline.png'
import { PostProps } from '../../interface'

const Post = ({id, title, body, image, isFavourite}: PostProps) => {
    const [favourite, setFavourite] = React.useState<Boolean>(isFavourite)
    return (
        <article key={id} className="post">
            <h2> {title} </h2>
            <p> {body} </p>
            <img className='post-image' src={image.url} alt={image.alt} height={300} width={200} />
            <button 
                className='fav-button'
                onClick={() => setFavourite(!favourite)}
            > 
                <img 
                    src={favourite ? Heart : HeartOutline} 
                    alt={favourite ? "Filled Heart" : "Outline Heart"}
                    width='25px'
                    height='25px'
                />
            </button>
        </article>
    )
}

export default Post;