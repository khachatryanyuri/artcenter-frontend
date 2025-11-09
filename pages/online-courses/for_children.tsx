import React from 'react';
import dynamic from 'next/dynamic';

import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Box } from '@mui/material';
import SEO from '@lib/components/common/components/SEO.';
import { stripHtmlTagsWithRegex } from '@lib/services/helpers/service';
import { GetCourseProps } from '@lib/types/types';
import { generatedSEOData } from '@lib/helpers/helpers';

const SubCourseComponent = dynamic(() => import('@lib/components/courses/components/SubCourse'), {
  ssr: false,
});

const GetCourse: React.FC<GetCourseProps> = ({ courseItem }) => {
  if (!courseItem.data) {
    return <Box>Error: Course not found</Box>;
  }

  const { title, description, image, data } = generatedSEOData(courseItem, true);

  return (
    <>
      <SEO
        title={title}
        description={stripHtmlTagsWithRegex(description) || ''}
        url={courseItem.dynamicUrl}
        image={image as string}
      />
      <SubCourseComponent typeData={data} courseData={courseItem.curseData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, req, resolvedUrl } = context;
  const currentLocale = locale || 'hy';
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const dynamicUrl = `${protocol}://${host}${resolvedUrl}`;
  try {
    const filter = {
      key: 'for_children',
    };

    const curseFilter = {
      typesKey: 'curses',
      subTypesKey: 'for_children',
    };

    const courseResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses`, {
      params: {
        filter: JSON.stringify(curseFilter),
      },
    });

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/subTypes`, {
      params: {
        filter: JSON.stringify(filter),
      },
    });

    return {
      props: {
        courseItem: {
          data: response.data,
          curseData: courseResponse.data,
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
          curseData: null,
          locale: currentLocale,
          dynamicUrl,
        },
      },
    };
  }
};

export default GetCourse;
