const Transformation = () => {
  return (
    <div
      className=" w-9/12 lg:pt-40 pt-24 flex flex-col gap-12 items-center mx-auto"
      id="digital-transformation"
    >
      <h2 className=" lg:text-[2.8rem] text-[2.3rem] font-bold lg:text-start text-center">
        We Believe in Digital Transformation
      </h2>

      <div className=" flex lg:flex-row flex-col gap-6 items-start mx-auto">
        <h3 className=" lg:text-[1.5rem] text-[1.5rem] lg:text-start text-center text-gray-800 font-[500]">
          Because transformation helps recruiters enhance their reach and
          credibility in the ever-evolving digital era.
        </h3>
        {/* Right Container */}
        <div className=" flex flex-col gap-8 leading-7">
          <p>
            With our excellence in innovation, automation, and digitalization,
            we help companies in bringing the best possible talent into their
            team. While on our mission to build long-term relationships and
            focus on data-driven solutions, we maintain the highest standards of
            quality and integrity.
          </p>
          <p>
            At Vertex Buddy, we are guided by our core values toward sustainable
            growth and have helped local and international businesses of all
            sizes across industries maximize revenue through our creative
            strategies.
          </p>
        </div>
      </div>
      {/* <h2 className=" text-[2.8rem] font-bold">
          A Leading Digital Marketing Solutions Provider
        </h2> */}
    </div>
  );
};

export default Transformation;
