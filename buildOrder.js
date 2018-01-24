class Project {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addDependency(childProject) {
    this.children.push(childProject);
  }
}

const getBuildOrder = function(rootProject) {
  const buildOrder = [rootProject];
  const result = [];
  const visitedProjects = new Map();
  let currentPosition = 0;

  while (buildOrder[currentPosition]) {
    const currentProject = buildOrder[currentPosition];
    if (currentProject) {
      if (currentProject.children.length !== 0) {
        for (let i = 0; i < currentProject.children.length; i += 1) {
          buildOrder.push(currentProject.children[i]);
        }
      }
      currentPosition += 1;
    }
  }
  
  for (let i = buildOrder.length - 1; i >= 0; i -= 1) {
    if (!visitedProjects.has(buildOrder[i])) {
      visitedProjects.set(buildOrder[i], true);
      result.push(buildOrder[i]);
    }
  }

  return result;
}

const a = new Project(1);
const b = new Project(2);
const c = new Project(3);
const d = new Project(4);
const e = new Project(5);
const f = new Project(6);

d.addDependency(a);
b.addDependency(f);
d.addDependency(b);
a.addDependency(f);
c.addDependency(d);

getBuildOrder(a);
