import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem("userName"))
  return <LoginForm/>
  return (
    <div className="App">
     <ChatEngine
     height ="100vh"
     projectID = "1fe2fbef-1c80-419d-8944-e559ad165be4"
     userName ="Ayush"
     userSecret ="Jaimatadi1@"
     renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
     onNewMessge =  {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
     />
    </div>
  );
}

export default App;
