import { NextSeo } from 'next-seo';

export default function SEO({
  title,
  description,
  url,
  image,
}: {
  title: string;
  description?: string;
  url: string;
  image?: string;
}) {
  return (
    <NextSeo
      title={title}
      description={description || 'Discover the latest updates on Ազատազէն ԿՀԿ.'}
      openGraph={{
        title,
        description: description || 'Discover the latest updates on Ազատազէն ԿՀԿ.',
        url,
        images: image
          ? [
              {
                url: image,
                width: 800,
                height: 600,
                alt: title,
              },
            ]
          : [],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  );
}
