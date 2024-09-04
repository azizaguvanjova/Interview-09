import React, { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  // KODUNUZ BURAYA GELECEK
  const [size, setSize] = useState(100)
  const [isGrowing, setIsGrowing] = useState(true)
  const minSize= 50;
  const maxSize = 500;
  const increment = 2

  useEffect(()=>{
    const interval = setInterval(()=>{
      setSize((prevSize) => {
        if(isGrowing){
          return Math.min(prevSize + increment, maxSize)
        }else {
          return Math.max(prevSize - increment, minSize)
        }
      })
    },50)
    return () => clearInterval(interval)
    },[isGrowing])

    const handleClick =()=>{
      setIsGrowing(!isGrowing)
    }
  

    return (
      <button 
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transition: "all 0.1s ease-in-out",
        fontSize: "16px",
        cursor: "pointer",
        border: "none",
        borderRadius: "8px",
        color: "white",
        backgroundColor: isGrowing ? "#4caf50" : "#f44336"
      }}
      >
        {isGrowing ? "Küçült": "Büyüt"}
      </button>
    )
};

export default App;
