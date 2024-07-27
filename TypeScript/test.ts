const generateInitials = (name: string) => {
    let words = name.split(' ');
    words = words.map(word => word.charAt(0))
    return [words[0], words[words.length - 1]].join('')
}

type SenderData = {
    pk?: number;
    name?: string;
    photo?: string;
    email?: string;
}

interface CategoryData {
    pk: number;
    description: string;
}

interface AreaData {
    pk: number;
    description: string;
    category: CategoryData;
}

interface DificultLevelData {
    pk: number;
    dificullt_level: string;
}

interface TargetProgramData {
    pk: number;
    status: string;
    target: number;
    program: number;
    situation: string;
    modified_by?: SenderData;
    modified_at?: string;
}

interface ProgramPrescriptionData {
    pk: number;
    prescription: number;
    status: string;
    not_introduced: number;
    probe: number;
    teaching: number;
    maintenance: number;
    generalization: number;
    learned: number;
    paused: number;
    question: number;
    old_in_prescription: boolean;
    all_target_in_prescription: boolean;
    can_remove_of_prescription: number;
}

interface TargetData {
    pk: number;
    program: number;
    description: string;
    dificult_level: DificultLevelData;
    target_program?: TargetProgramData;
    old_in_prescription: boolean
}

interface EducationalProgramData {
    pk: number;
    description: string;
    photo: string;
    area: AreaData;
    program_prescription: ProgramPrescriptionData;
    target?: TargetData[];
}

// let checkedPrograms: CheckProgramData[] = [{pk: 1, status: 'Ativo'}]
// let checkedTargets: CheckTargetData[] = [{pk: 1, status: 'Ativo', program: 1}]

// const result = checkedTargets.map(targetData => targetData.program).map(programPK =>
//     checkedPrograms.some(programData => programData.pk === programPK)
// );

// const checkedPrograms = [{pk: 1}, 1];

// console.log(checkedPrograms.map((data: any) => data.pk || data)); // Output: [1, 2, 3, 4, 5]

const mapOptions: any = {
    start: [
        {
            icon: "bi-arrow-up",
            name: "Mais recentes",
            sort: "desc"
        },
        {
            icon: "bi-arrow-down",
            name: "Menos recentes",
            sort: "asc"
        }
    ],
    finish: [
        {
            icon: "bi-arrow-up",
            name: "Mais recentes",
            sort: "desc"
        },
        {
            icon: "bi-arrow-down",
            name: "Menos recentes",
            sort: "asc"
        }
    ],
    duration: [
        {
            icon: "bi-arrow-up",
            name: "Duração Positiva",
            sort: "desc"
        },
        {
            icon: "bi-arrow-down",
            name: "Duração Negativa",
            sort: "asc"
        }
    ],
    sessions: [
        {
            icon: "bi-arrow-up",
            name: "Mais sessões",
            sort: "desc"
        },
        {
            icon: "bi-arrow-down",
            name: "Menos sessões",
            sort: "asc"
        }
    ]
}

let type = 'sessions'
let filter = '-sessions'

// console.log(filter?.startsWith('-'))

// console.log(mapOptions[type].find((option: any) => option.sort === 
//                             (filter?.startsWith('-') ? 'desc' : 'asc')))

const testData = [
    {
        revison: 5,
        active: true,
        applicator: [
            {
                pk: 1,
                name: 'Maria',
                photo: 'public/img/maria.png'
            },
            {
                pk: 1,
                name: 'sonia',
                photo: 'public/img/maria.png'
            },
            {
                pk: 1,
                name: 'joao',
                photo: 'public/img/maria.png'
            },
            {
                pk: 1,
                name: 'refael',
                photo: 'public/img/maria.png'
            },
            {
                pk: 1,
                name: 'ricardo',
                photo: 'public/img/maria.png'
            }
        ],
        initial_date: '11/06/2024T03:00:00.000Z',
        final_date: '11/06/2024T03:00:00.000Z',
        duration: {
            prescribed: 15,
            accomplished: 11
        },
        session: 10
    },
    {
        revison: 4,
        active: false,
        applicator: [
            {
                pk: 1,
                name: 'Maria',
                photo: 'public/img/maria.png'
            }
        ],
        initial_date: '10/6/2024T03:00:00.000Z',
        final_date: '11/06/2024T03:00:00.000Z',
        duration: {
            prescribed: 15,
            accomplished: 15
        },
        session: 18
    },
    {
        revison: 3,
        active: false,
        applicator: [
            {
                pk: 1,
                name: 'Maria',
                photo: 'public/img/maria.png'
            }
        ],
        initial_date: '04/06/2024T03:00:00.000Z',
        final_date: '10/06/2024T03:00:00.000Z',
        duration: {
            prescribed: 12,
            accomplished: 16
        },
        session: 19
    },
    {
        revison: 2,
        active: false,
        applicator: [
            {
                pk: 1,
                name: 'Maria',
                photo: 'public/img/maria.png'
            }
        ],
        initial_date: '28/05/2024T03:00:00.000Z',
        final_date: '04/06/2024T03:00:00.000Z',
        duration: {
            prescribed: 13,
            accomplished: 14
        },
        session: 12
    },
    {
        revison: 1,
        active: false,
        applicator: [
            {
                pk: 1,
                name: 'Maria',
                photo: 'public/img/maria.png'
            }
        ],
        initial_date: '2024-05-13T03:00:00.000Z',
        final_date: '28/05/2024T03:00:00.000Z',
        duration: {
            prescribed: 15,
            accomplished: 12
        },
        session: 10
    },
]

