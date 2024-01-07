import { Layout, ResetScrollOnRouteChange } from 'components';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'assets/styles/App.scss';
import { queryClient } from 'clients/api';
import { Web3Wrapper } from 'clients/web3';

import { AuthProvider } from 'context/AuthContext';
import { SuccessfulTransactionModalProvider } from 'context/SuccessfulTransactionModalContext';
import { MuiThemeProvider } from 'theme/MuiThemeProvider';

import Switch from './Switch';

const App = () => (
    <Web3Wrapper>
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider>
          <AuthProvider>
              <SuccessfulTransactionModalProvider>
                  <HashRouter>
                    <ToastContainer />
                    <Layout>
                      <Switch />
                    </Layout>
                  </HashRouter>
              </SuccessfulTransactionModalProvider>
          </AuthProvider>
        </MuiThemeProvider>
      </QueryClientProvider>
    </Web3Wrapper>
);

export default App;
