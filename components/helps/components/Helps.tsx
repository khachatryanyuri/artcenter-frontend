import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { inventoryStyles } from '@lib/components/helps/styles/InventoryStyles';
import { useContent } from '@lib/services/store/contentsStore';
import Content from '@lib/components/common/components/Content';

const {
  containerStyles,
  gridStyles: { gridTitle, gridAccardion },
  boxAccardion,
  accordionStyles: { acardion, accordionDetails },
} = inventoryStyles;

export default function HelpsComponents() {
  const { contents, isLoading } = useContent('helps');
  const {
    helpsHead,
    onlineTraining,
    onlineLessonsQuestion,
    onlineVsTraditionalQuestion,
    onlineLearningBenefitsQuestion,
    onlineLessonRequirementsQuestion,
    isOnlineLearningGoodForKidsQuestion,
    organizationalQuestions,
    howToStartLearning,
    howToSignUpForLessons,
    howToOrderServices,
    howToBuyGiftLessons,
    whyFillOutApplication,
    noResponseToApplication,
    canSignUpMultipleCourses,
    canStudyInGroup,
    canStartFromScratch,
    canContinueWithExperience,
    ageRestrictions,
    needParentPresence,
    learningDuration,
    lessonDuration,
    canChangeLessonDuration,
    canRescheduleLessons,
    canChangeLessonSchedule,
    canChangeTeacher,
    trainingSchedule,
    lessonSchedule,
    regularLessonsExplanation,
    flexibleLessonsExplanation,
    howToChooseSchedule,
    singleLessonOption,
    trainingPrograms,
    whatIsTrainingProgram,
    canChooseTrainingProgram,
    canChangeTrainingProgram,
    learningWithoutSheetMusic,
    preparationForExamOrPerformance,
    payment,
    howToFindLessonPrice,
    whatIsInPriceList,
    paidLessonsValidity,
    howToFindServiceCost,
    paymentMethods,
    canChangePaymentMethod,
    paymentRulesAndProcedure,
    areThereDiscounts,
    refundPolicy,
  } = contents;

  const data = [
    {
      title: onlineTraining,
      subTopics: [
        onlineLessonsQuestion,
        onlineVsTraditionalQuestion,
        onlineLearningBenefitsQuestion,
        onlineLessonRequirementsQuestion,
        isOnlineLearningGoodForKidsQuestion,
      ],
    },
    {
      title: organizationalQuestions,
      subTopics: [
        howToStartLearning,
        howToSignUpForLessons,
        howToOrderServices,
        howToBuyGiftLessons,
        whyFillOutApplication,
        noResponseToApplication,
        canSignUpMultipleCourses,
        canStudyInGroup,
        canStartFromScratch,
        canContinueWithExperience,
        ageRestrictions,
        needParentPresence,
        learningDuration,
        lessonDuration,
        canChangeLessonDuration,
        canRescheduleLessons,
        canChangeLessonSchedule,
        canChangeTeacher,
      ],
    },
    {
      title: trainingSchedule,
      subTopics: [
        lessonSchedule,
        regularLessonsExplanation,
        flexibleLessonsExplanation,
        howToChooseSchedule,
        singleLessonOption,
      ],
    },
    {
      title: trainingPrograms,
      subTopics: [
        whatIsTrainingProgram,
        canChooseTrainingProgram,
        canChangeTrainingProgram,
        learningWithoutSheetMusic,
        preparationForExamOrPerformance,
      ],
    },
    {
      title: payment,
      subTopics: [
        howToFindLessonPrice,
        whatIsInPriceList,
        paidLessonsValidity,
        howToFindServiceCost,
        paymentMethods,
        canChangePaymentMethod,
        paymentRulesAndProcedure,
        areThereDiscounts,
        refundPolicy,
      ],
    },
  ];

  return (
    <Container maxWidth={false} {...containerStyles}>
      <Grid container>
        <Grid item xl={6} lg={10} md={12} {...gridTitle}>
          <Content variant="h1" text={helpsHead?.title} />
          <Content variant="body1" text={helpsHead?.desc} />
        </Grid>
        <Grid item xl={6} lg={7} md={12} {...gridAccardion}>
          <Box {...boxAccardion}>
            {data.map((value, index) => (
              <Accordion key={index} {...acardion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${index}-panel1-content`}
                  id={`${index}-panel1-header`}
                >
                  <Content variant="h4" text={value.title?.title} />
                </AccordionSummary>
                <AccordionDetails>
                  {value?.subTopics.map((topic, topIndex) => (
                    <Accordion key={`topic-${index}-${topIndex}`} {...acardion}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${index}-${topIndex}-panel2-content`}
                        id={`${index}-${topIndex}-panel2-header`}
                      >
                        <Content variant="h5" text={topic?.title} />
                      </AccordionSummary>
                      <AccordionDetails {...accordionDetails}>
                        <Content variant="body1" text={topic?.desc} />
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
