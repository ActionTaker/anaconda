import React from 'react'
import useState from 'react-hook-use-state'
export const Context = React.createContext()

let klay
if (typeof window.klaytn !== 'undefined') {
  // Kaikas user detected. You can now use the provider.
  klay = window['klaytn']
}

export const Provider = ({children}) => {
  const [currentAccount, setCurrentAccount] = useState()

  
  const connectWallet = async (kaikas = klay) => {
  try {
    if (!kaikas) return alert('Please install KaiKas')
    const accounts = await klaytn.enable()
    setCurrentAccount(accounts[0])
  } catch (error) {
    // Handle error. Likely the user rejected the login
    console.error(error)
  }
}

  return (
    <Context.Provider
      value={{
        currentAccount, 
        connectWallet,
      }}
    >
      {children}
    </Context.Provider>
    )
}