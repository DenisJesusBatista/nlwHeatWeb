import { api } from '../../services/api';
import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';
import { useEffect } from 'react';

export function MessageList() {
    useEffect(() => {
        //Chamada para API
        api.get('messages/last3').then(response => {
            console.log(response.data);
        });
    }, [])
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/DenisJesusBatista.png" alt="Denis Jesus" />
                        </div>
                        <span>Dênis Jesus</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/DenisJesusBatista.png" alt="Denis Jesus" />
                        </div>
                        <span>Dênis Jesus</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/DenisJesusBatista.png" alt="Denis Jesus" />
                        </div>
                        <span>Dênis Jesus</span>
                    </div>
                </li>

            </ul>
        </div>
    )
}