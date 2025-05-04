import { useEffect, useState } from 'react';

import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { IContentState } from '@lib/components/common/interface/content';

export const useContent = (page: string) => {
  const [contents, setContents] = useState<IContentState>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await dataProvider.getList('content', {
          pagination: { page: 1, perPage: 100 },
          sort: { field: 'title', order: 'ASC' },
          filter: { page },
        });

        setContents(
          response.data.reduce((acc, val) => {
            acc[val.key] = { title: val.title, desc: val.description };
            return acc;
          }, {}),
        );
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { contents, isLoading };
};
