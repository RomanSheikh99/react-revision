import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Bettery></Bettery>
      <LoadTodos></LoadTodos>
    </div>
  );
}

function LoadTodos() {
  const [todos, setTodos] = useState([]);

  const todoData = data => {
    setTodos(data);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => todoData(data))
  }, []);


  return (
    <div className="blog-container">
      {
        todos.map( todo => <Blog title={todo.title} author={todo.id}></Blog>)
      }
    </div>
  )

};

function Bettery() {
  const [charge, setCharge] = useState(100);
  const batteryDown = () => {
    if (charge > 0) {
      let newCharge = charge - 1;
      setCharge(newCharge);
      setWidth(newCharge);
    }
  };
  const setWidth = charge => {
    let newCharge = charge + '%';
    let div = document.getElementById('new-width');
    let mainWidht = 'width:' + newCharge;
    div.setAttribute('style', mainWidht);
  } 
  return (
    <div className="bettery">
      <div className="carge">
        <h2 className='txt'>{charge} %</h2>
        <div id='new-width' className="able"></div>
      </div>
      <button onClick={batteryDown}>Battery Down</button>
    </div>
  );
};

function Blog(props) {
  const title = {
    fontSize: '26px',
    color: '#624F6D ',
    marginBottom: '10px',
    textTransform: 'capitalize'
  }
  return (
      <article className="blog">
        <h2 style={title}>{props.title}</h2>
        <span>Author ID : {props.author}</span>
        <p style={{ textAlign: 'justify', marginTop: '10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi esse magni atque distinctio sit reprehenderit provident eius saepe expedita nostrum! Perferendis temporibus aliquid perspiciatis aut deleniti?</p>
      </article>
  );
}

export default App;
