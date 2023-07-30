import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return <div className={cls.NotFoundPage}>{t("page-not-found")}</div>;
};
