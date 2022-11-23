import React, { useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "../Firebase"
import GoogleButton from "react-google-button"

const Signup = () => {
  const router = useRouter()
  const { googleLogin } = useAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const pushGoogleButton = async () => {
    await googleLogin()
    router.push('/')
  }

  return (
    <GoogleButton
      onClick={() => {  pushGoogleButton() }}
    />
  )
}

export default Signup