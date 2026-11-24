export default function LoadingSpinner({ label = 'Loading' }) {
  return <span className="spinner" role="status" aria-label={label} />;
}
