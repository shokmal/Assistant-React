import FormGroup from "./forms";
export default function Registration() {
  return (
    <main>
      <div className="register-form-container">
      <h1 className="form-title">Регистрация</h1>
      
      <div className="form-fields">
        <FormGroup 
            type="text" 
            id="User-Name" 
            placeholder="Введите имя" 
        />

        <FormGroup
          type="text"
          id="First-Name"
          placeholder="Введите вашу фамилию"
        />

        <FormGroup 
        type="email" 
        id="email" 
        placeholder="Введите Email" 
        />

        <FormGroup 
        type="password" 
        id="password" 
        placeholder="Введите Пароль" 
        />

        <FormGroup
          type="password"
          id="password"
          placeholder="Введите Пароль ещё раз"
        />
      </div>

      <div className="button">
        <button className="button-registration">регистрация</button>
      </div>
    </div>
    </main>
    
  );
}
