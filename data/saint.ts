// data/saint.ts
// Information about the school's patron saint — St. Kalooli (Karoli) Lwanga

export interface SaintAttribute {
  title: string
  description: string
}

export interface SaintFact {
  label: string
  value: string
}

export interface SaintQuote {
  text: string
  attribution?: string
}

export const saint = {
  name: 'St. Kalooli (Karoli) Lwanga',
  shortName: 'St. Kalooli Lwanga',
  title: 'Courageous Leader. Faithful Martyr. Friend of Christ.',
  subtitle: 'Uganda Martyr Leader',
  feastDay: 'June 3',
  lifespan: 'c. 1860 – June 3, 1886',
  patronOf: 'Catholic Youth',
  canonized: 'October 18, 1964 by Pope Paul VI with the Uganda Martyrs',
  
  heroQuote: {
    text: 'Be strong and stand firm in the faith.',
    attribution: 'St. Kalooli Lwanga',
  },

  closingQuote: {
    text: 'We are Christians; we are not afraid to die.',
    attribution: 'St. Kalooli Lwanga',
  },

  attributes: [
    {
      title: 'A Courageous Leader',
      description: 'He was the chief of the royal pages in the court of Kabaka Mwanga II of Buganda. He used his position to protect the young Christians and lead them in the way of faith.',
    },
    {
      title: 'A Faithful Catechist',
      description: 'After embracing the Catholic faith and being baptized on May 26, 1886, he taught, encouraged and even baptized others, strengthening them to remain faithful to Christ.',
    },
    {
      title: 'A Fearless Witness',
      description: "He refused to renounce his faith or submit to the king's immoral demands. He chose Christ above all else.",
    },
    {
      title: 'A Glorious Martyr',
      description: 'On June 3, 1886, he was burned alive at Namugongo with his companions because they refused to deny Jesus. His courage inspires us to this day.',
    },
    {
      title: 'An Inspiration to All',
      description: 'He is the patron saint of Catholic youth and a model of holiness, purity and leadership for young people.',
    },
  ] as SaintAttribute[],

  facts: [
    { label: 'Born', value: 'Around 1860 in Buganda (Uganda)' },
    { label: 'Baptized', value: 'May 26, 1886' },
    { label: 'Arrested', value: 'May 25, 1886' },
    { label: 'Martyred', value: 'June 3, 1886 at Namugongo' },
    { label: 'Canonized', value: 'October 18, 1964 by Pope Paul VI with the Uganda Martyrs' },
    { label: 'Patron of', value: 'Catholic Youth' },
  ] as SaintFact[],

  prayer: `O glorious St. Kalooli Lwanga, faithful servant of Christ and leader of the Uganda Martyrs, pray for us that we may remain steadfast in our faith, live holy lives and always choose Christ in all we do. Protect our families, our schools and our nation. Amen.`,

  acclamations: [
    'St. Kalooli Lwanga, pray for us!',
    'Uganda Martyrs, pray for us!',
  ],
}

export type Saint = typeof saint