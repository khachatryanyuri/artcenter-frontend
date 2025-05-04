interface StationsAndShopsInterface {
  address: string;
  contacts: string;
  createdAt: string;
  description: string;
  id: string;
  name: string;
  pictures?: {
    rawFile: File;
    src: string;
    title: string;
  }[];
  updatedAt: string;
}

export default StationsAndShopsInterface;
