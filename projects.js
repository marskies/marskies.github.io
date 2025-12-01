// projects.js - Single source of truth for all portfolio projects
// Update this file to update project info across all category pages

const PROJECTS = {
    "tick-tock-trivia": {
        id: "tick-tock-trivia",
        title: "Tick Tock Trivia",
        subtitle: "Fast-paced Party Trivia Game",
        award: "🏆 Best in Show",
        roles: ["pm", "uiux", "research"],
        timeline: "3 Months",
        teamSize: "2 Developers",
        tools: ["Unity", "Figma", "ChatGPT API"],
        links: {
            play: "https://marskies.itch.io/tick-tock-trivia",
            caseStudy: "https://www.behance.net/gallery/221393629/Tick-Tock-Trivia"
        },
        thumbnail: "images/tick-tock-thumb.png",
        // Role-specific descriptions for category pages
        roleDescriptions: {
            pm: "Led cross-functional team through full game development cycle, coordinating designers, developers, and audio specialists to deliver award-winning party game on schedule with ChatGPT integration and cross-platform support.",
            uiux: "Designed playful scrapbook-style 2D aesthetics and intuitive game interfaces. Created accessibility-first design system with clear fonts, full mouse support, and careful color contrast for inclusive gameplay.",
            research: "Conducted bi-weekly playtesting sessions to iterate on pressure mechanics and question pacing. Gathered player feedback that shaped the final ChatGPT integration and difficulty balancing."
        }
    },
    
    "cosmic-catch": {
        id: "cosmic-catch",
        title: "Cosmic Catch",
        subtitle: "Cozy Rhythm Fishing Adventure",
        award: "🏆 Most Innovative",
        roles: ["pm", "uiux"],
        timeline: "10 Hours (Create-A-Thon)",
        teamSize: "5 Members",
        tools: ["Unity", "Procreate", "Canva"],
        links: {
            play: "https://marskies.itch.io/cosmic-catch",
            caseStudy: "https://www.behance.net/gallery/235381691/Cosmic-Catch-Post-Mortem"
        },
        thumbnail: "images/cosmic-catch-thumb.png",
        roleDescriptions: {
            pm: "Managed 10-hour Create-A-Thon team of 5 members, coordinating rapid prototyping and asset creation. Made critical pivot decisions when programming challenges arose, redirecting team toward polished concept presentation.",
            uiux: "Designed the core gameplay loop UX and created all UI elements including collection screens, button states, and transitions. Developed visual language that merged rhythm and fishing mechanics into cohesive player experience."
        }
    },
    
    "yuumi-chan": {
        id: "yuumi-chan",
        title: "Yuumi-Chan: Rent is Due!",
        subtitle: "Cozy Life Simulation Game",
        roles: ["pm", "research"],
        timeline: "4 Months",
        teamSize: "25 Members",
        tools: ["Unity", "Jira", "Figma", "Miro"],
        links: {
            play: "#",
            caseStudy: "#"
        },
        thumbnail: "images/yuumi-chan-thumb.png",
        roleDescriptions: {
            pm: "Coordinated 25-person development team across Programming, Art, Design, and Audio departments. Led design alignment meetings, managed art deliverables, and guided project through playtesting phases to Gold milestone.",
            research: "Analyzed feedback from 11 playtesters to prioritize bug fixes and feature improvements. Synthesized qualitative data into actionable recommendations that shaped final gameplay polish."
        }
    },
    
    "startea": {
        id: "startea",
        title: "StarTea",
        subtitle: "Wellness Brand Website",
        roles: ["pm", "uiux", "research"],
        timeline: "30 Days • 5 Phases",
        teamSize: "3 Members",
        tools: ["Figma", "User Testing", "WCAG"],
        links: {
            prototype: "https://www.figma.com/proto/tesZsdQUWD0p7IYD3rt1K0/StarTea-Prototype?node-id=3464-260&p=f&t=YDZQVPc8CwuxfEOy-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
            caseStudy: "https://www.behance.net/gallery/235886391/StarTea-Website-Design"
        },
        thumbnail: "images/startea-thumb.png",
        roleDescriptions: {
            pm: "Created comprehensive project plan with 5 strategic phases. Managed 50+ tasks across parallel workstreams, facilitated group reviews, and ensured team hit all success criteria within 30-day timeline.",
            uiux: "Developed content strategy and tone guide. Led accessibility compliance checks throughout design process, ensuring WCAG AA standards. Created wireframes and validated information architecture through user testing.",
            research: "Conducted user interviews and synthesized findings into actionable personas. Led usability testing with 6 participants, translating feedback into prioritized design improvements."
        }
    },
    
    "social-media-cys": {
        id: "social-media-cys",
        title: "Social Media Campaign",
        subtitle: "Strategic Marketing at CYS",
        roles: ["pm"],
        timeline: "6 Months",
        teamSize: "Marketing Team",
        tools: ["CRM", "Analytics", "Content Planning"],
        links: {},
        thumbnail: "images/social-media-thumb.png",
        roleDescriptions: {
            pm: "Orchestrated high-impact social media campaigns generating 6,332 views and over 60% follower interaction in one month. Streamlined lead tracking and CRM engagement, achieving top leasing performance through strategic execution."
        }
    },
    
    "nutrition-app": {
        id: "nutrition-app",
        title: "Nutrition Tracking App",
        subtitle: "AI-Powered Food Logging",
        roles: ["uiux"],
        timeline: "In Development",
        teamSize: "Solo Project",
        tools: ["Figma", "Lovable", "n8n", "AI Image Analysis"],
        links: {},
        thumbnail: "images/nutrition-app-thumb.png",
        roleDescriptions: {
            uiux: "Designing mobile application for intuitive nutrition tracking with AI image analysis. Focused on frictionless food logging, personalized insights visualization, and accessible data presentation."
        }
    },
    
    "uf-club-software": {
        id: "uf-club-software",
        title: "UF Club Software",
        subtitle: "University Platform Usability Study",
        roles: ["uiux", "research"],
        timeline: "Summer 2025",
        teamSize: "UX Research Team",
        tools: ["Figma", "User Testing", "Accessibility Audits"],
        links: {},
        thumbnail: "images/uf-club-thumb.png",
        roleDescriptions: {
            uiux: "Developed Figma-based prototypes to communicate research-backed solutions. Designed wireframes addressing identified usability issues and accessibility gaps in current platform.",
            research: "Directed comprehensive usability testing to evaluate UF's club software platform. Audited accessibility to uncover user pain points and inclusivity gaps affecting student organizations."
        }
    },
    
    "ice-accessibility": {
        id: "ice-accessibility",
        title: "ICE Accessibility Audit",
        subtitle: "Digital Platform WCAG Compliance",
        roles: ["uiux", "research"],
        timeline: "Summer 2024",
        teamSize: "Customer Experience Team",
        tools: ["WCAG 2.1", "Accessibility Testing", "UX Documentation"],
        links: {},
        thumbnail: "images/ice-audit-thumb.png",
        roleDescriptions: {
            uiux: "Synthesized employee feedback into strategic UX recommendations and presentation materials. Proposed design improvements addressing identified accessibility barriers.",
            research: "Audited digital platforms for WCAG 2.1 compliance, driving accessibility enhancements. Boosted survey response rates by 333% through personalized outreach and timing strategies."
        }
    },
    
    "insane-wizard": {
    id: "insane-wizard",
    title: "Insane Wizard Goes Crazy Everywhere",
    subtitle: "Chaotic Action Game",
    roles: ["pm", "uiux"],
    timeline: "2 Weeks",
    teamSize: "6 Members",
    tools: ["Unity", "Canva", "Itch.io"],
    links: {
        play: "https://marskies.itch.io/iwgce"
    },
    thumbnail: "images/insane-wizard-thumb.png",
    roleDescriptions: {
        pm: "Created task lists for all departments and managed scope within timeline constraints. Organized meetings, took notes, and aligned scope with teammates' capacities while supporting deadlines.",
        uiux: "Researched competitive analysis and crosshair accuracy communication. Iterated on HUD designs for optimal player feedback, communicated implementation methods to developers, and workshopped iterations with team."
    }
}
        };

// Helper function to get projects by role
function getProjectsByRole(role) {
    return Object.values(PROJECTS).filter(project => project.roles.includes(role));
}

// Helper function to get role display name
function getRoleDisplayName(roleId) {
    const roleNames = {
        pm: "Project Management",
        uiux: "UI/UX Design",
        research: "User Research"
    };
    return roleNames[roleId] || roleId;
}

// Helper function to get role badge color
function getRoleBadgeClass(roleId) {
    const roleClasses = {
        pm: "role-pm",
        uiux: "role-uiux",
        research: "role-research"
    };
    return roleClasses[roleId] || "";
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS, getProjectsByRole, getRoleDisplayName, getRoleBadgeClass };
}
