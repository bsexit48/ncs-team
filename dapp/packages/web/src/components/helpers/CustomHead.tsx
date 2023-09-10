import * as React from 'react';
import config from 'config';
import { NextSeo } from 'next-seo';

interface ICustomHeadProps {
  title: string;
  description?: string;
  slug?: string;
  metaImage?: string;
}

const CustomHead: React.FunctionComponent<ICustomHeadProps> = (props) => {
  const { title, description = '', slug = '', metaImage = '' } = props;
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`${config.hostname}${slug}`}
      openGraph={{
        type: 'website',
        url: `${config.hostname}`,
        title: title,
        description: description,
        locale: 'en_EN',
        images: [
          {
            url: `${config.hostname}${metaImage}`,
            width: 1200,
            height: 627,
            alt: title,
          },
        ],
        site_name: `${config.hostname}`,
      }}
      twitter={{
        site: `${config.hostname}`,
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default CustomHead;
