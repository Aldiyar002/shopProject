import "./regis.css"

const Regis = () => {
  return (
    <>
    <div className="regis">
        <h1>Регистрация</h1>
        <input placeholder="Имя" className="input"></input>
        <input placeholder="Фамилия" className="input"></input>
        <input placeholder="Номер телефона" className="input"></input>
        <input placeholder="Почта" className="input"></input>
        <input placeholder="Пароль" className="input"></input>
        <input placeholder="Повторите пароль" className="input"></input>
    </div>
    </>
  )
};

export default Regis;
