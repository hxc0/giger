import {
    IUserPrivate,
    IUserPublic,
    UserRoles,
    UserTypes,
    Vibe,
    VibeEngagement,
    WealthLevels
} from '../models/user';
import { mockCriminalRecord } from './criminal';
import { goals } from './goals';
import { mockMedicalHistory } from './medical';
import { meta } from './meta';
import { privateRecords } from './privateRecords';
import { relations } from './relations';

export const users: IUserPrivate[] = [
    {
        id: 'user1',
        name: 'John',
        surname: 'Doe',
        aliasMap: {},
        handle: 'NeonShadow',
        age: 30,
        cyberwareLevel: 15,
        professionActual: 'Hacker',
        professionPublic: 'Night Guard',
        typePublic: UserTypes.HUMAN,
        typeActual: UserTypes.HUMAN,
        wealthLevel: WealthLevels.AFFLUENT,
        assets: ['Augmented Reality Glasses', 'Neural Implant'],
        hackingSkill: 0,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 0,
        talkativeVsSilent: 0,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Hacker',
        vibeEngagement: VibeEngagement.DISINTERESTED
    },
    {
        id: 'user2',
        name: 'Jane',
        surname: 'Smith',
        aliasMap: {},
        handle: 'CipherByte',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user3',
        name: 'Alex',
        surname: 'Johnson',
        aliasMap: {},
        handle: 'RogueEdge',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user4',
        name: 'Emma',
        surname: 'Brown',
        aliasMap: {},
        handle: 'ViperTech',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user5',
        name: 'Michael',
        surname: 'Davis',
        aliasMap: {},
        handle: 'ZeroGrim',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user6',
        name: 'Olivia',
        surname: 'Wilson',
        aliasMap: {},
        handle: 'NyxHacker',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user7',
        name: 'William',
        surname: 'Martinez',
        aliasMap: {},
        handle: 'SableWraith',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user8',
        name: 'Sophia',
        surname: 'Anderson',
        aliasMap: {},
        handle: 'ChromeVixen',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user9',
        name: 'Daniel',
        surname: 'Johnson',
        aliasMap: {},
        handle: 'BladeRunner',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user10',
        name: 'Isabella',
        surname: 'Taylor',
        aliasMap: {},
        handle: 'NovaSlinger',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user11',
        name: 'Ethan',
        surname: 'Thomas',
        aliasMap: {},
        handle: 'RenegadeAI',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,

        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user12',
        name: 'Ava',
        surname: 'Jackson',
        aliasMap: {},
        handle: 'SynthVanguard',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user13',
        name: 'Matthew',
        surname: 'Harris',
        aliasMap: {},
        handle: 'PixelNomad',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user14',
        name: 'Oliver',
        surname: 'Miller',
        aliasMap: {},
        handle: 'EchoCyber',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [UserRoles.INFLUENCER],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user15',
        name: 'Sofia',
        surname: 'Lewis',
        aliasMap: {},
        handle: 'CrimsonWisp',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user16',
        name: 'Lucas',
        surname: 'Moore',
        aliasMap: {},
        handle: 'SpectralShade',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user17',
        name: 'Emma',
        surname: 'Brown',
        aliasMap: {},
        handle: 'BinaryPhantom',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user18',
        name: 'Ella',
        surname: 'Wilson',
        aliasMap: {},
        handle: 'CyberWanderer',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user19',
        name: 'Alexander',
        surname: 'Rodriguez',
        aliasMap: {},
        handle: 'NebulaStrider',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user20',
        name: 'Liam',
        surname: 'Clark',
        aliasMap: {},
        handle: 'RogueSynapse',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user21',
        name: 'Mia',
        surname: 'Rodriguez',
        aliasMap: {},
        handle: 'NeonVigilante',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user22',
        name: 'Ava',
        surname: 'Martin',
        aliasMap: {},
        handle: 'TechWraith',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user23',
        name: 'James',
        surname: 'Thompson',
        aliasMap: {},
        handle: 'HoloGhost',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user24',
        name: 'ChatGPT',
        surname: 'AI',
        aliasMap: {},
        handle: 'SelfAwareCode',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,

        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user25',
        name: 'Elijah',
        surname: 'Perez',
        aliasMap: {},
        handle: 'ShadowCircuit',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user26',
        name: 'Harper',
        surname: 'Scott',
        aliasMap: {},
        handle: 'VaporByte',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user27',
        name: 'Sophia',
        surname: 'Young',
        aliasMap: {},
        handle: 'CyberSlinger',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user28',
        name: 'Daniel',
        surname: 'Mitchell',
        aliasMap: {},
        handle: 'SonicWired',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,

        roles: [],
        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user29',
        name: 'Lucas',
        surname: 'Lee',
        aliasMap: {},
        handle: 'VoidRider',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user30',
        name: 'Ella',
        surname: 'Turner',
        aliasMap: {},
        handle: 'ChaosCipher',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user31',
        name: 'Liam',
        surname: 'Robinson',
        aliasMap: {},
        handle: 'SynthWanderer',
        age: 35,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user32',
        name: 'Aria',
        surname: 'Hall',
        aliasMap: {},
        handle: 'NyxShadow',
        age: 30,
        cyberwareLevel: 7,
        professionActual: 'Corporate Infiltrator',
        professionPublic: 'Courier',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['Corporate Espionage Toolkit', 'Advanced Stealth Suit'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Corporate Infiltrator',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user33',
        name: 'Benjamin',
        surname: 'Wood',
        aliasMap: {},
        handle: 'CrimsonBinary',
        age: 28,
        cyberwareLevel: 0,
        professionActual: 'AI Developer',
        professionPublic: 'Software Engineer',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.AI,
        assets: ['AI Creation Software', 'Smart Home Network'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.SW4RM,
        vibeFunction: 'AI Developer',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user34',
        name: 'Scarlett',
        surname: 'Baker',
        aliasMap: {},
        handle: 'ChronoHacker',
        age: 33,
        cyberwareLevel: 3,
        professionActual: 'Temporal Hacker',
        professionPublic: 'Temporal Hacker',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.HUMAN,
        assets: ['Temporal Manipulator Device', 'Time-Sensitive Data'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.OVERSEERS,
        vibeFunction: 'Temporal Hacker',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: 'user35',
        name: 'Henry',
        surname: 'Nelson',
        aliasMap: {},
        handle: 'StaticPhantom',
        age: 28,
        cyberwareLevel: 12,
        professionActual: 'Cyber Saboteur',
        professionPublic: 'Cyber Saboteur',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.ANDROID,
        assets: ['EMP Grenades', 'Customized Cyberdeck'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: [],
        meta: [],
        goals: [],
        relations: [],
        vibe: Vibe.OVERSEERS,
        vibeFunction: 'Cyber Saboteur',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: '55566ssaa5',
        aliasMap: {},
        handle: 'NeonTiger69',
        name: 'Johnny',
        surname: 'Sasaki',
        age: 40,
        cyberwareLevel: 4,
        professionActual: 'Hacker Veteran',
        professionPublic: 'Cook',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.HUMAN,
        assets: ['Retro Computer Collection', 'Hacker Manifesto'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,
        roles: [],

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: ['user3', 'user7', 'user18', 'user19', 'user20'],
        active: true,
        privateRecords: privateRecords,
        meta: meta,
        goals: goals,
        relations: relations,
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Hacker',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    },
    {
        id: '55566ssaa5ADMIN',
        aliasMap: {},
        handle: 'NeonTiger69',
        name: 'Johnny',
        surname: 'Sasaki',
        age: 40,
        cyberwareLevel: 4,
        professionActual: 'Hacker Veteran',
        professionPublic: 'Cook',
        typeActual: UserTypes.HUMAN,
        typePublic: UserTypes.HUMAN,
        roles: [UserRoles.ADMIN],
        assets: ['Retro Computer Collection', 'Hacker Manifesto'],
        hackingSkill: 3,
        confrontationVsNegotiation: 0,
        cowardVsFighter: 1,
        talkativeVsSilent: 4,
        thinkerVsDoer: 0,

        combatSkill: 0,
        criminalRecord: mockCriminalRecord,
        medHistory: mockMedicalHistory,
        favoriteUserIds: [],
        active: true,
        privateRecords: privateRecords,
        meta: meta,
        goals: goals,
        relations: relations,
        vibe: Vibe.DIGIEVO,
        vibeFunction: 'Hacker',
        vibeEngagement: VibeEngagement.DISINTERESTED,
        wealthLevel: WealthLevels.AFFLUENT
    }
];

export const systemUser: IUserPrivate = {
    id: 'XXXX',
    aliasMap: {},
    handle: 'SYSTEM',
    name: 'GIGER_SYSTEM',
    surname: 'GIGER_SYSTEM',
    age: 0,
    cyberwareLevel: 15,
    professionPublic: 'GIGER_SYSTEM',
    professionActual: 'GIGER_SYSTEM',
    typeActual: UserTypes.AI,
    typePublic: UserTypes.AI,
    assets: ['GIGER_SYSTEM'],
    hackingSkill: 3,
    confrontationVsNegotiation: 4,
    cowardVsFighter: 4,
    talkativeVsSilent: 4,
    thinkerVsDoer: 0,
    roles: [],

    combatSkill: 0,
    criminalRecord: mockCriminalRecord,
    medHistory: mockMedicalHistory,
    favoriteUserIds: [],
    active: true,
    privateRecords: [],
    meta: [],
    goals: [],
    relations: [],
    vibe: Vibe.NO_VIBE,
    vibeFunction: 'GIGER_SYSTEM',
    vibeEngagement: VibeEngagement.FANATIC,
    wealthLevel: WealthLevels.ELITE
};

export const ripperdoc = users[3];
export const fixer = users[8];
export const netrunner = users[2];
export const runner = users[7];
export const tech = users[9];
export const assassin = users[10];
export const merc = users[12];
export const hiredGun = users[13];
export const hacker = users[14];
export const mockplayer = users[35];

export const getUserPublicDataById = (userId: string): IUserPublic => {
    const user = users.find((u) => u.id === userId);

    if (!user) {
        throw new Error(`User with id ${userId} not found`);
    }

    return {
        id: user.id,
        aliasMap: user.aliasMap,
        handle: user.handle,
        name: user.name,
        surname: user.surname,
        age: user.age,
        professionPublic: user.professionPublic,
        typePublic: user.typePublic,
        active: user.active,
        vibe: user.vibe,
        roles: user.roles,
        wealthLevel: user.wealthLevel
    };
};

export const getUserPublicDataByHandle = (handle: string): IUserPublic => {
    const user = users.find((u) => u.handle === handle);

    if (!user) {
        throw new Error(`User with id ${handle} not found`);
    }

    return {
        id: user.id,
        aliasMap: user.aliasMap,
        handle: user.handle,
        name: user.name,
        surname: user.surname,
        age: user.age,
        professionPublic: user.professionPublic,
        typePublic: user.typePublic,
        active: user.active,
        vibe: user.vibe,
        roles: user.roles,
        wealthLevel: user.wealthLevel
    };
};
