// shell-app/src/App.jsx
import React, { Suspense, lazy } from 'react';

const AuthScreen = lazy(() => import('microAuth/AuthScreen'));

function App() {
  return (
    <div>
      <h1>Shell App</h1>
      <Suspense fallback={<div>Carregando AuthScreen...</div>}>
        <AuthScreen />
      </Suspense>
    </div>
  );
}

export default App;
