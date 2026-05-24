// Static content for now. When the DB lands, swap these for fetchers
// (e.g. Supabase / Postgres) — the page components consume the same shape.

export const contact = {
  instagramHandle: "@innerdrive.program",
  instagramUrl: "https://instagram.com/innerdrive.program",
  email: "innerdriveprogram@gmail.com",
};

export type Plan = {
  slug: string;
  name: string;
  tagline: string;
  level: string;
  focus: string[];
  daysPerWeek: string;
  description: string;
  ideal?: string;
  incluye?: string;
  precio?: string;
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
    description: "Pensado para quienes se toman su entrenamiento en serio y buscan seguir progresando de forma equilibrada.",   
    level: "Intermedio - Rx",
    daysPerWeek: "5 días de entrenamiento + 1 día opcional de descanso activo",
    ideal: "<ul> <li>Querés entrenar por tu cuenta</li> <li>No necesitás correcciones técnicas</li> <li>Competís o tenés intenciones de competir a futuro</li> </ul>",
    incluye: "<ul> <li>Videos de ejercicios, explicación de los bloques de entrenamiento y sugerencias para tus wods.</li> <li>Respuestas a tus consultas dentro de la aplicación. </li> </ul>",
    focus: ["GIMNÁSTICOS", "FUERZA", "METCON"],
    precio: "43.500ars / 30usd",
  },
  {
    slug: "competitor-drive-plus",
    name: "Competitor Drive +",
    tagline: "El paso siguiente del competidor.",
    level: "Competidor",
    focus: ["Volumen alto", "Doble sesión", "Periodización"],
    daysPerWeek: "6 días + dobles",
    description:
      "Versión expandida con doble sesión, periodización avanzada y picos planificados. Para atletas que apuntan a clasificar y exigirse al máximo.",
  },
  {
    slug: "competitor-drive-1-1",
    name: "Competitor Drive 1.1",
    tagline: "Coaching personalizado uno-a-uno.",
    level: "Competidor",
    focus: ["Plan a medida", "Feedback semanal", "Video review"],
    daysPerWeek: "A medida",
    description:
      "Programación individualizada construida sobre tus puntos débiles, calendario competitivo y disponibilidad. Incluye revisión de videos y ajustes semanales.",
  },
  {
    slug: "gymnastics",
    name: "Gymnastics",
    tagline: "Construí la base que te falta.",
    level: "Especialidad",
    focus: ["Pull-ups", "HSPU", "Muscle-ups", "Core"],
    daysPerWeek: "3–4 días",
    description:
      "Plan específico de gimnástico para desbloquear movimientos y construir la fuerza relativa que cambia tu performance en el WOD.",
  },
  {
    slug: "gymnastics-1-1",
    name: "Gymnastics 1.1",
    tagline: "Gimnástico personalizado.",
    level: "Especialidad",
    focus: ["Plan a medida", "Progresiones", "Video review"],
    daysPerWeek: "A medida",
    description:
      "Coaching gimnástico uno-a-uno. Progresiones diseñadas a partir de tu nivel actual y tus objetivos puntuales.",
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
