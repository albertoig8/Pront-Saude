import {useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import logoImg from '../assets/images/logo.png';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.css';

export function Login() {
  const navigate = useNavigate();
  const {user, signInWithGoogle} = useAuth();

  async function goToHome(){
    if (!user) {
      await signInWithGoogle();
    }

      navigate('/home');
  }
  
  return (
    <div id="page-auth">
      <main>
        <div className="main-content">
          <img src={logoImg} alt="pront saúde" />
          <button onClick={goToHome} className="fazer-login">
            <img src={googleIconImg} alt="logo do google" />
            Faça login com o Google
          </button>
        </div>
      </main>
    </div>
  )
}