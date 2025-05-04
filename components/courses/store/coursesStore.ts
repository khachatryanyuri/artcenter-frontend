import { useState, useEffect } from 'react';

import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { useRouter } from 'next/router';

export const useCourses = () => {
  const [courses, setCourses] = useState<any>([]);
  const [total, setTotal] = useState<number | undefined>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dataProvider.getList('courses', {
          pagination: { page: currentPage, perPage: itemsPerPage },
          sort: { field: 'startingDate', order: 'DESC' },
          filter: { isCourseAvailable: true },
        });

        setTotal(response.total);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  const handleModal = () => setOpen(!open);

  const handleNewsClick = (id: string) => {
    router.push(`courses/${id}`);
  };

  return {
    courses,
    total,
    currentPage,
    itemsPerPage,
    setItemsPerPage,
    setCurrentPage,
    handleNewsClick,
    handleModal,
    open,
  };
};
