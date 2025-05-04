import Image from 'next/image';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import CustomPagination from '@lib/components/common/components/CustomPagination';
import { useCourses } from '@lib/components/courses/store/coursesStore';
import { coursesStyles } from '@lib/components/courses/styles/coursesStyles';
import { constants } from '@lib/components/courses/constants/constants';
import Join from '@lib/components/common/components/Join';
import { ICourses } from '@lib/components/interface/courses';
import AuthModal from '@lib/components/common/components/AuthModal';
import { useContent } from '@lib/services/store/contentsStore';
import Content from '@lib/components/common/components/Content';
import { Fragment } from 'react';

const { REGISTER } = constants;
const {
  boxStyles: {
    containerBox,
    courseBox,
    textBox,
    buttonBox,
    mainBox,
    imageBox,
    buttomBox,
    mobileBox,
    mobileBoxButton,
    joinBox,
  },
  imageStyles: { courseImage },
  textStyles: { text, mobileTitle },
} = coursesStyles;

export default function CoursesComponent() {
  const {
    courses,
    total,
    currentPage,
    itemsPerPage,
    setItemsPerPage,
    setCurrentPage,
    handleNewsClick,
    handleModal,
    open,
  } = useCourses();

  const { contents, isLoading } = useContent('courses');
  const { coursesHead } = contents;
  return (
    <>
      <Container maxWidth={false} {...containerBox}>
        <Box {...textBox}>
          <Content variant="h1" text={coursesHead?.title} />
          <Content variant="h5" text={coursesHead?.desc} />
        </Box>
        <Box {...mainBox}>
          {courses
            ? courses.map((value: ICourses) => (
                <Fragment key={value.id}>
                  <Box {...courseBox}>
                    <Box {...imageBox}>
                      <Image
                        width={100}
                        height={100}
                        src={value.picture}
                        alt={value.title.arm}
                        loading="lazy"
                        {...courseImage}
                      />
                    </Box>
                    <Box {...buttonBox}>
                      <Box sx={{ width: '100%' }}>
                        <Content variant="h4" text={value?.title} style={text} />
                        <Typography
                          variant="h5"
                          {...text}
                          dangerouslySetInnerHTML={{ __html: value?.description.arm }}
                        />
                        <Box {...buttomBox}>
                          <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => handleNewsClick(value.id)}
                          >
                            {REGISTER}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box {...mobileBox}>
                    <Content variant="h4" text={value?.title} style={mobileTitle} />
                    <Image
                      width={100}
                      height={100}
                      src={value.picture}
                      alt={value.title.arm}
                      loading="lazy"
                      {...courseImage}
                    />
                    <Box {...buttonBox}>
                      <Box sx={{ width: '100%' }}>
                        <Typography
                          variant="h5"
                          {...text}
                          dangerouslySetInnerHTML={{ __html: value?.description.arm }}
                        />
                        <Box {...mobileBoxButton}>
                          <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => handleNewsClick(value.id)}
                          >
                            {REGISTER}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Fragment>
              ))
            : null}
        </Box>
      </Container>
      <CustomPagination
        totalCount={total}
        page={currentPage}
        setPage={setCurrentPage}
        perPage={itemsPerPage}
        setPerPage={setItemsPerPage}
      />
      <Box {...joinBox}>
        <Join />
      </Box>
      <AuthModal open={open} handleModal={handleModal} />
    </>
  );
}
