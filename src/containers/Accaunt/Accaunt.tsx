export const Account = () => {
  const userData = localStorage.getItem('authentication')
  const { userName } = JSON.parse(userData)

  return <span>Welcome {userName}</span>
}
