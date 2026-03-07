import styles from "./header.module.css";
import imgLogo from "./img/logo.svg";
import { NAVIGATION_ITEMS } from "../../Constants/constants";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__left}>
          <img className={styles.logo} src={imgLogo} alt="logo" />
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              {NAVIGATION_ITEMS.map((title, index) => (
                <li key={`${title}-${index}`} className={styles.item__list}>
                  <a className={styles.nav__link} href="#">
                    {title}
                  </a>
                </li>
              ))}
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
