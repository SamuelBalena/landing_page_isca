import styles from "./styles.module.css";
import image from "../../assets/Investment data-amico.png";
import { Link } from "react-router-dom";

export const checker = function () {
  return "/obrigado";
};

export const Main = () => (
  <main className={styles.main}>
    <div>
      <img className={styles.image} src={image} alt="" />
    </div>
    <form className={styles.form}>
      <header className={styles.header}>
        <h2 className={styles.h2}>Preencha o formulário</h2>
        <h3 className={styles.h3}>para receber o seu material gratuito</h3>
      </header>
      <main>
        <fieldset>
          <input
            className={styles.input}
            type="text"
            placeholder="Nome"
            required
          />
        </fieldset>
        <fieldset>
          <input
            className={styles.input}
            type="email"
            placeholder="E-mail"
            required
          />
        </fieldset>
      </main>
      <button className={styles.btn}>
        <Link to={checker()} className={styles.p}>
          Quero agora!
        </Link>
      </button>
    </form>
  </main>
);
