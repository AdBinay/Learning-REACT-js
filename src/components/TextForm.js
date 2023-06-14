import React , {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
   const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
   }
   const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
   }
   const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
}
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
}
   
    const handleClearClick = ()=>{
    let newText ='';
    setText(newText)
   }

   const handleOnChange = (event)=>{
    setText(event.target.value);
   }

  const[text, setText] = useState(' ');
  
  return (
    <>
    <div>
        <div className="container mb-3">
            <label htmlFor="my-box" className="form-label"><h2>{props.heading}</h2></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2"  onClick={handleUpClick} type="button">convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}  type="button">convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}  type="button">clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
TextForm.propTypes={
    heading: PropTypes.string.isRequired, 
}
TextForm.defaultProps={
    heading:"Your Text Here For Analysis.",
}