import { useState } from 'react'
import Link from 'next/link'

interface User {
  username: string;
  password: string;
  avatar: string;
  address: string;
}

const Setting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<User>({ username: '', password: '', avatar: '', address: '' })
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [newAvatar, setNewAvatar] = useState<string>('')
  const [newAddress, setNewAddress] = useState<string>('')

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser({ username: '', password: '', avatar: '', address: '' })
  }

  const handleSignIn = () => {
    // handle redirect to login page
  }

  const handleChangePassword = () => {
    // handle change password logic here
  }

  const handleChangeAvatar = () => {
    // handle change avatar logic here
  }

  const handleChangeAddress = () => {
    // handle change address logic here
  }

  if (!isLoggedIn) {
    return (
      <div>
        <ul>
          <li><Link href="/login">Sign in</Link></li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <ul>
        <li><button onClick={handleLogout}>Logout</button></li>
        <li>
          <Link href="/change-password" onClick={handleChangePassword}>
            <a>Change Password</a>
          </Link>
        </li>
        <li>
          <Link href="/change-avatar" onClick={handleChangeAvatar}>
            <a>Change Avatar</a>
          </Link>
        </li>
        <li>
          <Link href="/change-address" onClick={handleChangeAddress}>
            <a>Change Address</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Setting;