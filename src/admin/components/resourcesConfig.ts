import UsersList from '@lib/src/admin/components/UsersList/UsersList';
import UserEdit from '@lib/src/admin/components/UsersList/UserEdit';
import UserShow from '@lib/src/admin/components/UsersList/UserShow';
import CoursesList from '@lib/src/admin/components/CoursesList/CoursesList';
import CoursesEdit from '@lib/src/admin/components/CoursesList/CoursesEdit';
import CourseShow from '@lib/src/admin/components/CoursesList/CoursesShow';
import CoursesCreate from '@lib/src/admin/components/CoursesList/CoursesCreate';
import LanguageList from '@lib/src/admin/components/Languages/LanguagesList';
import LanguagesCreate from '@lib/src/admin/components/Languages/LanguagesCreate';
import LanguagesShow from '@lib/src/admin/components/Languages/LanguagesShow';
import ContentEdit from '@lib/src/admin/components/Content/ContentEdit';
import ContentList from '@lib/src/admin/components/Content/ContentList';
import ContentShow from '@lib/src/admin/components/Content/ContentShow';
import ContentCreate from '@lib/src/admin/components/Content/ContentCreate';

const resources = [
  { name: 'user/users', list: UsersList, edit: UserEdit, show: UserShow },
  {
    name: 'courses',
    list: CoursesList,
    edit: CoursesEdit,
    show: CourseShow,
    create: CoursesCreate,
  },
  {
    name: 'languages',
    list: LanguageList,
    show: LanguagesShow,
    create: LanguagesCreate,
  },
  { name: 'content', list: ContentList, edit: ContentEdit, show: ContentShow, create: ContentCreate },
];

export default resources;
