import { Button } from 'react-bootstrap'
import error from '../images/error.jpg'
import { Link } from 'react-router-dom'

export default function NotFound() {

    return (
        <div className='not-found'>
            <h1> 404 Route not found </h1>
            <img src={error} alt="Whoopsie" className='error'/>
            <Link 
            className='button'
            to="/"
            >Go Home
            </Link>
        </div>
    )
}