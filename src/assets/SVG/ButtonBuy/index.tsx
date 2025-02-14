import classNames from 'classnames';
import './ButtonBuy.styles.css';

interface Props {
  text?: string;
  theme?: string;
  onClick?: () => void;
  inCart?: boolean;
  disabled?: boolean;
}

export const ButtonBuy = ({
  text,
  theme,
  onClick,
  inCart,
  disabled,
}: Props) => {
  return (
    <button
      type="button"
      className={classNames(
        { CartButtonAdd: !theme },
        { AboutButtonBuy: theme === 'green' },
        { AboutButtonCredit: theme === 'blue' },
        { inCart }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
      >
        <path d="M286.154 958.306q-29.153 0-49.576-20.422-20.423-20.423-20.423-49.577 0-29.153 20.423-49.576 20.423-20.423 49.576-20.423 29.154 0 49.577 20.423t20.423 49.576q0 29.154-20.423 49.577-20.423 20.422-49.577 20.422Zm387.692 0q-29.154 0-49.577-20.422-20.423-20.423-20.423-49.577 0-29.153 20.423-49.576 20.423-20.423 49.577-20.423 29.153 0 49.576 20.423 20.423 20.423 20.423 49.576 0 29.154-20.423 49.577-20.423 20.422-49.576 20.422ZM240.615 325.999 342 538.308h272.692q3.462 0 6.154-1.731 2.693-1.731 4.616-4.808l107.307-195q2.308-4.231.385-7.5-1.923-3.27-6.539-3.27h-486Zm-28.769-59.998h555.383q24.538 0 37.115 20.884 12.577 20.885 1.192 42.654L677.384 561.691q-9.847 17.308-26.039 26.962-16.192 9.653-35.499 9.653H324l-46.308 84.616q-3.077 4.616-.192 10.001t8.654 5.385h457.691v59.998H286.154q-39.999 0-60.115-34.499-20.115-34.5-1.423-68.884l57.078-102.616-145.539-306.308H60.001v-59.998h113.845l38 80ZM342 538.308h280-280Z" />
      </svg>
    </button>
  );
};
