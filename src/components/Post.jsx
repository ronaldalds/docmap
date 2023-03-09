import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, content, published_at }){
    const [newCommentText, setNewCommentText] = useState('')
    const [comments, setComments] = useState([])
    const dateTitleFormat = format(published_at, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })
    
    const dateRelativeToNow = formatDistanceToNow(published_at, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const listWithComments = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(listWithComments)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                            <p key={line.content}>{line.content}</p>
                        )
                    } else {
                        return (
                            <p key={line.content}><a href="3">{line.content}</a></p>
                        )
                    }
                })}


            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    required
                    onInvalid={handleNewCommentInvalid}
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>
        </article>



    )
}