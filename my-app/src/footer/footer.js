import "./footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer_container"> 
        <div className="foot_card">
          <p className="foot_title">Разделы</p>
          <p className="foot_text">Акции</p>
          <p className="foot_text">Облигации</p>
        </div>
        <div className="foot_card">
          <p className="foot_title">Веб-сайт</p>
          <p className="foot_text">Вход</p>
          <p className="foot_text">Вопрос-ответы</p>
        </div>
        <div className="foot_card">
          <p className="foot_title">О нас</p>
          <p className="foot_text">Связаться с нами</p>
          <p className="foot_text">Условия использования</p>
        </div>
        <div className="foot_card">
          <p className="foot_title">Будьте в курсе об изменениях</p>
          <p className="foot_text">Подпишитесь и получайте новости каждый день!</p>
            <div className="block">
                <input className="input" placeholder="Введите свою почту"></input>
                <button className="btn">Подписаться</button>
            </div>
        </div>
      </div>
      <div className="second_block">
        <p className="second_text">© 2024 Все права защищены.</p>
      </div>
    </div>
    </>
  );
};
  
export default Footer;