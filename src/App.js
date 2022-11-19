
//import './App.css';
import logo from './template/assets/img/raul.jpg';
import './template/css/styles_proyect_raul.css';

function App() {
  return (
    <body id="page-top">
        {/*<!-- Navigation-->*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Raul Alejandro Carmona Cuellar</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={logo} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Perfil Profesional</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experiencia</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Educacion</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Habilidades</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Certificaciones</a></li>
                </ul>
            </div>
        </nav>
        {/*<!-- Page Content-->*/}
        <div className="container-fluid p-0"/>
            {/*<!-- About-->*/}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Raul Alejandro
                        <span className="text-primary">Carmona Cuellar</span>
                    </h1>
                    <br/>
                    <div className="subheading mb-5">
                        <b>Dirección:</b> Calle 52 # 19B - 42 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Ciudad:</b> Manizales &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Fecha de Nacimiento:</b> 1999-11-09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Lugar de Nacimiento:</b> Manizales
                        <br/><b>Estado Civil:</b> Soltero &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Telefono:</b> +57 3122378753 – 8911689 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Correo:</b> <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">ralejo099@gmail.com</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;· &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Cedula:</b> 1053873317
                    </div>
                    <p className="lead mb-5">Soy una persona con muchas cualidades y valores, con ánimo de aprender sobre cómo solucionar problemas de software, manejo de bases de datos y aprender otros idiomas de programación. Aun estudiante aprendiendo de mi formación y esperando conseguir un empleo que me ayude a crecer en el área de sistemas, ofrezco compromiso y honestidad en todo lo que hago.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/raul-alejandro-carmona-cuellar-b258b1212/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/racarmona89947"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://gitlab.com/racarmona89947"><i className="fab fa-gitlab"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/raulalejandro.carmonacuellar"><i className="fab fa-facebook-f"></i></a>
                        <a className="social-icon" href="https://www.instagram.com/ralejo09/"><i className="fab fa-instagram"></i></a>
                        <a className="social-icon" href="https://wa.me/+573122378753/"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/*<!-- Experience-->*/}
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">EXPERIENCIA</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Almacenista con labores en telecomunicaciones</h3>
                            <div className="subheading mb-3">practicante SENA</div>
                            <p>Servicio nacional de aprendizaje sena, manizales</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2019-10 - 2020-04</span></div>
                    </div>
                    
                </div>
            </section>
            <hr className="m-0" />
            {/*<!-- Education-->*/}
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Educación</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Universidad de Manizales</h3>
                            <div>Ingeniería de sistemas y telecomunicaciones</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Cursando</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Sena</h3>
                            <div>Tecnólogo en Diseño, Implementacion y Mantenimineto de Sistemas de Telecomunicaciones</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2018 - 2020</span></div>
                    </div>
                    <br/> <br/><br/><br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <h2>Cursos complementarios</h2>
                    </div>
                    <br/>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">SENA</h3>
                            <div>CCNA R&S Routing and Switching Essentials</div>
                            <div>CCNA R&S Introduction to Networks</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2019</span></div>   
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">MINTIC - Universidad de Caldas</h3>
                            <div>Habilidades en programación con énfasis en aplicaciones web Misión TIC</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2021</span></div>   
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">

                            <h3 className="mb-0">PLATZI</h3>
                            <div>Curso Básico de MongoDB</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2022</span></div>   
                    </div>
                    
                </div>
            </section>
            <hr className="m-0" />
            {/*<!-- Skills-->*/}
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Habilidades</h2>
                    <div className="subheading mb-3">Lenguajes y herramientas</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-cc-mastercard"></i></li>
                        <li className="list-inline-item"><i className="fab fab fa-discord"></i></li>
                        <li className="list-inline-item"><i className="fab fa-git"></i></li>
                        <li className="list-inline-item"><i className="fab fa-java"></i></li>
                        <li className="list-inline-item"><i className="fab fa-python"></i></li>
                        <li className="list-inline-item"><i className="fab fa-steam"></i></li>

                        
                    </ul>
                    <div className="subheading mb-3">Flujo de trabajo</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Desarrollo de software
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Desarrollo web
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Seguridad informatica
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Analista de datos
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
           {/*} <!-- Awards-->*/}
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Premios</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Noche de honor semenor
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            TICS-TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIÓN
                        </li>
                        <br/>

                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            FERIA TECNOLÓGICA CENTRO DE AUTOMATIZACIÓN INDUSTRIAL CAI 2018
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            COMPRENSION LECTOESCRITURAL DE TEXTOS EN INGLES
                        </li>
                        <br/>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            ENCUENTRO LOCAL DE SEMILLEROS DE INVESTIGACIÓN FERIA TECNOLOGICA
                        </li>
                    </ul>
                </div>
            </section>
        {/*<!-- Bootstrap core JS-->*/}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/*<!-- Core theme JS-->*/}
        <script src="js/scripts.js"></script>
    </body>
  );
}

export default App;
