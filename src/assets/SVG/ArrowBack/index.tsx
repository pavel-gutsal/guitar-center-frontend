import './styles.css';

interface Props {
  onClick: () => void;
}

export const ArrowBack = ({ onClick }: Props) => {
  return (
    <button type="button" className="ArrowBack__SVG--button" onClick={onClick}>
      <div className="ArrowBack__SVG">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </div>
    </button>
  );
};
