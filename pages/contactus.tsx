import SEO from '@lib/components/common/components/SEO.';
import ContactUscomponent from '@lib/components/contactUs/ContactUscomponent';

const SignInPage = () => {
  return (
    <>
      <SEO
        title={'Կապ Ազատազէնի հետ'}
        description={'Կապվեք մեզ հետ համագործակցության և տեղեկատվության համար։'}
        url={`https://azatazen.am/contactus`}
        image={'https://azatazen.am/seo/contactus.png'}
      />
      <ContactUscomponent />
    </>
  );
};

export default SignInPage;
