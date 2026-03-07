import styles from "./header.module.css";
import imgLogo from "./img/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__left}>
          <img className={styles.logo} src={imgLogo} alt="logo" />
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.item__list}>
                <a className={styles.nav__link} href="#">
                  База вопросов
                </a>
              </li>
              <li className={styles.item__list}>
                <a className={styles.nav__link} href="#">
                  Тренажер
                </a>
              </li>
              <li className={styles.item__list}>
                <a className={styles.nav__link} href="#">
                  Материалы
                </a>
              </li>
              <li className={styles.item__list}>
                <a className={styles.nav__link} href="#">
                  Навыки (hh)
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.auth__links}>
          <button className={styles.login__btn}>Вход</button>
          <button className={styles.register__btn}>Регистрация</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
