import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  DateField,
  ArrayField,
  Datagrid,
  NumberField,
  ShowProps,
  Loading,
  ReferenceField,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

// ─── Inline localised label reader (same pattern as SubTypeShow) ────────────
const LocalizedField = ({ label, source }: { label: string; source: string }) => {
  // Cannot use useRecordContext here because we're not inside a Show layout yet;
  // instead this is used inside SimpleShowLayout where useRecordContext is available.
  return <TextField source={source} label={label} />;
};

const LessonPricingShow = (props: ShowProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Show {...props} title="Lesson Pricing Details">
      <SimpleShowLayout>

        <ReferenceField source="courseId" reference="courses" label="Course">
          <TextField source="title.ru" />
        </ReferenceField>

        {/* Localised label per language */}
        {languages.map((language) => (
          <LocalizedField
            key={language.id}
            label={`Label (${language.code})`}
            source={`label.${language.code}`}
          />
        ))}

        {/* Sections Array */}
        <ArrayField source="sections" label="Pricing Sections">
          <Datagrid bulkActionButtons={false}>
            <LocalizedField source="title.ru" label="Section Title (RU)" />
            <LocalizedField source="title.en" label="Section Title (EN)" />
            <ArrayField source="levels" label="Levels">
              <SimpleShowLayout>
                <TextField source="" />
              </SimpleShowLayout>
            </ArrayField>
            
            {/* Tiers array within each section */}
            <ArrayField source="tiers" label="Tiers">
              <Datagrid bulkActionButtons={false}>
                <NumberField source="participantCount" label="Participants" />
                <ArrayField source="durations" label="Durations">
                  <Datagrid bulkActionButtons={false}>
                    <NumberField source="duration" label="Duration (min)" />
                    <NumberField source="priceAMD" label="Price (AMD)" />
                  </Datagrid>
                </ArrayField>
              </Datagrid>
            </ArrayField>
          </Datagrid>
        </ArrayField>

        {/* Discounts */}
        <ArrayField source="discounts" label="Discounts">
          <Datagrid bulkActionButtons={false}>
            <TextField source="condition" label="Condition" />
            <NumberField source="percentage" label="Percentage (%)" />
          </Datagrid>
        </ArrayField>

        <BooleanField source="isActive" label="Active" />
        <DateField source="createdAt" label="Created" showTime />
        <DateField source="updatedAt" label="Last Updated" showTime />

      </SimpleShowLayout>
    </Show>
  );
};

export default LessonPricingShow;
