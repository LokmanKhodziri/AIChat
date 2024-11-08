import { Link } from "react-router-dom"
import './homepage.css'
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"

export const Homepage = () => {

    const [typingStatus, setTypingStatus] = useState("human1")

    return (
        <div className='homepage'>
            <img src="/orbit.png" className="orbital" />
            <div className="left">
                <h1>XENO AI</h1>
                <h2>Feel the power of AI to supercharge your creativity and productivity</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates? Eum nesciunt libero a harum omnis perspiciatis debitis adipisci quo assumenda nemo ea aut porro autem aspernatur dicta, consequuntur temporibus!</h3>
                <Link to="/dashboard">Lets GO!</Link>
            </div>

            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" className="bot" />
                    <div className="chat">
                        <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "/bot.png"} alt="" />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Human1: We produce food for Mice',
                                2000, () => {
                                    setTypingStatus("bot")
                                },
                                'Bot: We produce food for Hamsters',
                                2000, () => {
                                    setTypingStatus("human2")
                                },
                                'Human2: We produce food for Guinea Pigs',
                                2000, () => {
                                    setTypingStatus("human2")
                                },
                                'Bot: We produce food for Chinchillas',
                                2000, () => {
                                    setTypingStatus("human1")
                                },
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
            <div className="terms">
                <img src="/logo.png" alt="" />
                <div className="links">
                    <Link to="/">Terms of Service</Link>
                    <span>|</span>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage