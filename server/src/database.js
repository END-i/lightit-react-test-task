const database = {
  products: [
    // Id—идентификаторпродукта
    // Title—наименованиепродукта •
    // Image—изображениепродукта •
    // Text—описаниепродукта

    {
      id: 1,
      title: 'Porsche Cayenne',
      text: `
        The Porsche Cayenne is a series of luxury SUV manufactured by the German company Porsche since 2002. The first generation was known internally within Porsche as the Type 9PA or E1. It is the first V8-engined vehicle built by Porsche since 1995, when the Porsche 928 was discontinued. It is also Porsche's first off-road variant vehicle since its Super and Junior tractors of the 1950s, and the first Porsche with four doors. Since 2014, the Cayenne has been sold alongside a smaller Porsche SUV, the Macan.
        The second-generation Cayenne (Type 92A or E2) was unveiled at the 2010 Geneva Motor Show in March. The Cayenne shares its platform, body frame, doors and electronics with the similar Volkswagen Touareg and Audi Q7. It received a facelift in 2014 with minor external changes, and introduced a new plug-in E-Hybrid version, with its public launch at the Paris Motor Show.[1] Since 2008, all engines have featured direct injection technology. The third generation (Type PO536) was unveiled in 2017 at Stuttgart.
        The Cayenne is the first Porsche assembled outside of Europe, in Kulim, Kedah, Malaysia. Only the base model 3.0-litre V6 is assembled in Malaysia, while other models are imported from Slovakia.
      `,
      image: 'image1.png',
    },
    {
      id: 2,
      title: 'Porsche 911',
      text: `
        The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany. It has a rear-mounted flat-six engine and originally a torsion bar suspension. The car has been continuously enhanced through the years but the basic concept has remained unchanged.[1] The engines were air-cooled until the introduction of the 996 series in 1998.[2][3]
        The 911 has been raced extensively by private and factory teams, in a variety of classes. It is among the most successful competition cars. In the mid-1970s, the naturally aspirated 911 Carrera RSR won world championship races including Targa Florio and the 24 Hours of Daytona. The 911-derived 935 turbo also won the 24 Hours of Le Mans in 1979. Porsche won the World Championship for Makes in 1976, 1977, 1978, and 1979 with 911-derived models.
        In a 1999 poll to determine the Car of the Century, the 911 was fifth.[4] It is one of two in the top five that had remained continuously in production (the original Beetle remained in production until 2003).[5] The one millionth example was manufactured in May 2017 and is in the company's permanent collection.
      `,
      image: 'image2.jpeg',
    },
    {
      id: 3,
      title: 'Porsche 930',
      text: `
        The Porsche 930 is the internal designation for the turbocharged variant of the 911 model manufactured by German automobile manufacturer Porsche between 1975 and 1989. It was the maker's top-of-the-range 911 model for its entire production duration and, at the time of its introduction, was the fastest production car available in Germany.[3][4][5]
        Porsche began experimenting with turbocharging technology on their race cars during the late 1960s, and in 1972 began development on a turbocharged version of the 911. Porsche originally needed to produce the car in order to comply with homologation regulations and had intended on marketing it as a street legal race vehicle like the 1973 Carrera 2.7 RS. The FIA's Appendix "J” rules upon which the 911 Turbo Carrera RSR 2.1 was entered into competition in 1974 changed in 1975 and 1976. The FIA announced that cars for Group 4 and Group 5 had to be production cars and be available for sale to individual purchasers through manufacturer dealer networks. For the 1976 season, new FIA regulations required manufacturers to produce 400 cars within a twenty-four-month period to gain approval for Group 4. Group 5 would require the car to be derived from a homologated model in Group 3 or 4. Porsche's Group 4 entry was the 934, homologated on 6 December 1975. For Group 5, Porsche would develop one of the most successful racing cars of the time, the 935. The 911 Turbo was put into production in 1975. While the original purpose of the 911 Turbo was to gain homologation for the 1976 racing season, it quickly became popular among car enthusiasts. Four hundred cars were produced by the end of 1975.[citation needed] Since Porsche wanted to compete in the 1976 season, they gained FIA homologation for the Porsche Turbo for Group 4 in Nr. 645 on 6 December 1975 and the 1,000th 911 Turbo was completed on 5 May 1976.
      `,
      image: 'image3.jpeg',
    },
    {
      id: 4,
      title: 'Porsche Taycan',
      text: `
        The Porsche Taycan is a battery electric saloon and shooting brake produced by German automobile manufacturer Porsche. The concept version of the Taycan, named the Porsche Mission E, debuted at the 2015 Frankfurt Motor Show.[5] The Taycan was revealed fully production-ready at the 2019 Frankfurt Motor Show.[4] As Porsche's first series production electric car,[5] it is sold in several variants at different performance levels, and may spawn further derivatives in future models.[6] More than 20,000 Taycans were delivered in 2020, its debut sale year, representing 7.4% of the total Porsche volume.[7] A modified Taycan Turbo S is the current Formula E Safety car.[8]
        Nomenclature
        The name "Taycan" (/taɪ-kɒn/[9]) roughly translates from Turkish tay+can as "lively young horse", in reference to the steed of the Stuttgart coat of arms on the Porsche crest.[10][11]
        Porsche named the high performance models Turbo and Turbo S despite the absence of a turbocharger, following the tradition set by high performance Porsche derivatives with internal combustion engines
      `,
      image: 'image4.jpeg',
    },
    {
      id: 5,
      title: 'Porsche 918 Spyder',
      text: `
        The Porsche 918 Spyder is a sports car manufactured by German marque Porsche.[5] The 918 Spyder is a plug-in hybrid powered by a mid-mounted naturally aspirated 4.6 L (4,593 cc) V8 engine, developing 447 kW (608 PS; 599 hp) at 8,700 RPM, with two electric motors delivering an additional 210 kW (286 PS; 282 hp) for a combined output of 652 kW (875 hp) and 1,280 N⋅m (944 lbf⋅ft) of torque.[6][7] The 918 Spyder's 6.8 kWh lithium-ion battery pack delivers an all-electric range of 19 km (12 mi) under the US Environmental Protection Agency's five-cycle tests.[2]
        Production began on 18 September 2013, with deliveries initially scheduled to begin in December 2013, and a starting price of ≈€781,000 (US$845,000 or £711,000).[8][9][10] The 918 Spyder was sold out in December 2014 and production ended in June 2015.[11]
        The 918 Spyder was first shown as a concept at the 80th Geneva Motor Show in March 2010.[8] On 28 July 2010, after 2,000 declarations of interest, the supervisory board of Porsche AG approved series development of the 918 Spyder.[12] The production version was unveiled at the September 2013 Frankfurt Motor Show.[13] Porsche also unveiled the RSR racing variant of the 918 at the 2011 North American International Auto Show, which combines hybrid technology first used in the 997 GT3 R Hybrid, with styling from the 918 Spyder.[14] However, the 918 RSR didn't make it to production. The 918 Spyder was the second plug-in hybrid car manufactured by Porsche, after the 2014 Panamera S E-Hybrid.[15]
      `,
      image: 'image5.jpeg',
    },
    
  ],
  comments: [
    // Id—идентификаторотзыва
    // Rate—оценка
    // Text—комментарий
    // Id_user—идентификаторпользователя
    // Id_entry—идентификаторпродукта
    { id: 1, productId: 1, text: 'Comment 1', userId: 1, rate: 4 },
    { id: 2, productId: 1, text: 'Comment 2', userId: 2, rate: 3 },
    { id: 3, productId: 2, text: 'Comment 3', userId: 1, rate: 5 },
    { id: 4, productId: 3, text: 'Comment 4', userId: 3, rate: 2 },
  ],
  users: [
    //  Id—идентификаторпользователя
    //  Username—имяпользователя
    //  Password—пароль
    {
      id: 1,
      name: 'User 1',
      password: 'password1',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@example.com',
      password: 'password2',
    },
    {
      id: 3,
      name: 'User 3',
      email: 'user3@example.com',
      password: 'password3',
    },
    {
      id: 4,
      name: 'admin',
      password: 'admin',
    },
  ],
  validTokens: [],
}

module.exports = database
