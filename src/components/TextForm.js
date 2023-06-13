import React , {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
   const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
   }

   const handleOnChange = (event)=>{
    setText(event.target.value);
   }

  const[text, setText] = useState('Enter Text here');
  
  return (
    <div>
        <div className="mb-3">
            <label htmlFor="my-box" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} type="button">convert to uppercase</button>
        {/* <button className="btn btn-primary" type="button">convert to lowercase</button> */}
    </div>
  )
}
TextForm.propTypes={
    heading: PropTypes.string.isRequired, 
}
TextForm.defaultProps={
    heading:"Your Text Here For Analysis.",
}