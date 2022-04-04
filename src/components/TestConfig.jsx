import React from "react";
import { useState } from 'react';
import styled, { createGlobalStyle, css} from 'styled-components';

{/* TestConfig to do:
    Checkboxes Values geben wenn abgehakt
    Wallet Inputfelder ausgrauen/blockieren wenn NewA oder NewB abgehakt sind
    Daten im Submit Handler ans Backend senden
    Testergebnis in vielleicht neuer Seite anzeigen? anstatt unter der Config
    Button mutieren lasssen von Start zu Stop und Vice Verca
*/}
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #56CCF2, #2F80ED);
    height: 100%;
    margin: 0;
    color: #555;
  }

  h2 {
    font-weight: bold;
    padding-bottom: 10px;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: blue;
  color: #fff;
  font-size: .9rem; 
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initialState = {
  seed: '',
  http: '',
  grpc: '',
  newA: '',
  newB: '',
  recurse: '',
  WalletA: '',
  WalletB: '',
}

function TestConfig() {
  const [state, setState] = useState(initialState);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    {/* Hier über den State die Eingabe-Daten ans Backend senden */}
  };

  const handleCheckboxOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleCheckboxTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const handleCheckboxThree = () => {
    setCheckedThree(!checkedThree);
  };

  const handleInput = e => {
    const input = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [input]: value}));

  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>TestConfig</h2>
          <label htmlFor="seed">Dash Seed</label>
          <StyledInput 
            type="text"
            name="seed"
            required
            value={state.seed} 
            onChange={handleInput} 
          />
          <label htmlFor="http">HTTP Port</label>
          <StyledInput
            type="text" 
            name="http"
            required
            value={state.http} 
            onChange={handleInput} 
          />
          <label htmlFor="grpc">GRPC Port</label>
          <StyledInput 
            type="text" 
            name="grpc" 
            required
            value={state.grpc} 
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Options</legend>
            <label>
              <input 
                type="checkbox" 
                name="newA"
                checked={checkedOne}
                onChange={handleCheckboxOne}
              />
              New Wallet A
            </label>
            <label>
              <input 
                type="checkbox" 
                name="newB"
                checked={checkedTwo}
                onChange={handleCheckboxTwo}
              />
              New Wallet B
            </label>
            <label>
            <input 
              type="checkbox" 
              name="recurse" 
              checked={checkedThree} 
              onChange={handleCheckboxThree}
            />
            repeat
            </label>
          </StyledFieldset>
          <label htmlFor="WalletA">Wallet A</label>
          <StyledInput 
            type="text" 
            name="WalletA" 
            value={state.WalletA} 
            onChange={handleInput}
          />
          <label htmlFor="WalletB">Wallet B</label>
          <StyledInput 
            type="text" 
            name="WalletB" 
            value={state.WalletB} 
            onChange={handleInput}
          />
          <StyledButton type="submit">Start</StyledButton>
        </StyledForm>
      </StyledFormWrapper>  
    </>
  );
}

export default TestConfig;
