// ⚙️ ARQUIVO DE CONFIGURAÇÃO RÁPIDA
// Edite este arquivo para customizar sua landing page

export const DOCTOR_INFO = {
  // Nome do médico
  name: "Dr. Mario Luiz Watanabe",
  
  // Especialidade
  specialty: "Psiquiatra",
  
  // CRM (Conselho Regional de Medicina)
  crm: "CRM SP 227378",
  rqe: "RQE 135911",
  state: "SP",
  
  // Formação
  education: "Médico - Pontifícia Universidade Católica de São Paulo (PUC-SP); Psiquiatria - PUC-SP",
  experience: "Atuação em CAPS e serviços públicos e privados; foco em psiquiatria adulta e clínica",
  
  // Contato
  phone: "",
  whatsapp: "", // Atualize com o número real se desejar
  email: "",
  
  // Endereço
  address: "Rua Goiás 57, Cardio Centro Sorocaba, Sorocaba - SP, 18035-550",
  
  // Bio
  bio: "Minha atuação é focada no atendimento em saúde mental, oferecendo um cuidado individualizado e humanizado. Acredito na importância de um olhar atento e empático para compreender as necessidades de cada pessoa, promovendo um tratamento baseado na escuta qualificada e em abordagens atualizadas da Psiquiatria.",
};

export const COLORS = {
  // Cor principal (azul por padrão)
  primary: "blue", // azul, verde, purple, red, etc
  
  // Cor do WhatsApp (sempre verde, mas você pode mudar)
  whatsapp: "green",
  
  // Cores dos cards
  cardBg: "blue-50",
  cardBorder: "blue-200",
};

export const BUSINESS_HOURS = {
  // Horário de funcionamento
  mondayToFriday: "08:00 - 18:00",
  saturday: "08:00 - 12:00",
  sunday: "Fechado",
};

export const DEFAULT_MESSAGE = 
  "Olá, gostaria de agendar uma consulta com o Dr.";

// ✨ DICAS DE CUSTOMIZAÇÃO

// 1. Para mudar cores em todos os componentes:
//    - Procure por "blue-" nos arquivos .tsx
//    - Substitua por outra cor (verde, roxo, etc)

// 2. Para adicionar foto do médico:
//    - Coloque a imagem em public/images/doctor.jpg
//    - Descomente o código em AboutDoctor.tsx

// 3. Para adicionar mais áreas de atuação:
//    - Edite o array em PracticeAreas.tsx

// 4. Para mudar o layout:
//    - Use Tailwind classes (flex, grid, etc)
//    - Breakpoints: sm:, md:, lg:

// 5. Para adicionar formulário de contato:
//    - Instale: npm install react-hook-form
//    - Crie um novo componente ContactForm.tsx
