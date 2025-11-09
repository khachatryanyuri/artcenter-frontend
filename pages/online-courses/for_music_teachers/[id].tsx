import React from 'react';
import dynamic from 'next/dynamic';

import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Box } from '@mui/material';
import SEO from '@lib/components/common/components/SEO.';
import { stripHtmlTagsWithRegex } from '@lib/services/helpers/service';
import { GetCourseProps } from '@lib/types/types';
import { generatedSEOData } from '@lib/helpers/helpers';
const DetailedCourseComponent = dynamic(() => import('@lib/components/courses/components/DetailedCourse'), {
  ssr: false,
});

const GetCourse: React.FC<GetCourseProps> = ({ courseItem }) => {
  if (!courseItem.data) {
    return <Box>Error: Course not found</Box>;
  }

  const { title, description, image, data } = generatedSEOData(courseItem);

  return (
    <>
      <SEO
        title={title}
        description={stripHtmlTagsWithRegex(description) || ''}
        url={courseItem.dynamicUrl}
        image={image as string}
      />
      <DetailedCourseComponent data={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const { locale, req, resolvedUrl } = context;
  const currentLocale = locale || 'hy';
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const dynamicUrl = `${protocol}://${host}${resolvedUrl}`;
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`);

    return {
      props: {
        courseItem: {
          data: response.data,
          locale: currentLocale,
          dynamicUrl,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching course item:', error);
    return {
      props: {
        courseItem: {
          data: null,
          locale: currentLocale,
          dynamicUrl,
        },
      },
    };
  }
};

export default GetCourse;
