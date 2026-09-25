// data/requirements.ts
// Official requirements & fees for St. Kalooli Lwanga SS Mulajje
// Source: Client-supplied PDFs (Sept 2026)

export interface RequirementItem {
  text: string
  highlight?: boolean
}

export interface RequirementCategory {
  id: 'day-olevel' | 'day-alevel' | 'boarder-olevel' | 'boarder-alevel'
  title: string
  subtitle: string
  icon: string
  color: string
  items: string[]
  uniformPricing?: {
    boys: string
    girls: string
    includes: string
  }
  extraNotes?: string[]
}

export const requirements: RequirementCategory[] = [
  // ============ DAY SCHOLARS — O'LEVEL ============
  {
    id: 'day-olevel',
    title: "Day Scholars — O'Level",
    subtitle: 'Senior 1 to Senior 4 (Day)',
    icon: 'BookOpen',
    color: 'blue',
    uniformPricing: {
      boys: '166,500/=',
      girls: '164,500/=',
      includes: '1 Shirt/Blouse, 1 Trouser/Skirt, 1 Sweater, School T-shirt, House T-shirt and 1 Necktie',
    },
    items: [
      'A Set of school uniforms obtainable at school (see pricing above)',
      'A school bag.',
      'A pair of black, closed and flat shoes.',
      'A black belt (boys).',
      'Enough scholastic materials (16 black books, pens, pencils, graph books, box file, calculator, geometrical set).',
      'School customized books shall be available in different quires at a cost.',
      'A Cup, fork, plate and spoon.',
      '3 passport photographs, a copy of the results, birth certificate.',
      '3,000/= for passport photos for school identity card.',
      'Money for Ream of papers 1 per term at 20,000/= from school canteen.',
      'Two brooms (one for inside another one for outside door).',
      'An Umbrella',
      'Photocopies of National Identity Cards for both parents and student.',
      'Clear transparent file.',
      '10,000/= per year for CDs to cater for computer practical (Students offering computer).',
      '3 rolls of toilet papers per term.',
      'Project work books at 25,000/=, learners research books and workbooks of all subjects at 40,000/=.',
    ],
  },

  // ============ DAY SCHOLARS — A'LEVEL ============
  {
    id: 'day-alevel',
    title: "Day Scholars — A'Level",
    subtitle: 'Senior 5 to Senior 6 (Day)',
    icon: 'GraduationCap',
    color: 'purple',
    uniformPricing: {
      boys: '170,500/=',
      girls: '172,500/=',
      includes: '1 Shirt/Blouse, 1 Trouser/Skirt, 1 Sweater, 1 House T-shirt and 1 Necktie',
    },
    items: [
      'A Set of school uniforms strictly obtainable at school (see pricing above)',
      'A school bag.',
      'A pair of black, closed and flat shoes.',
      'A black belt with a normal buckle (boys).',
      'Enough scholastic materials (12 black books, pens, pencils, graph books, box file, calculator, geometrical set).',
      'A Cup, fork, plate and spoon.',
      '3 passport photographs, a copy of the O\' Level results, birth certificate.',
      '3,000/= for passport photos for school identity card.',
      '1 Ream of papers at 20,000/= from school canteen.',
      'Two brooms per term (one for inside another one for outside door).',
      'An Umbrella',
      'Clear transparent file.',
      '10,000/= for CDs for practical (Students offering computer per year).',
      '3 rolls of toilet paper per term.',
    ],
  },

  // ============ BOARDERS — O'LEVEL ============
  {
    id: 'boarder-olevel',
    title: "Boarders — O'Level",
    subtitle: 'Senior 1 to Senior 4 (Boarding)',
    icon: 'Home',
    color: 'amber',
    uniformPricing: {
      boys: '230,500/=',
      girls: '226,500/=',
      includes: '1 Shirt/Blouse, 1 Trouser/Skirt, School T-shirt, 1 Sweater, 1 House T-shirt, 1 Black Skirt/Trouser, 1 Casual wear T-shirt and 1 Necktie',
    },
    items: [
      'A Mattress',
      'A blanket (3"x6") single.',
      '2 pairs of bedsheets (3"x6") single.',
      'A towel.',
      '2 pairs of night pajamas/dresses.',
      'A metallic suit case, padlock and key holder.',
      'A school bag.',
      '2 white vests (boys); 2 petticoats and bras (girls).',
      'At least 2 pairs of white long socks (girls); black/dark blue socks (boys).',
      'A pair of black, closed and flat shoes, a black belt (boys).',
      'A pair of sandals.',
      '10,000/= for CDs for practical (Students offering computer per year).',
      'A torch.',
      'Enough personal effects (toothpaste, comb, sponge, smearing Vaseline, soap, at least 3 packets of sanitary pads for girls, shoe polish and shoe brush, at least six knickers/underpants/boxers, toilet papers).',
      'School customized books shall be available in different quires at a cost.',
      'Enough sugar.',
      'At least 10,000/= for pocket money.',
      '3,000/= for periodical trimming of hair.',
      'A basin/bucket and a jerrycan.',
      'A Cup, fork, plate and spoon.',
      '4,000/= for passport photos for school identity card.',
      '1 Ream of papers per term at 20,000/= from school canteen.',
      'Two brooms (one for inside another one for outside door).',
      'Enough scholastic materials (16 black books, pens, pencils, graph books, box file, calculator, geometrical set).',
      'A Set of school uniforms obtainable at school (see pricing above)',
      'A Mopper (girls).',
      'A Scrubbing brush with a squeezer part (boys).',
      'A pair of gumboots.',
      'A mosquito net is a must.',
      'A dictionary.',
      'A bible.',
      'An Umbrella.',
      'Photocopies of National Identity cards for student and Parent.',
      'Clear transparent file.',
      'A copy of the results, birth certificate, 3 colored passport photos for the file.',
      'Toilet papers (8 rolls — 3 for school).',
      'Project workbooks at 25,000/=, learners research books and workbooks of all subjects at 40,000/=.',
    ],
  },

  // ============ BOARDERS — A'LEVEL ============
  {
    id: 'boarder-alevel',
    title: "Boarders — A'Level",
    subtitle: 'Senior 5 to Senior 6 (Boarding)',
    icon: 'Building',
    color: 'green',
    uniformPricing: {
      boys: '236,500/=',
      girls: '232,500/=',
      includes: '1 Shirt/Blouse, 1 Trouser/Skirt, 1 Sweater, School T-shirt, House T-shirt, Black Skirt/Trouser, 1 Casual wear T-shirt and 1 Necktie',
    },
    items: [
      'A Mattress.',
      'A blanket (3"x6") single.',
      '2 pairs of bedsheets (3"x6") single.',
      'A towel.',
      '2 pairs of night pajamas/dresses.',
      'A metallic suitcase, padlock and key holder.',
      'A school bag.',
      '2 white vests (boys); 2 petticoats and bras (girls).',
      'At least 2 pairs of white long socks (girls); any black/dark blue socks for boys.',
      'A pair of black, closed and flat shoes.',
      'A black belt (boys) with a no buckle.',
      'A pair of sandals.',
      'A torch.',
      'Enough scholastic materials (12 black books, pens, pencils, graph books, box file, calculator, geometrical set, art book and pencils for art students).',
      'Enough personal effects (toothpaste, comb, sponge, smearing Vaseline, soap, at least 3 packets of sanitary pads for girls, shoe polish and shoe brush, at least six knickers/underpants/boxers, toilet papers, handkerchiefs (3)).',
      'At least 10,000/= for pocket money.',
      '3,000/= per term for periodical trimming of hair.',
      'A basin/bucket and a jerrycan.',
      '10,000/= for CDs per term to cater for computer practical (computer students only).',
      '3 passport photographs, a copy of the O\' Level results, birth certificate.',
      '3,000/= for passport photos for school identity card.',
      '1 Ream of papers per term at 20,000/= from school canteen.',
      'Two brooms (one for inside another one for outside door).',
      'A set of uniforms obtainable at school (see pricing above).',
      'A Mopper (girls).',
      'A Scrubbing brush (boys).',
      'A pair of gumboots.',
      'A mosquito net is a must.',
      'A dictionary.',
      'A bible.',
      'An Umbrella.',
      'Clear transparent file.',
      'Toilet papers (8 rolls — 3 for school).',
    ],
  },
]

// ============ O'LEVEL DAY SCHOOL FEES (2026) ============
export interface FeeItem {
  item: string
  amount: string
  note?: string
}

export const olevelDayFees: FeeItem[] = [
  { item: 'Tuition', amount: '60,000/=', note: 'Non-U.S.E' },
  { item: 'ASSHU', amount: '3,000/=' },
  { item: 'Development Fee', amount: '40,000/=' },
  { item: 'Foundation Fees', amount: '5,000/=' },
  { item: 'Lunch', amount: '72,000/=' },
  { item: 'Admission Fee', amount: '10,000/=', note: 'New entrants S1–S4' },
]

export const olevelDayTotals = {
  nonUse: '190,000/=',
  use: '130,000/=',
}

export const feesNote = 'All fees MUST be paid in the bank. Above figures exclude bank charges.'

export const schoolMotto = 'Only the Best is Good Enough.'