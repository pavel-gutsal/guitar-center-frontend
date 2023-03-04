import './BlockHomeButtonIcon.styles.css';

interface Props {
  onClick: () => void;
}

export const BlockHomeButtonIcon = ({ onClick }: Props) => {
  return (
    <button type="button" className="BlockHomeButtonIcon" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
      >
        <path d="M180.001 915.999V545.614l-74.692 57.308-36.076-47.845L180 470.001V355.232H240v68.77l240-183 410.767 314.075-36.076 47.23-74.692-56.693v370.385H180.001ZM240 856h192.307V680.614h95.386V856H720V500L480 317 240 500v356Zm-59.999-544.614q0-43.077 29.038-73.461 29.039-30.384 75.577-30.384 21.615 0 33.115-12.654 11.5-12.654 11.5-31.193h59.999q0 43.077-29.038 73.461t-75.576 30.384q-21.616 0-33.116 12.654T240 311.386h-59.999ZM240 856h480-480Z" />
      </svg>
    </button>
  );
};
