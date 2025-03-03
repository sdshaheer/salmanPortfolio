import * as React from 'react';
import ImageSlider from './image-slider';
import Link from 'next/link';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full h-full flex flex-col justify-between">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div>
        {/* {project?.images.length > 0 && (
          <ImageSlider images={project.images} />
        )} */}
      </div>
      <div className='flex-grow'>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>


            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Description:</span>
              <span className="text-cyan-400">{' ' + project.description}</span>
              <span className="text-gray-400"></span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Roles and Responsibilities : </span>
              <span className="text-gray-400">{`[`}</span>
              <div>
                {project?.responsibilities?.map((responsibility, index) => {
                  return <li key={index}><span className="text-cyan-400">{responsibility}</span></li>
                })}
              </div>
              <div>
                <span className="text-gray-400">{`]`}</span>
              </div>
              <span className="text-gray-400"></span>
            </div>
            <div>
              <span className="text-gray-400">{`};`}</span>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


