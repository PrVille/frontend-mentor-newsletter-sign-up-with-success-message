import { Dispatch } from "react"
import { classNames } from "../utils"
import Button from "./Button"

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

type SingUpFormProps = {
  setFormSuccess: Dispatch<boolean>
  setEmail: Dispatch<string>
  setError: Dispatch<string>
  email: string
  error: string
}

const SingUpForm = ({
  email,
  error,
  setEmail,
  setError,
  setFormSuccess,
}: SingUpFormProps) => {
  const onSubmit = (): void => {
    const isValidEmail = emailRegex.test(email)

    if (!isValidEmail) {
      setError("Valid email required")
      return
    }

    setError("")
    setFormSuccess(true)
  }

  return (
    <div className="bg-white w-full sm:h-auto sm:w-auto sm:rounded-[30px] shadow-md inline-flex sm:p-6 gap-8 font-roboto justify-center">
      <div className="flex flex-col max-w-[375px] sm:max-w-md sm:p-8">
        <div className="block sm:hidden">
          <img src="../../assets/images/illustration-sign-up-mobile.svg" />
        </div>
        <div className="flex flex-col sm:mt-10 px-5 py-10 sm:p-0">
          <h1 className="font-bold text-darkSlateGrey text-4xl sm:text-[56px]">
            Stay updated!
          </h1>
          <p className="mt-6 sm:mt-8">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mt-6 sm:mt-8 space-y-2">
            <li className="flex items-start gap-4">
              <img src="../../assets/images/icon-list.svg" />
              <span>Product discovery and building what matters</span>
            </li>
            <li className="flex items-start gap-4">
              <img src="../../assets/images/icon-list.svg" />
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li className="flex items-start gap-4">
              <img src="../../assets/images/icon-list.svg" />
              <span>And much more!</span>
            </li>
          </ul>
          <div className="mt-11 flex flex-col">
            <div className="flex justify-between">
              <label className="text-xs font-bold text-darkSlateGrey">
                Email address
              </label>
              <p className="text-tomato text-xs font-bold">{error}</p>
            </div>
            <input
              className={classNames(
                "mt-2 border px-6 py-4 rounded-lg",
                error
                  ? "border-tomato text-tomato bg-tomato/10"
                  : "border-grey text-black bg-white"
              )}
              value={email}
              placeholder="email@company.com"
              onChange={({ target }) => setEmail(target.value)}
            />
            <Button className="mt-6" onClick={onSubmit}>Subscribe to monthly newsletter</Button>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <img src="../../assets/images/illustration-sign-up-desktop.svg" />
      </div>
    </div>
  )
}

export default SingUpForm
