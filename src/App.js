import './App.css';
import { parse } from '@babel/parser';
import CodeMirror from "@uiw/react-codemirror";
import { useState } from 'react';

function validate(code) {
  try {
    const ast = parse(code,
      {
        sourceType: "module",
        plugins: ["jsx"],
        errorRecovery: true,
      })
    if (ast.errors.length === 0) {
      console.log("Success", ast);
      return true
    } else {
      console.log("Failed", ast.errors)
      return false;
    }
  } catch (error) {
    console.log('Failed', error)
    return false
  }
}

function App() {
  const [code, setCode] = useState("welcome!");
  return (
    <div className="App">
      <CodeMirror
        value={code}
        height="100%"
        onChange={(newValue) => setCode(newValue)}
      />
      <button onClick={() => { validate(code); }}>validate</button>
    </div>
  );
}

export default App;
