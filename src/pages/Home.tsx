import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div className="p-6">
      <img src="https://www.digitalmomblog.com/wp-content/uploads/2022/10/to-meme-or-not-to-meme.jpeg" alt="A meme about to meme or not to meme" />
      <p className='text-center text-orange-950 pt-5 text-4xl font-bold'>Are you in that Meme Life Brah? <br/>  </p>
      <p className = 'text-center text-orange-950 pt-5 text-4xl bold'>To Find out... <span className= 'underline'><Link to='/dashboard' >Click Here</Link> </span></p>
    </div>
  )
}

export default Home
