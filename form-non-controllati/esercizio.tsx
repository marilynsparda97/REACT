import React from "react";

function UncontrolledLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    
    const email = formData.get("username"); 
    const password = formData.get("password");
    const remember = formData.get("remember");

    console.log("Dati del Login:", {
      username: email,
      password: password,
      remember: !!remember, 
    });

  };

  return (
    <div className="login-container">
      <h2>Login (Uncontrolled)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input name="username" id="username" type="text" />
        </div>
        
        <div>
          <label htmlFor="password">Password: </label>
          <input name="password" id="password" type="password" />
        </div>

        <div>
          <label htmlFor="remember">Ricordami: </label>
          <input name="remember" id="remember" type="checkbox" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UncontrolledLogin;