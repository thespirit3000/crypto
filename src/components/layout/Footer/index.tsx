import Menu from "../../Menu";

const footerClass =
  "bg-gray-dark min-h-[64px] text-slate-50 flex justify-center content-center";

const Footer = () => {
  return (
    <div className={footerClass}>
      <Menu />
    </div>
  );
};

export default Footer;
