import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              A arquitetura serverless representa um modelo de hospedagem para
              funções que não necessita configuração do servidor, ou seja, todas
              dependências para que sua aplicação rode já estão instaladas de
              forma nativa.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              A arquitetura serverless representa um modelo de hospedagem para
              funções que não necessita configuração do servidor, ou seja, todas
              dependências para que sua aplicação rode já estão instaladas de
              forma nativa.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              A arquitetura serverless representa um modelo de hospedagem para
              funções que não necessita configuração do servidor, ou seja, todas
              dependências para que sua aplicação rode já estão instaladas de
              forma nativa.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
