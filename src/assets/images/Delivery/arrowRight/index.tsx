import classNames from 'classnames';
import '../DeliveryButtonLeft/styles.css';

interface Props {
  onClick: () => void;
  disabled: boolean;
}

export const DeliveryButtonRight = ({ onClick, disabled }: Props) => {
  return (
    <button
      className={classNames('ButtonLeft__Delivery', {
        'ButtonLeft__Delivery--disabled': disabled,
      })}
      type="button"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
      >
        <path d="m376 816-56-56 184-184-184-184 56-56 240 240-240 240Z" />
      </svg>
    </button>
  );
};
