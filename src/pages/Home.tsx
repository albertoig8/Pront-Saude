import { useAuth } from '../hooks/useAuth';

import logoImg from '../assets/images/logo.png';
import userIcon from '../assets/images/Male-User.svg';
import expandArrow from '../assets/images/Expand-Arrow.svg';

import '../styles/home.css';

export function Home() {
  const {user} = useAuth();

  return (
    <div id='page-home'>
      <header>
        <div className='content'>
          <img id='logo-pront' src={logoImg} alt="pront Saúde" />
          <div className='menu-logo'>
            <p>suporte</p>
            <img src={userIcon} alt="icone de usuário" />
            <button><img src={expandArrow} alt="" /></button>
          </div>
        </div>
      </header>
      <main >
        <div className='main-content'>
          <button>atendimentos</button>
          <button>materiais</button>
        </div>
      </main>
    </div>
  )
}