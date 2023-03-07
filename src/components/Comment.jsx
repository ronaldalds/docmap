import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
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


                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>


                    </header>


                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur labore.</p>


                </div>


                <footer>

                    <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button>
                    
                </footer>


            </div>


        </div>
    )
}