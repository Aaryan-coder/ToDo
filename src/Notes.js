import React, { useState,useEffect } from 'react';
const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [value,setValue] = useState(0);
    useEffect(() => {
        console.log('call useEffect');
        if (value > 0) {
          document.title = `Task Pending(${value})`;
        }
      });
    function handleClick(){
        const ans = prompt("Enter a new Task")
        if(ans===""||ans==" "){
            alert("Task cannot be empty");
        }
        else{
        alert("Task added successfully")
        setNotes([...notes, {text: ans}]);
        setValue(value+1)
        }
    }
    function handleDelete(){
        const del = prompt("Enter the task you want to delete");
        for(let i = 0;i<=notes.length;i++){
            if(i==notes.length){
                alert("Enter valid task.")
                break;
            }
            if(del === notes[i].text){
                alert("Task deleted successfully");
                setNotes(notes.filter((item) => item.text !==notes[i].text ))
                setValue(value-1)
                break;
            }
        }
        
    }
    const handleDark = ()=>{
        if(document.getElementById('check').checked){
        document.getElementById('col').style.backgroundColor = "black"
        document.getElementById('col').style.color = "white"
        }
        else{
            document.getElementById('col').style.backgroundColor = "white"
            document.getElementById('col').style.color = "black" 
        }
    }

    return(
        
        <div>
            <div style = {{height:"75px",backgroundColor:"black"}}>
            <h1 style = {{marginLeft:"47%",paddingTop:"15px",color:"white"}}>Todo List</h1>
            </div>
            <div className = "container" >
            <img className = "bg" src = "https://wallpaperaccess.com/full/1549504.jpg" alt = "bg"/>
            <br />
            <div className="notes" id = 'col'>
                <div style = {{display:"flex",paddingTop:"20px",paddingLeft:"50px"}}>
                <input type = "button" value = "Add" onClick = {handleClick} className = "btn1" style = {{marginRight:"10px"}} />
                <input type = "button" value = "Delete" className = "btn2" onClick = {handleDelete} />
                <p id = "value" style = {{marginLeft:"20px",marginRight:"20px"}}>{value}</p>
                <h3 id = "head" >Dark Theme: </h3><input type = "checkbox" onClick = {handleDark} id = "check" style = {{marginLeft: "10px"}}/>
                </div>
                <br />
                {notes.map(note=>{
                    return (<p id = 'textCol' style = {{textAlign:"left",paddingLeft:"20px"}} >{note.text}</p>)
                })}
            </div>
            </div>
        </div>
    )
}

export default Notes;