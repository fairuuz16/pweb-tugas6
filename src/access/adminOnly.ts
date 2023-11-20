import { Access } from 'payload/config'

export const adminOnly: Access = ({ req: { user } }) => {
  if (!user) {
    return false
  }
  
  if (user.collections === "users") {
    return true
  }

  return false
}