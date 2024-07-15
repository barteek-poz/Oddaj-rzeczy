import Link from "next/link";

const LinkButton = ({ children, href, onBtnClick}) => {
  return (
    <Link href={href} onClick={onBtnClick} >
      {children}
    </Link>
  );
};

export default LinkButton;
