const Header = ({ title, desc }) => {
  return (
    <div className="pb-5 border-b border-gray-200">
      <h3 className="text-3xl leading-6 font-medium text-gray-900">{title}</h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">{desc}</p>
    </div>
  );
};

export default Header;
