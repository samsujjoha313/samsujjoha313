import React from 'react';
import { useState } from 'react';
function TextForm(props){
    const onChangeHandler=(event)=>{
        setText(event.target.value)
    }

    const onUpdtHandler=()=>{
       setText('This is the Another Text,You Can Write Here ALL the Text')
    }

    const onStateHandler=()=>{
        const newText = Text.toUpperCase();
        setText(newText);
       props.showAlert('conveted the uppercase','success');
    }

     const onVersityHandler=()=>{
        const inputText = Text.toLowerCase();
        setText(inputText);    

    }
    const onUniHandler=()=>{
        const inputValue = Text.split(/[ ]+/);
        setText(inputValue.join(' '))
    }
 
    const onClearHandler=()=>{
        
        setText('')
    }
 
const onCopyHandler=()=>{
    var Text = document.getElementById('myBox');
    Text.select();
    navigator.clipboard.writeText(Text.value);
}
     const[Text,setText] = useState("You Should Text Here");
     
    return(
        
    <>
    <div className="container">
    
    <div class="mb-3 mt-3">
     <h1 className=""style={{ color: props.mode=== 'light'? 'black':'white'}}>tis is the textform</h1>
      <textarea class="form-control" id="box" onChange={onChangeHandler} style={{ backgroundColor: props.mode=== 'dark'? 'white':'red',color: props.mode=== 'light'? 'black':'white'}}  rows="8" value={Text}></textarea>
      <button className="btn btn-primary mt-2 mx-2" onClick={onUpdtHandler}>ChangeText btn</button>
      <button className="btn btn-primary mt-2 mx-2" onClick={onStateHandler}>UpperCase btn</button>
      <button className="btn btn-primary mt-2 mx-2" onClick={onVersityHandler}>LowerCase btn</button>
      <button className="btn btn-primary mt-2 mx-2" onClick={onUniHandler}>EraseSpace btn</button>
      <button className="btn btn-primary mt-2 mx-2" onClick={onClearHandler}>Clear btn</button>
      <button className="btn btn-primary mt-2 mx-2" onClick={onCopyHandler}>Copy btn</button>
    
    </div>

    <div className="conatiner" style={{ color: props.mode=== 'light'? 'black':'white'}} >
    
    <h1>Textarea Preview</h1>
    <p>the total space is: {Text.split(" ").filter((element)=>{return element.length!==0}).length} and Character is: {Text.length}</p>
    <p>{.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} miniutes per world</p>
    <h2>Preview</h2>
    <p>{Text}</p>
    </div>
    
    </div>
    </>
    );
}
export default TextForm;