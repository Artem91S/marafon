import React from "react";

function Button({ style }) {
  return <button 
  style={{
    transform: '0.25s ease-in,opacity 0.25s ease-in,visibility 0.25s ease-in'
  }}
  className={`bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 ${style}`}>Бери участь!</button>;
}

export default Button;

