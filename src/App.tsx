import { useState } from "react"
import SingUpForm from "./components/SingUpForm"
import SuccessMessage from "./components/SuccessMessage"
import Footer from "./components/Footer"

const App = () => {
  const [formSuccess, setFormSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  return (
    <>
      <div className="bg-charcoalGrey h-screen flex flex-col items-center justify-center">
        {formSuccess ? (
          <SuccessMessage
            email={email}
            setEmail={setEmail}
            setError={setError}
            setFormSuccess={setFormSuccess}
          />
        ) : (
          <SingUpForm
            email={email}
            setEmail={setEmail}
            error={error}
            setError={setError}
            setFormSuccess={setFormSuccess}
          />
        )}
        <Footer />
      </div>
    </>
  )
}

export default App
