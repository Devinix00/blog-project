import styles from "./Checkbox.module.scss";

interface IProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ checked, onChange }: IProps): JSX.Element {
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
}

export default Checkbox;
