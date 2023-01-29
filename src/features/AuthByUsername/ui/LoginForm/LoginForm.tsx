import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUserName";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducerList
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducer: ReducerList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducer}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
