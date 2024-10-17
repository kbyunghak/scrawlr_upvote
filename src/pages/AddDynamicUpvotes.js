import React, { useState } from "react";
import Plus from '../Images/plus.svg';
import UpArrow from '../Images/uparrow.svg';
import './AddDynamicUpvotes.css';

const AddDynamicUpvotes = () => {
  
  const [upvotes, setUpvotes] = useState([]);  
  const [isActive, setActive] = useState(false);

  const handleAddBtn = () => {
    let index = upvotes.length;
    setUpvotes([...upvotes, index++]);
    console.log("upvotes length " + upvotes.length);
  };

  const togglePlusBtn = (index) => {
    setActive(!isActive);        
  }  

  return (
    <div>
      <div className="modal">
          <div className="leftFrame">
            {upvotes.map((item, index) => (
                <div className= "upvote-container" key={index}> 
                {upvotes.length > 0 && (
                  <button appearance="ghost" className={isActive ? 'upvoteBtn_selected': 'upvoteBtn'}  aria-pressed="false" onClick={ () => togglePlusBtn(index) }>
                    <img src={UpArrow} alt="UpArrow" /> 
                  </button>)}
              </div>
            ))}
          </div>
          <div className="rightFrame" >
              <button className="upvoteBtn" onClick= { () => handleAddBtn() }>
                <img src={Plus} alt="plus" />                        
              </button>
          </div>
      </div>
    </div>
  );
}

export default AddDynamicUpvotes;