import SEO from '@lib/components/common/components/SEO.';
import CoursesComponent from '@lib/components/courses/CoursesComponent';

const CoursesPage = () => {
  return (
    <>
      <SEO
        title={'Դասընթացներ'}
        description={
          '«Ազատազէն» կրթական ՀԿ-ի նպատակներից է նպաստել ռազմամարզական բաղադրիչի դերի, արդյունավետության և դրա վերաբերյալ իրազեկվածության մակարդակի բարձրացմանը (ՀՀ կրթական համակարգում և հանրության շրջանում)։ Մենք առաջարկում ենք մի շարք դասընթացներ, որոնց կարող եք ծանոթանալ ստորև։'
        }
        url={`https://azatazen.am/courses`}
        image={'https://azatazen.am/seo/courses.png'}
      />
      <CoursesComponent />
    </>
  );
};

export default CoursesPage;
