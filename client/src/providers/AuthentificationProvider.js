import React, { createContext, useContext, useEffect, useState } from "react";

const URL = "http://127.0.0.1:9000";

const AuthentificationContext = createContext();

const AuthentificationProvider = ({ children }) => {

  /**
   * User's access token
   */
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(localStorage.getItem("user"));
  }, []);

  /**
   * Registers a new user
   * @param {string} username name of the user
   * @param {string} password password of the user
   */
  const register = async (username, password) => {
    await fetch(`${URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  };

  /**
   * Logins the user with the given credentials
   * @param {string} username name of the user
   * @param {string} password password of the user
   */
  const login = async (username, password) => {
    const response = await fetch(`${URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const jsonData = await response.json();
    setUserData(jsonData);
    localStorage.setItem("user", jsonData);
  };

  return (
    <AuthentificationContext.Provider value={{ register, login }}>
      {children}
    </AuthentificationContext.Provider>
  );
};

export default AuthentificationProvider;

export function useAuthentification() {
  const authentificationContext = useContext(AuthentificationContext);
  if (!authentificationContext) {
    throw new Error(
      'Using "useAuthentification()" outside of AuthentificationProvider?'
    );
  }
  return authentificationContext;
}
