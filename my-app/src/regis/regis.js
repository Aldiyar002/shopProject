
import "./regis.css"

const Regis = () => {
  return (
    <>
    <div className="regis">
        <div className="container">
        <h1>Регистрация</h1>
        <div>
        <input placeholder="Имя" className="regis_input"></input>
        <br></br>
        <input placeholder="Фамилия" className="regis_input"></input>
        <br></br>
        <input placeholder="Номер телефона" className="regis_input"></input>
        <br></br>
        <input placeholder="Почта" className="regis_input"></input>
        <br></br>
        <input placeholder="Пароль" className="regis_input"></input>
        <br></br>
        <input placeholder="Повторите пароль" className="regis_input"></input>
        </div>
        <br></br>
        <button className="regis_btn">Зарегистрироваться</button>
        </div>
    </div>
    </>
  )
};

export default Regis;