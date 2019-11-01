const curriculumList = {
    1: {
        title: 'SECTION 1: NEWBORNS BASICS',
        data: [
            { text: 'How to wash your baby', textVideoLenght: 'Video 9:27', numberInSection: 1 },
            { text: 'How to change a diaper', textVideoLenght: 'Video 9:27', numberInSection: 2 },
            { text: 'How and when', textVideoLenght: 'Video 9:27', numberInSection: 3 },
            { text: 'Ways to hold a baby', textVideoLenght: 'Video 9:27', numberInSection: 4 },
        ],
    },
    2: {
        title: 'SECTION 2: HOW TO CALM A BABY', data: [
            { text: 'Swaddling techniques', textVideoLenght: 'Video 9:27', numberInSection: 1 },
            { text: 'How to calm a baby', textVideoLenght: 'Video 9:27', numberInSection: 2 },
        ]
    },
    3: {
        title: 'SECTION 1: NEWBORNS BASICS', data: [
            { text: 'How to wash your baby', textVideoLenght: 'Video 9:27', numberInSection: 1 },
            { text: 'How to change a diaper', textVideoLenght: 'Video 9:27', numberInSection: 2 },
            { text: 'How and when', textVideoLenght: 'Video 9:27', numberInSection: 3 },
            { text: 'Ways to hold a baby', textVideoLenght: 'Video 9:27', numberInSection: 4 },
        ],
    },
    4: {
        title: 'SECTION 1: NEWBORNS BASICS', data: [
            { text: 'How to wash your baby', textVideoLenght: 'Video 9:27', numberInSection: 1 },
            { text: 'How to change a diaper', textVideoLenght: 'Video 9:27', numberInSection: 2 },
            { text: 'How and when', textVideoLenght: 'Video 9:27', numberInSection: 3 },
            { text: 'Ways to hold a baby', textVideoLenght: 'Video 9:27', numberInSection: 4 },
        ],
    },
    5: {

        title: 'SECTION 2: HOW TO CALM A BABY', data: [
            { text: 'Swaddling techniques', textVideoLenght: 'Video 9:27', numberInSection: 1 },
            { text: 'How to calm a baby', textVideoLenght: 'Video 9:27', numberInSection: 2 },
        ]
    },
}

export const coursesList = [
    {
        title: 'NEWBORNS & BABIES', data: [
            { text: 'Baby Care 101', authors: 'Dr. Harvey Karp, Dr. Delaney Gracy', id: 1, curriculumList: { ...curriculumList[1] } },
            { text: 'Caring For Your Newborn', id: 2, authors: 'Dr. Harvey Karp', curriculumList: { ...curriculumList[2] } },
            { text: 'Baby Massage', id: 3, authors: 'Dr. Harvey Karp', curriculumList: { ...curriculumList[3] } },
        ]
    },
    {
        title: 'PARENTING', data: [
            { text: 'Power of Positive Parenting', id: 4, authors: 'Dr. Harvey Karp', curriculumList: { ...curriculumList[4] } },
            { text: 'Parenting Prescriptions', id: 5, authors: 'Dr. Harvey Karp', curriculumList: { ...curriculumList[5] } },
        ]
    },
];