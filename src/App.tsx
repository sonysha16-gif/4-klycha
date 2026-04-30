/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronUp, 
  Heart, 
  Coins, 
  Sprout, 
  Brain, 
  Stethoscope, 
  Scale, 
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

// Shared components/styles
const SectionTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-serif text-center uppercase tracking-widest glow-gold mb-12 ${className}`}>
    {children}
  </h2>
);

const GoldButton = ({ children, href, className = "" }: { children: React.ReactNode, href: string, className?: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212,175,55,0.6)" }}
    whileTap={{ scale: 0.95 }}
    whileInView={{ 
      boxShadow: ["0 0 15px rgba(212,175,55,0.4)", "0 0 40px rgba(212,175,55,0.8)", "0 0 15px rgba(212,175,55,0.4)"],
      scale: [1, 1.05, 1]
    }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ 
      boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }}
    className={`inline-block px-8 py-4 bg-gold-gradient text-black font-bold uppercase tracking-wider rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all ${className}`}
  >
    {children}
  </motion.a>
);

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    console.log('App: Component mounted');
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-gold/30 selection:text-gold-light overflow-x-hidden bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-24 pb-12 md:pb-20 px-4">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://s10.iimage.su/s/30/g3zU5OoxbEy7eH8LmpLLNUUIfjJvBbwpWf3jR66i6.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-[#0a0a0a] z-[1]" />
        
        <div className="relative z-10 max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center px-4 md:px-12">
          
          {/* Left Side Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-1"
          >
            <div className="space-y-4 w-full">
              <p className="text-gold uppercase tracking-[0.6em] font-serif glow-gold text-3xl md:text-5xl lg:text-6xl mb-4 drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]">КВЕСТ</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-serif text-white uppercase tracking-widest glow-gold leading-tight whitespace-nowrap">
                4 КЛЮЧА
              </h1>
              <div className="w-24 h-[2px] bg-gold mx-auto lg:mx-0 shadow-[0_0_15px_rgba(212,175,55,1)]" />
            </div>

            <p className="text-xl md:text-2xl text-white font-medium tracking-wide italic leading-relaxed max-w-sm drop-shadow-[0_2px_20px_rgba(0,0,0,1)] bg-black/10 backdrop-blur-[2px] p-2 rounded-sm border border-gold/5">
              ВАШ ПОШАГОВЫЙ ПЛАН ВЫХОДА ИЗ КРИЗИСА <span className="block text-gold glow-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] font-bold">В 4-Х КЛЮЧЕВЫХ СФЕРАХ</span>
            </p>

            <div className="grid grid-cols-2 gap-6 w-full max-w-xs pt-4">
              {[
                { icon: Brain, label: "Состояние" },
                { icon: Coins, label: "Финансы" },
                { icon: Heart, label: "Отношения" },
                { icon: Sprout, label: "Здоровье" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: [1, 1.1, 1],
                    filter: ["blur(0px)", "brightness(1.5)", "blur(0px)"]
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ 
                    duration: 1.5, 
                    delay: idx * 0.2,
                    ease: "easeInOut"
                  }}
                  className="flex flex-col items-center lg:items-start group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-3 bg-black/40 lg:bg-gold/10 group-hover:bg-gold/30 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] backdrop-blur-md">
                    <item.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white font-bold drop-shadow-[0_0_12px_rgba(0,0,0,0.8)] lg:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all group-hover:text-gold">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center (Focus Space) */}
          <div className="hidden lg:block order-2 pointer-events-none" />

          {/* Right Side Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-10 order-3"
          >
            <div className="space-y-6 max-w-sm">
               <div className="relative">
                 <div className="absolute -inset-1 bg-gold/10 blur-xl rounded-lg" />
                 <p className="relative text-gold-light font-serif italic text-xl md:text-2xl leading-relaxed border-r-4 border-gold pr-6 bg-gold/5 py-4">
                   «Квест поможет вам последовательно наладить 4 главных направления вашей жизни»
                 </p>
               </div>
               <p className="text-white text-base md:text-lg leading-relaxed tracking-wide font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                 Вы находитесь в переходном периоде и испытываете стресс? Нужен четкий план действий вместо пустой теории и копаний в прошлом?
               </p>
            </div>
            
            <div className="pt-4">
              <GoldButton href="https://t.me/sofi_arih" className="scale-110 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                ЗАПИСАТЬСЯ НА КВЕСТ
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 md:py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle className="mb-8 md:mb-12">ЧТО ВЫ ПОЛУЧИТЕ В РЕЗУЛЬТАТЕ?</SectionTitle>
          
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Block 1 */}
            <Block 
              number="1"
              title="ВНУТРЕННЕЕ СОСТОЯНИЕ"
              result="Вы научитесь управлять своим состоянием и обретете внутреннюю опору."
              items={[
                "На практике освоите техники снижения тревоги и стресса.",
                "Научитесь выводить себя из состояния апатии и возвращать себе энергию.",
                "Сформируете базовую уверенность в себе и устойчивость к внешнему давлению.",
                "Перестанете быть заложниками настроения и научитесь сами его создавать."
              ]}
              image="https://s10.iimage.su/s/30/golnEKrxPaJYdBaW96zdPbtL8hI8TIvp39kQoPoOT.png"
              icon={Brain}
            />

            {/* Block 2 */}
            <Block 
              number="2"
              title="ФИНАНСЫ"
              result="Вы превратите свои внутренние ресурсы в деньги и начнете управлять ими осознанно."
              items={[
                "Обнаружите и измените финансовые привычки, которые мешают вам богатеть.",
                "Определите свои сильные стороны и таланты, которые можно монетизировать.",
                "Создадите понятный и работающий финансовый план на ближайшее будущее.",
                "Посмотрите на финансовую грамотность через призму глубинных потребностей."
              ]}
              image="https://s10.iimage.su/s/30/gr8BPTsx2idNUWRDDwm0QOw4DgEage7zfD73lecjW.png"
              icon={Coins}
              reverse
            />

            {/* Block 3 */}
            <Block 
              number="3"
              title="ОТНОШЕНИЯ"
              result="Вы выведете отношения на новый уровень глубины и понимания."
              items={[
                "Увидите себя и партнера в новом свете через систему архетипов.",
                "Поймете, какие ваши внутренние части отражает партнер или субъект симпатии.",
                "Сможете трансформировать конфликты в точку роста для отношений.",
                "Наладите более глубокий и осознанный контакт с близкими."
              ]}
              image="https://s10.iimage.su/s/30/g7KhVjexOAJE2roX3OHh11lvVDUJf2gznuJkrihpm.png"
              icon={Heart}
            />

            {/* Block 4 */}
            <Block 
              number="4"
              title="ЗДОРОВЬЕ"
              result="Вы поймете язык своего тела и наладите с ним контакт."
              items={[
                "Научитесь расшифровывать психосоматические сигналы.",
                "Уберете источники хронического напряжения, влияющие на самочувствие.",
                "Сможете предотвращать многие недомогания, работая с их причиной, а не следствием."
              ]}
              image="https://s10.iimage.su/s/30/gkGgfrUxa58IDM91sawfNsz34oeEDdgGr4Ci6Qajb.png"
              icon={Sprout}
              reverse
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 md:py-20 px-4 bg-[#0d0d0d] border-y border-gold/5">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>ОБО МНЕ</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group lg:sticky lg:top-24"
            >
              <div className="absolute -inset-4 border border-gold/30 rounded-sm group-hover:-inset-6 transition-all duration-500" />
              <img 
                src="https://s10.iimage.su/s/30/gBpe9tYxEgKUOAGrmev82aS7aB3sqJtBjIezvAtuC.png" 
                alt="Софья Арих" 
                className="relative z-10 w-full h-auto max-h-[700px] object-cover rounded-sm filter brightness-90 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black to-transparent p-10">
                <p className="text-gold font-serif italic text-4xl">Софья Арих</p>
                <p className="text-gray-400 uppercase tracking-widest text-xs mt-3">Практикующий психолог</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 space-y-8 text-gray-300 text-lg leading-relaxed font-light"
            >
              <div className="space-y-6">
                <p className="text-2xl font-serif text-gold-light italic">
                  Всех приветствую! Меня зовут Софья Арих. 
                </p>
                <p>
                  Я практикующий психолог, в своей работе во многом опираюсь на методы юнгианского анализа, КПТ, эмоционально-образной и телесной терапии.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-gold/10">
                <h4 className="text-gold uppercase tracking-[0.2em] font-serif text-sm font-bold">Направления работы:</h4>
                <div className="grid gap-4">
                  {[
                    "Работа через ключевые архетипы (тень, трикстер, герой, мудрец, воин);",
                    "Разбор жизненных сценариев и построение новых треков;",
                    "Поиск ресурса в теневых качествах через архетип Тени;",
                    "Работа с Анимусом и Анимой (внутренний мужчина/женщина);",
                    "Анализ сновидений и мифологии для самопознания;",
                    "Психологические квесты на активное воображение;"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5 shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border-l-2 border-gold bg-gold/5 italic text-gold-light/90 font-serif text-xl leading-relaxed">
                "Цель - прийти к своему истинному пути, внутренней опоре, самоценности и предназначению. Открытие потенциала в талантах и установление гармоничного состояния."
              </div>

              <div className="pt-8">
                <GoldButton href="https://t.me/sofi_arih" className="w-full sm:w-auto text-center px-12">
                  ЗАПИСАТЬСЯ В ТГ
                </GoldButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Summary Section */}
      <section className="py-12 md:py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-20 items-center">
          <div className="w-full lg:w-1/2 relative h-[380px] md:h-[650px] overflow-hidden">
             <img 
               src="https://s10.iimage.su/s/30/gJPU7Hxxp3swjNV6LSTME49zRt3Qeh5IjM5z3e0YH.png" 
               alt="Expertise" 
               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-1000 origin-top scale-[1.1] md:scale-100"
               referrerPolicy="no-referrer"
             />
             {/* Fade masks for edges */}
             <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
             <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
             <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
             <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-10 text-left"
          >
            <p className="text-2xl md:text-3xl text-gray-100 font-serif leading-relaxed tracking-wide italic">
              Я объединила в этом квесте свою экспертизу в психологии, архетипах и психосоматике с финансовым коучингом.
            </p>
            <p className="text-lg md:text-xl text-gold-light/70 font-light leading-relaxed max-w-xl">
              Вы получитe целостную систему, где внутренние изменения напрямую ведут к улучшениям в здоровье, финансах и отношениях.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-gold/20">
              {[
                { icon: Users, label: "Психология" },
                { icon: Sparkles, label: "Архетипы" },
                { icon: Stethoscope, label: "Психосоматика" },
                { icon: Scale, label: "Финансовый коучинг" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="p-4 rounded-full border border-gold/10 bg-gold/5 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                    <item.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-gold-light font-bold leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black flex flex-col items-center border-t border-gold/5">
        <p className="text-gray-500 text-xs tracking-[0.4em] uppercase mb-6 font-serif">КВЕСТ 4 КЛЮЧА</p>
        <p className="text-gray-600 text-[10px] tracking-widest uppercase mb-6 italic">© 2026 SOFYA ARIH | ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
        <div className="flex gap-10">
           <a 
             href="https://t.me/sofi_arih" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-gold hover:text-white transition-all text-[10px] uppercase tracking-[0.3em] font-bold border-b border-gold/30 pb-1"
           >
             TELEGRAM
           </a>
           <a 
             href="mailto:s.a.16@yandex.ru"
             className="text-gold hover:text-white transition-all text-[10px] uppercase tracking-[0.3em] font-bold border-b border-gold/30 pb-1"
           >
             CONTACT
           </a>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-gold/10 backdrop-blur-xl border border-gold/30 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all shadow-[0_0_30px_rgba(212,175,55,0.15)] cursor-pointer group"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function Block({ number, title, result, items, image, icon: Icon, reverse = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-[#0d0d0d] border border-gold/10 hover:border-gold/20 transition-all duration-700 overflow-hidden flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[500px] rounded-sm group relative`}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gold/[0.01] pointer-events-none" />

      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative h-64 md:h-80 lg:h-auto overflow-hidden bg-black">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 filter brightness-[0.8] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:hidden from-[#0d0d0d] via-transparent to-transparent" />
      </div>
      
      {/* Content Side */}
      <div className="w-full lg:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-[#0d0d0d] relative z-10">
        <div className="flex items-center gap-5 mb-8">
          <div className="p-4 rounded-full bg-gold/10 border border-gold/20 shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-colors group-hover:bg-gold/20">
            <Icon className="w-7 h-7 text-gold " />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-serif text-white/50 tracking-widest uppercase">
               БЛОК {number}
            </h3>
            <h4 className="text-gold text-2xl md:text-3xl font-serif uppercase tracking-wider">{title}</h4>
          </div>
        </div>
        
        <div className="space-y-10">
          <p className="text-gold-light/90 italic leading-relaxed border-l-4 border-gold/40 pl-8 text-lg md:text-xl font-serif tracking-wide py-1 bg-gold/[0.03]">
             <span className="text-gold uppercase text-[10px] tracking-[0.3em] font-sans font-bold block mb-2 not-italic">Результат:</span>
             {result}
          </p>
          
          <ul className="space-y-5">
            {items.map((item: string, i: number) => (
              <li key={i} className="flex gap-5 text-sm md:text-lg text-gray-300/80 group-hover:text-gray-200 transition-colors duration-500">
                <CheckCircle2 className="w-6 h-6 text-gold/60 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

