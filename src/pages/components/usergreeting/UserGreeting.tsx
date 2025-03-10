import React from 'react'
import './usergreeting.css'

interface UserGreetingProps {
  userName: string
  userRole: string
}

const UserGreeting: React.FC<UserGreetingProps> = ({ userName, userRole }) => {
  return (
    <div className="usergreeting-container">
      <div className="usergreeting-greeting">
        Olá, <strong>{userName}</strong>
      </div>
      <div className="usergreeting-role">
        {userRole}
      </div>
    </div>
  )
}

export default UserGreeting