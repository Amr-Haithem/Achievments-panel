import {FaStar, FaTrophy} from "react-icons/fa";
import {FaTimesCircle} from "react-icons/fa";
import {useState} from "react";


const Block = ({arrTodoes,setarrTodoes}) => {
    const [Count, setCount] = useState(0);

    const colorify=(e,single)=>{
        if(e.target.style.color!="yellow"){            
            e.target.style.color="yellow";
            single.stared=true;
            setCount(Count+1);

        }
        else{e.target.style.color="white";
            setCount(Count-1);
            single.stared=false;
    }
    }

    const deletingAcievement=(single)=>{
     single.exist=false;
     if(single.stared){setCount(Count-1)}
     setarrTodoes(arrTodoes.filter(singleAchievement=> singleAchievement.exist));
    }
    const clearAll=()=>{
        setarrTodoes([]);
        setCount(0);

    }
    return (
        
        <div>
            <div className="clearButtonHolder"> 
            <button className="clearButton" onClick={e=>clearAll()}>Clear all</button>
            
            </div>
        <div className="numOfStared"> There are {Count} special achievements</div>
        <div className="blocksContainer">
            
           
        {
            
        arrTodoes.map((single)=>(
            
            <p className="singleBlock">
            <div className="TrophyButtonCarrier" >
                <FaStar className="trophy" onClick={e=>colorify(e,single)}></FaStar>
                </div>
            <div className="textCarrier" >{single.text}</div>
            

            <div className="closeButtonCarrier" ><FaTimesCircle onClick={e=>deletingAcievement(single)} className="close"></FaTimesCircle></div>
                
            
            </p>
            
        ))
    } 
        </div>
        </div>
    
    );
}
 
export default Block;