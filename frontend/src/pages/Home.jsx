import React from 'react';
import './Login.css'; // El archivo CSS donde vamos a poner los estilos

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar Sesión</h1>
        <form>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" placeholder="Introduce tu correo" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input type="password" placeholder="Introduce tu contraseña" />
          </div>
          <button type="submit" className="btn-submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
