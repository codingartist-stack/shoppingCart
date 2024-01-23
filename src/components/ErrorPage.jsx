import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h1>Page Not Found...</h1>
      <p>Sorry</p>
      <Link to={'/'}>Click Here to Back to the Home page</Link>
    </>
  );
};

export default ErrorPage;
