import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  EditProps,
  ArrayInput,
  SimpleFormIterator,
  SelectInput,
  useDataProvider,
} from 'react-admin';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

// Hook to fetch courses
export const useCourses = () => {
  const dataProvider = useDataProvider();
  const [courses, setCourses] = useState<{ id: string; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    dataProvider
      .getList('courses', {
        pagination: { page: 1, perPage: 100 },
        sort: { field: 'title.arm', order: 'ASC' },
        filter: {},
      })
      .then((response) => {
        const courseOptions = response.data.map((course: any) => ({
          id: course._id || course.id,
          name: course.title?.arm || course.title?.en || course.title?.ru,
        }));
        setCourses(courseOptions);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [dataProvider]);

  return { courses, isLoading };
};

const CoursesApplicationEdit = (props: EditProps) => {
  const { courses, isLoading } = useCourses();

  return (
    <Edit {...props} title="Edit Course Form">
      <SimpleForm>
        <Typography variant="h6" gutterBottom>
          Persons
        </Typography>
        <Typography sx={{ fontStyle: 'italic', mb: 1 }}>That persons see here:</Typography>

        <ArrayInput source="persons">
          <SimpleFormIterator>
            <TextInput source="name" label="Name" />
            <NumberInput source="age" label="Age" />
          </SimpleFormIterator>
        </ArrayInput>

        <NumberInput source="count" label="Count" />
        <TextInput source="location" label="Location" />
        <TextInput source="email" label="Email" />
        <TextInput source="skype" label="Skype" />
        <TextInput source="whatsapp" label="WhatsApp" />

        <SelectInput
          source="fieldOfStudy"
          label="Field of Study"
          choices={courses}
          optionText="name"
          optionValue="id"
          isLoading={isLoading}
          fullWidth
        />

        <SelectInput
          source="skillLevel"
          label="Skill Level"
          choices={[
            { id: 'нулевой', name: 'нулевой' },
            { id: 'начальный', name: 'начальный' },
            { id: 'средний', name: 'средний' },
            { id: 'продвинутый', name: 'продвинутый' },
            { id: 'профессиональный', name: 'профессиональный' },
          ]}
        />

        <TextInput source="wishes" label="Wishes" multiline fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default CoursesApplicationEdit;
