interface NewsInterface {
  title: string;
  news: string;
  createdAt: string;
  author: string;
  id: string;
  newPicture: {
    rawFile: File;
    src: string;
    title: string;
  };
  picture?: string;
  updatedAt: string;
}

export default NewsInterface;
