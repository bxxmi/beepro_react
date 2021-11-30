import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

class AuthLogin {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  getServiceProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        console.log(`${providerName}는 로그인 서비스를 제공하지 않습니다.`);
    }
  }

  login(providerName) {
    const serviceProvider = this.getServiceProvider(providerName);
    return signInWithPopup(this.auth, serviceProvider);
  }

  logout() {
    this.firebase.signOut();
  }
}

export default AuthLogin;
