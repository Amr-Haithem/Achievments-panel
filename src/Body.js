import {useState} from 'react';
import Block from './block'

const Body = () => {
    const [EventHandler, setEventHandler] = useState("");
    const [arrTodoes, setarrTodoes] = useState([]);
    

    const appendArray=(e)=>{
        if(e.target.value!="\n")
        setarrTodoes([...arrTodoes,{text:EventHandler,id:Math.random()*1000,stared:false,exist:true}]);
        
    };
    const postingContent=(e)=>{
        if(e.key === 'Enter'){
            console.log(e);
            appendArray(e);
            e.target.value="";
        }

    }
    
    
       
    
    return ( 
        <div className="Body">
             <div className="writeBlock">
            <textarea onKeyPress={e=>postingContent(e)}  onChange={e =>setEventHandler(e.target.value)}>

            </textarea>
            <div className="buttonHolder">
                <button onClick={e=>appendArray(e)}>Submit</button>
               
            </div>
            
        </div>

        <Block arrTodoes={arrTodoes} 
        setarrTodoes={setarrTodoes}
          />
        </div>

     );
}
 
export default Body;