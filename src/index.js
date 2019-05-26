import React from 'react';
import ReactDom from 'react-dom';
// import faker from 'faker';
import CommentDetail  from './CommentDetail'

const App = ()=>{
    var d = new Date();
   
    return(
        <div className = "ui container  comments">      
        < CommentDetail 
            author="kohli" 
            time = {d.getHours() + ":" + d.getMinutes()}
            text = "hey there!!"
       />
        < CommentDetail author="kumar" time = {d.getHours() + ":" + d.getMinutes()}  text = "nice one!!"/>
        < CommentDetail author="vijay" time = {d.getHours() + ":" + d.getMinutes()}  text = "good afternoon!!"/>
        </div>
        );
    };
    
    ReactDom.render(<App />,document.querySelector('#root'));