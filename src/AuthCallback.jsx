import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const userString = searchParams.get('user');
    const error = searchParams.get('error');

    if (error) {
      toast.error('Authentication failed. Please try again.');
      navigate('/signup');
      return;
    }

    if (token && userString) {
      try {
        const user = JSON.parse(decodeURIComponent(userString));
        
        // Store token and user data
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        // Get the pending userType from sessionStorage
        const pendingUserType = sessionStorage.getItem('pendingUserType');
        if (pendingUserType) {
          // Update user type if it was selected before OAuth
          user.userType = pendingUserType;
          localStorage.setItem('user', JSON.stringify(user));
          sessionStorage.removeItem('pendingUserType');
        }

        toast.success('🎉 Successfully signed in with Google!');
        navigate('/');
      } catch (err) {
        console.error('Error parsing user data:', err);
        toast.error('An error occurred. Please try again.');
        navigate('/signup');
      }
    } else {
      toast.error('Authentication failed. Please try again.');
      navigate('/signup');
    }
  }, [searchParams, navigate]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid rgba(255, 255, 255, 0.3)',
          borderTop: '4px solid white',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 20px'
        }}></div>
        <h2>Completing Sign In...</h2>
        <p style={{ opacity: 0.8, marginTop: '10px' }}>Please wait while we set up your account</p>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AuthCallback;