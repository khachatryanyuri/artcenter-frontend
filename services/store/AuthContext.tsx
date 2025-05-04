import { authProvider } from '@lib/src/admin/providers/authProvider';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/router';
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isRefreshingToken, setIsRefreshingToken] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const authData = localStorage.getItem('auth');
      const isAuthenticated = !!authData;

      if (isAuthenticated) {
        const { token, refreshToken } = JSON.parse(authData as string);
        const tokenDecoded = jwtDecode(token);
        const refreshTokenDecoded = jwtDecode(refreshToken);

        if (isTokenExpired(refreshTokenDecoded) && isAuthenticated) {
          await logout();
        } else if (!isTokenExpired(refreshTokenDecoded) && isAuthenticated && isTokenExpired(tokenDecoded)) {
          refreshAccessToken();
        }
      }

      setIsAuthenticated(isAuthenticated);
    };

    checkAuth();

    const handleRouteChange = async () => {
      checkAuth();
    };
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const login = async ({ username, password }: { username: string; password: string }) => {
    try {
      await authProvider.login({ username, password });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Authentication error:', error);
      throw error;
    }
  };

  const logout = async () => {
    Cookies.remove('auth');
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
    router.push('signin');
  };

  const refreshAccessToken = async () => {
    if (isRefreshingToken) {
      // If the token is already being refreshed, wait for the ongoing refresh process
      return;
    }

    setIsRefreshingToken(true);

    const authData: any = localStorage.getItem('auth');
    const refreshToken = authData ? JSON.parse(authData).refreshToken : '';

    if (!refreshToken) {
      setIsRefreshingToken(false);
      throw new Error('No refresh token available');
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/refresh-token`, {
        refreshToken,
      });

      const data = JSON.parse(authData);

      data.token = response.data.token;
      data.refreshToken = response.data.refreshToken;

      localStorage.setItem('auth', JSON.stringify(data));
    } catch (error) {
      localStorage.removeItem('auth');
      console.error('Failed to refresh access token:', error);
    } finally {
      setIsRefreshingToken(false);
    }
  };

  useEffect(() => {
    // Use this effect to refresh the access token whenever the authentication state changes
    if (isAuthenticated) {
      refreshAccessToken();
    }
  }, [isAuthenticated]);

  const isTokenExpired = (accessToken: any): boolean => {
    try {
      if (accessToken.exp) {
        const currentTime = Math.floor(Date.now() / 1000);
        return accessToken.exp < currentTime;
      }
    } catch (error) {
      console.error('Error decoding or checking token:', error);
    }
    return false;
  };

  const contextValue: AuthContextProps = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
