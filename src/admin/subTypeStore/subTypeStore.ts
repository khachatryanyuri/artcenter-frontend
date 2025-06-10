import { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';

export const useSubTypes = () => {
  const dataProvider = useDataProvider();
  const [subTypes, setSubTypes] = useState<any[]>([]);
  const [isLoadingSubTypes, setIsLoadingSubTypes] = useState<boolean>(true);

  useEffect(() => {
    dataProvider
      .getList('subTypes', {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'id', order: 'ASC' },
        filter: {},
      })
      .then((response) => {
        setSubTypes(response.data);
        setIsLoadingSubTypes(false);
      });
  }, [dataProvider]);

  return { subTypes, isLoadingSubTypes };
};
