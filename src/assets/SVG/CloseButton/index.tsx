import './CloseButton.styles.css';

interface Props {
  onClick: () => void | Promise<void>;
}

export const CloseButton = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className="Modal__CloseButton">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        viewBox="0 96 960 960"
        width="40"
        fill="grey"
      >
        <path d="m253.897 826.205-24.102-24.102L455.897 576 229.795 349.897l24.102-24.102L480 551.897l226.103-226.102 24.102 24.102L504.103 576l226.102 226.103-24.102 24.102L480 600.103 253.897 826.205Z" />
      </svg>
    </button>
  );
};
