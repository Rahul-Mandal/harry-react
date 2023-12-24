import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Hello Rahul")
    console.log(text)
    // text = "Hi Rahul"  // wrong way
    // setText("New Name")  //correct way

    const changeUpText =()=>{
        console.log("Uppercase was clicked", text)
        //setText("u have clicked on text upper")
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase", "success");
    }
    const handleOnChange =(e)=>{
        console.log("on change")
        setText(e.target.value)
    }

    const changeLowText =()=>{
        let lower = text.toLowerCase()
        setText(lower)
        props.showAlert("converted to lowercase", "success");
    }

    const clearText =()=>{
        setText('')
        props.showAlert("want to clear all text", "success");
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        console.log(text)
        navigator.clipboard.writeText(text.value)
        props.showAlert("copy to clipboard", "success");

    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extra spaces", "success");
    }

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#040478'}}>
        <h1>{props.heading} - </h1>
        <div className="mb-3">
        {/* <label htmlfor="myBox" class="form-label">Enter text to analyze</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#040478'}} id="myBox"  rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={changeUpText}>Convert to upper</button>
        <button className='btn btn-primary mx-2' onClick={changeLowText}>Convert to lowerer</button>
        <button className='btn btn-success mx-2' onClick={clearText}>Clear Text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>copy</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#040478'}}>
        <h1>Your text summary </h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <h2> Time to read content</h2>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h4>Preview</h4>
        <div>{text.length>0?text:"Enter"}</div>
    </div>
    </>
  )
}




//auto rename tag extension