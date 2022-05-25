import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiJqueryLogo,
  DiNodejs,
  DiReact,
  DiCss3,
  DiSass,
  DiMongodb,
  DiGit,
  DiHeroku
} from 'react-icons/di';
import {
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiTypescript,
  SiContentful,
  SiNetlify,
  SiVercel
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 /> 
      </li>
      <li className={s.techIcon}>
        <DiJqueryLogo /> 
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact /> 
      </li>
      <li className={s.techIcon}>
        <DiCss3 /> 
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiHeroku />
      </li>
      <li className={s.techIcon}>
        <SiHtml5 />
      </li>
      <li className={s.techIcon}>
        <SiPostgresql />
      </li>
      <li className={s.techIcon}>
        <SiPython />
      </li>
      <li className={s.techIcon}>
        <SiTypescript /> 
      </li>
      <li className={s.techIcon}>
        <SiContentful />
      </li>
      <li className={s.techIcon}>
        <SiNetlify />
      </li>
      <li className={s.techIcon}>
        <SiVercel />
      </li>

    </ul>
  );
};

export default TechSkills;
