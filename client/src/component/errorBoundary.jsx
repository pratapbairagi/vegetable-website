import { useState, useEffect } from "react"


const ErrorBoundary = ({children}) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleErrors = (error, info) => {
          // Update state to indicate an error occurred
          setHasError(true);
    
          // You can also log the error to an error reporting service
          console.error('Error caught by error boundary:', error, info);
        };
    
        // Register the error handler
        window.addEventListener('error', handleErrors);
    
        // Cleanup function to remove the error handler
        return () => {
          window.removeEventListener('error', handleErrors);
        };
      }, []);
    
      if (hasError) {
        // You can render a fallback UI when an error occurs
        return <div>Something went wrong. Please try again later.</div>;
      }
    return children
}

export default ErrorBoundary