// let test = '11/06/2024'.split('/').map((value) => parseFloat(value)).reverse()
// let testdata = new Date(Date.UTC(test[0], test[1] - 1, test[2])) 

// let test = new Date('2024-06-11T03:00:00.000Z')
// let date = new Date()
// date.setHours(0,0,0,0)

// console.log(test.getTime() == date.getTime());

// console.log(testData.filter((data) => 
//     new Date(data.initial_date.split('/').reverse().join('-')) <= date
// ));
// const abilityColor = [
//     {name: 'Habilidades de Prontidão', color: "#99C21D"},
//     {name: 'Habilidades de Autocuidados', color: "#FF0000"},
//     {name: 'Habilidades Sociais', color: "#E72867"},
//     {name: 'Habilidades de Brincadeira', color: "#584E9C"},
//     {name: 'Habilidades Acadêmicas Complexas', color: "#FF78A5"},
//     {name: 'Habilidades Acadêmicas Simples', color: "#05B3C5"},
//     {name: 'Habilidades Verbais Avançadas', color: "#C383F5"},
//     {name: 'Habilidades Verbais Básicas', color: "#FFB800"},
// ]

// console.log(abilityColor.find((ability) => ability.name == 'Habilidades de Autocuidados')?.color);

let test = [true, false]
let testt: object = {
    patient: {
        light: "#A4C959",
        main: '#99C21D',
        dark: "#7A9A11",
        name: "Paciente",
        contrastText: "#FFF"
    },
    father: {
        light: "#A4C959",
        main: '#99C21D',
        dark: "#7A9A11",
        name: "Pai",
        contrastText: "#FFF"
    },
    mother: {
        light: "#A4C959",
        main: '#99C21D',
        dark: "#7A9A11",
        name: "Mãe",
        contrastText: "#FFF"
    },
    responsible: {
        light: "#A4C959",
        main: '#99C21D',
        dark: "#7A9A11",
        name: "Responsável",
        contrastText: "#FFF"
    },
    prescriber: {
        light: "#6180b2",
        main: '#4371B7',
        dark: "#21519b",
        name: "Prescritor",
        contrastText: "#FFF"
    },
    applicator: {
        light: "#40b4c0",
        main: '#05B3C5',
        dark: "#048d9a",
        name: "Aplicador",
        contrastText: "#FFF"
    },
    observer: {
        light: "#e55e88",
        main: '#E72867',
        dark: "#b21c50",
        name: "Observador",
        contrastText: "#FFF"
    },
    educator: {
        light: "#e3a141",
        main: '#EA8B03',
        dark: "#b46b04",
        name: "Educador",
        contrastText: "#FFF"
    },
    facilitator: {
        light: "#e3a141",
        main: '#EA8B03',
        dark: "#b46b04",
        name: "Facilitador",
        contrastText: "#FFF"
    },
    partner: {
        light: "#e3a141",
        main: '#EA8B03',
        dark: "#b46b04",
        name: "Parceiro",
        contrastText: "#FFF"
    },
    school: {
        light: "#e3a141",
        main: '#EA8B03',
        dark: "#b46b04",
        name: "Escola",
        contrastText: "#FFF"
    },
    company: {
        light: "#e3a141",
        main: '#EA8B03',
        dark: "#b46b04",
        name: "Empresa",
        contrastText: "#FFF"
    },
    healthcareProfessional: {
        light: "#e3a141",
        main: '#EA8B03',
        dark: "#b46b04",
        name: "Profissional de Saúde",
        contrastText: "#FFF"
    },
    markoo: {
        ultraLight: "#e1efff",
        light: "#ADD0F6",
        main: "#1671BA",
        dark: "#105f9b",
        darker: "#0d4472",
        contrastText: "#FFF"
    },
    baseline: {
        light: "#F0F0F0",
        main: "#E0E0E0",
        dark: "#737791",
        contrastText: "#FFF"
    },
    intervention: {
        ultraLight: "#F9FFF5",
        light: "#F5FFD9",
        main: "#DFF4A4",
        dark: "#57B055",
        contrastText: "#FFF"
    },
    add: {
        light: "#",
        main: "#",
        dark: "#",
        contrastText: "#000"
    },
    programNotStarted: {
        light: "#",
        main: "#",
        dark: "#",
        contrastText: "#000"
    },
    targetNotStarted: {
        light: "#",
        main: "#",
        dark: "#",
        contrastText: "#000"
    },
    targetProbe: {
        light: "#",
        main: "#",
        dark: "#",
        contrastText: "#000"
    },
    targetTeaching: {
        light: "#",
        main: "#",
        dark: "#",
        contrastText: "#000"
    },
    targetMaintenance: {
        light: "#",
        main: "#",
        dark: "#",
        contrastText: "#000"
    },
    targetGeneralization: {
        light: "#",
        main: "#",
        dark: "#",
        contrastText: "#000"
    },
    targetLearned: {
        light: "#",
        main: "#",
        dark: "#",
        contrastText: "#000"
    },
    whiteTheme: {
        light: "#737791",
        main: "#FFFFFF",
        dark: "#737791",
        contrastText: "#000"
    },
}

const findKeyByName = (palette: object, name: string) => {
    let foundKey: string | undefined;
    Object.entries(palette).forEach(([key, value]) => {
        if (value.name === name) {
            foundKey = value;
        }
    });
    return foundKey;
};

console.log(findKeyByName('Prescritor'));
