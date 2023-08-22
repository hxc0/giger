import { IConversation, IMessageStatus } from '../models/message';
import { users } from './users';

export const mockUserConvos: IConversation[] = [
    {
        id: 'conv1',
        participants: [users[0], users[1], users[33]], // NeonShadow, CipherByte, CrimsonBinary
        messages: [
            {
                id: 'msg1',
                status: IMessageStatus.READ,
                sender: users[1],
                text: 'Hey NeonShadow, got a lead on a new gig?',
                date: '2023-08-15T09:00:00'
            },
            {
                id: 'msg2',
                status: IMessageStatus.READ,
                sender: users[33],
                text: 'Yeah, heard about a high-risk data retrieval job. Interested?',
                date: '2023-08-15T09:15:00'
            },
            {
                id: 'msg3',
                status: IMessageStatus.READ,
                sender: users[0],
                text: 'Sounds intriguing. What are the details?',
                date: '2023-08-15T09:30:00'
            },
            {
                id: 'msg4',
                status: IMessageStatus.READ,
                sender: users[1],
                text: "Meet me at the Neon Nights club at 9 PM. I'll share the info there.",
                date: '2023-08-15T09:45:00'
            }
        ]
    },
    {
        id: 'conv2',
        participants: [users[14], users[35]], // EchoCyber, StaticPhantom
        messages: [
            {
                id: 'msg5',
                status: IMessageStatus.READ,
                sender: users[14],
                text: 'StaticPhantom, have you heard about the new prototype tech in the black market?',
                date: '2023-08-15T10:00:00'
            },
            {
                id: 'msg6',
                status: IMessageStatus.READ,
                sender: users[35],
                text: 'Yeah, got some inside info. Could be a game-changer.',
                date: '2023-08-15T10:15:00'
            },
            {
                id: 'msg7',
                status: IMessageStatus.READ,
                sender: users[14],
                text: 'Meet me at the Neon Alley tomorrow. I want to discuss this further.',
                date: '2023-08-15T10:30:00'
            },
            {
                id: 'msg8',
                status: IMessageStatus.SENT,
                sender: users[35],
                text: 'Sure, count me in. What time?',
                date: '2023-08-15T10:45:00'
            }
        ]
    },
    {
        id: 'conv3',
        participants: [users[7], users[35]], // Sophia Anderson, NeonTiger69
        messages: [
            {
                id: 'msg9',
                status: IMessageStatus.READ,
                sender: users[7],
                text: 'NeonTiger69, we need someone skilled for a hack. Interested?',
                date: '2023-08-15T11:00:00'
            },
            {
                id: 'msg10',
                status: IMessageStatus.READ,
                sender: users[35],
                text: 'Depends on the target. What are we looking at?',
                date: '2023-08-15T11:15:00'
            },
            {
                id: 'msg11',
                status: IMessageStatus.READ,
                sender: users[7],
                text: 'Corporate server breach. High security, high reward.',
                date: '2023-08-15T11:30:00'
            },
            {
                id: 'msg12',
                status: IMessageStatus.READ,
                sender: users[35],
                text: "I'm in. Provide the details and I'll get to work.",
                date: '2023-08-15T11:45:00'
            }
        ]
    },
    {
        id: 'conv4',
        participants: [users[6], users[13], users[35]], // William Martinez, EchoCyber, NeonTiger69
        messages: [
            {
                id: 'msg13',
                status: IMessageStatus.READ,
                sender: users[6],
                text: "Hey EchoCyber, NeonTiger69, I've got a lead on a weapons shipment. Interested?",
                date: '2023-08-16T08:00:00'
            },
            {
                id: 'msg14',
                status: IMessageStatus.READ,
                sender: users[13],
                text: 'Depends on the firepower. What kind of weapons are we talking about?',
                date: '2023-08-16T08:15:00'
            },
            {
                id: 'msg15',
                status: IMessageStatus.READ,
                sender: users[35],
                text: "I'm always up for some explosive opportunities. Count me in.",
                date: '2023-08-16T08:30:00'
            },
            {
                id: 'msg16',
                status: IMessageStatus.READ,
                sender: users[6],
                text: "Meet me at the Neon Bazaar tonight. I'll show you the merchandise.",
                date: '2023-08-16T08:45:00'
            }
        ]
    },
    {
        id: 'conv5',
        participants: [users[25], users[31], users[35]], // Elijah Perez, Liam Robinson, NeonTiger69
        messages: [
            {
                id: 'msg17',
                status: IMessageStatus.READ,
                sender: users[25],
                text: "NeonTiger69, I've got a tip about a rare cyber-enhancement implant. Interested in upgrading?",
                date: '2023-08-16T09:00:00'
            },
            {
                id: 'msg18',
                status: IMessageStatus.READ,
                sender: users[31],
                text: 'Always looking to improve my tech. Tell me more.',
                date: '2023-08-16T09:15:00'
            },
            {
                id: 'msg19',
                status: IMessageStatus.READ,
                sender: users[35],
                text: "I've heard good things about that implant. Let's meet up and discuss the details.",
                date: '2023-08-16T09:30:00'
            },
            {
                id: 'msg20',
                status: IMessageStatus.READ,
                sender: users[25],
                text: "Meet me at the NeonTech Clinic tomorrow at noon. I'll show you the options.",
                date: '2023-08-16T09:45:00'
            }
        ]
    },
    {
        id: 'conv6',
        participants: [users[10], users[19], users[35]], // Ethan Thomas, Alexander Rodriguez, NeonTiger69
        messages: [
            {
                id: 'msg21',
                status: IMessageStatus.READ,
                sender: users[10],
                text: "NeonTiger69, we're assembling a team for a heist on the NeonCorp tower. Interested in making a big score?",
                date: '2023-08-16T10:00:00'
            },
            {
                id: 'msg22',
                status: IMessageStatus.READ,
                sender: users[19],
                text: "Taking down the corporate giants? I'm in. What's the plan?",
                date: '2023-08-16T10:15:00'
            },
            {
                id: 'msg23',
                status: IMessageStatus.READ,
                sender: users[35],
                text: 'Sounds like a challenge worth taking. Count me as the tech support.',
                date: '2023-08-16T10:30:00'
            },
            {
                id: 'msg24',
                status: IMessageStatus.READ,
                sender: users[10],
                text: "Meet us at the NeonHideout tonight. We'll discuss the details there.",
                date: '2023-08-16T10:45:00'
            }
        ]
    },
    {
        id: 'conv7',
        participants: [users[2], users[8], users[15], users[35]], // Alex Johnson, Daniel Johnson, Sofia Lewis, NeonTiger69
        messages: [
            {
                id: 'msg25',
                status: IMessageStatus.READ,
                sender: users[2],
                text: "NeonTiger69, we're assembling a team for a high-stakes race. Want to prove your driving skills?",
                date: '2023-08-17T08:00:00'
            },
            {
                id: 'msg26',
                status: IMessageStatus.READ,
                sender: users[8],
                text: "I'm in for some adrenaline. Where's the starting line?",
                date: '2023-08-17T08:15:00'
            },
            {
                id: 'msg27',
                status: IMessageStatus.READ,
                sender: users[15],
                text: 'I could use a break from the action. Count me as the race commentator.',
                date: '2023-08-17T08:30:00'
            },
            {
                id: 'msg28',
                status: IMessageStatus.READ,
                sender: users[35],
                text: "Sure, I've got a souped-up ride. Let's see who's the fastest in the neon streets.",
                date: '2023-08-17T08:45:00'
            },
            {
                id: 'msg29',
                status: IMessageStatus.READ,
                sender: users[2],
                text: 'Meet us at the NeonRace Track tomorrow. Get ready to rev those engines.',
                date: '2023-08-17T09:00:00'
            }
        ]
    },
    {
        id: 'conv8',
        participants: [users[12], users[29], users[32], users[35]], // Ava Jackson, Lucas Lee, Aria Hall, NeonTiger69
        messages: [
            {
                id: 'msg30',
                status: IMessageStatus.READ,
                sender: users[12],
                text: "NeonTiger69, we've got a lead on a rare synthetic pet. Interested in a unique companion?",
                date: '2023-08-17T10:00:00'
            },
            {
                id: 'msg31',
                status: IMessageStatus.READ,
                sender: users[29],
                text: "I've always wanted a robotic buddy. What kind of pet are we talking about?",
                date: '2023-08-17T10:15:00'
            },
            {
                id: 'msg32',
                status: IMessageStatus.READ,
                sender: users[35],
                text: 'A robotic pet sounds like a fun project. Count me in to help customize it.',
                date: '2023-08-17T10:30:00'
            },
            {
                id: 'msg33',
                status: IMessageStatus.READ,
                sender: users[32],
                text: "Meet us at the NeonTech Expo next week. We'll showcase the latest in cybernetic pets.",
                date: '2023-08-17T10:45:00'
            }
        ]
    },
    {
        id: 'conv9',
        participants: [users[4], users[17], users[24], users[27], users[35]], // Michael Davis, BinaryPhantom, Charlotte White, Sophia Young, NeonTiger69
        messages: [
            {
                id: 'msg34',
                status: IMessageStatus.READ,
                sender: users[4],
                text: "NeonTiger69, we've got a job to extract valuable data from a corporate lab. Ready for some corporate espionage?",
                date: '2023-08-17T11:00:00'
            },
            {
                id: 'msg35',
                status: IMessageStatus.READ,
                sender: users[17],
                text: "Corporate data breach? I'm in. Let's expose their secrets.",
                date: '2023-08-17T11:15:00'
            },
            {
                id: 'msg36',
                status: IMessageStatus.READ,
                sender: users[24],
                text: "Extracting data requires finesse. I'll handle the decryption process.",
                date: '2023-08-17T11:30:00'
            },
            {
                id: 'msg37',
                status: IMessageStatus.READ,
                sender: users[27],
                text: "Count me in for the distraction. I'll create a digital smokescreen.",
                date: '2023-08-17T11:45:00'
            },
            {
                id: 'msg38',
                status: IMessageStatus.READ,
                sender: users[35],
                text: "Sounds like a heist worth pulling off. Let's meet at the NeonCorp Lab entrance.",
                date: '2023-08-17T12:00:00'
            },
            {
                id: 'msg39',
                status: IMessageStatus.READ,
                sender: users[4],
                text: 'Remember, we need to move fast. The data is time-sensitive.',
                date: '2023-08-17T12:15:00'
            },
            {
                id: 'msg40',
                status: IMessageStatus.READ,
                sender: users[17],
                text: "Agreed. Let's make this breach memorable.",
                date: '2023-08-17T12:30:00'
            }
        ]
    },
    {
        id: 'conv10',
        participants: [users[11], users[22], users[30], users[35]], // Ethan Thomas, TechWraith, Liam Robinson, NeonTiger69
        messages: [
            {
                id: 'msg41',
                sender: users[11],
                text: "NeonTiger69, we're gathering a team for a cyber raid on a high-security server. Intrigued?",
                date: '2023-08-18T08:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg42',
                sender: users[22],
                text: "Count me in. I'll handle the firewall breach.",
                date: '2023-08-18T08:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg43',
                sender: users[30],
                text: "I'm the silent infiltrator. Let's do this.",
                date: '2023-08-18T08:30:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg44',
                sender: users[35],
                text: "Sounds like a challenge. I'll provide the distraction.",
                date: '2023-08-18T08:45:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg45',
                sender: users[22],
                text: "Meet at the NeonCyber Nexus tomorrow at midnight. We'll coordinate our attack.",
                date: '2023-08-18T09:00:00',
                status: IMessageStatus.SENT
            }
        ]
    },
    {
        id: 'conv11',
        participants: [users[23], users[28], users[34], users[35]], // James Thompson, Daniel Mitchell, Scarlett Baker, NeonTiger69
        messages: [
            {
                id: 'msg46',
                sender: users[23],
                text: "NeonTiger69, I've got a lead on an elusive AI artifact. Want to dive into the virtual realm?",
                date: '2023-08-18T10:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg47',
                sender: users[28],
                text: "Virtual quests are my specialty. What's the artifact we're chasing?",
                date: '2023-08-18T10:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg48',
                sender: users[35],
                text: "I've heard whispers about that artifact. Let's unravel its secrets.",
                date: '2023-08-18T10:30:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg49',
                sender: users[34],
                text: "Meet us in the NeonNet hub tonight. We'll access the virtual gateways.",
                date: '2023-08-18T10:45:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg50',
                sender: users[23],
                text: "Strap in. We're diving deep into the code labyrinth.",
                date: '2023-08-18T11:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg51',
                sender: users[28],
                text: "I've prepared the decryption keys. Let's find the artifact's digital trail.",
                date: '2023-08-18T11:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg52',
                sender: users[34],
                text: 'Keep your wits about you. Virtual dangers lurk around every byte.',
                date: '2023-08-18T11:30:00',
                status: IMessageStatus.SENT
            }
        ]
    },
    {
        id: 'conv12',
        participants: [users[9], users[18], users[26], users[35]], // Daniel Johnson, CyberWanderer, Harper Scott, NeonTiger69
        messages: [
            {
                id: 'msg53',
                sender: users[9],
                text: "NeonTiger69, we've got a contract to deliver a high-value package. Interested in some courier action?",
                date: '2023-08-18T12:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg54',
                sender: users[18],
                text: "I enjoy the thrill of the road. What's the destination and timeline?",
                date: '2023-08-18T12:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg55',
                sender: users[26],
                text: 'Courier jobs are my expertise. Count me in for a smooth delivery.',
                date: '2023-08-18T12:30:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg56',
                sender: users[35],
                text: "A package to transport? I'm your getaway driver.",
                date: '2023-08-18T12:45:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg57',
                sender: users[9],
                text: "Meet us at the NeonTerminal tomorrow at dawn. We'll hand over the package and payment.",
                date: '2023-08-18T13:00:00',
                status: IMessageStatus.SENT
            }
        ]
    },
    {
        id: 'conv13',
        participants: [users[3], users[14], users[21], users[35]], // Emma Brown, Oliver Miller, Mia Rodriguez, NeonTiger69
        messages: [
            {
                id: 'msg58',
                sender: users[3],
                text: "NeonTiger69, we've got a lead on a rare cyber-enhancement implant. Interested in boosting your abilities?",
                date: '2023-08-19T08:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg59',
                sender: users[14],
                text: 'Enhancements could make us unstoppable. Tell me more about this implant.',
                date: '2023-08-19T08:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg60',
                sender: users[35],
                text: "I've heard good things about that implant. Let's meet up and discuss the details.",
                date: '2023-08-19T08:30:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg61',
                sender: users[21],
                text: "Meet us at the NeonTech Clinic next week. We'll explore the options.",
                date: '2023-08-19T08:45:00',
                status: IMessageStatus.SENT
            }
        ]
    },
    {
        id: 'conv14',
        participants: [users[1], users[16], users[20], users[26], users[35]], // Jane Smith, Lucas Moore, Liam Clark, Harper Scott, NeonTiger69
        messages: [
            {
                id: 'msg62',
                sender: users[1],
                text: "NeonTiger69, there's a secret club gathering tonight. Interested in experiencing the underground scene?",
                date: '2023-08-19T10:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg63',
                sender: users[16],
                text: "Secrets and neon vibes? I'm in. Where's the club?",
                date: '2023-08-19T10:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg64',
                sender: users[20],
                text: "Clubbing with a twist? Count me in. What's the theme?",
                date: '2023-08-19T10:30:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg65',
                sender: users[26],
                text: "An underground club sounds exciting. Let's dance to the digital beats.",
                date: '2023-08-19T10:45:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg66',
                sender: users[35],
                text: 'Meet us at the NeonUnderground entrance after dark. Prepare for a night of electrifying energy.',
                date: '2023-08-19T11:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg67',
                sender: users[1],
                text: "Bring your neon spirit and dancing shoes. It's going to be a wild night.",
                date: '2023-08-19T11:15:00',
                status: IMessageStatus.SENT
            }
        ]
    },
    {
        id: 'conv15',
        participants: [users[5], users[7], users[27], users[33], users[35]], // Olivia Wilson, Sophia Anderson, Sophia Young, Benjamin Wood, NeonTiger69
        messages: [
            {
                id: 'msg68',
                sender: users[5],
                text: "NeonTiger69, there's an exclusive tech auction happening. Interested in acquiring cutting-edge gadgets?",
                date: '2023-08-19T12:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg69',
                sender: users[7],
                text: "Cutting-edge tech? I'm there. What's up for auction?",
                date: '2023-08-19T12:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg70',
                sender: users[27],
                text: "Tech gadgets? Count me in. I'll be there to bid on some upgrades.",
                date: '2023-08-19T12:30:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg71',
                sender: users[33],
                text: "I'm always up for acquiring unique tech. Where and when is the auction?",
                date: '2023-08-19T12:45:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg72',
                sender: users[35],
                text: 'Meet us at the NeonTech Auction House tomorrow. Be ready to outbid the competition.',
                date: '2023-08-19T13:00:00',
                status: IMessageStatus.SENT
            }
        ]
    },
    {
        id: 'conv16',
        participants: [users[10], users[35]], // Isabella Taylor, NeonTiger69
        messages: [
            {
                id: 'msg73',
                sender: users[10],
                text: "NeonTiger69, I've got a lead on a virtual heist. Ready to dive into the digital world?",
                date: '2023-08-20T08:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg74',
                sender: users[35],
                text: "Virtual heist? Count me in. Let's plan the breach.",
                date: '2023-08-20T08:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg75',
                sender: users[10],
                text: "Meet me in the NeonNet Hub tomorrow. We'll synchronize our cyber assault.",
                date: '2023-08-20T08:30:00',
                status: IMessageStatus.SENT
            }
        ]
    },
    {
        id: 'conv17',
        participants: [users[19], users[35]], // Alexander Rodriguez, NeonTiger69
        messages: [
            {
                id: 'msg76',
                sender: users[19],
                text: "NeonTiger69, there's a black market for rare tech. Interested in acquiring some unique gadgets?",
                date: '2023-08-20T10:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg77',
                sender: users[35],
                text: "Unique tech? I'm in. What kind of gadgets are we talking about?",
                date: '2023-08-20T10:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg78',
                sender: users[19],
                text: "Meet me at the NeonAlley tonight. We'll discuss the available inventory.",
                date: '2023-08-20T10:30:00',
                status: IMessageStatus.SENT
            }
        ]
    },
    {
        id: 'conv18',
        participants: [users[25], users[35]], // Elijah Perez, NeonTiger69
        messages: [
            {
                id: 'msg79',
                sender: users[25],
                text: "NeonTiger69, there's a backdoor to a high-security data vault. Interested in some digital infiltration?",
                date: '2023-08-20T12:00:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg80',
                sender: users[35],
                text: "Data vault breach? I'm in. Let's crack it open.",
                date: '2023-08-20T12:15:00',
                status: IMessageStatus.SENT
            },
            {
                id: 'msg81',
                sender: users[25],
                text: "Meet me at the NeonTech Corp building tomorrow. We'll navigate through their virtual defenses.",
                date: '2023-08-20T12:30:00',
                status: IMessageStatus.SENT
            }
        ]
    }
];
