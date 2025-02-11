import { projects } from "../data/constants";

const getProject = (id) => {
  return projects[id];
};

export default getProject;
