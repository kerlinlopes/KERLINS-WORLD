import s from './IntroSection.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME<span className={s.name}> INTRODUCE </span> MYSELF
          </h1>

          <div className={s.description}>
            <p>
              Hey! I'm Kerlin pronounced (KUR-lin). I always had a
              desire to code and I never stop learning ... 🧠
            </p>

            <p>
              I like to create
              <i>
                <b className={s.bold}>
                  {' '}
                  Web Technologies and Applications{' '}
                </b>
              </i>
              from the ground up. Either backend or frontend.
            </p>

            <p>
              I have experience in building{' '}
              <i>
                <b className={s.bold}>Web and Mobile</b>
              </i>{' '}
              with
              <br />
              <i>
                <b className={s.bold}>
                  HTML, CSS, JavaScript, React, Nodejs,
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.bold}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/kerlinlopes/kerlinlopes"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/kerlinlopes/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
