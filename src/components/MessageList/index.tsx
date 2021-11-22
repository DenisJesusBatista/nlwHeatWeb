import { VscGithubInverted } from 'react-icons/vsc'
import styles from './styles.module.scss';

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href="#" className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com GitHub
            </a>
        </div>
    )
}