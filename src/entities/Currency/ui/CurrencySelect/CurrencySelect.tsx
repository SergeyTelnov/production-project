import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR }
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        if (onChange) {
          onChange(value as Currency);
        }
      },
      [onChange]
    );

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("ukazhite-valyutu")}
        value={value}
        options={options}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);
