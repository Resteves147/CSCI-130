const projects = [
    {
        title:"TuneShare",
        description:"Social media app to share music to peers",
        link:"#"
    },
    {
        title:"Finance App",
        description:"app that allows user to track finances",
        link:"#"
    }
];

function listProjects(projects){
    projects.forEach(project => {
        console.log(`${project.title}`)
        console.log(`${project.description}`);
        console.log(`${project.link}`);
    });
}

document.getElementById("show-projects").addEventListener("click", () => {
  listProjects(projects); });