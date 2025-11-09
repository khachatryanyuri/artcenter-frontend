interface ICourseData {
  id: string;
  title: {
    ru: string;
    hy: string;
    en: string;
  };
  description: {
    ru: string;
    hy: string;
    en: string;
  };
  picture?: string;
}

interface GetCourseProps {
  courseItem: {
    data: ICourseData | null;
    curseData?: ICourseData[];
    locale: string,
    dynamicUrl: string;
  };
}

export type { ICourseData, GetCourseProps };