import './BlockLinkItem.styles.css';

interface Props {
  onClick: () => void;
}

export const BlockLinkPhones = ({ onClick }: Props) => {
  return (
    <button type="button" className="BlockLinkItem" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 96 960 960"
        width="24"
      >
        <path d="M292.309 995.999q-30.308 0-51.308-21t-21-51.308V228.309q0-30.308 21-51.308t51.308-21h375.382q30.308 0 51.308 21t21 51.308v695.382q0 30.308-21 51.308t-51.308 21H292.309Zm-12.309-110v37.692q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h375.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-37.692H280Zm0-59.998h400V325.999H280v500.002Zm0-560h400v-37.692q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H292.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v37.692Zm0 0V216v50.001Zm0 619.998V936v-50.001Z" />
      </svg>
      Phones
    </button>
  );
};
