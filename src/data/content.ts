import Lightbulb from '@lucide/astro/icons/lightbulb';
import Users from '@lucide/astro/icons/users';
import ChartColumn from '@lucide/astro/icons/chart-column';
import Compass from '@lucide/astro/icons/compass';
import Building from '@lucide/astro/icons/building';
import Handshake from '@lucide/astro/icons/handshake';
import BadgeCheck from '@lucide/astro/icons/badge-check';
import Megaphone from '@lucide/astro/icons/megaphone';
import Eye from '@lucide/astro/icons/eye';
import Accessibility from '@lucide/astro/icons/accessibility';
import Briefcase from '@lucide/astro/icons/briefcase';
import PenTool from '@lucide/astro/icons/pen-tool';
import GraduationCap from '@lucide/astro/icons/graduation-cap';
import Search from '@lucide/astro/icons/search';
import Percent from '@lucide/astro/icons/percent';
import Route from '@lucide/astro/icons/route';
import Award from '@lucide/astro/icons/award';
import Calendar from '@lucide/astro/icons/calendar';
import MessageCircle from '@lucide/astro/icons/message-circle';
import Presentation from '@lucide/astro/icons/presentation';
import ClipboardList from '@lucide/astro/icons/clipboard-list';
import Upload from '@lucide/astro/icons/upload';
import PenLine from '@lucide/astro/icons/pen-line';
import HeartHandshake from '@lucide/astro/icons/heart-handshake';
import ShieldCheck from '@lucide/astro/icons/shield-check';
import Ban from '@lucide/astro/icons/ban';
import Rocket from '@lucide/astro/icons/rocket';
import CalendarX from '@lucide/astro/icons/calendar-x';
import FileChartColumn from '@lucide/astro/icons/file-chart-column';

const G = '#0B8E6B', B = '#1D8FE8', V = '#6D4FE0', T = '#13B3A0', VL = '#9B5CF6';
const g = (a: string, b: string) => `linear-gradient(135deg,${a},${b})`;

export const grads = {
  GT: g(G, T),
  TB: g(T, B),
  BV: g(B, V),
  VL: g(V, VL),
  GB: g(G, B),
};

// Degradados oscurecidos para tarjetas con TEXTO blanco encima (contraste ≥ 4,5:1)
const t = { GT: g('#087A5C', '#0A7A72'), BV: g('#1670C0', V), VL: g(V, '#7B4FD8') };

export const impact = [
  { value: '750', text: 'personas con discapacidad laboran en las empresas miembro' },
  { value: '80%', text: 'cuenta con una política de D&I' },
  { value: '70%', text: 'ha implementado buenas prácticas en su gestión de PcD' },
  { value: '60%', text: 'tiene una meta definida de contratación' },
];

export const value = [
  { icon: Lightbulb, bg: grads.GT, title: 'Compartimos y asesoramos', text: 'Compartimos buenas prácticas, brindamos herramientas y asesoramos a las empresas miembro.' },
  { icon: Users, bg: grads.BV, title: 'Creamos comunidad', text: 'Organizamos actividades de concientización y formativas, acompañándonos en el proceso.' },
  { icon: ChartColumn, bg: grads.VL, title: 'Medimos el impacto', text: 'Medimos el impacto de nuestras iniciativas reportando lo alcanzado.' },
];

export const roles = [
  { icon: Compass, bg: grads.GT, title: 'Comité estratégico', who: 'Presidencia, 04 líderes de comité y asesores expertos.', role: 'Toma de decisiones inherente a la gestión adecuada de la RED.', means: 'Impulsar las acciones según su rol definido en el reglamento interno.' },
  { icon: Building, bg: grads.BV, title: 'Miembros', who: 'Empresas comprometidas con la inclusión.', role: 'Contribuir en la contratación de PcD y concientización en su campo de acción o giro de negocio.', means: 'Participar activamente en el plan de trabajo y ruta de aprendizaje aprobado por el comité estratégico.' },
  { icon: Handshake, bg: grads.VL, title: 'Instituciones aliadas', who: 'Instituciones representativas del país especializadas en D&I.', role: 'Asesorar a los miembros de manera activa.', means: 'Participar activamente del plan de trabajo anual.' },
];

export const committees = [
  { icon: Handshake, bg: t.GT, title: 'Mesa de trabajo de aliados', text: 'Reforzar el posicionamiento y aporte de las consultoras y asociaciones especializadas en discapacidad.' },
  { icon: BadgeCheck, bg: t.BV, title: 'Comité de buenas prácticas', text: 'Investigar, innovar y difundir buenas prácticas relacionadas a la adecuada gestión de PcD.' },
  { icon: Megaphone, bg: t.VL, title: 'Comité de comunicaciones', text: 'Posicionar a la RED en RRSS y espacios empresariales.' },
];

