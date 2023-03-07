import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, published_at }){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:1330'> Publicado há 1h</time>
            </header>
            <div className={styles.content}>


                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return (
                            <p>{line.content}</p>
                        )
                    } else {
                        return (
                            <p><a href="3">{line.content}</a></p>
                        )
                    }
                })}

                
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />

                <footer>
                <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>



    )
}