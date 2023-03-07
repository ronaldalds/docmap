import styles from './Header.module.css';
import onlineLogo from '../assets/online-logo.png';

export function Header(){
    return (
        <header className={styles.header}>
            <img
                src={onlineLogo}
                alt="logo online"
            />
        </header>
    )
};