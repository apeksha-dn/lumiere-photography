import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <div className="container page notfound">
      <h1>This frame is missing.</h1>
      <p>The page you were looking for does not exist or has moved.</p>
      <Link to="/" className="btn">Back to home</Link>
    </div>
  );
}
