import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@geist-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>1.6-7 Summative - Functions - Filippo Fonseca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>1.6-7 - Criterion D Summative</h1>

        <p className={styles.description}>
          Get started by watching the interactive walkthrough, learning about
          functions in code, and more.
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Walkthrough &rarr;</h3>
            <p>
              Discover the general inspiration, logic, and work behind the
              project through an interactive video.
            </p>
            <div style={{ marginTop: "16px", marginBottom: "16px" }}>
              <iframe
                src="https://www.loom.com/embed/6e746afd413347e79093703f75b1228d"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                // style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
              ></iframe>
            </div>
            <a
              target="_blank"
              href="https://www.loom.com/embed/6e746afd413347e79093703f75b1228d"
            >
              <Button auto type="success">
                Watch in Full Screen ↔
              </Button>
            </a>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
