const SectionWrapper = ({ id, className, children }) => {
  return (
    <>
      <section id={id} className="max-w-[1100px] my-0 mx-auto">
        {children}
      </section>
    </>
  );
};

export default SectionWrapper;
