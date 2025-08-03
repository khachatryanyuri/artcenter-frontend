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
import SubTypeEdit from '@lib/src/admin/components/SubType/SubTypeEdit';
import SubTypeList from '@lib/src/admin/components/SubType/SubTypeList';
import SubTypeShow from '@lib/src/admin/components/SubType/SubTypeShow';
import SubTypeCreate from '@lib/src/admin/components/SubType/SubTypeCreate';
import TypeEdit from '@lib/src/admin/components/Type/TypeEdit';
import TypeList from '@lib/src/admin/components/Type/TypeList';
import TypeShow from '@lib/src/admin/components/Type/TypeShow';
import TypeCreate from '@lib/src/admin/components/Type/TypeCreate';
import CoursesApplicationList from './CoursesApplication/CoursesApplicationList';
import CoursesApplicationEdit from './CoursesApplication/CoursesApplicationEdit';
import CoursesApplicationShow from './CoursesApplication/CoursesApplicationShow';
import CoursesApplicationCreate from './CoursesApplication/CoursesApplicationCreate';
import {
  ServicesApplicationList,
  ServicesApplicationEdit,
  ServicesApplicationShow,
  ServicesApplicationCreate,
} from '.';

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
  {
    name: 'subTypes',
    list: SubTypeList,
    edit: SubTypeEdit,
    show: SubTypeShow,
    create: SubTypeCreate,
  },
  {
    name: 'types',
    list: TypeList,
    edit: TypeEdit,
    show: TypeShow,
    create: TypeCreate,
  },
  {
    name: 'courses-application-request',
    list: CoursesApplicationList,
    edit: CoursesApplicationEdit,
    show: CoursesApplicationShow,
    create: CoursesApplicationCreate,
  },
  {
    name: 'services-application-request',
    list: ServicesApplicationList,
    edit: ServicesApplicationEdit,
    show: ServicesApplicationShow,
    create: ServicesApplicationCreate,
  },
];

export default resources;
