'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { type SimpleIcon } from 'simple-icons';

// Import specific icons we need
import {
  siHtml5,
  siCss3,
  siJavascript,
  siTypescript,
  siPython,
  siReact,
  siNodedotjs,
  siExpress,
  siFlask,
  siNextdotjs,
  siPostgresql,
  siMongodb,
  siMysql,
  siAmazonwebservices,
  siGooglecloud,
  siDocker,
  siKubernetes,
  siTerraform,
  siGit,
  siGithub,
  siJenkins,
  siApacheairflow,
  siSplunk,
  siPostman,
  siFigma,
  siTailwindcss,
} from 'simple-icons';

interface TechItem {
  name: string;
  icon: SimpleIcon;
  category: 'language' | 'database' | 'cloud' | 'tool';
}

const techStack: TechItem[] = [
  // Languages & Frameworks
  { name: 'HTML5', icon: siHtml5, category: 'language' },
  { name: 'CSS3', icon: siCss3, category: 'language' },
  { name: 'JavaScript', icon: siJavascript, category: 'language' },
  { name: 'TypeScript', icon: siTypescript, category: 'language' },
  { name: 'Python', icon: siPython, category: 'language' },
  { name: 'React', icon: siReact, category: 'language' },
  { name: 'Node.js', icon: siNodedotjs, category: 'language' },
  { name: 'Express', icon: siExpress, category: 'language' },
  { name: 'Flask', icon: siFlask, category: 'language' },
  { name: 'Next.js', icon: siNextdotjs, category: 'language' },

  // Databases & Cloud
  { name: 'PostgreSQL', icon: siPostgresql, category: 'database' },
  { name: 'MongoDB', icon: siMongodb, category: 'database' },
  { name: 'MySQL', icon: siMysql, category: 'database' },
  { name: 'AWS', icon: siAmazonwebservices, category: 'cloud' },
  { name: 'GCP', icon: siGooglecloud, category: 'cloud' },
  { name: 'Docker', icon: siDocker, category: 'cloud' },
  { name: 'Kubernetes', icon: siKubernetes, category: 'cloud' },
  { name: 'Terraform', icon: siTerraform, category: 'cloud' },

  // Tools & DevOps
  { name: 'Git', icon: siGit, category: 'tool' },
  { name: 'GitHub', icon: siGithub, category: 'tool' },
  { name: 'Jenkins', icon: siJenkins, category: 'tool' },
  { name: 'Apache Airflow', icon: siApacheairflow, category: 'tool' },
  { name: 'Splunk', icon: siSplunk, category: 'tool' },
  { name: 'Postman', icon: siPostman, category: 'tool' },
  { name: 'Figma', icon: siFigma, category: 'tool' },
  { name: 'Tailwind CSS', icon: siTailwindcss, category: 'tool' },
];

const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(scrollRef);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (isInView && !isHovered && !isDragging) {
      controls.start({
        x: [0, -1920],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls, isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  const renderIcon = (icon: SimpleIcon) => {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} />
      </svg>
    );
  };

  // Create three sets of tech stack for smooth infinite scrolling
  const tripleStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-emerald-800 text-center mb-8">
          Tech Stack
        </h2>
        <div 
          ref={containerRef}
          className="relative w-full overflow-x-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
        >
          <motion.div
            ref={scrollRef}
            className="flex gap-12 items-center px-6"
            animate={controls}
            style={{ width: "fit-content" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
          >
            {tripleStack.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center gap-2 min-w-[100px]"
              >
                <div 
                  className="w-12 h-12 relative flex items-center justify-center"
                  style={{ color: `#${tech.icon.hex}` }}
                >
                  {renderIcon(tech.icon)}
                </div>
                <span className="text-sm text-emerald-800 text-center whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 