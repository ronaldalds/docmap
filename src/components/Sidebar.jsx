import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img 
            className={style.cover}
            src="https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=30"
            />
            <div className={style.profile}>
                <Avatar src="https://github.com/ronaldalds.png" />
                <strong>Ronald Alemida</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edite seu perfil
                </a>
            </footer>
        </aside>
    );
}