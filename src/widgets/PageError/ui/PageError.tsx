import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface NavbarProps {
  className?: string;
}

export const PageError = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("An unexpected error has occurred")}</p>
      <Button onClick={reloadPage}>{t("Refresh the page")}</Button>
    </div>
  );
};
