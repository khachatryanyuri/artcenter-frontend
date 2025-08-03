import { Edit, SimpleForm, TextInput, DateInput, SelectInput } from 'react-admin';
import { useCourses } from '../CoursesApplication/CoursesApplicationEdit';

const ServicesApplicationEdit = () => {
  const { courses, isLoading } = useCourses();

  return (
    <Edit title="Edit Service Application">
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
        <TextInput source="wishes" multiline fullWidth />
        <DateInput source="deadline" />
        <TextInput source="skype" />
        <TextInput source="whatsapp" />
        <TextInput source="telegram" />
      </SimpleForm>
    </Edit>
  );
};

export default ServicesApplicationEdit;
