import React from "react";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, IndianRupee } from "lucide-react";

type ProjectHeaderProps = React.ComponentProps<"section"> & {
	project: SRCC_Project;
};

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
	return (
		<section>
			<h1 className="text-2xl md:text-4xl font-semibold w-full">
				{project.title}
			</h1>
			<h2 className="text-lg md:text-xl mt-2 w-full">
				{project.description}
			</h2>
			<div className="mt-2 flex items-center gap-6 flex-wrap">
				<Badge
					variant="outline"
					className="capitalize lg:text-base font-medium"
				>
					Status : <b className="ml-1">{project.status}</b>
				</Badge>
				{project.duration ? (
					<Badge
						variant="outline"
						className="capitalize lg:text-base font-medium"
					>
						<CalendarClock
							strokeWidth={1.5}
							size={16}
							className="shrink-0 mr-2"
						/>
						<span>
							Duration:{" "}
							<b className="lowercase">
								{project.duration} months
							</b>
						</span>
					</Badge>
				) : null}
				{project.budget ? (
					<Badge
						variant="outline"
						className="capitalize lg:text-base font-medium"
					>
						<IndianRupee
							strokeWidth={1.5}
							size={16}
							className="shrink-0 mr-2"
						/>
						<span>
							Cost:{" "}
							<b className="lowercase">
								{new Intl.NumberFormat("en-IN", {
									style: "currency",
									currency: "INR",
								}).format(project.budget)}
							</b>
						</span>
					</Badge>
				) : null}
			</div>
		</section>
	);
};

export default ProjectHeader;
