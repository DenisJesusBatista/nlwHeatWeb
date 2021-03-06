import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.scss';



export function LoginBox() {
    const { signInUrl, user } = useContext(AuthContext);

    // console.log(user);

    function signIn(githubCode: string) {

    }
    // useEffect(() => {
    //     const url = window.location.href;
    //     const hasGithubCode = url.includes('?code=');

    //     if (hasGithubCode) {
    //         const [urlWithoutCode, githubCode] = url.split('?code=')

    //         console.log({ urlWithoutCode, githubCode })
    //     }
    // }, [])




    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com GitHub
            </a>
        </div>
    )
}