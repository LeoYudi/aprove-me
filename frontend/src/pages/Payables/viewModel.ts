import { useEffect, useState } from 'react';
import { list, PayableType } from './services';
import { CustomError } from 'utils/axios';
import { notAuthenticatedRedirect } from 'utils/auth';

export default function PayablesViewModel() {
  const [payables, setPayables] = useState<PayableType[]>([]);

  useEffect(() => {
    (async () => {
      const response = await list(1, 10);

      if (response.apiError) {
        const apiError = (response as CustomError).apiError;
        if (apiError.statusCode === 401) notAuthenticatedRedirect();
      } else {
        setPayables(response);
      }
    })();
  }, []);

  return { payables };
}
