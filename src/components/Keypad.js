// Code Keypad Component Here
function Keypad() {
    const handleChange =(event) => {
      console.log("Entering password...");
    }
  
    return (
      <div>
        <input type="password" onChange={handleChange} />
        <h1>hello</h1>
      </div>
    );
  }
  
  export default Keypad;
  