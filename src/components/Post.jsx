import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css';

export function Post({ author, content, published_at }){
    const dateTitleFormat = format(published_at, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })
    
    const dateRelativeToNow = formatDistanceToNow(published_at, {
        locale: ptBR,
        addSuffix: true,
    })

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
                <time title={dateTitleFormat} dateTime={published_at.toISOString()}>{dateRelativeToNow}</time>
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