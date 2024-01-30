import React from 'react';

type ProjectMembersProps = React.ComponentProps<'section'> & {
	teamMembers: SRCC_Project['teamMembers'];
};

const ProjectMembers: React.FC<ProjectMembersProps> = ({ teamMembers }) => {
	return <section className='mt-4'></section>;
};

export default ProjectMembers;
