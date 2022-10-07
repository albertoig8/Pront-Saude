import { useAuth } from '../hooks/useAuth';

import '../styles/auth.css';

export function Home() {
  const {user} = useAuth();

  return (
    <div >
      <h1>{user?.name}</h1>
     <p>pagina inicial</p>
    </div>
  )
}