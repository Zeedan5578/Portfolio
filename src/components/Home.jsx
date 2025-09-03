import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.png";
import FloatingShape from "./FloatingShape";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";

const quotes = [
  "The journey of a thousand miles begins with a single step.",
  "The mind is everything. What you think you become.",
  "Do not spoil what you have by desiring what you have not.",
  "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
  "You are the only person on Earth who can use your ability.",
  "Those who cannot acknowledge their true self will eventually fail.",
  "If you don't take risks, you can't create a future",
  "Whether you win or lose, you can always come out ahead by learning from the experience.",
  "We are disturbed not by things, but by the views which we take of them.",
  "Not every Sunday is a picnic cause the sky ain't always blue.",
];

function Home() {
  const { isDark } = useTheme();

  const [quoteIndex, setQuoteIndex] = useState(0);
  const handleNextQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-br  from-zinc-900 via-black to-gray-800"
          : "bg-gradient-to-br  from-zinc-300 via-white to-gray-400"
      } flex items-center justify-center relative overflow-hidden`}
    >
      <FloatingShape
        color="bg-blue-500"
        size="w-64 h-64"
        top="-15%"
        left="70%"
        delay={1}
      />
      <FloatingShape
        color="bg-blue-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={2}
      />
      <FloatingShape
        color="bg-blue-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={3}
      />
      <FloatingShape
        color="bg-blue-500"
        size="w-32 h-32"
        top="70%"
        left="10%"
        delay={4}
      />
      <div className="flex justify-between items-center flex-col gap-5">
        <div className="min-h-fit w-full flex flex-col-reverse md:flex-row items-center justify-center px-4 py-10 md:py-16 md:px-10 lg:px-20 gap-3 max-h-6">
        <div
          className={`flex-2 w-auto ${
            isDark ? "text-white" : "text-black"
          } space-y-4 flex flex-col justify-center items-center md:items-start`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Zeedan Mohsin
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-medium">
            <Typewriter
              words={[
                "Engineer Graduate",
                "Full Stack Web Developer",
                "Java Programmer",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>

          <div className="flex items-center">
            <p
              className={`${
                isDark ? "text-white/90" : "text-black/90"
              } center md:text-xl leading-relaxed max-w-xl`}
            >
              Just another enthusiastic learner and an aspiring software
              developer with proficiency in web development.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button className="bg-blue-700 text-white hover:bg-blue-900 cursor-pointer px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-500 underline-none" onClick={()=>{ window.open('https://drive.google.com/file/d/19KXyPihOHbZ8fmceANK_AVgsqq6IXA-L/view?usp=sharing','_blank')}}>
              View Resume
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-auto md:w-1/2 flex justify-center flex-2">
          <img
            src={profile}
            alt="Profile"
            className={`w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-full shadow-xl border-4 ${
              isDark ? "border-white" : "border-black"
            }`}
          />
        </div>
      </div>

        <div className=" flex flex-col justify-center items-center">
            <button onClick={handleNextQuote} className={`m-3 p-2.5 hover:scale-105 transition-all duration-300 rounded-xl font-semibold ${isDark?'bg-slate-200 text-black':'bg-zinc-800 text-white'}`}>Eureka!</button>
            <motion.span  key={quoteIndex} initial={{ x: "-100vw", opacity: 0 }}animate={{ x: 0, opacity: 1 }}exit={{ x: "100vw", opacity: 0 }}transition={{ duration: 1, ease: "easeInOut" }}className={`${isDark?'text-white':'text-black'} font-semibold text-center`}>
              {`“${quotes[quoteIndex]}”`}
            </motion.span>
          </div>
      </div>
        
    </div>
  );
}

export default Home;
