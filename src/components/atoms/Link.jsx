export const Link = ({ data,text,git }) => {
  return (
    <a
      href={data}
      target="_blank"
      rel="noreferrer"
      className="bg-neutral-800 px-6 py-1 rounded-[8px] overflow-ellipsis hover:cursor-pointer"
      disabled={git}
    >
      {text}
    </a>
  );
}
