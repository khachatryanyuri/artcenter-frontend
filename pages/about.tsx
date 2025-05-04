import SEO from '@lib/components/common/components/SEO.';
import AboutUsComponent from '../components/aboutUs/components/AboutUsComponent';

const AboutUsPage = () => {
  return (
    <>
      <SEO
        title={'Ազատազէնի ճանապարհը՝ հիմնադրումից մինչև այսօր'}
        description={
          'Ազատազէն» կրթական ՀԿ-ն հիմնադրվել է 2021 թվականին 44-օրյա պատերազմի մասնակիցների կողմից՝ լուծելու համար ՀՀ անվտանգային խնդիրները քաղաքացիական ուժերով։ Կազմակերպույթան գործունեությունը նպատակաուղղված է Հայաստանում զենք կրելու և կիրառելու մշակույթի ձևավորմանն ու զարգացմանը, օրենսդրական դաշտի բարելավումներին, զինագործության զարգացման նպաստմանը,  ինչպես նաև ուսումնամարզական հավաքների, հրաձգության դասընթացների, ռազմասպորտային և հրաձգության մրցույթների կազմակերպմանը։'
        }
        url={`https://azatazen.am/about`}
        image={'https://azatazen.am/seo/about.png'}
      />
      <AboutUsComponent />
    </>
  );
};

export default AboutUsPage;
