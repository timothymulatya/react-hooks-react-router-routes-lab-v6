// src/pages/ErrorPage.js
import NavBar from '../components/NavBar';

function ErrorPage() {
  return (
    <>
      <NavBar />
      <div className="error-page">
        <h1>Oops! Looks like something went wrong.</h1>
      </div>
    </>
  );
}

export default ErrorPage;