import { useState} from 'react';
import './App.css';


function App() {
  const [notes, setNotes] = useState([]);
	const [value, setValue] = useState('');
  const result = notes.map((note, index) => {
		return <p key={index} onClick={() => remItem(index)}>
			{note}
		</p>;
	});
	
	function remItem(index) {
		setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
	}
	
	
	
	function addItem() {
		setNotes([...notes, value]);
    setValue('')
	}
	
	function changeInput(event) {
		setValue(event.target.value);
	}


  return (
    <div>

      <h1 className="app-title">MY LIST</h1>
        
        <div className="container">
        <div
          style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          Add an Item...
          <br />
          <input
             type="text"
             placeholder="Type item here"
             value={value}
             onChange={changeInput}
          />
          
          <button
             className="add-btn btn-floating"
             onClick={addItem}>
            <i className="material-icons"> Add </i>
          </button>
          <br /> <br />
          <ul>
           {result}
           </ul>
        </div>
      </div>
      </div>
    
  );
}


export default App;