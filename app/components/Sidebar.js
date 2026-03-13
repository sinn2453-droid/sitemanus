"use client";

import { useState } from "react";

export default function Sidebar() {

  const [open,setOpen] = useState(false);

  return (
    <>
      <button
        style={{
          position:"fixed",
          top:"20px",
          left:"20px",
          zIndex:9999,
          width:"40px",
          height:"40px",
          borderRadius:"10px",
          border:"none",
          background:"white",
          cursor:"pointer"
        }}
        onClick={()=>setOpen(true)}
      >
        ☰
      </button>

      {open && (
        <div
          style={{
            position:"fixed",
            inset:0,
            background:"rgba(0,0,0,0.5)"
          }}
          onClick={()=>setOpen(false)}
        />
      )}
    </>
  );
}
