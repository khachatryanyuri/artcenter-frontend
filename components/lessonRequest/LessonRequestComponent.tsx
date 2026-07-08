import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { Box, Button, TextField, Typography, Select, MenuItem, FormHelperText, Divider } from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useLessonPricing } from '@lib/services/hooks/useLessonPricing';
import PricingTable, { PricingTableSkeleton } from '@lib/components/courses/components/PricingTable';

type Person = {
  name: string;
  value: { name: string; age: string };
  label: string;
  ageLabel: string;
  error: { name: string; age: string };
};

type Field = {
  required: boolean;
  name: string;
  value: any;
  label: string;
  error: string;
};

const LessonRequestComponent = ({ lessonsData }: { lessonsData: any }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  // ── Derive the selected course's id so we can fetch its pricing ──
  // fieldOfStudy holds the id of the currently selected course.
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');

  const { data: pricingData, loading: pricingLoading } = useLessonPricing(selectedCourseId);


  const initialFields = useMemo<Field[]>(
    () => [
      { required: true, name: 'fieldOfStudy', value: '', label: t('form.fieldOfStudy.label'), error: '' },
      { required: true, name: 'pricingSection', value: '', label: t('form.pricingSection.label', { defaultValue: 'Pricing Section' }), error: '' },
      { required: true, name: 'count', value: 1, label: t('form.count.label'), error: '' },
      { required: true, name: 'duration', value: '', label: t('form.duration.label', { defaultValue: 'Duration' }), error: '' },
      { required: true, name: 'package', value: 'single', label: t('form.package.label', { defaultValue: 'Package / Quantity' }), error: '' },
      {
        required: true,
        name: 'persons',
        value: [
          {
            name: 'user1',
            value: { name: '', age: '' },
            label: t('form.persons.name.label', { index: 1 }),
            ageLabel: t('form.persons.age.label', { index: 1 }),
            error: { name: '', age: '' },
          },
        ],
        label: '',
        error: '',
      },
      { required: true, name: 'location', value: '', label: t('form.location.label'), error: '' },
      { required: true, name: 'email', value: '', label: t('form.email.label'), error: '' },
      { required: false, name: 'whatsApp', value: '', label: t('form.whatsApp.label'), error: '' },
      { required: true, name: 'skillLevel', value: '', label: t('form.skillLevel.label'), error: '' },
      { required: false, name: 'wishes', value: '', label: t('form.wishes.label'), error: '' },
    ],
    [t],
  );

  const mockSkillLevelOptions = useMemo(
    () => [
      { key: 'zero', label: t('form.skillLevel.options.zero') },
      { key: 'beginner', label: t('form.skillLevel.options.beginner') },
      { key: 'intermediate', label: t('form.skillLevel.options.intermediate') },
      { key: 'advanced', label: t('form.skillLevel.options.advanced') },
      { key: 'professional', label: t('form.skillLevel.options.professional') },
    ],
    [t],
  );

  const [data, setData] = useState<Field[]>([...initialFields]);

  useEffect(() => {
    setData((currentData) =>
      currentData.map((field) => {
        const newFieldData = initialFields.find((initField) => initField.name === field.name);
        if (!newFieldData) return field;

        if (field.name === 'persons') {
          const updatedPersons = field.value.map((person: Person, index: number) => ({
            ...person,
            label: t('form.persons.name.label', { index: index + 1 }),
            ageLabel: t('form.persons.age.label', { index: index + 1 }),
          }));
          return { ...field, value: updatedPersons };
        }

        return {
          ...field,
          label: newFieldData.label,
        };
      }),
    );
  }, [t]);

  useEffect(() => {
    if (!id || !lessonsData?.data?.length) return;

    const matchedId = lessonsData.data.find((lesson: any) => lesson.id === id)?.id || '';
    setSelectedCourseId(matchedId);

    setData((prevData) =>
      prevData.map((field) =>
        field.name === 'fieldOfStudy'
          ? { ...field, value: matchedId }
          : field,
      ),
    );
  }, [id, lessonsData]);

  const validateFields = () => {
    let isValid = true;
    const updatedData = data.map((field) => {
      if (field.required && field.name !== 'persons' && !field.value) {
        isValid = false;
        return { ...field, error: t('form.errors.required') };
      }
      if (field.name === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        isValid = false;
        return { ...field, error: t('form.errors.invalidEmail') };
      }
      if (field.name === 'persons') {
        const updatedPersons = field.value.map((person: Person) => {
          const personErrors = {
            name: person.value.name ? '' : t('form.errors.nameRequired'),
            age: person.value.age ? '' : t('form.errors.ageRequired'),
          };
          if (!person.value.name || !person.value.age) {
            isValid = false;
          }
          return { ...person, error: personErrors };
        });
        return { ...field, value: updatedPersons };
      }
      return { ...field, error: '' };
    });
    setData(updatedData);
    return isValid;
  };

  const selectedSectionStr = data.find((f) => f.name === 'pricingSection')?.value;
  const selectedDurationStr = data.find((f) => f.name === 'duration')?.value;
  const participantCount = data.find((f) => f.name === 'count')?.value || 1;
  const selectedPackage = data.find((f) => f.name === 'package')?.value || 'single';

  const priceDetails = useMemo(() => {
    if (!pricingData?.pricing || selectedSectionStr === '' || selectedDurationStr === '') {
      return null;
    }

    const sectionIdx = parseInt(selectedSectionStr, 10);
    const duration = parseInt(selectedDurationStr, 10);
    const section = pricingData.pricing.sections[sectionIdx];
    if (!section) return null;

    const tier = section.tiers.find((t: any) => t.participantCount === participantCount);
    if (!tier) return null;

    const durObj = tier.durations.find((d: any) => d.duration === duration);
    if (!durObj) return null;

    let lessonsCount = 1;
    let discountCondition = '';

    if (selectedPackage === '8lessons') {
      lessonsCount = 8;
      discountCondition = '8lessons';
    } else if (selectedPackage === 'fullCourse') {
      lessonsCount = 24; // Default assumption for a full course level
      discountCondition = 'fullCourse';
    }

    // Multiply base price by number of lessons and by participant count (since base is per person)
    // Wait, the prompt didn't say to multiply by participantCount. Let's assume basePriceAMD is total for the group, or is it per person?
    // The previous text said "Prices are per student". So we must multiply by participantCount!
    const baseTotalAMD = durObj.priceAMD * lessonsCount * participantCount;

    let discountPercent = 0;
    if (discountCondition) {
      const disc = pricingData.pricing.discounts.find((d: any) => d.condition === discountCondition);
      if (disc) {
        discountPercent = disc.percentage;
      }
    }

    const discountAmountAMD = Math.round((baseTotalAMD * discountPercent) / 100);
    const finalTotalAMD = baseTotalAMD - discountAmountAMD;

    const usdExchangeRate = pricingData.usdExchangeRate || 400;
    const finalTotalUSD = Math.round(finalTotalAMD / usdExchangeRate);

    return {
      baseTotalAMD,
      discountPercent,
      discountAmountAMD,
      finalTotalAMD,
      finalTotalUSD,
      lessonsCount,
    };
  }, [pricingData, selectedSectionStr, selectedDurationStr, participantCount, selectedPackage]);

  const handleSubmit = async () => {
    if (validateFields()) {
      try {
        const requestData = data.reduce((acc: any, field: any) => {
          const key = field.name === 'whatsApp' ? 'whatsapp' : field.name;

          if (key === 'persons' && Array.isArray(field.value)) {
            acc.persons = field.value.map((person: any) => ({
              name: person.value.name,

              age: Number(person.value.age),
            }));
          } else {
            acc[key] = field.value;
          }

          return acc;
        }, {});

        if (priceDetails) {
          requestData.totalPriceAMD = priceDetails.finalTotalAMD;
          requestData.totalPriceUSD = priceDetails.finalTotalUSD;
        }

        // 1. Create the application (and initiate payment on the backend if applicable)
        const appResponse = await dataProvider.create('courses-application-request', { data: requestData });

        // 2. If the backend returned a formUrl, redirect to the payment gateway
        if (appResponse.data.formUrl) {
          window.location.href = appResponse.data.formUrl;
          return;
        }

        router.push('/');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Form contains errors');
    }
  };

  // Keep selectedCourseId in sync whenever the user picks a different course
  const handleFieldChange = (fieldName: string, value: any) => {
    if (fieldName === 'fieldOfStudy') {
      setSelectedCourseId(value);
      // Reset dependent fields when course changes
      setData((prevData) =>
        prevData.map((field) => {
          if (field.name === 'fieldOfStudy') return { ...field, value, error: '' };
          if (field.name === 'pricingSection' || field.name === 'duration') return { ...field, value: '', error: '' };
          return field;
        })
      );
      return;
    }

    if (fieldName === 'pricingSection') {
      // Reset duration when section changes because available durations might change
      setData((prevData) =>
        prevData.map((field) => {
          if (field.name === 'pricingSection') return { ...field, value, error: '' };
          if (field.name === 'duration') return { ...field, value: '', error: '' };
          return field;
        })
      );
      return;
    }

    setData((prevData) => prevData.map((field) => (field.name === fieldName ? { ...field, value, error: '' } : field)));
  };

  const handleCountChange = (value: number) => {
    setData((prevData) =>
      prevData.map((field) =>
        field.name === 'count'
          ? { ...field, value, error: '' }
          : field.name === 'persons'
            ? {
              ...field,

              value: Array.from({ length: value }, (_, index) => ({
                name: `user${index + 1}`,

                value: { name: '', age: '' },

                label: t('form.persons.name.label', { index: index + 1 }),

                ageLabel: t('form.persons.age.label', { index: index + 1 }),

                error: { name: '', age: '' },
              })),
            }
            : field,
      ),
    );
  };

  const handlePersonChange = (personIndex: number, key: 'name' | 'age', value: string) => {
    const personsField = data.find((field) => field.name === 'persons');

    if (!personsField) return;

    const updatedPersons = [...personsField.value];

    updatedPersons[personIndex].value[key] = value;

    updatedPersons[personIndex].error[key] = value
      ? ''
      : key === 'name'
        ? t('form.errors.nameRequired')
        : t('form.errors.ageRequired');

    setData((prevData) =>
      prevData.map((field) => (field.name === 'persons' ? { ...field, value: updatedPersons } : field)),
    );
  };
  return (
    <Box sx={{ minHeight: '60vh', p: 2 }}>
      <Box sx={{ margin: '64px auto', width: '100%', maxWidth: 1024 }}>
        <Typography variant="h3" sx={{ mb: '32px', color: '#C35F1C' }}>
          {t('form.title')}
        </Typography>

        {/* ── Pricing panel ────────────────────────────────────────────────
            Shown as soon as a course is selected (or pre-selected via ?id=).
            Displays a Skeleton while loading, then the full PricingTable.
            Hidden entirely when no course is selected or when the selected
            course has no pricing document in the backend.
        ── */}
        {(pricingLoading || pricingData) && (
          <Box sx={{ mb: 4, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
            {pricingLoading && <PricingTableSkeleton />}
            {!pricingLoading && pricingData && (
              <PricingTable
                pricing={pricingData.pricing}
                usdExchangeRate={pricingData.usdExchangeRate}
              />
            )}
          </Box>
        )}
        <Divider sx={{ mb: 4 }} />

        {data.map((field, index) =>
          field.name === 'persons' ? (
            <Box key={index}>
              {field.value.map((person: Person, personIndex: number) => (
                <Box key={personIndex} sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {person.label}
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{ mb: 2 }}
                    value={person.value.name}
                    onChange={(e) => handlePersonChange(personIndex, 'name', e.target.value)}
                    placeholder={t('form.persons.name.placeholder')}
                    error={!!person.error.name}
                    helperText={person.error.name}
                  />
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {person.ageLabel}
                  </Typography>
                  <TextField
                    fullWidth
                    value={person.value.age}
                    type="number"
                    onChange={(e) => handlePersonChange(personIndex, 'age', e.target.value)}
                    placeholder={t('form.persons.age.placeholder')}
                    error={!!person.error.age}
                    helperText={person.error.age}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {field.label}
              </Typography>

              {field.name === 'count' ? (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[1, 2, 3].map((count) => {
                    // Check if current section allows this participant count
                    let disabled = false;
                    if (selectedSectionStr !== '' && pricingData?.pricing) {
                      const section = pricingData.pricing.sections[parseInt(selectedSectionStr, 10)];
                      if (section) {
                        const hasTier = section.tiers.some((t: any) => t.participantCount === count);
                        if (!hasTier) disabled = true;
                      }
                    }
                    return (
                      <Button
                        key={count}
                        variant="outlined"
                        disabled={disabled}
                        onClick={() => handleCountChange(count)}
                        sx={{
                          minWidth: 48,
                          backgroundColor:
                            data.find((f) => f.name === 'count')?.value === count ? 'black' : 'transparent',
                          color: data.find((f) => f.name === 'count')?.value === count ? 'white' : 'inherit',
                        }}
                      >
                        {count}
                      </Button>
                    );
                  })}
                </Box>
              ) : field.name === 'fieldOfStudy' ? (
                <>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(e) => handleFieldChange('fieldOfStudy', e.target.value)}
                    displayEmpty
                    error={!!field.error}
                  >
                    <MenuItem value="" disabled>
                      {t('form.fieldOfStudy.placeholder')}
                    </MenuItem>
                    {lessonsData.data.map((option: any) => (
                      <MenuItem key={option?.id} value={option?.id}>
                        {option?.title?.[i18n.language] || option?.title?.['ru']}
                      </MenuItem>
                    ))}
                  </Select>
                  {field.error && <FormHelperText error>{field.error}</FormHelperText>}
                </>
              ) : field.name === 'pricingSection' ? (
                <>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(e) => handleFieldChange('pricingSection', e.target.value)}
                    displayEmpty
                    error={!!field.error}
                    disabled={!selectedCourseId || !pricingData?.pricing}
                  >
                    <MenuItem value="" disabled>
                      {t('form.pricingSection.placeholder', { defaultValue: 'Select a pricing section' })}
                    </MenuItem>
                    {pricingData?.pricing?.sections.map((section: any, idx: number) => (
                      <MenuItem key={idx} value={idx.toString()}>
                        {section.title[i18n.language] || section.title['ru']}
                      </MenuItem>
                    ))}
                  </Select>
                  {field.error && <FormHelperText error>{field.error}</FormHelperText>}
                </>
              ) : field.name === 'duration' ? (
                <>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(e) => handleFieldChange('duration', e.target.value)}
                    displayEmpty
                    error={!!field.error}
                    disabled={selectedSectionStr === ''}
                  >
                    <MenuItem value="" disabled>
                      {t('form.duration.placeholder', { defaultValue: 'Select duration' })}
                    </MenuItem>
                    {(() => {
                      if (selectedSectionStr !== '' && pricingData?.pricing) {
                        const section = pricingData.pricing.sections[parseInt(selectedSectionStr, 10)];
                        const tier = section?.tiers.find((t: any) => t.participantCount === participantCount);
                        if (tier) {
                          return tier.durations.map((d: any) => (
                            <MenuItem key={d.duration} value={d.duration.toString()}>
                              {d.duration} {t('form.duration.minutes', { defaultValue: 'min' })}
                            </MenuItem>
                          ));
                        }
                      }
                      return null;
                    })()}
                  </Select>
                  {field.error && <FormHelperText error>{field.error}</FormHelperText>}
                </>
              ) : field.name === 'package' ? (
                <>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(e) => handleFieldChange('package', e.target.value)}
                    displayEmpty
                    error={!!field.error}
                  >
                    <MenuItem value="single">{t('form.package.single', { defaultValue: 'Single Lesson (1)' })}</MenuItem>
                    <MenuItem value="8lessons">{t('form.package.8lessons', { defaultValue: 'Monthly Package (8 lessons) - 3% off' })}</MenuItem>
                    <MenuItem value="fullCourse">{t('form.package.fullCourse', { defaultValue: 'Full Course (24 lessons) - 5% off' })}</MenuItem>
                  </Select>
                  {field.error && <FormHelperText error>{field.error}</FormHelperText>}
                </>
              ) : field.name === 'skillLevel' ? (
                <>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(e) => handleFieldChange('skillLevel', e.target.value)}
                    displayEmpty
                    error={!!field.error}
                  >
                    <MenuItem value="" disabled>
                      {t('form.skillLevel.placeholder')}
                    </MenuItem>
                    {mockSkillLevelOptions.map((option) => (
                      <MenuItem key={option.key} value={option.label}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {field.error && <FormHelperText error>{field.error}</FormHelperText>}
                </>
              ) : field.name === 'wishes' ? (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  placeholder={t('form.wishes.placeholder')}
                  error={!!field.error}
                  helperText={field.error}
                />
              ) : (
                <TextField
                  fullWidth
                  value={field.value}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  error={!!field.error}
                  helperText={field.error}
                />
              )}
            </Box>
          ),
        )}

        {/* ── Total Price Display ── */}
        {priceDetails && (
          <Box sx={{ mt: 4, mb: 4, p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2, backgroundColor: '#fafafa' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              {t('form.price.summaryTitle', { defaultValue: 'Price Summary' })}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>{t('form.price.lessons', { defaultValue: 'Lessons' })}:</Typography>
              <Typography fontWeight="medium">{priceDetails.lessonsCount} x {participantCount} {participantCount === 1 ? t('form.price.student', { defaultValue: 'student' }) : t('form.price.students', { defaultValue: 'students' })}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>{t('form.price.baseTotal', { defaultValue: 'Base Total' })}:</Typography>
              <Typography fontWeight="medium">{priceDetails.baseTotalAMD.toLocaleString('en-US')} AMD</Typography>
            </Box>

            {priceDetails.discountPercent > 0 && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, color: 'success.main' }}>
                <Typography>{t('form.price.discount', { defaultValue: 'Discount' })} ({priceDetails.discountPercent}%):</Typography>
                <Typography fontWeight="bold">- {priceDetails.discountAmountAMD.toLocaleString('en-US')} AMD</Typography>
              </Box>
            )}

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight="bold">{t('form.price.finalTotal', { defaultValue: 'Final Total' })}:</Typography>
              <Box textAlign="right">
                <Typography variant="h6" fontWeight="bold" color="primary">
                  {priceDetails.finalTotalAMD.toLocaleString('en-US')} AMD
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ≈ {priceDetails.finalTotalUSD.toLocaleString('en-US')} USD
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        <Button variant="contained" fullWidth onClick={handleSubmit} sx={{ mt: 4 }}>
          {t('form.submitButton')}
        </Button>
      </Box>
    </Box>
  );
};

export default LessonRequestComponent;
