import React, { useContext } from "react";
import "./ContextApp.css";
import { DarkModeContext, DarkModeProvider } from "./DarkModeContext";
function ContextApp() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default ContextApp;

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      😊Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <DarkModeProvider>
      Products
      <ProductDetail />
    </DarkModeProvider>
  );
}
function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext); // 객체로 받아옴
  return (
    <div>
      ProductDetail
      <p>
        DarkMode :{" "}
        {darkMode ? (
          <span style={{ backgroundColor: "black", color: "white" }}>
            darkMode
          </span>
        ) : (
          "lightMode"
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}
function Footer() {
  return <div className="footer">Footer</div>;
}
