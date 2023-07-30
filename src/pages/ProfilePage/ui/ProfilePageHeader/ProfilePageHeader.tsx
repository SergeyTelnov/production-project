import cls from "./ProfilePageHeader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ButtonTheme, Button } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  getProfileReadOnly,
  profileActions,
  updateProfileData
} from "entities/Profile";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation("profile");
  const readonly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("profile")} />
      {readonly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
          onClick={onEdit}
        >
          {t("edit")}
        </Button>
      ) : (
        <>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={cls.editBtn}
            onClick={onCancelEdit}
          >
            {t("otmenit")}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.saveBtn}
            onClick={onSave}
          >
            {t("sokhranit")}
          </Button>
        </>
      )}
    </div>
  );
};
