import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        placeholder={t("Login")}
        className={cls.input}
        type="text"
      />
      <Input placeholder={t("Password")} className={cls.input} type="text" />
      <Button className={cls.loginBnt}>{t("Sign in")}</Button>
    </div>
  );
};
