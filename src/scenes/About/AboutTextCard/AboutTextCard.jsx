import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
      <span className={s.pink}>
          The year 2010 I remember my dad coming home with a DELL
          laptop.....{' '}
        </span>
        Ever since then I've loved technology. I was in a AP Computer
        Science class in highschool and fell in love with coding. I
        never got to finsish because I dropped out of high school to
        help my dad take care of my 2 little sisters. 👨‍👧‍👧
        <br /> <br />
        Eventually, I went back to school and graduated but never finished my computer science course. I then went to college to pursue a computer science degree and sadly I had to withdraw due to my boyfriend of 2 years passing away. It was a difficult time in my life and I gave myself a full year to recover. {' '} 
        <span className={s.pink}>
        I promised myself I would go back to school in Fall 2021. 👩🏻‍💻{' '}
        </span>
        <br /> <br />
        In the year of me trying to recover I had a lot of opportunies come into my life. I ended up applying at Per Scholas to get into their software engineering program but then I deployed to Morocco 🇲🇦 for an exercise with the National Guard. I dont regret going because it was a blessing, experiencing another culture. It made me realize how much freedom I take for granted in the United States. After I came back home I applied to this Full Stack Developer apprenticeship and wasn't chosen. I remember being very discouraged but I had to keep my promise. I had to go to school Fall 2021. 💻
        <br /> <br />
        With a lot of praying and asking for guidance I found General Assembly! 🙏🏻 I went through the whole process and boom I got into the Software Engineering Immersive Program. Ever since then I've been coding 60-80 hours a week! I love it so much. It's shocking that I would cry the first 2 weeks of school due to how much knowledge I was learning at a a fast pace. Fast forward a few ,months later I am now able to teach myself a new language or understand code. I love this industry, there is help everywhere and I feel at home. I'm proud to say that things happen for a reason and I am now part of the Tech Industry.
        <br /> <br />
        Now you know something about me and if you made it this far thank you... In conclusion, I consider myself a passionate Full Stack Software Developer 🚀 
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