import SEO from '@lib/components/common/components/SEO.';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import dynamic from 'next/dynamic';
import paymentImage from '@lib/public/more/paymentImage.jpg';

const AboutUsComponent = dynamic(() => import('../components/aboutUs/components/AboutUsComponent'), {
  ssr: false,
});

interface IContent {
  id: string;
  title: {
    arm: string;
  };
  description: {
    arm: string;
  };
}

interface GetContentProps {
  contentData: {
    data: IContent | null;
    curseData: any;
  };
}

const PaymentPage: React.FC<GetContentProps> = ({ contentData }) => {
  return (
    <>
      {/* <SEO
        title={'Ազատազէնի ճանապարհը՝ հիմնադրումից մինչև այսօր'}
        description={
          'Ազատազէն» կրթական ՀԿ-ն հիմնադրվել է 2021 թվականին 44-օրյա պատերազմի մասնակիցների կողմից՝ լուծելու համար ՀՀ անվտանգային խնդիրները քաղաքացիական ուժերով։ Կազմակերպույթան գործունեությունը նպատակաուղղված է Հայաստանում զենք կրելու և կիրառելու մշակույթի ձևավորմանն ու զարգացմանը, օրենսդրական դաշտի բարելավումներին, զինագործության զարգացման նպաստմանը,  ինչպես նաև ուսումնամարզական հավաքների, հրաձգության դասընթացների, ռազմասպորտային և հրաձգության մրցույթների կազմակերպմանը։'
        }
        url={`https://azatazen.am/about`}
        image={'https://azatazen.am/seo/about.png'}
      /> */}
      <AboutUsComponent courseData={contentData.data} imageSrc={paymentImage} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const filter = {
      page: 'payment',
    };

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/content`, {
      params: {
        filter: JSON.stringify(filter),
      },
    });

    return {
      props: {
        contentData: {
          data: response.data,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching course item:', error);
    return {
      props: {
        contentData: {
          data: null,
        },
      },
    };
  }
};

export default PaymentPage;
