import styles from "./Avatar.module.css";

export function Avatar({src, avatarComment = false}) {
    return (

        <img className={avatarComment ? styles.avatar  : styles.avatarComment} src={src} />
    )
}