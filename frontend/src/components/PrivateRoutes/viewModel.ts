import { useEffect } from 'react';

import { auth, notAuthenticatedRedirect } from 'utils/auth';

export default function PrivateMenuViewModel() {
  useEffect(() => {
    const { token } = auth;

    if (!token) notAuthenticatedRedirect();
  }, []);
}
