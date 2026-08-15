import './index.css';

export default function Box({ children }) {
  return (
    <div className="box">
      <h2>Home</h2>
      <div className="input-block">
        <input className='input' type="text" placeholder="What's happening?" />
        <button className='button'>Post</button>
      </div>    
    </div>
  );
}
