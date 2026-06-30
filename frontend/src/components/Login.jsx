import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import loginImg from '../assets/login.jpg';
import { login, signup } from '../api/auth';
import '../styles/Login.css';

export default function Login() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('login');
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Handle login form changes
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Handle signup form changes
    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Validate login form
    const validateLogin = () => {
        const newErrors = {};
        if (!loginData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!loginData.password) {
            newErrors.password = 'Password is required';
        } else if (loginData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    // Validate signup form
    const validateSignup = () => {
        const newErrors = {};
        if (!signupData.name) {
            newErrors.name = 'Name is required';
        }
        if (!signupData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!signupData.password) {
            newErrors.password = 'Password is required';
        } else if (signupData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (signupData.confirmPassword !== signupData.password) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    // Handle login submission
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateLogin();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setLoading(true);
        try {
            const data = await login(loginData.email, loginData.password);

            // Save user to localStorage
            localStorage.setItem('user', JSON.stringify({
                name: data.user.name || 'User',
                email: data.user.email,
                type: 'login'
            }));
            navigate('/');
        } catch (err) {
            console.error(err);
            setErrors({ general: err.message || 'Could not connect to the server.' });
        } finally {
            setLoading(false);
        }
    };

    // Handle signup submission
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateSignup();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setLoading(true);
        try {
            const data = await signup(signupData.name, signupData.email, signupData.password);

            // Save user to localStorage
            localStorage.setItem('user', JSON.stringify({
                name: data.user.name,
                email: data.user.email,
                type: 'signup'
            }));
            navigate('/');
        } catch (err) {
            console.error(err);
            setErrors({ general: err.message || 'Could not connect to the server.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-image-section">
                    <img src={loginImg} alt="Login Design" className="login-image" />
                </div>

                <div className="login-form-section">


                    {/* Tab Navigation */}
                    <div className="tab-navigation">
                        <button
                            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab('login');
                                setErrors({});
                                setShowPassword(false);
                                setShowConfirmPassword(false);
                            }}
                            disabled={loading}
                        >
                            Login
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab('signup');
                                setErrors({});
                                setShowPassword(false);
                                setShowConfirmPassword(false);
                            }}
                            disabled={loading}
                        >
                            Signup
                        </button>
                    </div>

                    {/* Login Form */}
                    {activeTab === 'login' && (
                        <form onSubmit={handleLoginSubmit} className="form">
                            {errors.general && <div className="general-error">{errors.general}</div>}
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={loginData.email}
                                    onChange={handleLoginChange}
                                    className={errors.email ? 'input-error' : ''}
                                    disabled={loading}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <div className="password-input-wrapper">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Enter password"
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        className={errors.password ? 'input-error' : ''}
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle-btn"
                                        onClick={() => setShowPassword(!showPassword)}
                                        disabled={loading}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && <span className="error-message">{errors.password}</span>}
                            </div>

                            <div className="forgot-password-container">
                                <a href="#forgot" className="forgot-password-link" onClick={(e) => e.preventDefault()}>
                                    Forgot password?
                                </a>
                            </div>

                            <button type="submit" className="submit-button" disabled={loading}>
                                {loading ? <span className="spinner"></span> : 'Login'}
                            </button>

                            <p className="form-footer">
                                Don't have an account?{' '}
                                <button
                                    type="button"
                                    className="link-button"
                                    onClick={() => {
                                        setActiveTab('signup');
                                        setErrors({});
                                        setShowPassword(false);
                                        setShowConfirmPassword(false);
                                    }}
                                    disabled={loading}
                                >
                                    Sign up here
                                </button>
                            </p>
                        </form>
                    )}

                    {/* Signup Form */}
                    {activeTab === 'signup' && (
                        <form onSubmit={handleSignupSubmit} className="form">
                            {errors.general && <div className="general-error">{errors.general}</div>}
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={signupData.name}
                                    onChange={handleSignupChange}
                                    className={errors.name ? 'input-error' : ''}
                                    disabled={loading}
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={signupData.email}
                                    onChange={handleSignupChange}
                                    className={errors.email ? 'input-error' : ''}
                                    disabled={loading}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <div className="password-input-wrapper">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Enter password"
                                        value={signupData.password}
                                        onChange={handleSignupChange}
                                        className={errors.password ? 'input-error' : ''}
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle-btn"
                                        onClick={() => setShowPassword(!showPassword)}
                                        disabled={loading}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && <span className="error-message">{errors.password}</span>}
                            </div>

                            <div className="form-group">
                                <div className="password-input-wrapper">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        value={signupData.confirmPassword}
                                        onChange={handleSignupChange}
                                        className={errors.confirmPassword ? 'input-error' : ''}
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle-btn"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        disabled={loading}
                                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showConfirmPassword ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                                <line x1="1" y1="1" x2="23" y2="23" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <span className="error-message">{errors.confirmPassword}</span>
                                )}
                            </div>

                            <button type="submit" className="submit-button" disabled={loading}>
                                {loading ? <span className="spinner"></span> : 'Sign Up'}
                            </button>

                            <p className="form-footer">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    className="link-button"
                                    onClick={() => {
                                        setActiveTab('login');
                                        setErrors({});
                                        setShowPassword(false);
                                        setShowConfirmPassword(false);
                                    }}
                                    disabled={loading}
                                >
                                    Log in here
                                </button>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
