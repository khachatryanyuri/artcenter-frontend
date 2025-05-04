import { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';

type Language = {
  id: number;
  code: string;
};

export const useLanguages = () => {
  const dataProvider = useDataProvider();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    dataProvider
      .getList('languages', {
        pagination: { page: 1, perPage: 100 },
        sort: { field: 'id', order: 'ASC' },
        filter: {},
      })
      .then((response) => {
        setLanguages(response.data);
        setIsLoading(false);
      });
  }, [dataProvider]);

  return { languages, isLoading };
};
