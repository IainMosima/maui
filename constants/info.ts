/* eslint-disable import/no-anonymous-default-export */

import { Images } from ".";



const links = [
    {
        subject: 'ENERGY',
        link: '#'
    },
    {
        subject: 'UTILITIES',
        link: '#'
    },
    {
        subject: 'CONSTRUCTION',
        link: '#'
    },
    {
        subject: 'MINING',
        link: '#'
    },
    {
        subject: 'MANUFACTURING',
        link: '#'
    }
];

const virtualLabs = ['24/7', 'cost effective', 'safe', 'interactive', 'personalized'];

const vRImporttance = [
    "Faster repairs and reduced downtime: Train for complex scenarios with simulated failures based on real CAD designs and schematics.",
    "Expert-level engineers, ready for anything: Maui personalizes training, drilling your team on critical maintenance, overhauls, and installations.",
    "Safety first: Practice procedures in a safe, virtual environment before tackling real-world challenges.",
    "Streamlined efficiency: Eliminate costly travel and external contractors. Train your team in-house, on-demand."
];

const founders = [
    {
        name: "Winston Karanja",
        role: "Engineering",
        profile: Images.winston
    },
    {
        name: "Kevin Geita",
        role: "Founder",
        profile: Images.geita
    },
    {
        name: "Iain Mosima",
        role: "Developer",
        profile: Images.iain
    },

];

const explantion = [
    {
        title: "MAUI: Where Industrial Training Gets Real",
        body: "The Frustration: Imagine this: critical industrial training delivered through dusty manuals and forgettable lectures. Yawn. It's a recipe for disengaged workers, knowledge gaps, and costly downtime. That's the reality for many companies today.",
        image: Images.training
    },
    {
        title: "The MAUI Mission:",
        body: "We're a passionate crew on a mission to smash that outdated training model. We envision a future where industrial learning is immersive, personalized, and downright engaging.",
        image: Images.mission
    },
    {
        title: "The MAUI Magic:",
        body: "How? Introducing our next-gen VR training platform.  Think: ditch the textbooks, step into hyper-realistic simulations that mirror real-world industrial settings.  AI tailors the experience to each user, ensuring optimal learning.  Plus, we use cutting-edge generative AI to transform dry manuals into interactive VR experiences that actually stick.",
        image: Images.magic
    },
    {
        title: "The Impact:",
        body: "It's not just about ticking training boxes. By empowering workers with the skills they need to thrive, we're boosting safety, efficiency, and unlocking the full potential of the industrial workforce.  Imagine training that's a gateway to mastery, not a chore.\n Join the MAUI revolution. Let's redefine industrial training, together.",
        image: Images.impact
    },
    
]

export default {
    links, 
    virtualLabs,
    vRImporttance,
    founders,
    explantion,
}