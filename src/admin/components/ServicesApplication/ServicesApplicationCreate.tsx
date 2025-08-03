import { Create, SimpleForm, TextInput, DateInput, SelectInput } from 'react-admin';
import { useCourses } from '../CoursesApplication/CoursesApplicationEdit';

const ServicesApplicationCreate = () => {
  const { courses, isLoading } = useCourses();

  return (
    <Create title="Create Service Application">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
        <SelectInput
          source="fieldOfService"
          label="Field of Service"
          choices={courses}
          optionText="name"
          optionValue="id"
          isLoading={isLoading}
          fullWidth
        />
        <TextInput source="wishes" multiline />
        <DateInput source="deadline" />
        <TextInput source="skype" />
        <TextInput source="whatsapp" />
        <TextInput source="telegram" />
      </SimpleForm>
    </Create>
  );
};

export default ServicesApplicationCreate;
