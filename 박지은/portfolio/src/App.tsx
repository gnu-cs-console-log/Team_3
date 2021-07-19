import "./styles.css";
import Footer from "./Footer";
import Nav from "./Nav";
import Profile from "./Profile";
import { data } from "./data.json";
import Portfolio from "./Portfolio";
import About from "./About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <body>
        <div className="container bg-news">
          <Nav></Nav>
          <Switch>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="/">
              {data.students.map((student) => (
                <Profile key={student.id} {...student} />
              ))}
            </Route>
            <Route path="/portfolio">
              <aside>
                <h6 className="title">Web Projects</h6>
                <div className="project_box">
                  {data.projects.map((project) => (
                    <Portfolio key={project.id} {...project} />
                  ))}
                </div>
                <h6 className="title">Mobile Projects</h6>
                <div className="project_box">
                  {data.projects.map((project) => (
                    <Portfolio key={project.id} {...project} />
                  ))}
                </div>
                <h6 className="title">ETC</h6>
                <div className="project_box">
                  {data.projects.map((project) => (
                    <Portfolio key={project.id} {...project} />
                  ))}
                </div>
              </aside>
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </body>
    </BrowserRouter>
  );
}
