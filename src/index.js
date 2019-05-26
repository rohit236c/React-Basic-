import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail  from './CommentDetail'
import Cards  from './Cards'

const App = ()=>{
    var d = new Date();
   
    return(
        <div className = "ui container  comments">   
        
        <Cards>   
        < CommentDetail 
            author="kohli" 
            time = {d.getHours() + ":" + d.getMinutes()}
            text = "hey there!!"
            avatar = {faker.image.avatar()}
       />
       </Cards>

       <Cards>
            < CommentDetail
             author="kumar" 
             time = {d.getHours() + ":" + d.getMinutes()}  
             avatar = {faker.image.avatar()}
             text = "nice one!!"/>
       </Cards>

        <Cards>
        < CommentDetail author="vijay" 
        time = {d.getHours() + ":" + d.getMinutes()}  
        avatar = {faker.image.avatar()} 
        text = "good afternoon!!"/>
        </Cards>

       
        </div>
        );
    };
    
    ReactDom.render(<App />,document.querySelector('#root'));