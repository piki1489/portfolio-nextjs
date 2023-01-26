import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raimon - Mis proyectos como desarrollador Full Stack</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'></link>
      </Head>

      <main>
        <h1 className={styles.title}>
          Soy <a href="https://github.com/piki1489">Raimon Hernández </a>
        </h1>

        <div className={styles.photo}></div>

        <p className={styles.description}>
          Soy un desarrollador full stack con amplia experiencia en <code> HTML, CSS, JavaScript, Angular, MySQL, React (Next.js), Node.js y MongoDB</code> <br></br> Me apasiona la tecnología y siempre estoy abierto a nuevos conocimientos.
        </p>

        <div className={styles.projects}><h2>Mis proyectos</h2></div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>E-RAYO &rarr;</h3>
            <p>Aplicación para gestionar el stock de almacenes de forma digital.</p>
          </a>

          <a href="https://github.com/piki1489/Practica_Blog" className={styles.card}>
            <h3>Biblioteca musical &rarr;</h3>
            <p>Front-end para gestionar tu catálogo de música.
            </p>
          </a>

          <a
            href="https://github.com/piki1489/hamburgueseria"
            className={styles.card}
          >
            <h3>Burguer Elx &rarr;</h3>
            <p>Front-end minimalista para un restaurante.
            </p>
          </a>

          <a
            href="https://github.com/piki1489/trabajo_javascript.git"
            className={styles.card}
          >
            <h3>To Do List&rarr;</h3>
            <p>
              Aplicación para gestionar tareas. (HTML, CSS3 y JavaScript).
            </p>
          </a>
          <div className='contact'>
            <div><i class="fa-brands fa-linkedin"></i></div>
            <div> <i class="fa-brands fa-github"></i></div>
            <div><i class="fa-solid fa-file"></i></div>
            <div><i class="fa-brands fa-whatsapp"></i></div>
          </div>
        </div>

      </main>

      <footer>
        <a

        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
