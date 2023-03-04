import classNames from 'classnames';
import './styles.css';

interface Props {
  onClick: () => void;
  disabled: boolean;
}

export const DeliveryButtonLeft = ({ onClick, disabled }: Props) => {
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
        <path d="M560 816 320 576l240-240 56 56-184 184 184 184-56 56Z" />
      </svg>
    </button>
  );
};
