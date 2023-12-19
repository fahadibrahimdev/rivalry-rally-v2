import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Say Hello to a Game Changer… Literally.',
    text: 'FairFight is a platform where users get to create and stream informal contests, whenever they like, from anywhere in the world, of competition of their choice. You call it free reign to make and watch your tournaments and games, we call it FairFight. It’s like Street Fighter meets the Queen’s Gambit meets Spelling Bee meets some random TikTok dance-off in one place. Let us explain...',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Discover Features',
    features: [
        {
            title: 'Create Events ',
            description: 'You can organize everything and anything from a design-a-better-rocket-than-Elon, to a high-stakes eye staring contest. ',
            icon: 'small-calendar'
        },
        {
            title: 'Spectate',
            description: 'You will not be able to take your eyes off of some (we mean all) of these contests. ',
            icon: 'binoculars'
        },
        {
            title: 'Participate ',
            description: 'FairFight rewards don’t grow on trees; earning rewards means popularity which means people will want a selfie with you on the street.  ',
            icon: 'spectators'
        },
        {
            title: 'Wager',
            description: 'Las Vegas what? Just tap into the FairFight app Janice!',
            icon: 'gambler'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'We are empowering you - give it to the man/ be a FairFight pro yet a couch potato/ test that wager intuition/ the FairFight world is your oyster. You can organize your own competitions (he** invent a new sport if you want), and make money off pay per view and bet winnings.',
        'We don\'t like to wait - We never understood game seasons and that is why you can arrange a competition any time you like. It can be any competition you like. You can even fight a Kangaroo as long as it\'s PETA approved.',
        'We are all about inclusivity - You can organize your next competition from anywhere in the world with participants and audiences from places like the north pole or the Vatican City, even the Olympics cannot do that.',
        'We are judgy - But in a good way. We take our competitions seriously, and every event is designed with the proper facets in place.'
    ],
}

export const benefitsContent = {
    heading: 'We Know What You are Thinking: Sheesh, it\'s About Time!',
    text: 'We are the Playground everyone who has ever walked this earth has wanted. FairFight is the first app of its kind that brings everything under one umbrella. The platform works as an interactive space as well as a place for content absorption and a source of making money via event creation and placing bets.',
    benefits: [
        {
            title: 'Online Streaming',
            description: 'Remember those people having the time of their life, away from the routine grind of 2nd Century Rome at the Colosseum in the movie Gladiator? That could be you, except life is much better and no one is dying.',
            icon: 'play-video'
        },
        {
            title: 'Pay Per View',
            description: 'Pay per view on “exclusive events” can totally pay the bills, and then some. ',
            icon: 'dollar-eye'
        },
        {
            title: 'Search Events ',
            description: 'With so many competitions in the FairFight universe, users can filter the kind of events they prefer. ',
            icon: 'search'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is FairFight Compatible with Android or iOS?',
            answer: 'FairFight is available on both Android and iOS devices. ',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'Please get in touch with one of our representatives using the feedback and support information provided below.',

        },
        {
            question: 'How do I sign up?',
            answer: 'Click on the pre-registration button and input your details.',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Seriously?! You are still scrolling?',
    text: 'What are you waiting for? Sign up to download FairFight as soon as it comes out.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    whyUsBtn: `Why ${siteName}?`,
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
