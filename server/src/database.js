const { randomPrice } = require('./utils')

const database = {
  products: [
    // id
    // title
    // image
    // text
    // price
    {
      id: 1,
      title: '718 Cayman',
      text: `
        718 Cayman (WLTP)*
        Consumption/Emissions WLTP*
        Fuel consumption combined: 9,7 – 8,9 l/100 km
        CO2-emissions combined (WLTP): 220 – 201 g/km
        718 Concept.
        The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.
      `,
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (1).webp',
    },
    {
      id: 2,
      title: '718 Boxster',
      text: `
        718 Boxster (WLTP)*
        Consumption/Emissions WLTP*
        Fuel consumption combined: 9,7 – 8,9 l/100 km
        CO2-emissions combined (WLTP): 220 – 201 g/km
        718 Concept.
        The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.
      `,
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (2).webp',
    },
    {
      id: 3,
      title: '718 Cayman Style Edition',
      text: `
        718 Cayman Style Edition (WLTP)*
        Consumption/Emissions WLTP*
        Fuel consumption combined: 9,7 – 8,9 l/100 km
        CO2-emissions combined (WLTP): 219 – 202 g/km
        718 Concept.
        The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.
      `,
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (3).webp',
    },
    {
      id: 4,
      title: '718 Boxster Style Edition',
      text: `
        718 Boxster Style Edition (WLTP)*
        Consumption/Emissions WLTP*
        Fuel consumption combined: 9,7 – 9,0 l/100 km
        CO2-emissions combined (WLTP): 220 – 203 g/km
        718 Concept.
        The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.
      `,
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (4).webp',
    },
    {
      id: 5,
      title: '718 Cayman S',
      text: `
        718 Cayman S (WLTP)*
        Consumption/Emissions WLTP*
        Fuel consumption combined: 10,3 – 9,6 l/100 km
        CO2-emissions combined (WLTP): 235 – 217 g/km
        718 Concept.
        The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.
      `,
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (5).webp',
    },
    {
      id: 6,
      title: '718 Boxster S',
      text: `
        718 Boxster S (WLTP)*
        Consumption/Emissions WLTP*
        Fuel consumption combined: 10,4 – 9,6 l/100 km
        CO2-emissions combined (WLTP): 235 – 218 g/km
        718 Concept.
        The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.
      `,
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (6).webp',
    },
    {
      id: 7,
      title: '718 Cayman GTS 4.0',
      text: `
        718 Cayman GTS 4.0 (WLTP)*
        Consumption/Emissions WLTP*
        Fuel consumption combined: 10,9 – 10,1 l/100 km
        CO2-emissions combined (WLTP): 247 – 230 g/km
        718 Concept.
        The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.
      `,
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (7).webp',
    },
    {
      id: 8,
      title: '718 Boxster GTS 4.0',
      text: `
        718 Boxster GTS 4.0 (WLTP)*
        Consumption/Emissions WLTP*
        Fuel consumption combined: 10,9 – 10,1 l/100 km
        CO2-emissions combined (WLTP): 247 – 230 g/km
        718 Concept.
        The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world. With one goal: to take the everyday out of every day.
      `,
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (8).webp',
    },

    {
      id: 9,
      title: '718 Cayman GT4',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (9).webp',
    },
    {
      id: 10,
      title: '718 Spyder',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (10).webp',
    },
    {
      id: 11,
      title: '718 Cayman GT4 RS',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (11).webp',
    },
    {
      id: 12,
      title: '718 Spyder RS',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (12).webp',
    },
    {
      id: 13,
      title: '911 Carrera',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (13).webp',
    },
    {
      id: 14,
      title: '911 Carrera T',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (14).webp',
    },
    {
      id: 15,
      title: '911 Carrera Cabriolet',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (15).webp',
    },
    {
      id: 16,
      title: '911 Carrera 4',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (16).webp',
    },
    {
      id: 17,
      title: '911 Carrera 4 Cabriolet',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (17).webp',
    },
    {
      id: 18,
      title: '911 Carrera S',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (18).webp',
    },
    {
      id: 19,
      title: '911 Carrera S Cabriolet',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (19).webp',
    },
    {
      id: 20,
      title: '911 Carrera 4S',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (20).webp',
    },
    {
      id: 21,
      title: '911 Carrera 4S Cabriolet',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (21).webp',
    },
    {
      id: 22,
      title: '911 Targa 4',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (22).webp',
    },
    {
      id: 23,
      title: '911 Targa 4S',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (23).webp',
    },
    {
      id: 24,
      title: '911 Carrera GTS',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (24).webp',
    },
    {
      id: 25,
      title: '911 Carrera GTS Cabriolet',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (25).webp',
    },
    {
      id: 26,
      title: '911 Carrera 4 GTS',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (26).webp',
    },
    {
      id: 27,
      title: '911 Carrera 4 GTS Cabriolet',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (27).webp',
    },
    {
      id: 28,
      title: '911 Targa 4 GTS',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (28).webp',
    },
    {
      id: 29,
      title: '911 Edition 50 Years Porsche Design',
      text: '',
      price: randomPrice(10000, 200000),
      image: 'porsche-thumbwhite (29).webp',
    },
  ],
  comments: [
    // id: number
    // productId: string
    // text: string
    // userId: number
    // rate: number
    // createdBy: {
    //    id: number
    //    firstName: string
    //    lastName: string
    //    username: string
    //    email: string
    //    password: string
    // }
    // createdAt: Date
    {
      id: 1,
      productId: 1,
      text: "Nice car, but it doesn't break down at all! So I went back to my Lanos. At least some reason to hang out with the guys in the garages.",
      userId: 1,
      rate: 3,
      createdBy: {
        id: 1,
        firstName: 'Harrison',
        lastName: 'Ford',
        username: 'Harrison Ford',
        email: 'harri@ford.mail.ua',
        password: 'password',
      },
      createdAt: new Date('Mar 20, 2022, 14:54'),
    },
    {
      id: 2,
      productId: 1,
      text: 'Good car, buuuut the trunk is small. In the morning, when I go to trade at the market, I can hardly fit sacks of potatoes.',
      userId: 2,
      rate: 1,
      createdBy: {
        id: 2,
        firstName: 'Liam',
        lastName: 'Neeson',
        username: 'Liam Neeson',
        email: 'liam@neeson.mail.com',
        password: 'password',
      },
      createdAt: new Date('Feb 8, 2021, 20:27'),
    },
    {
      id: 3,
      productId: 2,
      text: "I love this car. But I can't go further than my neighborhood, because it can't handle potholes very well.",
      userId: 1,
      rate: 5,
      createdBy: {
        id: 1,
        firstName: 'Harrison',
        lastName: 'Ford',
        username: 'Harrison Ford',
        email: 'harri@ford.mail.ua',
      },
      createdAt: new Date('Jan 10, 2020, 12:04'),
    },
    {
      id: 4,
      productId: 3,
      text: `Magna aliquip ad id elit reprehenderit nisi proident deserunt adipisicing aliquip exercitation. Fugiat sunt deserunt incididunt sint aute magna esse id do culpa ipsum anim dolor pariatur. Aliqua sunt laborum duis aute fugiat est laboris id tempor. Commodo sunt ipsum non elit mollit nulla eu laborum nisi elit Lorem. Officia voluptate consectetur velit labore. Dolor consequat excepteur mollit excepteur commodo eu veniam consequat aliquip laboris anim eu.
        Duis reprehenderit proident proident adipisicing Lorem ullamco deserunt laborum cillum magna. Incididunt dolore irure voluptate minim proident cillum. Ea officia nostrud ipsum dolor sunt velit commodo dolore irure labore veniam qui. Esse eu ipsum et ipsum ullamco nisi exercitation qui voluptate irure ullamco sit ullamco. Ut consectetur non pariatur tempor sunt nisi Lorem cillum. Officia cupidatat esse anim irure consequat est mollit.
        Duis ullamco occaecat elit dolore proident sunt in id minim duis reprehenderit excepteur Lorem. Proident officia non consectetur velit. Lorem sint tempor anim commodo. Consectetur commodo mollit amet irure consectetur incididunt ea. Lorem deserunt sunt nostrud culpa. Est laborum non labore sunt sit consectetur nostrud nisi tempor.
        Occaecat sint duis laborum incididunt non et. Minim veniam occaecat aliqua ipsum tempor excepteur officia fugiat aliqua et ipsum velit aute occaecat. Nulla elit aute aute mollit ex nostrud esse officia ex consequat. Eiusmod enim pariatur laboris eu nulla duis deserunt labore qui nisi laborum. Voluptate velit proident commodo mollit ea. Incididunt anim laboris fugiat ullamco ut non aliqua esse do amet ut tempor ea.`,
      userId: 3,
      rate: 5,
      createdBy: {
        id: 3,
        name: 'Gary Oldman',
        email: 'garry@oldman.com',
      },
      createdAt: new Date('Dec 31, 2019, 10:21'),
    },
  ],
  users: [
    {
      id: 1,
      firstName: 'Harrison',
      lastName: 'Ford',
      username: 'Harrison Ford',
      email: 'harri@ford.mail.ua',
      password: 'password',
    },
    {
      id: 2,
      firstName: 'Liam',
      lastName: 'Neeson',
      username: 'Liam Neeson',
      email: 'liam@neeson.mail.com',
      password: 'password',
    },
    {
      id: 3,
      firstName: 'Gary',
      lastName: 'Oldman',
      username: 'Gary Oldman',
      email: 'garry@oldman.com',
      password: 'password',
    },
    {
      id: 4,
      firstName: 'Super',
      lastName: 'Admin',
      username: 'admin',
      email: 'admin@admin.mail.com',
      password: 'admin',
    },
  ],
  validTokens: [],
}

module.exports = database
