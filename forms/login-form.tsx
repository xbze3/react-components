import '../components-css/signup-form.css'
import user_icon from '../assets/user.png'
import password_icon from '../assets/padlock.png'
import { ChangeEvent, FormEvent, useState } from 'react'

function LoginForm() {

    const [details, setDetails] = useState({
        name: '',
        password: ''
    })

    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(details)
    }

    return (
        <div className="container">

            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>

            <form className="inputs" onSubmit={handleSubmit}>

                <div className="input">
                    <img src={user_icon} alt="Username" />
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="name" 
                        value={details.name}
                        onChange={handleCheck} 
                        required 
                    />
                </div>

                <div className="input">
                    <img src={password_icon} alt="Password" />
                    <input 
                        placeholder="Password" 
                        type="password" 
                        name="password" 
                        value={details.password}
                        onChange={handleCheck} 
                        required 
                    />
                </div>

                <div className="submit-container">
                    <button type="submit" className="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm;
