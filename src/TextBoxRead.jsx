import React from "react";
import { useState } from "react";

// it is a React Hook - Used for initializing
// variable in react function component using a setter method
// setter method
function TextBoxRead()
{
    const [input,setInput] = useState('');
    const [output,setOutput] = useState('');
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');

    // this is arrow function for button click event
    const handleClick = () => {
        setOutput('You entered: ${input}');
    };

   // returns a single JSX component
    return (
        <>
            <h1>Reading from Text Box</h1>
            <input 
            type="text"
            value = {input}
            onChange = {(e) => setInput(e.target.value)} />

            <button onClick={handleClick}>
                Click here to see input
                </button>
            <p>{output}</p>
        </>
    );
} 
export default TextBoxRead 