// Static content for now. When the DB lands, swap these for fetchers
// (e.g. Supabase / Postgres) — the page components consume the same shape.

export const contact = {
  instagramHandle: "@innerdrive.program",
  instagramUrl: "https://instagram.com/innerdrive.program",
  email: "innerdriveprogram@gmail.com",
};

export type IdealForLevel = {
  title: string;
  paragraphs: string[];
  requirements: string[];
};

export type Plan = {
  slug: string;
  name: string;
  tagline: string;
  level: string;
  focus: string[];
  daysPerWeek: string;
  description: string;
  idealFor: string[];
  idealForLevels?: IdealForLevel[];
  includes: string[];
  precio: string;
};

export type Coach = {
  name: string;
  role: string;
  bio: string;
  bullets: string[];
};

export const plans: Plan[] = [
  {
    slug: "competitor-drive",
    name: "Competitor Drive",
    tagline: "Train with purpose",
    level: "Intermedio - Rx",
    daysPerWeek: "5 días de entrenamiento + 1 día opcional de descanso activo",
    description:
      "Pensado para quienes se toman su entrenamiento en serio y buscan seguir progresando de forma equilibrada.",
    idealFor: [
      "Querés entrenar por tu cuenta",
      "No necesitás correcciones técnicas",
      "Competís o tenés intenciones de competir a futuro",
    ],
    includes: [
      "Videos de ejercicios, explicación de los bloques de entrenamiento y sugerencias para tus wods.",
      "Respuestas a tus consultas dentro de la aplicación.",
    ],
    focus: ["GIMNÁSTICOS", "FUERZA", "METCON"],
    precio: "43.500 ARS / 30 USD",
  },
  {
    slug: "competitor-drive-plus",
    name: "Competitor Drive +",
    tagline: "Train with guidance",
    level: "Intermedio - Rx",
    daysPerWeek: "5 días de entrenamiento + 1 día opcional de descanso activo",
    description:
      "Pensado para quienes necesitan la presencia de un coach. Ya sea para evaluar desempeño, plantear objetivos, despejar dudas o mejorar técnicamente. Estamos a disposición para ayudarte.",
    idealFor: [
      "Necesitas ayuda para organizar tu temporada competitiva",
      "Necesitas correcciones técnicas",
      "Rendís mejor si contas con un seguimiento de tu entrenamiento",
    ],
    includes: [
      "Corrección de videos, adaptaciones según necesidades y feedback semanal",
      "Respuestas a tus consultas por WhatsApp",
    ],
    focus: ["GIMNÁSTICOS", "FUERZA", "METCON", "FEEDBACK", "AJUSTES"],
    precio: "72.500 ARS / 50 USD"
  },
  {
    slug: "competitor-drive-1-1",
    name: "Competitor 1:1",
    tagline: "Train with precision",
    level: "PARA TODOS",
    focus: ["PLAN A MEDIDA", "FEEDBACK", "SEGUIMIENTO"],
    daysPerWeek: "A medida",
    description:
      "Este es nuestro plan más completo, pensado para quienes necesitan un entrenamiento hecho a su medida. Sea cual sea tu objetivo nos adaptamos a lo que necesites.",
    idealFor: [
      "Llevas un tiempo entrenando pero sentís que no avanzas",
      "Tenes debilidades muy marcadas que no cubre una programación general",
      "Necesitas correcciones técnicas y ayuda para sacar movimientos",
      "Los horarios y días en que podes entrenar cambian semana a semana",
      "Tenes dudas diarias que necesitas despejar con un coach",
    ],
    includes: [
      "Corrección de videos",
      "Contacto directo con coaches por WhatsApp",
      "Acompañamiento para clasificatorios y eventos si fuera necesario",
      "Videollamada mensual para evaluar progreso y realizar ajustes a la programación",
    ],
    precio: "130.000 ARS / 90 USD"
  },
  {
    slug: "gymnastics",
    name: "Gymnastics",
    tagline: "Construí la base que necesitás",
    level: "Especialidad",
    focus: ["Pull-ups", "HSPU", "Muscle-ups", "Core"],
    daysPerWeek: "3 días",
    description:
      "Plan enfocado en mejorar tus movimientos gimnásticos. Incluye 3 días de entrenamiento, 2 niveles según experiencia.",
    idealFor: [],
    idealForLevels: [
      {
        title: "Nivel 1",
        paragraphs: [
          "Para atletas que aún no tienen todos los movimientos gimnásticos y quieren incorporarlos.",
          "Trabajaremos fuerza específica y progresiones técnicas para lograr mayor fluidez y volúmen.",
          "Recomendamos los siguientes movimientos como requisitos mínimos:",
        ],
        requirements: [
          "strict pull up, butterfly pull up",
          "handstand hold (contra la pared)",
          "toes to bar",
        ],
      },
      {
        title: "Nivel 2",
        paragraphs: [
          "Para atletas que ya realizan todos los movimientos gimnásticos y quieren mejorar su rendimiento dentro de un workout.",
          "Recomendamos los siguientes movimientos como requisitos mínimos:",
        ],
        requirements: [
          "strict pull up, butterfly pull up",
          "handstand walk (al menos 3mts)",
          "toes to bar",
          "muscle up",
        ],
      },
    ],
    includes: [
      "Acceso a videos explicativos.",
      "Consultas generales dentro de la app.",
    ],
    precio: "36.000 ARS / 25 USD"
  },
  {
    slug: "gymnastics-1-1",
    name: "Gymnastics 1.1",
    tagline: "Gimnástico personalizado",
    level: "PARA TODOS",
    focus: ["PLAN A MEDIDA", "FEEDBACK", "SEGUIMIENTO"],
    daysPerWeek: "3 días",
    description:
      "Plan para aquellos que necesiten un enfoque personalizado, ya sea para aprender nuevos movimientos o mejorar los que ya tienen.",
    idealFor: [
      "Querés aprender movimientos nuevos o mejorar la técnica",
      "Llevas un tiempo entrenando pero sentís que no avanzas",
      "Tenés debilidades muy marcadas que no cubre una programación general",
      "Buscas seguimiento con un coach",
    ],
    includes: [
      "Acceso a videos explicativos",
      "Corrección de videos y seguimiento de tu coach",
      "Contacto directo por WhatsApp"
    ],
    precio: "58.000 ARS / 40 USD"
  },
];

export const coaches: Coach[] = [
  {
    name: "Alexia",
    role: "Coach & Atleta",
    bio: "Atleta con experiencia real en la cancha. Diseña programación con criterio y entiende lo que necesitás para mejorar de verdad.",
    bullets: [
      "+9 años en CrossFit",
      "Games · Semifinals · Sanctionals",
      "+5 años coach (online y presencial)",
    ],
  },
  {
    name: "Nacho",
    role: "Coach & Planificador",
    bio: "Profesor de Educación Física y planificador. Combina experiencia competitiva con base técnica para construir planes que funcionan.",
    bullets: [
      "+11 años en CrossFit",
      "Semifinals · Sanctionals",
      "Profesor de Educación Física",
      "+5 años como planificador",
    ],
  },
];
