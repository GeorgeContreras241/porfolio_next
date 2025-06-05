export const EducationCard = ({ item }) => {
  return (
    <article className="flex items-center grow-1 lg:w-[48%] gap-4 border border-[#00A3CC]/40 px-4 py-2 rounded-2xl 
    backdrop-blur-lg  hover:scale-[1.01] hover:border-[#0cbbf5] transition-transform duration-300">
      <img src={item.logo} alt={item.alt} className={item.logoClass} />
      <div>
        <span className="font-semibold text-[.8rem] md:text-[1.1rem] text-white">
          {item.title}
        </span>
        <p className="text-[.7rem] lg:text-[.8rem] text-gray-300">
          {item.description}
        </p>
      </div>
    </article>
  );
};
