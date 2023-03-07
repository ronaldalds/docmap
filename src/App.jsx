import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ronaldalds.png',
      name: 'Ronald Almeida',
      role: 'Web Developer'
    },
    content: [
      {type: "paragraph", content: "lorem ipsum dolor lore"},
      {type: "paragraph", content: "lorem ipsum dolor lore"},
      {type: "link", content: "devejs"},
      {type: "link", content: "deveNodeJS"},
    ],
    published_at: new Date("2022-05-03")
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ronaldalds.png',
      name: 'Naiana',
      role: 'Comeciante'
    },
    content: [
      {type: "paragraph", content: "lorem ipsum dolor lore"},
      {type: "paragraph", content: "lorem ipsum dolor lore"},
      {type: "link", content: "farmácia"},
      {type: "link", content: "Loja"},
    ],
    published_at: new Date("2021-01-20")
  },
]


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              author={post.author}
              content={post.content}
              published_at={post.published_at}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
