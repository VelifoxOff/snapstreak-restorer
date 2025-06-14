import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './addAccount.css'

function AddAccount({ addAccount }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    addAccount({ username, email, phone })
    navigate('/accounts')
  }

  return (
    <div className="container">
      <h1>Add Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            required
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="input"
            id="username"
            autoComplete="off"
          />
          <label htmlFor="username" className="user-label">Snapchat Username</label>
        </div>
        <div className="input-group">
          <input
            required
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input"
            id="email"
            autoComplete="off"
          />
          <label htmlFor="email" className="user-label">Email Address</label>
        </div>
        <div className="input-group">
          <input
            required
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="input"
            id="phone"
            autoComplete="off"
          />
          <label htmlFor="phone" className="user-label">Phone Number</label>
        </div>
        <button type="submit">Add Account</button>
      </form>
    </div>
  )
}

export default AddAccount