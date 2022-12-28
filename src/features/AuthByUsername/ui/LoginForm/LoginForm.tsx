import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUserName";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Login")} />
      {error && (
        <Text text={t("Invalid email or password")} theme={TextTheme.ERROR} />
      )}
      <Input
        autofocus
        placeholder={t("E-mail")}
        className={cls.input}
        onChange={onChangeUserName}
        value={username}
        type="text"
      />
      <Input
        placeholder={t("Password")}
        className={cls.input}
        onChange={onChangePassword}
        value={password}
        type="text"
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBnt}
        disabled={isLoading}
      >
        {t("Sign in")}
      </Button>
    </div>
  );
});
