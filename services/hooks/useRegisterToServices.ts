import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { matchIsValidTel } from 'mui-tel-input';

import { dataProvider } from '@lib/src/admin/providers/dataProvider';
import { isEmpty, validateEmail } from '@lib/validators/userProfile';
import { IRegisterToServicesProps, IServices, ServicesInputFieldType } from '@lib/services/interface/services/services';
import { defineErrorKeys } from '@lib/services/helpers/service';
import { inputFormTextsEnum, InputTypeEnum } from '@lib/services/interface/inputForms/inputForms';

const { EMAIL } = ServicesInputFieldType;
const { ERROR_TEXT_INVALID_EMAIL_ENUM, ERROR_TEXT_IS_EMPTY_ENUM, ERROR_WRONG_FORMAT_ENUM } = inputFormTextsEnum;
const { PhoneNumberEnum } = InputTypeEnum;

export function useRegisterToServices({ serviceData, id }: IRegisterToServicesProps) {
  const [selectedService, setSelectedService] = useState({ id: '', title: '', type: '' });
  const [inputData, setInputData] = useState<{ [key: string]: string | number }>({});
  const [errors, setErrors] = useState<{ [key: string]: { status: boolean; errorText: string } }>({});

  const router = useRouter();

  useEffect(() => {
    const service = serviceData?.find((item) => item.id == id);
    if (service) {
      setSelectedService({ id: service.id, title: service.title.arm, type: service.type });
    }
  }, [id, serviceData]);

  const handleChangeServices = (serviceItem: IServices) => {
    setSelectedService({ id: serviceItem.id, title: serviceItem.title.arm, type: serviceItem.type });
  };

  const handleChangeInputData = (key: string, value: string | number) => {
    if ((key === 'count' && Number(value) < 0) || value === '-') {
      return;
    }
    setInputData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    const errorKeys = defineErrorKeys(selectedService.type);
    const newErrors: { [key: string]: { status: boolean; errorText: string } } = {};

    errorKeys.forEach((key) => {
      if (isEmpty(inputData[key] as string)) {
        newErrors[key] = { status: true, errorText: ERROR_TEXT_IS_EMPTY_ENUM };
      }
      if (key === EMAIL && inputData[key] && !validateEmail(inputData[key] as string)) {
        newErrors[key] = { status: true, errorText: ERROR_TEXT_INVALID_EMAIL_ENUM };
      }
      if (key === PhoneNumberEnum && inputData[key] && !matchIsValidTel(inputData[key] as string)) {
        newErrors[key] = { status: true, errorText: ERROR_WRONG_FORMAT_ENUM };
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await dataProvider.create('services/registration', {
        data: { id: selectedService.id, ...inputData },
      });
      router.push('/services/registration-success');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return {
    selectedService,
    inputData,
    errors,
    handleChangeServices,
    handleChangeInputData,
    handleSubmit,
  };
}
