export const PROFILE = {
  name: 'Ata Tolga Dulun',
  handle: 'Whattyu',
  githubUsername: 'atatolgadln',
  location: 'Turkey',
  email: 'dulunatatolga@gmail.com',
  siteUrl: 'https://whattyu.vercel.app',
  avatarUrl: 'https://avatars.githubusercontent.com/u/71334131?v=4',
  headline:
    'Building web apps, practical ML tools, and software that feels effortless.',
  bio: 'I am Ata Tolga Dulun (Whattyu), a software developer based in Turkey. Since 2020 I have been building full-stack web applications with React and Next.js, Python machine learning tools, native Kotlin Android apps, and Discord bots.',
}

export const PROJECTS = [
  {
    id: 'staj_proje',
    title: 'Kasko Value Predictor',
    category: 'ML & Python',
    year: '2026',
    summary:
      'Python FastAPI & XGBoost web application predicting Turkish vehicle insurance (kasko) values using historical kasko, EVDS USD exchange rate, and TÜFE (CPI) datasets.',
    tech: ['Python', 'FastAPI', 'XGBoost', 'pandas', 'scikit-learn'],
    repoUrl: 'https://github.com/atatolgadln/staj_proje',
    liveUrl: null,
    featured: true,
  },
  {
    id: 'tasks',
    title: 'Tasks Android App',
    category: 'Mobile',
    year: '2025',
    summary:
      'Native Kotlin Android medication and daily task tracker with Room persistence, Material Design, morning/evening schedules, and a home-screen widget.',
    tech: ['Kotlin', 'Android SDK', 'Room DB', 'Material Design'],
    repoUrl: 'https://github.com/atatolgadln/tasks',
    liveUrl: null,
    featured: true,
  },
  {
    id: 'cariye-plus',
    title: 'Cariye+ Discord Bot',
    category: 'Bots & Tools',
    year: '2023',
    summary:
      'Multipurpose Discord bot and Express web companion featuring voice/music playback, XP leveling, giveaways, and Firebase integration.',
    tech: ['Node.js', 'Discord.js v14', 'Express', 'Firebase'],
    repoUrl: 'https://github.com/atatolgadln/CariyePlus',
    liveUrl: 'https://top.gg/bot/849663572308918343',
    featured: true,
  },
  {
    id: 'todo',
    title: 'Animated To-Do',
    category: 'Web',
    year: '2022',
    summary:
      'Fast, smoothly animated task list built with SvelteKit, AutoAnimate, and automated Playwright testing.',
    tech: ['SvelteKit', 'JavaScript', 'Playwright'],
    repoUrl: 'https://github.com/atatolgadln/todo',
    liveUrl: 'https://todo-whattyu.vercel.app',
    featured: false,
  },
  {
    id: 'tictactoe',
    title: 'Tic-Tac-Toe',
    category: 'Web',
    year: '2024',
    summary:
      'Crisp browser-based Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/atatolgadln/tictactoe',
    liveUrl: 'https://tictactoe-eight-xi.vercel.app',
    featured: false,
  },
  {
    id: 'jcommands',
    title: 'JCommands',
    category: 'Bots & Tools',
    year: '2022',
    summary:
      'Java library built with Gradle to streamline command, listener, embed, and button handling for the JDA Discord API.',
    tech: ['Java', 'Gradle', 'JDA'],
    repoUrl: 'https://github.com/atatolgadln/JCommands',
    liveUrl: null,
    featured: false,
  },
  {
    id: 'ytdownloader',
    title: 'YouTube Downloader',
    category: 'Bots & Tools',
    year: '2023',
    summary:
      'Lightweight Node.js & Express web utility for fetching YouTube videos by format and quality.',
    tech: ['Node.js', 'Express', 'HTML/CSS'],
    repoUrl: 'https://github.com/atatolgadln/ytdownloader',
    liveUrl: null,
    featured: false,
  },
  {
    id: 'whmain',
    title: 'Portfolio v1 (whmain)',
    category: 'Web',
    year: '2023',
    summary:
      'Earlier personal portfolio crafted with Next.js, Framer Motion animations, and Zustand state management.',
    tech: ['Next.js', 'React', 'Framer Motion', 'Zustand'],
    repoUrl: 'https://github.com/atatolgadln/whmain',
    liveUrl: 'https://whmain.vercel.app',
    featured: false,
  },
]

export const EXPERIENCE = [
  {
    period: '2026',
    role: 'ML & Backend Intern Project',
    title: 'Kasko Value Predictor (staj_proje)',
    description:
      'Built an end-to-end FastAPI + XGBoost prediction pipeline integrating EVDS USD and TÜFE economic datasets.',
  },
  {
    period: '2025',
    role: 'Android Developer',
    title: 'Tasks Mobile App',
    description:
      'Designed and built a native Kotlin Android app with Room database, scheduled reminders, and home-screen widget support.',
  },
  {
    period: '2021 – 2023',
    role: 'Web & Bot Developer',
    title: 'Cariye+ Bot',
    description:
      'Developed the Express web companion and Discord.js v14 bot architecture with leveling, music, and Firebase backing.',
  },
  {
    period: '2020 – 2021',
    role: 'Creator & Owner',
    title: 'Cariye Bot',
    description:
      'Launched my first public Discord bot on Top.gg, kicking off my journey into JavaScript, Node.js, and web engineering.',
  },
]

export const SKILL_GROUPS = [
  {
    label: 'Frontend',
    items: ['JavaScript', 'React', 'Next.js', 'SvelteKit', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend & ML',
    items: [
      'Node.js',
      'Express',
      'Python',
      'FastAPI',
      'XGBoost',
      'pandas',
      'scikit-learn',
      'MongoDB',
    ],
  },
  {
    label: 'Mobile & Bots',
    items: ['Kotlin', 'Android SDK', 'Room DB', 'Java', 'Discord.js'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'GitHub', 'Vercel', 'Gradle', 'Playwright', 'VS Code'],
  },
]

export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/atatolgadln',
    handle: '@atatolgadln',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/atatolgadln',
    handle: '@atatolgadln',
  },
  {
    id: 'discord',
    label: 'Discord',
    href: 'https://discord.com/users/496328012741214208',
    handle: 'Whattyu',
  },
  {
    id: 'spotify',
    label: 'Spotify',
    href: 'https://open.spotify.com/user/cu57r3p9d29xbqdk4x31yip0o',
    handle: 'Spotify',
  },
  {
    id: 'steam',
    label: 'Steam',
    href: 'https://steamcommunity.com/profiles/76561198875234467',
    handle: 'Steam',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:dulunatatolga@gmail.com',
    handle: 'dulunatatolga@gmail.com',
  },
]
