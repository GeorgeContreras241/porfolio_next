export const DownloadCv = () => {
  return (
    <a
      className="flex flex-row items-center w-50 gap-2 border border-[#8FE3FF] rounded-[10px] px-4 py-2 font-semibold hover:bg-gray-700/50 hover:[#8FE3FF] transition neon-celeste"
      href="./CV.pdf"
      target="_blank"
      rel="noreferrer"
      title="Descargar CV"
      download
    >
      <img
        src="./cv.svg"
        alt="Descargar hoja de vida"
        className="w-11 h-11 hover:scale-110 transition"
      />
      <span>Descargar CV</span>
    </a>
  );
};
