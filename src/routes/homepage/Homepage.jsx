import { Link } from "react-router-dom"
import './homepage.css'

export const Homepage = () => {
    return (
        <div className='homepage'>
            <div className="left">
                <h1>XENO AI</h1>
                <h2>Feel the power of AI to supercharge your creativity and productivity</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates? Eum nesciunt libero a harum omnis perspiciatis debitis adipisci quo assumenda nemo ea aut porro autem aspernatur dicta, consequuntur temporibus!</h3>
                <Link to="/dashboard">Lets GO!</Link>
            </div>

            <div className="right">

            </div>
        </div>
    )
}

export default Homepage