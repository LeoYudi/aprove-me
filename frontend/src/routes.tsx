import { Route, Routes as Router } from 'react-router-dom';

import { Login } from 'pages/Login';

import { PrivateRoutes } from 'components/PrivateRoutes';
import { Payables } from 'pages/Payables';

export default function Routes() {
  return (
    <Router>
      <Route path='/login' element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Payables />} />
      </Route>
    </Router>
  )
}