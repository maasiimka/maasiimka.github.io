<script>
  import arrow from "./assets/arrow.svg";
  import newsFirst from "./pictures/newsFirst.jpg";
  import newsFirst2x from "./pictures/newsFirst2x.jpg";
  import newsFirst3x from "./pictures/newsFirst3x.jpg";
  import newsSecond from "./pictures/newsSecond.jpg";
  import newsSecond2x from "./pictures/newsSecond2x.jpg";
  import newsSecond3x from "./pictures/newsSecond3x.jpg";
  import newsThird from "./pictures/newsThird.jpg";
  import newsThird2x from "./pictures/newsThird2x.jpg";
  import newsThird3x from "./pictures/newsThird3x.jpg";
  import design from "./assets/design.svg";
  import branding from "./assets/branding.svg";
  import logoDesign from "./assets/logoDesign.svg";
  import partnerFirst from "./assets/partnerFirst.svg";
  import partnerSecond from "./assets/partnerSecond.svg";
  import partnerThird from "./assets/partnerThird.svg";
  import partnerFourth from "./assets/partnerFourth.svg";
  import partnerFifth from "./assets/partnerFifth.svg";
  import facebook from "./assets/facebook.svg";
  import twitter from "./assets/twitter.svg";
  import youtube from "./assets/youtube.svg";
  import linkedin from "./assets/linkedin.svg";
  import basketball from "./assets/basketball.svg";
</script>

<div class="main-picture-container">
  <img class="arrow" src={arrow} alt="arrow" />
</div>
<section class="service-section">
  <h2 class="service-section__header">Our services</h2>
  <p class="service-section__text">
    Voluptas sit aspernatur te natus accusan maiores alias consequatur aut
    equatur aut perferendi.
  </p>
  <ul class="service-list">
    <li class="service-list__item">
      <a class="service-list__link" href=" ">
        <img src={design} alt="design" />
        <h3 class="service-list__title">UI/UX design</h3>
        <p class="service-list__text">
          Perferendis doloribus asperiores repellat quia voluptas aspernatur te
          natus accusan maiores alias consequatur aut aut.
        </p>
      </a>
    </li>
    <li class="service-list__item">
      <a class="service-list__link" href=" ">
        <img src={branding} alt="branding" />
        <h3 class="service-list__title">Branding</h3>
        <p class="service-list__text">
          Asperiores repellat quia voluptas aut aspernatur te natus accusan
          maiores alias consequatur aut perferendis dolor.
        </p>
      </a>
    </li>
    <li class="service-list__item">
      <a class="service-list__link" href=" ">
        <img src={logoDesign} alt="logo design" />
        <h3 class="service-list__title">Logo design</h3>
        <p class="service-list__text">
          Maiores alias consequatur aut aut repellat perferendi doloribus
          asperiores voluptas aspernatur te natus accusan.
        </p>
      </a>
    </li>
  </ul>
</section>
<section class="client-section">
  <h2 class="client-section__header">Our Clients</h2>
  <p class="client-section__text">
    We have worked with great clients for which we are very proud.
  </p>
  <ul class="client-list">
    <li class="client-list__item">
      <img class="client-list__logo" src={partnerFirst} alt="first partner" />
    </li>
    <li class="client-list__item">
      <img class="client-list__logo" src={partnerSecond} alt="second partner" />
    </li>
    <li class="client-list__item">
      <img class="client-list__logo" src={partnerThird} alt="third partner" />
    </li>
    <li class="client-list__item">
      <img class="client-list__logo" src={partnerFourth} alt="fourth partner" />
    </li>
    <li class="client-list__item">
      <img class="client-list__logo" src={partnerFifth} alt="fifth partner" />
    </li>
  </ul>
