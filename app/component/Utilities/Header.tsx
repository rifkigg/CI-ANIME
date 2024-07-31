import Link from "next/link";

const Header = ({ HeaderTitle, HeaderLink, HeaderUrl }: any) => {
  return (
    <div className="flex justify-between mx-2 mt-5 text-md font-medium">
      <p className="text-primary">{HeaderTitle}</p>
      {HeaderLink && HeaderUrl ? (
        <Link href={HeaderUrl} className="text-primary hover:text-accent">{HeaderLink}</Link>
      ) : null}
    </div>
  );
};

export default Header;
