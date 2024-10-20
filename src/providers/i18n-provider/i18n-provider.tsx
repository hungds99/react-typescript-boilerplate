import { PropsWithChildren } from 'react';

export const I18nProvider = ({ children }: PropsWithChildren) => {
  //   const { i18n } = useTranslation();

  //   const locale = languages.find((lan) => lan.code === i18n.language)?.code || languages[0].code;

  return <div>{children}</div>;
};
