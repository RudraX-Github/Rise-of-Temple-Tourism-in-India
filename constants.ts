import { Category } from './types';

export const DATABASE: Category[] = [
  {
    category: 'Sacred Pillars',
    circuits: [
      {
        id: 'jyotir',
        name: 'The 12 Jyotirlingas',
        icon: '🔱',
        desc: 'The Radiant Sign of Shiva. The complete set of 12 sacred shrines.',
        stops: [
          { name: 'Somnath', loc: 'Gujarat', context: 'The First Jyotirlinga. Symbol of resilience and eternal survival.', todo: ['Morning Shore Aarti', 'Triveni Sangam Bath', 'Light & Sound Show'], link: 'https://www.somnath.org/' },
          { name: 'Mallikarjuna', loc: 'Andhra Pradesh', context: 'Situated on Srisailam Mountain. Unique Shakti Peeth & Jyotirlinga.', todo: ['Ropeway to Patal Ganga', 'Temple Darshan', 'Safari'], link: 'https://www.srisailadevasthanam.org/' },
          { name: 'Mahakaleshwar', loc: 'Madhya Pradesh', context: 'Only South-facing Jyotirlinga. Famous for Bhasma Aarti.', todo: ['Bhasma Aarti', 'Mahakal Corridor Walk', 'Shipra River Dip'], link: 'https://shreemahakaleshwar.com/' },
          { name: 'Omkareshwar', loc: 'Madhya Pradesh', context: 'Island in Narmada shaped as "OM".', todo: ['Parikrama', 'Mamleshwar Temple', 'Evening Boat Aarti'], link: 'https://shreeomkareshwar.org/' },
          { name: 'Kedarnath', loc: 'Uttarakhand', context: 'Highest Jyotirlinga. Shiva\'s Himalayan abode.', todo: ['Gaurikund Trek', 'Temple Aarti', 'Shankaracharya Samadhi'], link: 'https://badrinath-kedarnath.gov.in/' },
          { name: 'Bhimashankar', loc: 'Maharashtra', context: 'Origin of Bhima river in Sahyadri ranges.', todo: ['Nature trail', 'Gupt Bhimashankar', 'Sanctuary visit'], link: 'https://bhimashankar.in/' },
          { name: 'Kashi Vishwanath', loc: 'Uttar Pradesh', context: 'The heart of Varanasi. Renovated Grand Corridor.', todo: ['Ganga Aarti', 'Heritage Corridor Walk', 'Sunrise Boat Ride'], link: 'https://shreekashivishwanath.org/' },
          { name: 'Trimbakeshwar', loc: 'Maharashtra', context: 'Three-faced linga (Trinity). Origin of Godavari.', todo: ['Kushavarta Dip', 'Brahmagiri Hike', 'Panchavati Tour'], link: 'https://www.trimbakeshwar.org/' },
          { name: 'Vaidyanath', loc: 'Jharkhand', context: 'The Divine Healer. Famous for Sawan Mela.', todo: ['Kanwar Yatra', 'Basukinath temple', 'Mela participation'], link: 'http://baba-baidyanath.com/' },
          { name: 'Nageshwar', loc: 'Gujarat', context: 'Located near Dwarka. First Jyotirlinga on Earth.', todo: ['Bet Dwarka Boat Trip', 'Dwarka City', 'Gopi Talav'], link: 'https://www.gujarattourism.com/' },
          { name: 'Rameshwaram', loc: 'Tamil Nadu', context: 'Southernmost link established by Lord Rama.', todo: ['22 Well Holy Bath', 'Adam\'s Bridge View', 'Dhanushkodi Drive'], link: 'https://rameswaramtemple.tnhce.gov.in/' },
          { name: 'Grishneshwar', loc: 'Maharashtra', context: 'Final Jyotirlinga, near UNESCO Ellora Caves.', todo: ['Ellora Caves Tour', 'Temple Pooja', 'Daulatabad Fort'], link: 'https://grishneshwarjyotirlinga.org/' }
        ]
      },
      {
        id: 'chardham',
        name: 'High Char Dham',
        icon: '🏔️',
        desc: 'The sacred Himalayan quartet required for spiritual completion.',
        stops: [
          { name: 'Yamunotri', loc: 'Uttarakhand', context: 'Source of River Yamuna.', todo: ['Surya Kund', 'Divya Shila Pooja', 'Kharsali Village'], link: 'https://uttarakhandtourism.gov.in/' },
          { name: 'Gangotri', loc: 'Uttarakhand', context: 'Where Mother Ganga touched the earth.', todo: ['Holy dip', 'Submerged Shivling', 'Harsil'], link: 'https://uttarakhandtourism.gov.in/' },
          { name: 'Kedarnath', loc: 'Uttarakhand', context: 'Primary Shiva shrine in the Mandakini valley.', todo: ['Helicopter/Trek', 'Aarti', 'Ghandi Sarovar'], link: 'https://badrinath-kedarnath.gov.in/' },
          { name: 'Badrinath', loc: 'Uttarakhand', context: 'The primary seat of Lord Vishnu.', todo: ['Tapt Kund bath', 'Mana Village', 'Vyas Gufa'], link: 'https://badrinath-kedarnath.gov.in/' }
        ]
      }
    ]
  },
  {
    category: 'Thematic Paths',
    circuits: [
      {
        id: 'ramayan',
        name: 'Ramayan Circuit',
        icon: '🏹',
        desc: 'Following the life path of Shri Rama.',
        stops: [
          { name: 'Ayodhya', loc: 'Uttar Pradesh', context: 'The Eternal Birthplace.', todo: ['Ram Mandir Darshan', 'Saryu Aarti', 'Hanuman Garhi'], link: 'https://srjbtkshetra.org/' },
          { name: 'Chitrakoot', loc: 'U.P./M.P.', context: 'Forest exile residence.', todo: ['Gupt Godavari', 'Ram Ghat', 'Bharat Milap'], link: 'https://uptourism.gov.in/' },
          { name: 'Hampi', loc: 'Karnataka', context: 'Ancient Kishkindha Kingdom.', todo: ['Virupaksha Temple', 'Vitthala Chariot', 'Coracle Ride'], link: 'https://hampi.nic.in/' }
        ]
      },
      {
        id: 'buddhist',
        name: 'Buddhist Circuit',
        icon: '☸️',
        desc: 'Tracing the path from birth to Nirvana.',
        stops: [
          { name: 'Lumbini', loc: 'Nepal Border', context: 'The Birthplace.', todo: ['Maya Devi Temple', 'Ashokan Pillar'], link: 'https://lumbinidevtrust.gov.np/' },
          { name: 'Bodh Gaya', loc: 'Bihar', context: 'The Enlightenment site.', todo: ['Mahabodhi Temple', 'Bodhi Tree', '80ft Buddha'], link: 'https://tourism.bihar.gov.in/' },
          { name: 'Sarnath', loc: 'Uttar Pradesh', context: 'Site of the First Sermon.', todo: ['Dhamek Stupa', 'Museum', 'Deer Park'], link: 'https://uptourism.gov.in/' }
        ]
      }
    ]
  },
  {
    category: 'Heritage Legacy',
    circuits: [
      {
        id: 'shakti',
        name: 'Shakti Peeths',
        icon: '🌺',
        desc: 'Power centers of the Cosmic Goddess.',
        stops: [
          { name: 'Kamakhya', loc: 'Assam', context: 'Center of Tantra and Desire.', todo: ['Temple Pooja', 'Brahmaputra Cruise'], link: 'https://kamakhyatemple.org/' },
          { name: 'Vaishno Devi', loc: 'J&K', context: 'The Mountain Mother.', todo: ['Katra Trek', 'Ardhkuwari Cave'], link: 'https://www.maavaishnodevi.org/' }
        ]
      },
      {
        id: 'jain',
        name: 'Jain Tirths',
        icon: '💎',
        desc: 'Path of non-violence and Tirthankaras.',
        stops: [
          { name: 'Palitana', loc: 'Gujarat', context: '800+ Temples on one mountain.', todo: ['Shatrunjaya Trek', 'Temple Complex'], link: 'https://www.gujarattourism.com/' },
          { name: 'Shikharji', loc: 'Jharkhand', context: 'Salvation of 20 Tirthankaras.', todo: ['Mountain Parikrama', 'Pooja'], link: 'https://tourism.jharkhand.gov.in/' }
        ]
      }
    ]
  }
];
