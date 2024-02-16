// Dependencies
import React from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

type ProjectGalleryProps = React.ComponentProps<"section"> & {
	imageGallery: SRCC_Project["imageGallery"];
};

/**
 * Renders a project gallery.
 * @param {ProjectGalleryProps} props - The props for the ProjectGallery component.
 * @param {SRCC_Project['imageGallery']} props.imageGallery - The gallery of the project.
 * @returns {JSX.Element} The rendered ProjectGallery component.
 */
const ProjectGallery: React.FC<ProjectGalleryProps> = ({ imageGallery }) => {
	return (
		<section className="mt-8">
			<h3 className="text-lg lg:text-2xl font-medium flex items-center">
				<ImageIcon className="mr-2" strokeWidth={1.5} /> Gallery
			</h3>
			<ul className="columns-2 lg:columns-3 md:gap-4 gap-2 [&>li:not(:first-child)]:mt-4 mt-4">
				{imageGallery?.map((image, idx) => (
					<li
						key={`image-${idx}`}
						className="block rounded-lg overflow-hidden border shadow-sm"
					>
						<Image
							src={urlForImage(image.image)}
							alt={image.image.alt}
							width={100}
							height={100}
							className="w-full h-auto object-cover"
							unoptimized
						/>
						<p className="w-full p-4 text-center text-black font-semibold text-sm md:text-base">
							{/* <p className='w-full absolute bottom-0 p-4 text-center text-white bg-gradient-to-b from-transparent to-black/90 font-semibold text-sm md:text-base pt-16'> */}
							{image.caption.slice(0, 64) +
								`${image.caption.length > 64 ? "..." : ""}`}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProjectGallery;
