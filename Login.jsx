import React, { useState } from 'react'; // Imports React and the useState hook for managing reactive state.
import { Link, useNavigate } from 'react-router-dom'; // Imports Link for navigation and useNavigate for programmatic navigation.
import styled from 'styled-components'; // Imports styled-components for CSS-in-JS styling.


// Styled component for the form container
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

// Styled component for form labels
const Label = styled.label`
    display: block; 
    margin-bottom: 5px; 
    text-align: left;
`;

// Styled component for input fields
const Input = styled.input`
    width: calc(100% - 22px); /*Calculates width to fit container, subtracting padding and border. */
    padding: 10px;            /*Adds padding. */
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;       /*Rounds the corners. */
    box-sizing: border-box;   /*Includes padding and border in the element's total width and height. */
`;

// Styled component for buttons
const Button = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50; /*Sets the background color to green*/
    color: white;           /*Sets text color to white.*/
    border: none; 
    border-radius: 5px;     /*Rounds the corners.*/
    cursor: pointer;        /* Changes cursor to a pointer on hover.*/
    margin-top: 10px;
`;

// Styled component for error messages
const ErrorMessage = styled.p`
  color: red; /*Sets the text color to red.*/
  margin-top: 5px;
  text-align: left;
`;

const Login = () => {
    const [email, setEmail] = useState(''); // State variable for email, initialized as an empty string.
    const [password, setPassword] = useState(''); // State variable for password, initialized as an empty string.
    const [error, setError] = useState(''); // State variable for error messages, initialized as an empty string.
    const navigate = useNavigate(); // Hook for programmatic navigation.

    const handleSubmit = async (e) => { // Asynchronous function for handling form submission.
        e.preventDefault(); // Prevents default form submission behavior.
        setError(''); // Clears any previous error messages.

        try {
            const response = await fetch('/api/login', {  // Makes a fetch request to the backend login API.  **REPLACE '/api/login' with actual endpoint.**
                method: 'POST', // Specifies that it's a POST request.
                headers: { 'Content-Type': 'application/json' }, // Sets the header to indicate JSON data is being sent.
                body: JSON.stringify({ email, password }), // Sends the email and password as a JSON payload.
            });

            if (!response.ok) { // Checks if the response status code indicates success (200-299).
                const data = await response.json(); // Parses the JSON response.
                setError(data.message || 'Login failed. Incorrect email or password.'); // Sets the error message based on the backend response.
                return; // Exits the function if there was an error.
            }

            const data = await response.json(); // Parses the successful response (e.g., containing a JWT).

            // Secure token storage (use HTTPOnly cookies in production!)
            localStorage.setItem('token', data.token); // Stores the token. **INSECURE - use HTTPOnly cookies in a real application.**

            navigate('/dashboard'); // Redirects to the dashboard after successful login.

        } catch (error) { // Catches any errors that occurred during the fetch request.
            setError('An error occurred during login. Please try again later.');
            console.error(error); // Logs the error to the console for debugging purposes.
        }
    };

    return (
        <div>
        <FormContainer>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <Button type="submit">Log In</Button>
                <ErrorMessage>{error}</ErrorMessage>
                <Link to="/signup" style={{ marginTop: '10px', textAlign: 'center', display: 'block' }}>Don't have an account? Sign Up</Link>
            </form>
        </FormContainer>
        </div>
    );
};

export default Login;