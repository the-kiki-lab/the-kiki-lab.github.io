/* ==========================================================================
   KIKI Lab — site content
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the site.
   Everything below is plain JavaScript data. Add, remove, or reorder entries;
   the pages re-render themselves. Keep the commas and quotes intact.
   ========================================================================== */

window.SITE = {

  /* ---- Lab identity ---------------------------------------------------- */
  lab: {
    name: "KIKI Lab",
    expansion: ["Knowledge", "Informatics", "Komputation", "Influence"],
    unit: "Department of Communication",
    university: "University of North Dakota",
    thesis: "We study how people engage with information and technology — and what that does to health, wellbeing, and the decisions people make.",
    intro:
      "KIKI Lab works at the intersection of communication, computer science, and psychology. " +
      "We build and test AI systems that support wellbeing, and we use large language and " +
      "vision–language models to analyze how media ecosystems frame health, risk, and " +
      "collective action.",
    affiliations: [
      {
        name: "UND Department of Communication",
        note: "College of Arts &amp; Sciences",
        url: "https://und.edu/programs/communication-ba/"
      }
    ]
  },

  /* ---- The codebook ---------------------------------------------------- */
  /* Four research areas. Each gets a short code and a color, used as an
     annotation chip everywhere else on the site. Order is not meaningful.

     How to tag a new paper or project — the distinction that is easy to get
     wrong is WB vs COMP, since both involve LLMs:

       WB    the model is the PRODUCT. A system built and tested on people.
             Purrfessor, the philosopher NPCs.
       COMP  the model is the INSTRUMENT, used to measure media or behavior
             at scale, or is itself the object of evaluation. The VLM framing
             benchmark, the ChatGPT coding study, the CLIP labeling framework.
       HLTH  health attitudes, decisions, or behavior are the outcome.
       FRAME textual, numerical, or visual frames are the manipulation.

     "Uses an LLM" is not enough for COMP. Work that fits none of the four is
     tagged [] and still lists — better an honest blank than a stretched code. */
  codes: [
    {
      id: "wb",
      code: "WB",
      name: "AI Design for Wellbeing",
      short: "Building AI that people are better off for having used.",
      body:
        "We design and evaluate applied AI systems, then test whether they actually change " +
        "behavior. Purrfessor is a fine-tuned multimodal chatbot that reads a photo of a meal " +
        "and returns evidence-based dietary guidance. The AI Philosopher NPCs place " +
        "philosopher-inspired agents inside a game environment so players practice " +
        "disagreement without being harmed by it. In both cases the research question is not " +
        "whether the model works, but whether the person is better off."
    },
    {
      id: "comp",
      code: "COMP",
      name: "Computational Social Science",
      short: "Reading media ecosystems at a scale humans cannot code by hand.",
      body:
        "We use large language models and vision–language models as measurement " +
        "instruments — and then interrogate the instrument. Our HICSS work benchmarks " +
        "whether VLMs can apply theory-driven visual frames to news imagery the way trained " +
        "human coders do, and where they systematically fail. The recurring concerns are " +
        "bias, accountability, and human–AI complementarity: knowing which parts of " +
        "interpretation should stay with people."
    },
    {
      id: "hlth",
      code: "HLTH",
      name: "Health Communication &amp; Informatics",
      short: "How warning labels, platforms, and networks move health decisions.",
      body:
        "We run randomized experiments on the messages people actually encounter: cannabis " +
        "warning labels on social posts, vaccine efficacy numbers, cancer risk information " +
        "across cultures. The work spans intentions and mechanisms — including a " +
        "neuroimaging study showing that pictorial warning labels blunt the self-relevance " +
        "processing that drives sharing."
    },
    {
      id: "frame",
      code: "FRAME",
      name: "Networked Multimodal Framing",
      short: "Text, numbers, and images frame together — so we study them together.",
      body:
        "Framing research has largely treated text as the unit of analysis. We map how " +
        "textual, numerical, and visual frames interlock, and what that combination does to " +
        "public opinion and collective action. A protest photograph coded as conflict or as " +
        "solidarity changes how the same written demand lands."
    }
  ],

  /* ---- People ---------------------------------------------------------- */
  people: {
    pi: {
      name: "Linqi Lu, Ph.D.",
      pronunciation: "lin-chee loo",
      role: "Principal Investigator",
      title: "Assistant Professor, Department of Communication",
      org: "University of North Dakota",
      img: "assets/img/people-linqi-lu.jpg",
      bio:
        "Linqi Lu directs KIKI Lab. Her research investigates how people engage with " +
        "information and technology, and how those interactions shape health, wellbeing, and " +
        "broader social outcomes. She received her Ph.D. in Communication, with doctoral " +
        "minors in Computer Science and Educational Psychology, from the University of " +
        "Wisconsin–Madison, advised by Douglas M. McLeod and Dhavan V. Shah. Her work " +
        "appears in the Journal of Communication, Health Communication, Preventive Medicine, " +
        "the Journal of Medical Internet Research, and the HICSS proceedings.",
      interests: ["Human–AI interaction", "Health technology", "Media psychology", "Multimodal communication", "Computational social science"],
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=78Fr7LIAAAAJ&hl=en" },
        { label: "Personal site", url: "https://linqilu.com/" },
        { label: "GitHub", url: "https://github.com/LynLinqiLu" },
        { label: "X", url: "https://x.com/LinqiLu_" }
      ]
    },

    /* Nobody else has joined yet. Add entries here and the matching section
       appears on people.html automatically; leave a list empty and its section
       stays hidden. Fields: name, title, note, img, interests, url. */
    affiliated: [],
    graduate: [],
    undergraduate: [],
    alumni: []
  },

  /* ---- Projects -------------------------------------------------------- */
  projects: [
    {
      name: "Purrfessor",
      tagline: "A fine-tuned multimodal diet-health chatbot.",
      codes: ["wb"],
      img: "assets/img/project-purrfessor.jpg",
      body:
        "Purrfessor reads a photograph of a meal alongside a written description and returns " +
        "personalized dietary guidance. We fine-tuned LLaVA on food and nutrition data, then " +
        "evaluated it against a general-purpose baseline. The fine-tuned model produced higher " +
        "user engagement and perceived care than GPT-4 in our evaluation — evidence that " +
        "domain adaptation matters more than raw model scale for health guidance people will " +
        "actually follow.",
      links: [
        { label: "arXiv 2411.14925", url: "https://arxiv.org/abs/2411.14925" },
        { label: "Project page", url: "https://linqilu.com/projects/purrfessor/" }
      ]
    },
    {
      name: "AI Philosopher NPCs",
      tagline: "Political debate simulations for civic learning and resilience.",
      codes: ["wb"],
      img: "assets/img/project-philosopher.jpg",
      body:
        "Philosopher-inspired non-player characters stage political debates inside a game " +
        "environment. Players encounter structured disagreement they can engage with and " +
        "leave, which is the part real political conflict rarely offers. We are testing " +
        "whether repeated exposure to well-argued opposing positions builds analytical " +
        "capacity and emotional resilience rather than entrenchment.",
      links: [
        { label: "GitHub", url: "https://github.com/LynLinqiLu/philosopher-debates" },
        { label: "Project page", url: "https://linqilu.com/projects/philosopher/" }
      ]
    },
    {
      name: "Visual Framing Benchmark",
      tagline: "Can vision–language models code news imagery like trained humans?",
      codes: ["comp", "frame"],
      img: "assets/img/project-benchmark.svg",
      body:
        "A theory-driven benchmark that asks large vision–language models to apply " +
        "established visual framing constructs to news photographs, then compares their " +
        "labels against trained human coders. The point is not a leaderboard: it is locating " +
        "which interpretive judgments transfer to models and which do not, so computational " +
        "content analysis can be used honestly.",
      links: [
        { label: "HICSS-59 paper (PDF)", url: "https://linqilu.com/assets/pdf/HICSS26-final.pdf" }
      ]
    },
    {
      name: "Cannabis Imagery Multi-Labeling",
      tagline: "CLIP-based detection of visual triggers, local to global.",
      codes: ["comp", "hlth"],
      img: "assets/img/project-clip.svg",
      body:
        "A CLIP-based multi-labeling framework with local–global aggregation that detects " +
        "visual triggers in cannabis marketing imagery. It gives health communication " +
        "researchers a way to measure what promotional images are actually showing, at the " +
        "scale platforms operate on.",
      links: [
        { label: "arXiv 2412.08648", url: "https://arxiv.org/abs/2412.08648" }
      ]
    }
  ],

  /* ---- Publications ---------------------------------------------------- */
  /* Author strings: write Dr. Lu as "Lu, L." and the renderer will bold it. */
  publications: [
    {
      year: 2026, type: "Conference",
      authors: "Lu, L., Wan, Z., Kwon, H., and 5 more authors",
      title: "Evaluating large vision-language models for visual framing analysis in news imagery: A theory-driven benchmark",
      venue: "Proceedings of the 59th Hawaii International Conference on System Sciences (HICSS-59)",
      status: "Accepted",
      codes: ["comp", "frame"],
      links: [{ label: "PDF", url: "https://linqilu.com/assets/pdf/HICSS26-final.pdf" }]
    },
    {
      year: 2025, type: "Journal",
      authors: "Lu, L., Tao, R., Kwon, H., and 5 more authors",
      title: "Visual constructs of conflict and solidarity: The role of visual framing on public perceptions and engagement intentions with social protests",
      venue: "Visual Communication Quarterly",
      codes: ["frame"],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/15551393.2025.2452959" }]
    },
    {
      year: 2025, type: "Journal",
      authors: "Lu, L., Kwon, H., Wang, W., and 6 more authors",
      title: "Cannabis warning labels, sensory marketing, and electronic word-of-mouth: AI-facilitated textual analysis of a randomized experiment among youth and young adults",
      venue: "International Journal of Advertising",
      codes: ["hlth", "comp"],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/02650487.2025.2548647" }]
    },
    {
      year: 2025, type: "Journal",
      authors: "Minich, M., Cotter, L. M., Kriss, L. A., Lu, L., and 2 more authors",
      title: "Pictorial warning labels reduce sharing intentions, blunt self-relevance processes elicited by social media posts promoting cannabis edibles",
      venue: "Journal of Communication",
      codes: ["hlth"],
      links: [
        { label: "DOI", url: "https://doi.org/10.1093/joc/jqaf012" },
        { label: "PDF", url: "https://linqilu.com/assets/pdf/jqaf012.pdf" }
      ]
    },
    {
      year: 2025, type: "Conference",
      authors: "Kwon, H., Lu, L., Kang, J., and 1 more author",
      title: "Leveraging the power of ChatGPT: Evaluating its effectiveness for content analysis and framing research in mass communication",
      venue: "Proceedings of the 58th Hawaii International Conference on System Sciences",
      codes: ["comp", "frame"],
      links: [{ label: "DOI", url: "https://doi.org/10.24251/HICSS.2025.279" }]
    },
    {
      year: 2024, type: "Preprint",
      authors: "Lu, L., Yu, X., &amp; Perumal Reddy, A.",
      title: "Detecting visual triggers in cannabis imagery: A CLIP-based multi-labeling framework with local-global aggregation",
      venue: "arXiv preprint",
      codes: ["comp", "hlth"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2412.08648" }]
    },
    {
      year: 2024, type: "Preprint",
      authors: "Lu, L., Deng, Y., Tian, C., Yang, S., &amp; Shah, D.",
      title: "Purrfessor: A fine-tuned multimodal LLaVA diet health chatbot",
      venue: "arXiv preprint",
      codes: ["wb"],
      links: [{ label: "arXiv", url: "https://arxiv.org/abs/2411.14925" }]
    },
    {
      year: 2024, type: "Journal",
      authors: "Lu, L., Liu, J., Kim, S. J., and 2 more authors",
      title: "The effects of numerical evidence and message framing in communicating vaccine efficacy",
      venue: "Journal of Health Communication",
      codes: ["hlth", "frame"],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/10810730.2024.2409819" }]
    },
    {
      year: 2024, type: "Journal",
      authors: "Yang, S., Cotter, L. M., Lu, L., and coauthors",
      title: "Countering online marketing and user endorsements with enhanced cannabis warning labels: An online experiment among at-risk youth and young adults",
      venue: "Preventive Medicine",
      codes: ["hlth"],
      links: [{ label: "DOI", url: "https://doi.org/10.1016/j.ypmed.2024.107877" }]
    },
    {
      year: 2024, type: "Journal",
      authors: "Liu, J., McLeod, D. M., &amp; Lu, L.",
      title: "Equivalence framing and the construction of advocacy messages",
      venue: "Journal of Behavioral Decision Making",
      codes: ["frame"],
      links: [{ label: "DOI", url: "https://doi.org/10.1002/bdm.2409" }]
    },
    {
      year: 2024, type: "Journal",
      authors: "Mi, R. Z., Yang, E. F., Tahk, A., Lu, L., and coauthors",
      title: "mHealth engagement for antiretroviral medication adherence among people with HIV and substance use disorders: Observational study",
      venue: "Journal of Medical Internet Research",
      codes: ["hlth"],
      links: [{ label: "DOI", url: "https://doi.org/10.2196/57774" }]
    },
    {
      year: 2024, type: "Journal",
      authors: "Tao, R., Kim, S. J., Lu, L., and coauthors",
      title: "Fighting fire or fighting war: Examining the framing effects of COVID-19 metaphors",
      venue: "Health Communication",
      codes: ["frame", "hlth"],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/10410236.2023.2253398" }]
    },
    {
      year: 2024, type: "Journal",
      authors: "Tao, R., Nguyen, N., Lu, L., and coauthors",
      title: "Learning through rewards: Priming and identification as psychological mechanisms of the effects of LGBTQ+ narratives on inclusive attitudes and behavioral intentions",
      venue: "Media Psychology",
      codes: [],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/15213269.2023.2229233" }]
    },
    {
      year: 2023, type: "Journal",
      authors: "Lu, L., Liu, J., Kim, S. J., and 2 more authors",
      title: "The effects of vaccine efficacy information on vaccination intentions through perceived response efficacy and hope",
      venue: "Journal of Health Communication",
      codes: ["hlth"],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/10810730.2023.2186545" }]
    },
    {
      year: 2023, type: "Journal",
      authors: "Christy, K. R., Mi, R. Z., Tao, R., and 1 more author",
      title: "Disruptive versus nondisruptive advertising in online streaming video services",
      venue: "Journal of Advertising Research",
      codes: [],
      links: [{ label: "DOI", url: "https://doi.org/10.2501/JAR-2023-006" }]
    },
    {
      year: 2022, type: "Journal",
      authors: "Lu, L., Liu, J., Yuan, Y. C., and coauthors",
      title: "Psychological antecedents of COVID-19 information sharing within strong-tie and weak-tie networks",
      venue: "PEC Innovation",
      codes: ["hlth"],
      links: [{ label: "DOI", url: "https://doi.org/10.1016/j.pecinn.2022.100035" }]
    },
    {
      year: 2022, type: "Journal",
      authors: "Lu, L., Liu, J., &amp; Yuan, Y. C.",
      title: "Cultural differences in cancer information acquisition: Cancer risk perceptions, fatalistic beliefs, and worry as predictors of cancer information seeking and avoidance in the U.S. and China",
      venue: "Health Communication",
      codes: ["hlth"],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/10410236.2021.1901422" }]
    },
    {
      year: 2021, type: "Journal",
      authors: "Lu, L., Liu, J., Yuan, Y. C., and coauthors",
      title: "Source trust and COVID-19 information sharing: The mediating roles of emotions and beliefs about sharing",
      venue: "Health Education &amp; Behavior",
      codes: ["hlth"],
      links: [{ label: "DOI", url: "https://doi.org/10.1177/1090198120984760" }]
    },
    {
      year: 2020, type: "Journal",
      authors: "Lu, L., Liu, J., &amp; Yuan, Y. C.",
      title: "Health information seeking behaviors and source preferences between Chinese and U.S. populations",
      venue: "Journal of Health Communication",
      codes: ["hlth"],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/10810730.2020.1806414" }]
    },
    {
      year: 2020, type: "Journal",
      authors: "Liu, J., Su, M. H., McLeod, D. M., Lu, L., and coauthors",
      title: "The effects of framing and advocacy expectancy on belief importance and issue attitude",
      venue: "Mass Communication and Society",
      codes: ["frame"],
      links: [{ label: "DOI", url: "https://doi.org/10.1080/15205436.2020.1728776" }]
    }
  ],

  /* Google Scholar figures go stale; the date is shown next to them. */
  metrics: {
    asOf: "August 2026",
    source: "https://scholar.google.com/citations?user=78Fr7LIAAAAJ&hl=en",
    items: [
      { label: "Citations", value: "352" },
      { label: "h-index", value: "8" },
      { label: "i10-index", value: "8" }
    ]
  },

  /* ---- News ------------------------------------------------------------ */
  news: [
    {
      date: "2026-03-06",
      title: "Undergraduate Research &amp; Creative Activity Award",
      body: "Dr. Lu is PI on a College of Arts &amp; Sciences award funding “Empowering North Dakota Local Business with AI Brand Agents,” an undergraduate research initiative."
    },
    {
      date: "2026-02-02",
      title: "Dr. Lu featured by the UND Department of Communication",
      body: "A new-faculty feature covering health technology, communication, and human–AI interaction."
    }
  ],

  /* ---- Grants ---------------------------------------------------------- */
  grants: [
    {
      year: "2025",
      title: "Empowering North Dakota Local Business with AI Brand Agents",
      funder: "Undergraduate Research / Creative Activity Fund, UND College of Arts &amp; Sciences",
      amount: "",
      role: "Lu (PI)"
    }
  ],

  /* ---- Teaching -------------------------------------------------------- */
  teaching: [
    {
      org: "University of North Dakota",
      courses: [
        {
          code: "COMM 451",
          name: "Risk and Crisis Communication",
          term: "Fall 2025",
          level: "Undergraduate",
          body: "How individuals, organizations, and public agencies communicate under uncertainty, with attention to theory, strategy, and case applications."
        },
        {
          code: "COMM 516",
          name: "Principles of Professional Communication",
          term: "Fall 2025",
          level: "Graduate",
          body: "A conceptual and historical overview of communication as a discipline, with major theories and their application in professional contexts."
        }
      ]
    },
    {
      org: "University of Wisconsin–Madison",
      courses: [
        {
          code: "J564",
          name: "Media and the Consumer",
          term: "Fall 2023",
          level: "4 lab sections · 100 students",
          body: "Interactive workshops on data-driven media analysis, strategic communication, and consumer behavior.",
          eval: "4.30 / 5.00"
        },
        {
          code: "J203",
          name: "Information for Communication",
          term: "Spring 2023",
          level: "50 students",
          body: "Fact-checking, evidence-based storytelling, and data analysis and visualization.",
          eval: "4.68 / 5.00"
        },
        {
          code: "J564",
          name: "Media and the Consumer",
          term: "Fall 2022",
          level: "4 lab sections · 100 students",
          body: "Interactive workshops on data-driven media analysis, strategic communication, and consumer behavior.",
          eval: "4.72 / 5.00"
        }
      ]
    }
  ],

  /* ---- Resources ------------------------------------------------------- */
  resources: [
    {
      name: "philosopher-debates",
      kind: "Code",
      body: "Source for the AI Philosopher NPC debate simulations.",
      url: "https://github.com/LynLinqiLu/philosopher-debates"
    },
    {
      name: "Visual framing benchmark (HICSS-59)",
      kind: "Paper",
      body: "Theory-driven benchmark for evaluating vision–language models on news imagery.",
      url: "https://linqilu.com/assets/pdf/HICSS26-final.pdf"
    },
    {
      name: "Purrfessor",
      kind: "Paper",
      body: "Fine-tuned multimodal LLaVA diet health chatbot, arXiv 2411.14925.",
      url: "https://arxiv.org/abs/2411.14925"
    },
    {
      name: "CLIP multi-labeling framework",
      kind: "Paper",
      body: "Detecting visual triggers in cannabis imagery, arXiv 2412.08648.",
      url: "https://arxiv.org/abs/2412.08648"
    },
    {
      name: "GitHub · LynLinqiLu",
      kind: "Profile",
      body: "Code released alongside lab papers.",
      url: "https://github.com/LynLinqiLu"
    }
  ],

  /* ---- Contact --------------------------------------------------------- */
  contact: {
    address: ["O'Kelly Hall, Room 222", "221 Centennial Drive, Stop 7169", "Grand Forks, ND 58202-7169"],
    email: "linqi.lu@und.edu",
    directory: "https://campus.und.edu/directory/linqi.lu",
    department: "https://und.edu/programs/communication-ba/"
  }
};
