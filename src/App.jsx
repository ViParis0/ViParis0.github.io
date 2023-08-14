import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';
import Header from './components/Header';
import eu from './eu3x4.png';
import { aboutPt1, aboutPt2, aboutPt3 } from './helpers/aboutText';
import projetos from './helpers/projects';

// teste

function App() {
  const [projects, setProjects] = useState([]);
  const [currProject, setCurrProjects] = useState(0);

  useEffect(() => {
    setProjects(projetos);
  }, []);

  useEffect(() => {
    if (currProject < 0) {
      setCurrProjects(0);
    }
    if (currProject > projetos.length - 1) {
      setCurrProjects(projetos.length - 1);
    }
  }, [currProject]);

  return (
    <div className="bg-neutral-900 md:w-1/2 md:m-auto">
      <Header />
      <h1 className="text-white text-center text-3xl mt-10" id="home">Marcus Vinicius G Paris</h1>
      <div className="flex space-x-3 items-center justify-center m-10">
        <p className="bg-cyan-950 w-1/8 text-center object-center text-white p-2 rounded-lg">Sou um Desenvolvedor Web Fullstack</p>
        <img className="w-36 h-38 rounded-lg shadow-md shadow-white" src={eu} alt="minha foto sorrindo" />
      </div>
      <h2 className="text-white text-center text-3xl mt-10">Sobre: </h2>
      <div
        className="flex flex-col text-center
       object-center text-white bg-neutral-800 rounded-lg m-4 shadow-lg shadow-black p-2"
      >
        <span>
          {aboutPt1}
        </span>
        <span>
          {aboutPt2}
        </span>
        <span>
          {aboutPt3}
        </span>
      </div>
      <h2 className="text-white text-center text-3xl mt-10">Projetos:</h2>
      {projects[currProject] ? (
        // className="flex flex-nowrap justify-between items-center"
        <div className="flex flex-nowrap justify-between items-center" id="projects">
          <Button onClick={() => setCurrProjects(currProject - 1)}>
            <KeyboardDoubleArrowLeftIcon className="text-white" />
          </Button>
          <div className="text-white text-center text-3xl mt-10
             flex flex-col items-center justify-center"
          >
            <h2 className="m-2">{projects[currProject].nome}</h2>
            <img
              className="w-38 h-36 object-center"
              src={projects[currProject].img}
              alt="Exemplo do Projeto"
            />
            <p className="text-lg p-4">{projects[currProject].descricao}</p>
            <Link
              className="text-lg text-blue-500"
              to={projects[currProject].link}
            >
              Link:
              {' '}
              {projects[currProject].link}
            </Link>
          </div>
          <Button onClick={() => setCurrProjects(currProject + 1)}>
            <KeyboardDoubleArrowRightIcon className="text-white" />
          </Button>
        </div>
      ) : (
        <span className="text-white text-center text-3xl mt-10">Loading...</span>
      )}
      <h2 className="text-white text-center text-3xl mt-10" id="contact">Contatos: </h2>
      <div className="text-white text-lg flex justify-between">
        <Link to="https://www.linkedin.com/in/marcus-vinicius-paris/">
          Linkedin:
          <LinkedInIcon className="ml-4" />
        </Link>
        <Link to="https://github.com/ViParis0">
          GitHub:
          <GitHubIcon className="ml-4" />
        </Link>
        <a href="mailto:xxvi.paris@gmail.com">
          Gmail:
          <EmailIcon className="ml-4" />
        </a>
      </div>
    </div>
  );
}

export default App;
