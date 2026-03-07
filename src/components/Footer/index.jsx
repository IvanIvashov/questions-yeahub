import styles from "./footer.module.css";
import icon from "./img/yeahub.svg";
import telegram from "./img/Telegram.svg";
import youtube from "./img/Youtube.svg";
import tiktok from "./img/tiktok.svg";
import figma from "./img/Figma.svg";
import github from "./img/Github.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img className={styles.icon} src={icon} alt="Логотип" />
        <div className={styles.footer__text}>
          Выбери, каким будет IT завтра, вместе с нами
        </div>
        <div className={styles.footer__desc}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </div>
        <hr className={styles.divider} />
        <div className={styles.footer__bottom}>
          <div className={styles.copyright}>
            © 2024 YeaHub
            <nav className={styles.footer__nav}>
              <a className={styles.footer__link} href="#">
                Документы
              </a>
            </nav>
          </div>
          <div className={styles.footer__social}>
            <p className={styles.footer__socialText}>
              Ищите нас и в других соцсетях @yeahub_tt
            </p>
            <div className={styles.links}>
              <a href="#">
                <img src={figma} alt="Фигма" />
              </a>
              <a href="#">
                <img src={telegram} alt="Телеграмм" />
              </a>
              <a href="#">
                <img src={youtube} alt="Ютуб" />
              </a>
              <a href="#">
                <img src={tiktok} alt="Тикток" />
              </a>
              <a href="#">
                <img src={github} alt="Гитхаб" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
