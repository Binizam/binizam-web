export type ServiceSchemaOptions = {
  site: URL;
  path: string;
  name: string;
  serviceType: string;
  description: string;
  areaServed?: string | string[];
  audience?: string;
  inLanguage?: 'en' | 'ar';
};

function makeAreaServed(area: string) {
  return {
    '@type': area === 'United Arab Emirates' || area === 'Saudi Arabia' ? 'Country' : 'Place',
    name: area
  };
}

export function makeServiceStructuredData({
  site,
  path,
  name,
  serviceType,
  description,
  areaServed = 'GCC',
  audience,
  inLanguage = 'en'
}: ServiceSchemaOptions) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': new URL(path, site).toString(),
    name,
    serviceType,
    description,
    inLanguage,
    provider: {
      '@id': new URL('/#organization', site).toString()
    },
    areaServed: Array.isArray(areaServed)
      ? areaServed.map(makeAreaServed)
      : makeAreaServed(areaServed)
  };

  if (audience) {
    schema.audience = {
      '@type': 'BusinessAudience',
      name: audience
    };
  }

  return schema;
}
