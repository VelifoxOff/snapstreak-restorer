import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './restoreSnapstreak.css'

function RestoreSnapstreak() {
  const location = useLocation()
  const navigate = useNavigate()

  // Les infos du compte sélectionné
  const account = location.state?.account

  // État local pour l'input friend username
  const [friendUsername, setFriendUsername] = useState('')

  const handleRestore = () => {
    if (!friendUsername) {
      alert("Please enter your friend's username")
      return
    }
    // Ici tu peux faire ce que tu veux avec account + friendUsername
    console.log('Restore Snapstreak for account:', account)
    console.log('Friend username:', friendUsername)

    // Exemple : retour à la page accounts après traitement
    navigate('/accounts')
  }

  return (
    <div className="container">
      <h1>Restore Snapstreaks</h1>

      <div className="input-group">
        <input
          required
          type="text"
          name="text"
          autoComplete="off"
          className="input"
          id="username"
          value={friendUsername}
          onChange={(e) => setFriendUsername(e.target.value)}
        />
        <label className="user-label">Friend's Username</label>
      </div>

      <button onClick={handleRestore}>Restore</button>
      <Link to="/accounts" style={{ marginTop: '0.9rem', display: 'inline-block' }}>
        Back to Accounts
      </Link>
    </div>
  )
}

export default RestoreSnapstreak