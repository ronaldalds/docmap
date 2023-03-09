import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
    const [lickCount, setLickCount] = useState(0)


    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLickComment() {
        setLickCount(lickCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://github.com/ronaldalds.png"
                avatarComment
            />


            <div className={styles.commentBox}>


                <div className={styles.commentContent}>


                    <header>


                        <div className={styles.authorAndTime}>
                            <strong>Ronald Almeida</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>


                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>


                    </header>


                    <p>{content}</p>


                </div>


                <footer>

                    <button onClick={handleLickComment}>
                    <ThumbsUp />
                    Aplaudir <span>{lickCount}</span>
                    </button>
                    
                </footer>


            </div>


        </div>
    )
}