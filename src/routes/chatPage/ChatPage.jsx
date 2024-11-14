import './chatPage.css'
import NewPrompt from '../../components/newPrompt/newPrompt'

const ChatPage = () => {

    return (
        <div className="chatPage">
            <div className="wrapper">
                <div className="chat">
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <div className="message ai">Test message from ai</div>
                    <div className="message user">Test message from user</div>
                    <NewPrompt />
                </div>
            </div>
        </div>
    )
}

export default ChatPage