</section>
<section class="news-section">
  <h2 class="news-section__header">Latest News</h2>
  <p class="news-section__text">
    Accusan maiores alias conseaut equatur aut perferendi.
  </p>
  <ul class="news-list">
    <li class="news-list__item">
      <img
        class="news-list__image"
        srcset="{newsFirst} 1x, {newsFirst2x} 2x, {newsFirst3x} 3x"
        src={newsFirst}
        alt=""
      />
      <div class="news-list__information">
        <p class="news-list__date">Design / Sept 12, 2022</p>
        <h3 class="news-list__title">
          Graphic Designing Useful Tips & Best Practices
        </h3>
      </div>
    </li>
    <li class="news-list__item">
      <img
        class="news-list__image"
        srcset="{newsSecond} 1x, {newsSecond2x} 2x, {newsSecond3x} 3x"
        src={newsSecond}
        alt=""
      />
      <div class="news-list__information">
        <p class="news-list__date">Branding / Sept 12, 2022</p>
        <h3 class="news-list__title">
          Best way to do branding of digital products
        </h3>
      </div>
    </li>
    <li class="news-list__item">
      <img
        class="news-list__image"
        srcset="{newsThird} 1x, {newsThird2x} 2x, {newsThird3x} 3x"
        src={newsThird}
        alt=""
      />
      <div class="news-list__information">
        <p class="news-list__date">Graphic Design / Sept 12, 2022</p>
        <h3 class="news-list__title">Top 10 graphic designs review in 2022</h3>
      </div>
    </li>
  </ul>
  <a class="news-section__button" href=" ">view all blogs</a>
</section>
<footer class="footer">
  <a class="logo" href=" ">
    <h2 class="logo__text">Portfo.</h2>
  </a>
  <ul class="footer-list">
    <li class="footer-item">
      <form class="footer-form">
        <label class="footer-form__label" for="email">
          <p class="footer-item__text">
            Subscribe to newsletter to get some updates related with branding,
            designs and more.
          </p>
          <input
            class="footer-form__input"
            type="email"
            placeholder="Write your email adress"
          />
        </label>
        <button class="footer-form__button" type="submit">SUBSCRIBE</button>
      </form>
    </li>
    <li class="footer-item">
      <nav class="site-nav">
        <ul class="site-nav__list">
          <li class="site-nav__item">
            <a class="site-nav__link" href=" ">HOME</a>
          </li>
          <li class="site-nav__item">
            <a class="site-nav__link" href=" ">ABOUT</a>
          </li>
          <li class="site-nav__item">
            <a class="site-nav__link" href=" ">SERVICES</a>
          </li>
          <li class="site-nav__item">
            <a class="site-nav__link" href=" ">PORTFOLIO</a>
          </li>
        </ul>
      </nav>
    </li>
    <li class="footer-item">
      <nav class="auth-nav">
        <ul class="auth-nav__list">
          <li class="auth-nav__item">
            <a class="auth-nav__link" href=" ">BLOGS</a>
          </li>
          <li class="auth-nav__item">
            <a class="auth-nav__link" href=" ">CONTACT</a>
          </li>
        </ul>
      </nav>
    </li>
    <li class="footer-item">
      <div class="footer-mail">
        <p class="footer-mail__text">
          Just feel free to contact if you wanna collaborate with me, or simply
          have a conversation.
        </p>
        <a class="footer-mail__adress" href="mailto:templatesjungle@gmail.com">
          templatesjungle@gmail.com
        </a>
      </div>
    </li>
  </ul>
  <div class="bottom-footer">
    <ul class="bottom-footer__list">
      <li class="bottom-footer__item">
        <img class="bottom-footer__icon" src={facebook} alt="facebook logo" />
      </li>
      <li class="bottom-footer__item">
        <img class="bottom-footer__icon" src={twitter} alt="twitter logo" />
      </li>
      <li class="bottom-footer__item">
        <img class="bottom-footer__icon" src={linkedin} alt="linkedin logo" />
      </li>
      <li class="bottom-footer__item">
        <img
          class="bottom-footer__icon"
          src={basketball}
          alt="basketball logo"
        />
      </li>
      <li class="bottom-footer__item">
        <img class="bottom-footer__icon" src={youtube} alt="youtube logo" />
      </li>
    </ul>
    <p class="bottom-footer__text">©2022, Portfo by TemplatesJungle.</p>
  </div>
</footer>

