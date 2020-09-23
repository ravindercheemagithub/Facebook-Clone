import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed"> 
        {/* story */}
        <StoryReel />

        {/* messageSender */}

        <MessageSender />

        <Post 
         profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu_EJUCn6PVrfbR35BBPJOf57nCRXgo0AMb1chZE=s64-c-mo"
         message='This works'
         timestamp='Timestamp'
         username='sashita'
         image='https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=749&q=80'
         />
        <Post
         profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu_EJUCn6PVrfbR35BBPJOf57nCRXgo0AMb1chZE=s64-c-mo"
         message='This works'
         timestamp='Timestamp'
         username='sashita' />
            
        </div>
    )
}

export default Feed;
