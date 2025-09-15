import { RiCloseFill } from "react-icons/ri";
import styles from './CloseButton.module.css';

interface CloseButtonProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export default function CloseButton({ onClick, className = "" }: CloseButtonProps) {
  return (
    <div className={`${styles['close-btn']}`} onClick={onClick} title="close">
      <RiCloseFill />
    </div>
  );
}
