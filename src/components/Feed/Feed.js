import React from 'react';
import './Feed.css';

import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=t27x4Vyt8u4AX-JvvUh&_nc_ht=scontent.fbeg7-1.fna&oh=9a2ae2e510c952c8cba78615075f6847&oe=5F6F88A0"
                message="WOOOW THIS WORKS!"
                timestamp="This is timesmp"
                username="Lazar Kostic"
                image='https://cxl.com/wp-content/uploads/2018/09/coding-language.jpg'
            />
            <Post
                profilePic="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=t27x4Vyt8u4AX-JvvUh&_nc_ht=scontent.fbeg7-1.fna&oh=9a2ae2e510c952c8cba78615075f6847&oe=5F6F88A0"
                message="WOOOW THIS WORKS!"
                timestamp="This is timesmp"
                username="Lazar Kostic"
                image='https://cxl.com/wp-content/uploads/2018/09/coding-language.jpg'
            />
            <Post
                profilePic="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=t27x4Vyt8u4AX-JvvUh&_nc_ht=scontent.fbeg7-1.fna&oh=9a2ae2e510c952c8cba78615075f6847&oe=5F6F88A0"
                message="WOOOW THIS WORKS!"
                timestamp="This is timesmp"
                username="Lazar Kostic"
                image='https://cxl.com/wp-content/uploads/2018/09/coding-language.jpg'
            />
            <Post
                profilePic="https://scontent.fbeg7-1.fna.fbcdn.net/v/t1.0-9/35159270_1885118164861091_6967089570097659904_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=t27x4Vyt8u4AX-JvvUh&_nc_ht=scontent.fbeg7-1.fna&oh=9a2ae2e510c952c8cba78615075f6847&oe=5F6F88A0"
                message="WOOOW THIS WORKS!"
                timestamp="This is timesmp"
                username="Lazar Kostic"
                image='https://cxl.com/wp-content/uploads/2018/09/coding-language.jpg'
            />
        
        </div>
    )
}

export default Feed;
