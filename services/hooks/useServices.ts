import { useState, useEffect } from 'react';

import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { IServices } from '@lib/services/interface/services/services';
// import { SERVICES } from '@lib/components/services/constants/services';

// const {
//   REGISTER_TO_SERVICES: { REGISTER },
// } = SERVICES;

const useServices = (type: string) => {
  const [serviceItems, setServiceItems] = useState<{
    loading: boolean;
    data: IServices[] | null;
  }>({ loading: true, data: null });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await dataProvider.getList('services', {
          pagination: { page: 1, perPage: 100 },
          sort: { field: 'createdAt', order: 'ASC' },
          filter: type === 'REGISTER' ? {} : { type },
        });
        setServiceItems({ loading: false, data: response.data });
      } catch (error) {
        console.error('Error fetching services:', error);
        setServiceItems({ loading: false, data: null });
      }
    };

    if (type) {
      fetchServices();
    }
  }, [type]);

  return serviceItems;
};

export default useServices;
