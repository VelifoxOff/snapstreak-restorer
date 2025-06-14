import { Link } from 'react-router-dom'
import './accounts.css'

// import AccountCard from '../component/accountCard.jsx'

function Accounts({ accounts }) {
  return (
    <div className="container">
      <h1>Choose an Account</h1>

      {accounts.length === 0 && <p style={{ color: '#CC5341' }}>No account added.</p>}

      {accounts.map((acc, i) => (
        <Link
          to="/restoreSnapstreak"
          key={i}
          className="account-card"
          state={{ account: acc }} // <- on envoie les données ici
        >
        <div className="username">{acc.username}</div>
        <div className="email">{acc.email}</div>
        <div className="phone">{acc.phone}</div>
      </Link>
))}

      <Link to="/addAccount" className="add-button">➕ Add an Account</Link>
    </div>
  )
}

export default Accounts