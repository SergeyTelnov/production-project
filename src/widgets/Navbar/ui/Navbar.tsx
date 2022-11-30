import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("Sign in")}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
        tenetur quibusdam labore iste odit numquam mollitia dolor quia animi
        nihil!
      </Modal>
    </div>
  );
};
