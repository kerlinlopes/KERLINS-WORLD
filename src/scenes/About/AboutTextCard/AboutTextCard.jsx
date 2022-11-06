import s from './AboutTextCard.module.scss';
//import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
      <span className={s.pink}>
      A little about me ...{' '}
        </span>
        <br /> <br />
        I attended a coding bootcamp in September of 2021 and I became a Software Engineer.{' '}
        <br /> <br /> 
        <span className={s.pink}>
        My hobbies now include making mecha headsets 🎧, collecting keyboards ⌨️, learning JAVA 👩🏻‍💻, learning some Korean 🇰🇷, going to the park 🌳 and going to the gym🏋🏻‍♀️!!! {' '}
        </span>
        <br /> <br />
        Currently I'm just working and studying hard because my dream is to work for Amazon in possibily 2 years. I also see myself studying in South Korean to pursue a degree in Computer Science maybe in fall of 2024.
        <br /> <br />
        My favorite color is gold, I love a lot of things that are related to a cyber aesthetic, I'm in the National Guard, I'm latina and I come from Salvadoran parents. 
        <br /> <br />
        Now you know a little something about me 🚀 
      </p>


      <p
        style={{
          color: '#ff3838',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        “Reciban de mi siempre mucho paz, pero sobre todo mucho mucho mucho amor.”{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;