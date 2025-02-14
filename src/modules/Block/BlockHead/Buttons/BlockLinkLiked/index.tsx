import '../BlockLinkPhones';
import './BlockLinkLiked.styles.css';

interface Props {
  onClick: () => void;
}

export const BlockLinkLiked = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className="BlockLinkItem BlockLinkLaptopButton"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path d="m12 20.325-1.1-1q-2.5-2.25-4.125-3.875T4.2 12.562q-.95-1.262-1.325-2.3Q2.5 9.225 2.5 8.15q0-2.125 1.438-3.563Q5.375 3.15 7.5 3.15q1.3 0 2.475.612Q11.15 4.375 12 5.525q.85-1.15 2.025-1.763Q15.2 3.15 16.5 3.15q2.125 0 3.562 1.437Q21.5 6.025 21.5 8.15q0 1.075-.375 2.112-.375 1.038-1.325 2.3-.95 1.263-2.575 2.888-1.625 1.625-4.125 3.875Zm0-2.025q2.4-2.15 3.95-3.7 1.55-1.55 2.45-2.688.9-1.137 1.25-2.012T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.188.675Q13.3 6 12.725 7.2h-1.45q-.6-1.225-1.6-1.888-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.75t1.25 2.012q.9 1.138 2.45 2.675Q9.6 16.125 12 18.3Zm0-6.825Z" />
      </svg>
      liked
    </button>
  );
};
