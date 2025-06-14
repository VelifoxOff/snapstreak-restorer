import { StrictMode, useState  } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

import AddAccount from './pages/addAccount.jsx'
import Accounts from './pages/accounts.jsx'
import RestoreSnapstreak from './pages/restoreSnapstreak.jsx'

function App() {
  const [accounts, setAccounts] = useState([])

  function addAccount(newAccount) {
    setAccounts(prev => [...prev, newAccount])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/accounts" />} />
        <Route path="/accounts" element={<Accounts accounts={accounts} />} />
        <Route path="/addAccount" element={<AddAccount addAccount={addAccount} />} />
        <Route path="/restoreSnapstreak" element={<RestoreSnapstreak />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)