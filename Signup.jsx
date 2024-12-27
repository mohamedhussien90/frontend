import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Regular expressions for validation 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;


// Styled components (consider moving these to a separate file for better organization)
const FormContainer = styled.div`
     display: flex;          /* Enables flexbox layout. */
    flex-direction: column; /* Arranges items vertically. */
    align-items: center;    /* Centers items horizontally within the container, */
    width: 200vh;           /* Sets the width. */
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;     /* Rounds the corners.*/
    
`;

const Label = styled.label`
    display: block;          /* Makes the label take up the full width. */
    margin-bottom: 5px;     /* Adds a margin below the label. */
    text-align: left;       /* Aligns text to the left. */
`;

const Input = styled.input`
    width: calc(100% - 22px); /* Calculates width, subtracting padding and border. */
    padding: 10px;            /* Adds padding inside the input. */
    margin-bottom: 10px;     /* Adds margin below the input. */
    border: 1px solid #ccc;  /* Adds a border around the input. */
    border-radius: 5px;       /* Rounds the corners of the input. */
    box-sizing: border-box;   /* Includes padding and border in the total width and height. */
`;

const Button = styled.button`
    padding: 10px 20px;     /* Adds padding to the button. */
    background-color: #4CAF50; /* Sets the background color to green. */
    color: white;           /* Sets text color to white. */
    border: none;           /* Removes default button border. */
    border-radius: 5px;     /* Rounds the corners of the button. */
    cursor: pointer;        /* Changes cursor to a pointer on hover. */
    margin-top: 10px;      /* Adds margin above the button. */
`;

const ErrorMessage = styled.p`
  color: red;               /* Sets the text color to red for error messages. */
  margin-top: 5px;          /* Adds margin to separate from other elements. */
  text-align: left;         /* Aligns the text to the left. */
`;

const Signup = () => { 
    const [fullName, setFullName] = useState(''); 
    const [dob, setDob] = useState(null); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        setError(''); 

        try { 
            const response = await fetch('/api/signup', {  // **REPLACE with actual backend API endpoint**
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({ fullName, dob, email, password }), 
            });

            if (!response.ok) { 
                const data = await response.json(); 
                setError(data.message || 'Signup failed. Please check your input or try again later.'); 
                return; 
            }

            console.log('Signup successful!');
            navigate('/login'); 

        } catch (error) { 
            setError('An error occurred during signup. Please try again later.'); 
            console.error(error); 
        }
    };

    return (
        <FormContainer> 
            <h1>Sign Up</h1> 
            <form onSubmit={handleSubmit}> 
                <Label htmlFor="fullName">Full Name:</Label> 
                <Input                    
                    type="text"                
                    id="fullName"             
                    value={fullName}          
                    onChange={(e) => setFullName(e.target.value)} 
                    required                  
                />

                <Label htmlFor="dob">Date of Birth:</Label> 
                <DatePicker                  
                    id="dob"                 
                    selected={dob}            
                    onChange={(date) => setDob(date)} 
                    dateFormat="yyyy-MM-dd"  
                    maxDate={new Date()}     
                    required                  
                />

                <Label htmlFor="email">Email:</Label> 
                <Input
                    type="email"             
                    id="email"                
                    value={email}            
                    onChange={(e) => setEmail(e.target.value)} 
                    required                  
                />

                <Label htmlFor="password">Password:</Label> 
                <Input
                    type="password"          
                    id="password"             
                    value={password}         
                    onChange={(e) => setPassword(e.target.value)} 
                    required                  
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
                <Button type="submit">Sign Up</Button> {/* Signup button */}
                <button onClick={() => navigate('/login')}>Back to Login</button> {/* Back button */}
                </div>

                <ErrorMessage>{error}</ErrorMessage> 
            </form>
        </FormContainer>
    );
};

export default Signup; // export statement must be at the very top level