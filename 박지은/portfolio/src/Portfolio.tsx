import "./styles.css";
interface project {
  project_name: String;
  project_intro: String;
}

export default function Portfolio(props: project) {
  return (
    <div className="project_container">
      <img src="" alt="" />
      <h6>{props.project_name}</h6>
      <p>{props.project_intro}</p>
    </div>
  );
}
