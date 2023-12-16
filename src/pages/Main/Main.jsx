import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            return res.json()

        }).then((data) => {
    
            

            setPost(data)
        })
    }, [])

function Getshortvalue(word, id){
    if(word.length>20){
        return (<>{word.substr(0,20)}+''+<Link to={'/posts/'+id}>More...</Link></>)
    }else{
        return word
    }
    }
   
    return (
        <div className='posts'>
            {
                posts.length !==0 ? posts.map((item) => {
                    return (
                        <div className='post'>
                            <strong>{item.id}</strong>
                            <h1>{item.title}</h1>
                            <p>{Getshortvalue(item.body, item.id)}</p>
                            <Link to={'/posts/'+item.id}><button>details</button></Link>    
                        </div>
                    )
                }): ''

                
            }
            
        </div>
    );
}

export default Main;
