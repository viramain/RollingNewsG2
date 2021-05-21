import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-secondary text-light text-center p-3">
      <article className="d-flex justify-content-around align-items-center">
        <div>
          <h6>
            <span className="font-weight-bold">Rolling News</span>
          </h6>
          <div>
            <Link className="text-light" href="#">
              <b>Dirección:</b> Calle 123 -<br></br> S.M. de Tucumán - Tucumán
            </Link>
          </div>
          <div>
            <Link className="text-light" href="#">
              <b>Teléfono:</b> (381)0303456
            </Link>
          </div>
          <div>
            <Link className="text-light" href="#">
              <b>Email:</b> rollingnews@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <h6>
            <span className="font-weight-bold">Soporte</span>
          </h6>
          <div>
            <Link className="text-light" href="#">
              Centro de Ayuda
            </Link>
          </div>
          <div>
            <Link className="text-light" href="#">
              Contacto
            </Link>
          </div>
          <div>
            <Link className="text-light" href="#">
              Redacción
            </Link>
          </div>
        </div>
        <div>
          <h6>
            <span className="font-weight-bold">Legales</span>
          </h6>
          <div>
            <Link className="text-light" href="#">
              Política de Cookies
            </Link>
          </div>
          <div>
            <Link className="text-light" href="#">
              Política de Privacidad
            </Link>
          </div>
          <div>
            <Link className="text-light" href="#">
              Términos y Condiciones
            </Link>
          </div>
        </div>
        <div>
          <h6>
            <span className="font-weight-bold">Instala nuestra app</span>
          </h6>
          <Link>
            <img
              src="/badge-apple-store.svg"
              alt="logo app store"
              className="mb-2"
              href="/error404"
            />
          </Link>
          <br></br>
          <Link>
            <img
              href="/error404"
              src="/google-play-badge-bb.svg"
              alt="logo play store"
            />
          </Link>
        </div>
      </article>
      <hr></hr>
      <article className="d-flex justify-content-between">
        <div>
          <p>&copy; 2021 Team G2. | Todos los derechos reservados.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="lg"></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mx-4"
            icon={faFacebook}
            size="lg"
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter} size="lg"></FontAwesomeIcon>
          <FontAwesomeIcon
            className="ml-4 mr-5"
            icon={faYoutube}
            size="lg"
          ></FontAwesomeIcon>
        </div>
      </article>
    </section>
  );
};

export default Footer;
