import { clearToken, generateJWT } from '@/features/jwt/jwt'
import { useNavigate } from 'react-router-dom'

type Action = {
  label: string
  run: (
    setMsg: React.Dispatch<React.SetStateAction<string>>,
    nav: ReturnType<typeof useNavigate>
  ) => void
}

export const actions: Action[] = [
  {
    label: 'Generate JWT',
    run: (setMsg) => {
      generateJWT()
      setMsg('JWT Generated')
    }
  },
  {
    label: 'Clear Token',
    run: (setMsg) => {
      clearToken()
      setMsg('JWT Cleared')
    }
  },
  {
    label: 'Private Layout',
    run: (_, nav) => nav('/private')
  }
]
