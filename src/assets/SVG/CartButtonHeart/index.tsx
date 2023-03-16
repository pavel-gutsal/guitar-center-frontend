import './CartButtonHeart.styles.css';
import classNames from 'classnames';

interface Props {
  theme?: string;
  onClick?: () => void;
  liked?: boolean;
  disabled?: boolean;
}

export const CartButtonHeart = ({ theme, onClick, liked, disabled }: Props) => {
  return (
    <button
      type="button"
      className={classNames(
        { CartButtonHeart: !theme },
        theme === 'rounded' && 'RoundedButtonHeart'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
      >
        <path d="m480 909.075-44.153-39.691q-99.461-90.231-164.5-155.077-65.038-64.846-103.076-115.423-38.039-50.577-53.154-92.269-15.116-41.692-15.116-84.615 0-85.153 57.423-142.576Q214.847 222.001 300 222.001q52.385 0 99 24.501 46.615 24.5 81 70.269 34.385-45.769 81-70.269 46.615-24.501 99-24.501 85.153 0 142.576 57.423Q859.999 336.847 859.999 422q0 42.923-15.116 84.615-15.115 41.692-53.154 92.269-38.038 50.577-102.884 115.423T524.153 869.384L480 909.075ZM480 828q96-86.385 158-148.077 62-61.692 98-107.192 36-45.5 50-80.808 14-35.308 14-69.923 0-60-40-100t-100-40q-47.385 0-87.577 26.885-40.192 26.884-63.654 74.808h-57.538q-23.846-48.308-63.846-75.001Q347.385 282 300 282q-59.615 0-99.808 40Q160 362 160 422q0 34.615 14 69.923t50 80.808q36 45.5 98 107T480 828Zm0-273Z" />
      </svg>
      <svg
        fill="#ff4d6d"
        className={classNames('filledHeart', { Heart_Opacity: liked })}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
      >
        <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Z" />
      </svg>
    </button>
  );
};
