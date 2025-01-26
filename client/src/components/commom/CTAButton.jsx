const CTAButton = ({ title }) => {
  return (
    <button className="bg-primary-violet text-white px-6 py-2 text-[1.2rem] w-full rounded-lg hover:bg-transparent hover:text-primary-violet border-solid border-[1px] border-primary-violet transition-colors">
      {title}
    </button>
  );
};

export default CTAButton;
