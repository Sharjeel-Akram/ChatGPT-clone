import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgicon from './assets/message.svg';
import home from './assets/home.svg';
import saveicon from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImage from './assets/chatgptLogo.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span><div className="brand">Chat GPT</div></span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgicon} alt="Query" />What is Programming?</button>
            <button className="query"><img src={msgicon} alt="Query" />How to use an API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saveicon} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="upgrade" className="listItemsImg" />Upgarde Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatimg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nostrum velit nihil dolorem a veritatis tempore neque expedita aliquid quidem sequi vel, fuga ipsam optio est quis similique doloribus quia?</p>
          </div>
          <div className="chat bot">
            <img className="chatimg" src={gptImage} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nostrum velit nihil dolorem a veritatis tempore neque expedita aliquid quidem sequi vel, fuga ipsam optio est quis similique doloribus quia?</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' /> <button className="send"><img src={sendBtn} alt="send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, facts. ChatGPT November 23 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
