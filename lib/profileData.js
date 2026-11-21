export const PROFILE = {
  name: 'Ata Tolga Dulun',
  handle: 'Whattyu',
  githubUsername: 'atatolgadln',
  location: 'Turkey',
  email: 'dulunatatolga@gmail.com',
  siteUrl: 'https://whattyu.vercel.app',
  avatarUrl: 'https://avatars.githubusercontent.com/u/71334131?v=4',
  headline:
    'Software developer building web apps, practical ML tools, and native mobile experiences.',
  bio: 'I am Ata Tolga Dulun (Whattyu), a developer from Turkey. I build full-stack web apps with React & Next.js, Python machine learning pipelines, Kotlin Android apps, and Discord automation.',
}

export const PROJECTS = [
  {
    id: 'staj_proje',
    title: 'Kasko Value Predictor',
    tag: 'ML & Backend',
    year: '2026',
    summary:
      'FastAPI and XGBoost web application predicting Turkish vehicle insurance (kasko) values using historical kasko, EVDS USD exchange rate, and TÜFE datasets.',
    tech: ['Python', 'FastAPI', 'XGBoost', 'scikit-learn'],
    repoUrl: 'https://github.com/atatolgadln/staj_proje',
    liveUrl: null,
  },
  {
    id: 'tasks',
    title: 'Tasks Android App',
    tag: 'Android',
    year: '2025',
    summary:
      'Native Kotlin Android medication and daily task tracker with Room persistence, Material Design, scheduled reminders, and a home-screen widget.',
    tech: ['Kotlin', 'Android SDK', 'Room DB', 'Material'],
    repoUrl: 'https://github.com/atatolgadln/tasks',
    liveUrl: null,
  },
  {
    id: 'cariye-plus',
    title: 'Cariye+',
    tag: 'Discord & Web',
    year: '2023',
    summary:
      'Multipurpose Discord bot and Express web companion featuring voice/music playback, XP leveling, giveaways, and Firebase integration.',
    tech: ['Node.js', 'Discord.js', 'Express', 'Firebase'],
    repoUrl: 'https://github.com/atatolgadln/CariyePlus',
    liveUrl: 'https://top.gg/bot/849663572308918343',
  },
  {
    id: 'todo',
    title: 'Animated To-Do',
    tag: 'Web App',
    year: '2022',
    summary:
      'Snappy, smoothly animated task manager built with SvelteKit, AutoAnimate, and Playwright E2E tests.',
    tech: ['SvelteKit', 'JavaScript', 'Playwright'],
    repoUrl: 'https://github.com/atatolgadln/todo',
    liveUrl: 'https://todo-whattyu.vercel.app',
  },
]

export const EXPERIENCE = [
  {
    period: '2026',
    role: 'ML & Backend Intern',
    title: 'Kasko Value Predictor',
    description:
      'Built an end-to-end FastAPI + XGBoost prediction pipeline integrating historical kasko, EVDS USD exchange rate, and TÜFE datasets.',
  },
  {
    period: '2025',
    role: 'Android Developer',
    title: 'Tasks Android App',
    description:
      'Designed and built a native Kotlin Android app with Room database persistence, scheduled reminders, and a home-screen widget.',
  },
  {
    period: '2021 – 2023',
    role: 'Bot & Web Developer',
    title: 'Cariye+ Bot',
    description:
      'Developed the Express web companion and Discord.js bot architecture with voice playback, XP leveling, and Firebase integration.',
  },
  {
    period: '2020',
    role: 'Creator & Maintainer',
    title: 'Cariye Bot',
    description:
      'Launched my first public Discord bot on Top.gg, starting my journey into JavaScript, Node.js, and web engineering.',
  },
]

export const SKILL_GROUPS = [
  {
    label: 'Web',
    items: ['JavaScript', 'React', 'Next.js', 'SvelteKit', 'HTML / CSS'],
  },
  {
    label: 'Backend & ML',
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'XGBoost', 'MongoDB'],
  },
  {
    label: 'Mobile & Tooling',
    items: ['Kotlin', 'Android SDK', 'Room DB', 'Git', 'Vercel'],
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
