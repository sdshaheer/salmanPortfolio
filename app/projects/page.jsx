import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "../components/homepage/projects/project-card";

async function page() {

    return (
        <div id='projects' className="relative z-50  my-12 lg:my-24">
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        All Projects
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projectsData.map((project, index) => (
                        <div
                            id={`sticky-card-${index + 1}`}
                            key={index}
                            className="w-full mx-auto max-w-2xl "
                        >
                            <div className="box-border flex items-stretch justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] h-full">
                                <ProjectCard project={project} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default page;