<style>
  .main-picture-container {
    position: relative;
    width: 100%;
    height: 800px;

    background-image: url(./pictures/hero.jpg);
    background-size: cover;
    background-position: center;
    background-position: bottom;
  }

  .arrow {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .service-section {
    padding: 172px 20px 0;

    text-align: left;
  }

  .service-section__text {
    padding-top: 14px;
  }

  .service-list {
    display: grid;

    grid-row-gap: 20px;
    padding-top: 60px;
  }

  .service-list__item {
    padding: 40px;
    border: 1px solid #111111;
    border-radius: 18px;
  }

  .service-list__link {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .service-list__title {
    padding-top: 28px;
  }

  .service-list__text {
    padding-top: 14px;
    text-align: left;
  }

  .client-section {
    padding: 140px 20px 0;
  }

  .client-section__text {
    padding-top: 14px;
  }

  .client-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
  }

  .client-list__item + .client-list__item {
    padding-top: 30px;
  }

  .news-section {
    padding: 180px 20px 0;
  }

  .news-section__text {
    padding-top: 14px;
  }

  .news-list {
    display: grid;
    grid-row-gap: 20px;
    padding-top: 60px;
  }

  .news-list__image {
    display: block;
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .news-list__item {
    position: relative;
  }

  .news-list__information {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: end;
    bottom: 0;
    left: 0;
    width: 100% - 40px;
    height: 60%;
    text-align: left;
    padding: 0 20px 45px;

    background: linear-gradient(
      180deg,
      rgba(245, 245, 241, 0) 0%,
      rgba(245, 245, 241, 0.9) 100%
    );
  }

  .news-section__button {
    font-family: "Work Sans";
    font-weight: 600;
    font-size: 19px;
    line-height: 1.2;

    display: block;
    padding: 30px 50px;
    margin: 60px auto 0;
    background: #f4f4f0;
    border: 1px solid #111111;
    border-radius: 18px;
    max-width: 184px;
  }

  .news-list__title {
    padding-top: 14px;
  }

  .footer {
    padding-top: 180px;
    font-family: "Work Sans";
    font-weight: 500;
  }

  .logo {
    position: relative;
    display: block;
    width: 106px;
    height: 106px;
    margin-left: 20px;

    border-radius: 50%;
    background-color: #94d0d4;
  }

  .logo__text {
    position: absolute;
    top: 24px;
    left: 26px;
    font-family: "Inter";
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
  }

  .footer-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 20px 0;
    padding-bottom: 40px;
  }

  .footer-item {
    max-width: 500px;
  }

  .footer-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-form__label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .footer-form__input {
    font-weight: 400;
    font-size: 18px;
    line-height: 178%;

    display: block;
    margin: 0;
    padding: 0;
    width: 320px;
    height: 54px;
    padding-left: 20px;
    margin-top: 20px;

    color: #111111;
    background-color: #f4f4f0;
    border: 1px solid #111111;
    border-radius: 8px;
  }

  .footer-form__button {
    font-family: "Work Sans";
    font-weight: 600;
    font-size: 19px;
    line-height: 1.2;
    letter-spacing: 0.1em;

    display: block;
    padding: 17px 108px;
    margin-top: 15px;

    color: #fdfdfd;
    background-color: #4ba1a7;
    border: none;
    border-radius: 8px;
  }

  .site-nav__list,
  .auth-nav__list {
    font-size: 18px;
    line-height: 218%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: #303030;
  }

  .footer-mail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    text-align: left;
  }

  .footer-mail__adress {
    font-size: 24px;
    line-height: 1.2;
    padding-top: 22px;
    text-align: left;
  }

  .bottom-footer {
    display: flex;
    flex-direction: column;
    align-items: start;

    padding: 40px 20px 0;
    border-top: 1px solid #000;
  }

  .bottom-footer__list {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 600px) {
    .service-list,
    .news-list {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
    }

    .client-list,
    .bottom-footer {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .service-section,
    .client-section,
    .news-section,
    .footer-list,
    .bottom-footer {
      padding-left: 80px;
      padding-right: 80px;
    }

    .logo {
      margin-left: 80px;
    }
  }

  @media screen and (min-width: 1200px) {
    .main-picture-container {
      height: 900px;
    }

    .service-section,
    .client-section,
    .news-section,
    .footer-list,
    .bottom-footer {
      padding-left: 200px;
      padding-right: 200px;
    }

    .service-list,
    .news-list {
      grid-template-columns: repeat(3, 1fr);
    }

    .footer-list {
      flex-direction: row;
      justify-content: space-between;
    }

    .footer-mail__adress {
      font-size: 32px;
    }

    .logo {
      margin-left: 200px;
    }
  }
</style>
