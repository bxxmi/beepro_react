import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  getServiceProvider(providerName) {
    const socialName = providerName.substr(11, 17);

    switch (socialName) {
      case "GOOGLE":
        return this.googleProvider;
      case "GITHUB":
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
    this.auth.signOut();
  }

  onAuthChange(onUserChanged) {
    this.auth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
