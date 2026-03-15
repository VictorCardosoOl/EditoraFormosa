import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      "nav": {
        "title": "Editora Formosa",
        "subtitle": "The instructions of the press\nThe art of bookmaking",
        "dates": "25.04.2026\n— 15.09.2026",
        "foundation": "Fundação para a arte contemporânea",
        "foundation_short": "Fundação Formosa",
        "lang": "PT",
        "manifesto": "O Manifesto",
        "releases": "Lançamentos",
        "collection": "Acervo Visual",
        "reservations": "Reservas",
        "terms": "Termos de Uso"
      },
      "hero": {
        "title": "Formosa"
      },
      "marquee": [
        "A ARTE DA ENCADERNAÇÃO MANUAL",
        "O PESO DA PALAVRA IMPRESSA",
        "EDIÇÕES ESTRITAMENTE LIMITADAS",
        "MANIFESTO DIGITAL 2026"
      ],
      "manifesto": {
        "title": "O Manifesto\nDigital",
        "subtitle": "Chamada para originais\nAté 15 Setembro, 2026",
        "text1": "LEITORES DE TODAS AS IDADES, DE TODOS OS PAÍSES DO MUNDO: VOCÊS SÃO CONVIDADOS A ENVIAR UM TESTAMENTO DE ARTE FEITO PARA SER LIDO.",
        "text2": "ESCREVA SEU TESTAMENTO EM SEU PRÓPRIO IDIOMA E ESCREVA O QUÃO ABERTAMENTE DESEJAR. O LIVRO NÃO É APENAS UM CONTÊINER DE IDEIAS, MAS UM OBJETO DE PERMANÊNCIA EM UM MUNDO EFÊMERO."
      },
      "featured": {
        "title": "Obras em\nDestaque",
        "subtitle": "Edições Limitadas",
        "acquire": "Adquirir Obra",
        "tiragem": "Tiragem"
      },
      "publications": {
        "title": "Índice de\nPublicações",
        "ref": "Ref",
        "book_title": "Título da Obra",
        "author": "Autor",
        "status": "Status"
      },
      "quote": {
        "text": "A materialidade do papel exige uma <span class='italic'>leitura lenta</span>. É um antídoto contra a amnésia digital."
      },
      "acervo": {
        "title": "Acervo\nVisual",
        "view": "VER OBRA"
      },
      "reservations": {
        "title": "Visitas em Grupo e\nWorkshop de Arte",
        "button": "AGENDAR VISITA",
        "text1": "A Editora Formosa foi renomeada para Fundação de Arte Contemporânea como parte do desejo de consolidar todos os interesses em arte e cultura sob uma única rubrica: <span class='italic'>Formosa</span>.",
        "text2": "A Fundação continuará sendo uma embaixadora global, mantendo seu compromisso de oferecer exposições, eventos e programas educacionais gratuitos, a fim de garantir a acessibilidade à arte em sua forma mais pura e tátil."
      },
      "cart": {
        "title": "Sacola",
        "empty": "Sua sacola está vazia",
        "subtotal": "Subtotal",
        "checkout": "Finalizar Compra"
      },
      "footer": {
        "foundation": "Fundação<br/>Formosa",
        "description": "A arte da encadernação manual e o peso da palavra impressa.",
        "est": "Est. 2026",
        "location": "Localização",
        "schedule": "Agendar Visita",
        "connect": "Conectar",
        "email": "Email Us",
        "navigation": "Navegação",
        "copyright": "© 2026 Fundação Formosa",
        "design": "Design por Especialista UX"
      },
      "faq": {
        "support": "Suporte",
        "title": "Dúvidas<br />Frequentes",
        "contact": "Fale Conosco",
        "items": [
          {
            "question": "Como posso agendar uma visita em grupo à Fundação?",
            "answer": "As visitas em grupo devem ser agendadas com pelo menos duas semanas de antecedência através do nosso portal de reservas. Para grupos escolares ou acadêmicos, oferecemos mediação especializada e acesso exclusivo aos arquivos de encadernação."
          },
          {
            "question": "A Editora da Villa aceita submissões de manuscritos?",
            "answer": "Atualmente, nosso foco editorial é curado internamente, focado em ensaios visuais, catálogos de arte e reedições de obras raras. Não estamos abertos a submissões não solicitadas de manuscritos de ficção ou poesia."
          },
          {
            "question": "Os workshops de encadernação são abertos a iniciantes?",
            "answer": "Sim. Nossos workshops são desenhados em módulos progressivos. O 'Módulo I: Fundamentos do Papel e Costura' não exige nenhuma experiência prévia e fornece todos os materiais necessários."
          },
          {
            "question": "É possível adquirir publicações antigas ou esgotadas do acervo?",
            "answer": "Algumas edições limitadas esgotadas estão disponíveis apenas para consulta em nossa biblioteca física. No entanto, mantemos uma lista de espera para reedições especiais. Recomendamos assinar nossa newsletter para anúncios de tiragens comemorativas."
          },
          {
            "question": "A Fundação oferece certificados de autenticidade para as obras?",
            "answer": "Todas as edições limitadas e obras de arte originais adquiridas diretamente através da Fundação Villa ou de nossos parceiros oficiais são acompanhadas por um certificado de autenticidade assinado, numerado e chancelado em relevo."
          }
        ]
      },
      "books": {
        "poetica": {
          "title": "A Poética do Espaço",
          "author": "Gaston Bachelard",
          "desc": "Uma exploração fenomenológica da arquitetura e do espaço íntimo. Encadernação manual em linho cru com costura aparente."
        },
        "arquitetura": {
          "title": "Arquitetura da Sombra",
          "author": "Jun'ichirō Tanizaki",
          "desc": "Um ensaio sobre a estética japonesa e a valorização do escuro. Impresso em papel de algodão 120g com tipografia em chumbo."
        }
      },
      "table": [
        { "ref": "001", "title": "A Poética do Espaço", "author": "Gaston Bachelard", "status": "Disponível" },
        { "ref": "002", "title": "Silêncio Visual", "author": "Coletivo Anônimo", "status": "Esgotado" },
        { "ref": "003", "title": "Arquitetura da Sombra", "author": "Jun'ichirō Tanizaki", "status": "Disponível" },
        { "ref": "004", "title": "O Peso da Tinta", "author": "Helena Martins", "status": "Pré-venda" }
      ],
      "gallery": [
        { "title": "Arquiteturas Patriarcais" },
        { "title": "A Sutil Arte da Sedução" },
        { "title": "Uma Quimera de Salto" }
      ]
    }
  },
  en: {
    translation: {
      "nav": {
        "title": "Formosa Press",
        "subtitle": "The instructions of the press\nThe art of bookmaking",
        "dates": "25.04.2026\n— 15.09.2026",
        "foundation": "Foundation for contemporary art",
        "foundation_short": "Formosa Foundation",
        "lang": "EN",
        "manifesto": "The Manifesto",
        "releases": "Releases",
        "collection": "Visual Collection",
        "reservations": "Reservations",
        "terms": "Terms of Use"
      },
      "hero": {
        "title": "Formosa"
      },
      "marquee": [
        "THE ART OF MANUAL BOOKBINDING",
        "THE WEIGHT OF THE PRINTED WORD",
        "STRICTLY LIMITED EDITIONS",
        "DIGITAL MANIFESTO 2026"
      ],
      "manifesto": {
        "title": "The Digital\nManifesto",
        "subtitle": "Call for originals\nUntil September 15, 2026",
        "text1": "READERS OF ALL AGES, FROM ALL COUNTRIES IN THE WORLD: YOU ARE INVITED TO SEND A TESTAMENT OF ART MADE TO BE READ.",
        "text2": "WRITE YOUR TESTAMENT IN YOUR OWN LANGUAGE AND WRITE AS OPENLY AS YOU WISH. THE BOOK IS NOT JUST A CONTAINER OF IDEAS, BUT AN OBJECT OF PERMANENCE IN AN EPHEMERAL WORLD."
      },
      "featured": {
        "title": "Featured\nWorks",
        "subtitle": "Limited Editions",
        "acquire": "Acquire Work",
        "tiragem": "Edition"
      },
      "publications": {
        "title": "Publications\nIndex",
        "ref": "Ref",
        "book_title": "Book Title",
        "author": "Author",
        "status": "Status"
      },
      "quote": {
        "text": "The materiality of paper demands a <span class='italic'>slow reading</span>. It is an antidote to digital amnesia."
      },
      "acervo": {
        "title": "Visual\nArchive",
        "view": "VIEW WORK"
      },
      "reservations": {
        "title": "Group Visits and\nArt Workshop",
        "button": "SCHEDULE VISIT",
        "text1": "Formosa Press has been renamed to Foundation of Contemporary Art as part of the desire to consolidate all interests in art and culture under a single rubric: <span class='italic'>Formosa</span>.",
        "text2": "The Foundation will continue to be a global ambassador, maintaining its commitment to offering free exhibitions, events, and educational programs, in order to ensure accessibility to art in its purest and most tactile form."
      },
      "cart": {
        "title": "Bag",
        "empty": "Your bag is empty",
        "subtotal": "Subtotal",
        "checkout": "Checkout"
      },
      "footer": {
        "foundation": "Formosa<br/>Foundation",
        "description": "The art of manual bookbinding and the weight of the printed word.",
        "est": "Est. 2026",
        "location": "Location",
        "schedule": "Schedule Visit",
        "connect": "Connect",
        "email": "Email Us",
        "navigation": "Navigation",
        "copyright": "© 2026 Formosa Foundation",
        "design": "Design by UX Expert"
      },
      "faq": {
        "support": "Support",
        "title": "Frequently<br />Asked Questions",
        "contact": "Contact Us",
        "items": [
          {
            "question": "How can I schedule a group visit to the Foundation?",
            "answer": "Group visits must be scheduled at least two weeks in advance through our reservation portal. For school or academic groups, we offer specialized mediation and exclusive access to the bookbinding archives."
          },
          {
            "question": "Does Villa Press accept manuscript submissions?",
            "answer": "Currently, our editorial focus is curated internally, focusing on visual essays, art catalogs, and re-editions of rare works. We are not open to unsolicited submissions of fiction or poetry manuscripts."
          },
          {
            "question": "Are the bookbinding workshops open to beginners?",
            "answer": "Yes. Our workshops are designed in progressive modules. 'Module I: Fundamentals of Paper and Sewing' requires no prior experience and provides all necessary materials."
          },
          {
            "question": "Is it possible to acquire old or out-of-print publications from the collection?",
            "answer": "Some out-of-print limited editions are available only for consultation in our physical library. However, we maintain a waiting list for special re-editions. We recommend subscribing to our newsletter for announcements of commemorative print runs."
          },
          {
            "question": "Does the Foundation offer certificates of authenticity for the works?",
            "answer": "All limited editions and original artworks acquired directly through the Villa Foundation or our official partners are accompanied by a signed, numbered, and embossed certificate of authenticity."
          }
        ]
      },
      "books": {
        "poetica": {
          "title": "The Poetics of Space",
          "author": "Gaston Bachelard",
          "desc": "A phenomenological exploration of architecture and intimate space. Manual binding in raw linen with exposed stitching."
        },
        "arquitetura": {
          "title": "In Praise of Shadows",
          "author": "Jun'ichirō Tanizaki",
          "desc": "An essay on Japanese aesthetics and the appreciation of the dark. Printed on 120g cotton paper with lead typography."
        }
      },
      "table": [
        { "ref": "001", "title": "The Poetics of Space", "author": "Gaston Bachelard", "status": "Available" },
        { "ref": "002", "title": "Visual Silence", "author": "Anonymous Collective", "status": "Sold Out" },
        { "ref": "003", "title": "In Praise of Shadows", "author": "Jun'ichirō Tanizaki", "status": "Available" },
        { "ref": "004", "title": "The Weight of Ink", "author": "Helena Martins", "status": "Pre-order" }
      ],
      "gallery": [
        { "title": "Patriarchal Architectures" },
        { "title": "The Subtle Art of Seduction" },
        { "title": "A Chimera on Heels" }
      ]
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
