import React, { Fragment } from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
  required,
  EditProps,
  ReferenceInput,
} from 'react-admin';

import { useLanguages } from '@lib/src/admin/languageStore/languageStore';

// ─── Static choices (same as Create) ───────────────────────────────────────

const DURATION_CHOICES = [
  { id: 30, name: '30 min' },
  { id: 45, name: '45 min' },
  { id: 60, name: '60 min' },
];

const DISCOUNT_CONDITION_CHOICES = [
  { id: 'fullCourse', name: 'Full course / level payment (5%)' },
  { id: '8lessons', name: 'Advance payment for 8 lessons (3%)' },
];

// ─── Component ─────────────────────────────────────────────────────────────

const LessonPricingEdit = (props: EditProps) => {
  const { languages, isLoading } = useLanguages();

  if (isLoading) {
    return null;
  }

  return (
    <Edit title="Edit Lesson Pricing" {...props}>
      {/*
        react-admin's <Edit> fetches the record via dataProvider.getOne('pricing', { id })
        which maps to GET /api/pricing/:id — already implemented in the backend.
        All fields below are pre-populated automatically by SimpleForm from that record.
      */}
      <SimpleForm>

        {/* ── Identity ── */}
        <ReferenceInput source="courseId" reference="courses" label="Course" required>
          <SelectInput optionText="title.ru" fullWidth />
        </ReferenceInput>

        {/* ── Localised label ── */}
        {languages.map((language) => (
          <Fragment key={language.id}>
            <TextInput
              label={`Label (${language.code})`}
              source={`label.${language.code}`}
              fullWidth
            />
          </Fragment>
        ))}

        {/* ── Sections ───────────────────────────────────────────────────
            Outer loop: one section (e.g. Basic, Advanced, Individual, Group)
            Contains localized title, optional description, optional levels,
            and an inner array of pricing tiers.
        ── */}
        <ArrayInput source="sections" label="Pricing Sections">
          <SimpleFormIterator>
            {/* Section Title (localized) */}
            {languages.map((language) => (
              <Fragment key={`title-${language.id}`}>
                <TextInput
                  label={`Section Title (${language.code})`}
                  source={`title.${language.code}`}
                  // validate={language.code === 'ru' ? required() : undefined}
                  fullWidth
                />
              </Fragment>
            ))}

            {/* Section Description (localized) */}
            {languages.map((language) => (
              <Fragment key={`desc-${language.id}`}>
                <TextInput
                  label={`Section Description (${language.code})`}
                  source={`description.${language.code}`}
                  fullWidth
                />
              </Fragment>
            ))}

            {/* Levels (A, B, C) */}
            <ArrayInput source="levels" label="Levels (e.g. A, B, C)">
              <SimpleFormIterator inline>
                <TextInput source="" label="Level" helperText={false} />
              </SimpleFormIterator>
            </ArrayInput>

            {/* Tiers */}
            <ArrayInput source="tiers" label="Pricing Tiers">
              <SimpleFormIterator>
                <NumberInput
                  source="participantCount"
                  label="Participants (1 = individual, 2 = pair…)"
                  validate={required()}
                  min={1}
                />
                <ArrayInput source="durations" label="Duration Variants">
                  <SimpleFormIterator inline>
                    <SelectInput
                      source="duration"
                      label="Duration"
                      choices={DURATION_CHOICES}
                      validate={required()}
                    />
                    <NumberInput
                      source="priceAMD"
                      label="Price (AMD)"
                      validate={required()}
                      min={0}
                    />
                  </SimpleFormIterator>
                </ArrayInput>
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>

        {/* ── Discounts ── */}
        <ArrayInput source="discounts" label="Discounts">
          <SimpleFormIterator inline>
            <SelectInput
              source="condition"
              label="Condition"
              choices={DISCOUNT_CONDITION_CHOICES}
              validate={required()}
            />
            <NumberInput
              source="percentage"
              label="Percentage (%)"
              validate={required()}
              min={0}
              max={100}
            />
          </SimpleFormIterator>
        </ArrayInput>

        {/* ── Status ── */}
        <BooleanInput source="isActive" label="Active" />

      </SimpleForm>
    </Edit>
  );
};

export default LessonPricingEdit;
