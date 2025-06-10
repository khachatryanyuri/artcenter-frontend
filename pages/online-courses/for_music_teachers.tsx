import React from 'react';
import dynamic from 'next/dynamic';

import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Box } from '@mui/material';
import SEO from '@lib/components/common/components/SEO.';
import { stripHtmlTagsWithRegex } from '@lib/services/helpers/service';

const SubCourseComponent = dynamic(() => import('@lib/components/courses/components/SubCourse'), {
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
    curseData: any;
  };
}

const GetCourse: React.FC<GetCourseProps> = ({ courseItem }) => {
  if (!courseItem.data) {
    return <Box>Error: Course not found</Box>;
  }

  const typeData = courseItem.data;
  const courseData = courseItem.curseData;
  const imageUrl = courseData.picture || 'https://azatazen.am/homePage/azatazenMid.png';

  return (
    <>
      {/* <SEO
        title={courseData?.title?.arm || 'Ազատազէն Դասընթացներ'}
        description={stripHtmlTagsWithRegex(courseData?.description?.arm) || ''}
        url={`https://azatazen.am/courses/${courseData?.id}`}
        image={imageUrl as string}
      /> */}
      <SubCourseComponent typeData={typeData} courseData={courseData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const filter = {
      key: 'for_music_teachers',
    };

    const curseFilter = {
      typesKey: 'curses',
      subTypesKey: 'for_music_teachers',
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
        },
      },
    };
  }
};

export default GetCourse;
