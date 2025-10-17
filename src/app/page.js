import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  //logic part can be add here
  return (
    // UI part can be add here
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Todo List App</h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter a new task"
            style={{
              padding: "8px",
              width: "200px",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyleType: "disc", textAlign: "left" }}>
          <li>
            <input type="checkbox" /> Sleep
          </li>
          <li>
            <input type="checkbox" defaultChecked />{" "}
            <span style={{ textDecoration: "line-through" }}>
              Join React Class
            </span>
          </li>
          <li>
            <input type="checkbox" /> Do react homework
          </li>
        </ul>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

export default Home;