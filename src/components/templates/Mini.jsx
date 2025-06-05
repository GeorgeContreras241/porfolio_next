"use client";
import { Animation } from "@/components/organisms/Animation";
import { shortProjects } from "@/const/const.js";
import { Link } from "@/components/atoms/Link.jsx";
import { List } from "@/components/atoms/List.jsx";

export const Mini = () => {
  return (
    <section className="relative z-[9999] flex flex-col gap-6 items-center px-4 py-10 max-w-[1200px] w-[95%] mx-auto">
      <Animation>
        <h5 className="w-full text-[#0cbbf5] font-extrabold text-2xl sm:text-3xl mb-4 tracking-wide text-center">
          Proyectos Cortos
        </h5>
      </Animation>

      <Animation>
        <div className="w-full flex flex-col gap-4">
          {shortProjects.map((pro) => (
            <details
              key={pro.id}
              className="group border border-[#0cbbf5]/40 rounded-xl px-5 py-4 bg-gradient-to-br from-[#0a0f2c]/60 via-[#113452]/40 to-[#37045a]/20 backdrop-blur-md shadow-[0_0_12px_#0cbbf555] transition-all duration-300"
            >
              <summary className="text-[#8FE3FF] font-semibold text-lg cursor-pointer flex items-center justify-between">
                {pro.title}
                <span className="transition-transform group-open:rotate-90 ml-2 text-[#0cbbf5]">
                  ⮞
                </span>
              </summary>

              <article className="mt-4 text-sm sm:text-base text-[#d8f3ff] space-y-4">
                <p>{pro.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {pro.technologies.map((tech, index) => (
                    <List key={index} data={tech} />
                  ))}
                </ul>

                <div className="flex justify-end gap-3">
                  <Link data={pro.url} text="Visitar" />
                  <Link data={pro.github} text="Repositorio" />
                </div>
              </article>
            </details>
          ))}
        </div>
      </Animation>
    </section>
  );
};
