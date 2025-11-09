export const generatedSEOData = (courseItem: any, isType = false) => {
  const { locale, data } = courseItem;
  const imageUrl = isType ? data.data[0].picture : data.picture;
  type LocaleKey = keyof typeof data.title;
  const title = isType ? data.data[0].title[locale as LocaleKey] : data.title[locale as LocaleKey];
  const description = isType ? data.data[0].desc[locale as LocaleKey] : data.description[locale as LocaleKey];
  return {
    title,
    description: description || '',
    image: imageUrl as string,
    data,
  };
};
