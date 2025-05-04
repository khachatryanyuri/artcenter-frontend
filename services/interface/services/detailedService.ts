import { StaticImageData } from 'next/image';

import { IServices } from '@lib/services/interface/services/services';

export interface IDetailedServicesContentProps {
  serviceData: IServices[] | null;
  title: { arm?: string; rus?: string; eng?: string };
  desc: { arm?: string; rus?: string; eng?: string };
  image: string | StaticImageData;
  type: string;
}
