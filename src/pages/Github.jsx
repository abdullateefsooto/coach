import { useEffect, useState } from "react"
import "../assets/style/git.css"
const myUrl = "https://api.github.com/users"
console.log(myUrl);


const Github = () => {
    const [users, setUsers] = useState([])
    const [url, setUrl] = useState([])
    useEffect(()=> {
        console.log("sure banker"); 
        const fetchDb = async () => {
            try {
                const waiting = await fetch(myUrl);
                const users = await waiting.json();
                setUsers(users);
                setUrl(users)
                console.log(users);
                
            } catch {Error} {
                console.log(Error);
            }
        }; 
        fetchDb();      
    }, []);
    const deleteOne = (id) => {
        const newPerson = users.filter((people) => people.id !== id);
        setUsers(newPerson);
    };
    const clearlist = () => {
        setUsers([])
    };
    const reloadlist = () => {
        setUsers(url)
    }
  return (
    <div>
        
       <ul className="grid">
       {users.map((script) => {
        const { id, login, avatar_url, html_url} = script
        return <span key={id}>
        <li className="display">
            <img src={avatar_url} alt={login} height={300}/>
            <div className="log">
                {login}
            </div>
                <a className="log" href={html_url} target="_blank">{html_url} </a>
                <button className="del" onClick={() => deleteOne(id)}>delete</button>
        </li>
        </span>
      })}
       </ul>
       <button className="del" onClick={clearlist}>clearlist</button>
       <button className="del" onClick={reloadlist}>reloadlist</button>
    </div>
  )
};

export default Github