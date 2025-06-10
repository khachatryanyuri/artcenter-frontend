import React from 'react';
import dynamic from 'next/dynamic';

import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Box } from '@mui/material';
import SEO from '@lib/components/common/components/SEO.';
import { stripHtmlTagsWithRegex } from '@lib/services/helpers/service';

const CourseComponent = dynamic(() => import('@lib/components/courses/components/Course'), {
  ssr: false,
});

interface ICourseData {
  id: string;
  title: {
    arm: string;
  };
  description: {
    arm: string;
  };
  picture?: string;
}

interface GetCourseProps {
  courseItem: {
    data: ICourseData | null;
  };
}

const GetCourse: React.FC<GetCourseProps> = ({ courseItem }) => {
  if (!courseItem.data) {
    return <Box>Error: Course not found</Box>;
  }

  const courseData = courseItem.data;
  const imageUrl = courseData.picture || 'https://azatazen.am/homePage/azatazenMid.png';

  return (
    <>
      {/* <SEO
        title={courseData?.title?.arm || 'Ազատազէն Դասընթացներ'}
        description={stripHtmlTagsWithRegex(courseData?.description?.arm) || ''}
        url={`https://azatazen.am/courses/${courseData?.id}`}
        image={imageUrl as string}
      /> */}
      <CourseComponent data={courseData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const web_filter = {
      key: 'curses',
      subTypes: {
        $elemMatch: { key: 'music_theory' },
      },
    };

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/types`, {
      params: {
        web_filter: JSON.stringify(web_filter),
      },
    });

    return {
      props: {
        courseItem: {
          data: response.data,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching course item:', error);
    return {
      props: {
        courseItem: {
          data: null,
        },
      },
    };
  }
};

export default GetCourse;
