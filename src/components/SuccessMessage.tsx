import { Dispatch } from "react"
import Button from "./Button"

type SuccessMessageProps = {
  setFormSuccess: Dispatch<boolean>
  setEmail: Dispatch<string>
  setError: Dispatch<string>
  email: string
}

const SuccessMessage = ({
  email,
  setEmail,
  setError,
  setFormSuccess,
}: SuccessMessageProps) => {
  const handleDismissMessage = () => {
    setEmail("")
    setError("")
    setFormSuccess(false)
  }

  return (
    <div className="bg-white h-full w-full sm:h-auto sm:w-auto sm:rounded-[30px] shadow-md inline-block sm:px-7 sm:pt-12 sm:pb-14 font-roboto">
      <div className="max-w-md flex flex-col px-5 py-10 sm:px-9 sm:py-0 h-full">
        <img className="h-16 w-16 mt-24 sm:mt-0" src="./icon-success.svg" />
        <h1 className="mt-10 font-bold text-[56px]/[56px] text-darkSlateGrey">
          Thanks for subscribing!
        </h1>
        <p className="mt-8 text-charcoalGrey">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <Button className="mt-auto sm:mt-10" onClick={handleDismissMessage}>
          Dismiss message
        </Button>
      </div>
    </div>
  )
}

export default SuccessMessage