export const advances = [
  'Se instaló la agenda colaborativa entre la RED y el MTPE.',
  'Taller de lengua de señas para los empleados de las empresas miembro de la RED y público en general.',
  'Se impartió por una persona con discapacidad el Curso: Gestores de inclusión – módulo reclutamiento.',
  'Actualización de compendio de buenas prácticas de empresas de la RED.',
  'Elaboración por la mesa de aliados del ABC de la inclusión de la RED.',
  'Charlas gratuitas de concientización a empresas miembro de la RED.',
  'Paneles de universidad & empresas para difundir buenas prácticas y generar sinergia.',
  'Participación en eventos empresariales, APEC.',
  'Lanzamiento del I Foro de la RED en la OIT.',
];

export const route = [
  { icon: Eye, bg: grads.GT, title: 'Concientización', items: ['Discapacidad 360°', 'Proceso de inclusión sociolaboral', 'Buenas prácticas en materia de inclusión socio-laboral'] },
  { icon: Accessibility, bg: grads.TB, title: 'Barreras de accesibilidad', items: ['Barrera arquitectónica', 'Barrera comunicacional', 'Barrera actitudinal', 'Barrera de transporte'] },
  { icon: Briefcase, bg: grads.BV, title: 'Perfil ocupacional', items: ['Operativos', 'Administrativos'] },
  { icon: PenTool, bg: grads.VL, title: 'Diseño inclusivo', items: ['Discapacidad sensorial – tipo visual', 'Discapacidad sensorial – tipo auditiva', 'Discapacidad física', 'Discapacidad orgánica o mixta', 'Discapacidad intelectual', 'Discapacidad mental o psicosocial'] },
  { icon: GraduationCap, bg: grads.GB, title: 'Empleabilidad', items: ['Formación continua y desarrollo de habilidades'] },
  { icon: Search, bg: grads.BV, title: 'Discapacidad oculta', items: ['Investigación para identificar nuevos casos de PcD'] },
];

export const benefits = [
  { icon: Percent, title: '10% de descuento', text: 'en los servicios de nuestros aliados.' },
  { icon: Route, title: 'Ruta de aprendizaje', text: 'Programa formativo anual en seis etapas.' },
  { icon: Award, title: 'Reconocimiento', text: 'como empresa comprometida con la inclusión laboral de PcD.' },
  { icon: Megaphone, title: 'Difusión', text: 'de tus vacantes y buenas prácticas en RRSS.' },
  { icon: Calendar, title: 'Calendario', text: 'de eventos relacionados a la inclusión y posicionamiento de la RED.' },
  { icon: MessageCircle, title: 'Mentoría', text: '01 hora al año con cada aliado especializado.' },
];

export const steps = [
  { icon: Presentation, bg: grads.GT, day: 'Día 0', text: 'Presentación de la RED.' },
  { icon: ClipboardList, bg: grads.TB, day: 'Día 1', text: 'Completar el formulario para evaluación de candidatura.' },
  { icon: Upload, bg: grads.BV, day: 'Día 7', text: 'Cargar el logo oficial en alta y representante legal.' },
  { icon: PenLine, bg: grads.VL, day: 'Día 12', text: 'Firma de adhesión por representante y buenas prácticas.' },
];

export const commitments = [
  { icon: HeartHandshake, title: 'Compromiso', text: 'Estar comprometida directamente en la inclusión socio-laboral de personas con discapacidad.' },
  { icon: ShieldCheck, title: 'No discriminación', text: 'No realización de ningún tipo de manifestación discriminatoria en perjuicio de las personas con discapacidad que laboren en la organización que represento.' },
  { icon: Ban, title: 'Evitar estereotipos', text: 'Prevenir y evitar cualquier forma de estereotipos o prejuicios en contra de las personas con discapacidad que laboren en la organización a la que pertenezco.' },
  { icon: Rocket, title: 'Impulsar el cambio', text: 'Promover y apoyar las iniciativas de inclusión socio-laboral de las personas con discapacidad que se implementen desde la RED.' },
];

export const requirements = [
  { icon: CalendarX, title: 'Máximo 2 inasistencias', text: 'a las reuniones mensuales.' },
  { icon: Users, title: 'Participación activa', text: 'en las reuniones de su comité y plan anual.' },
  { icon: FileChartColumn, title: 'Reportar anualmente', text: 'número de contrataciones, esfuerzos en entrenamiento, concientización, buenas prácticas entre otros aspectos relevantes en la gestión de PcD.' },
];
