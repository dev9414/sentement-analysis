import React from 'react';
import '../styles/_emoji.scss'

  const emoji1="emojii"
  const emoji2='emoji'
  const emoji3='emojii'
//const bl=true

function Emoji()
{
    return <div>
            
        <div id="1" className={` ${emoji1} emoji--yay `} >   
            <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__mouth"></div>
            </div>
        </div>
        <div id="2" className={`${emoji2}  emoji--wow`}>
            <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__eyes"></div>
            <div className="emoji__mouth"></div>
            </div>
        </div>
        <div id="3" className={`${emoji3}  emoji--sad`}>
            <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__eyes"></div>
            <div className="emoji__mouth"></div>
            </div>
        </div>
        </div>
        
        
  

}

// document.getElementById("1").element.classList.remove("emoji");
// document.getElementById("1").element.classList.add("emoji");
export default Emoji;