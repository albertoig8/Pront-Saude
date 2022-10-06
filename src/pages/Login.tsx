import {useNavigate } from 'react-router-dom';
import {auth, firebase} from '../services/firebase';

import logoImg from '../assets/images/logo.png';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.css';

export function Login() {
  const navigate = useNavigate();

  function signIn(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      navigate('/home');
    })
  }
  
  return (
    <div id="page-auth">
      <main>
        <div className="main-content">
          <img src={logoImg} alt="pront saúde" />
          <button onClick={signIn} className="fazer-login">
            <img src={googleIconImg} alt="logo do google" />
            Faça login com o Google
          </button>
        </div>
      </main>
    </div>
  )
}