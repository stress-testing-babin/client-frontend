import React from "react";
import './TestConfig.css';

function TestConfig() {
  return (
    <div className="testConfig">
      <h1 class="font-weight-bold mt-3 mb-3 text-center">TestConfig</h1>
      <form className="text-center">
        <label>Dash Seed:</label>
        <input
          type="text"
          required
        />
        <label>HTTP Port:</label>
        <input
          type="number"
          min="0"
          required
        />
        <label>GRPC Port:</label>
        <input
          type="number"
          min="0"
          required
        />
        <label>New Wallet A</label>
        <input
          type="radio"
        />
        <label>Wallet A:</label>
        <input
          type="text"
        />
        <label>New Wallet B</label>
        <input
          type="radio"
        />
        <label>Wallet B:</label>
        <input
          type="text"
        />
        <label>Repeat</label>
        <input
          type="radio"
        />
        <button
          className="btn btn-primary btn-lg"
        >
        Start
        </button>
      </form>
    </div>
  );
}
{/*
https://www.youtube.com/watch?v=pt3vqIK8T58
*/}
export default TestConfig;
