// Dependencies
import React from 'react';

type ProjectMembersProps = React.ComponentProps<'section'> & {
	// teamMembers: SRCC_Project['teamMembers'];
};

/**
 * Renders the members of a project.
 * @param {ProjectMembersProps} props - The props for the ProjectMembers component.
 * @param {SRCC_Project['teamMembers']} props.teamMembers - The team members of the project.
 * @returns {JSX.Element} The rendered ProjectMembers component.
 */
const ProjectMembers: React.FC<ProjectMembersProps> = () => {
	return <section className='mt-4'></section>;
};

export default ProjectMembers;
