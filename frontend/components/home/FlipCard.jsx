const FlipCard = ({ frontText, backText }) => {
  return (
    <>
      <div className="flip-card md:w-[15rem] md:h-[15rem] w-[12.5rem] h-[12.5rem] rounded-xl font-medium">
        <div className="flip-card-inner rounded-xl">
          <div className="flip-card-front rounded-xl text-primary-violet bg-white flex items-center justify-center text-[1.10rem] md:text-[1.5rem] font-bold px-4 py-4">
            <p>{frontText}</p>
          </div>
          <div className=" flex items-center justify-center text-center px-4 py-4 bg-primary-violet text-white rounded-xl transform flip-card-back ">
            {backText}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
