import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../../services";
import * as S from "./styled";

export const Slides = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <S.Container>
      <AnimatePresence mode="wait">
        <S.SlideWrapper
          as={motion.div}
          key={slides[current].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <S.Image src={slides[current].image} alt={slides[current].title} />
          <S.Overlay>
            <S.Title>{slides[current].title}</S.Title>
            <S.Description>{slides[current].description}</S.Description>
          </S.Overlay>
        </S.SlideWrapper>
      </AnimatePresence>

      <S.NavButton left onClick={prevSlide}>
        <ChevronLeft size={22} />
      </S.NavButton>

      <S.NavButton right onClick={nextSlide}>
        <ChevronRight size={22} />
      </S.NavButton>

      <S.Indicators>
        {slides.map((_, index) => (
          <S.IndicatorDot
            key={index}
            active={index === current}
            onClick={() => setCurrent(index)}
          />
        ))}
      </S.Indicators>
    </S.Container>
  );
};
