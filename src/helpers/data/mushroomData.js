const mushrooms = [
  {
    id: 'mushroom01',
    name: 'Mystikal',
    description: 'A very special mushroom with mystical powers.',
    imgUrl: 'https://cdn4.vectorstock.com/i/1000x1000/13/08/magic-mushrooms-psychedelic-hallucination-vector-28891308.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom02',
    name: 'Red Cap',
    description: 'Red and poisonous mushroom, DO NOT EAT!',
    imgUrl: 'https://www.mushroom-appreciation.com/images/xeven-safe-wild-mushrooms-can-make-you-sick-if-21570978.jpg.pagespeed.ic.640-ryPTx4.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom03',
    name: 'Webcap',
    description: 'Ingestion of these mushrooms is often fatal, with symptoms taking as long as three weeks to appear.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/66/180666-050-FED69BBD/webcaps-Europe-Ingestion-mushrooms-symptoms.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom04',
    name: 'Jack-O-Lantern',
    description: 'A poisonous mushroom sometimes mistaken for a chanterelle.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Omphalotus_olearius_Mallorca.jpg/1920px-Omphalotus_olearius_Mallorca.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom05',
    name: 'Death Cap',
    description: 'Perhaps the deadliest of all mushrooms, the death cap is found throughout Europe and closely resembles edible straw mushrooms and caesar’s mushrooms.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/79/145379-050-4461FF66/Death-cap-mushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom06',
    name: 'Chanterelle',
    description: 'When snapped in half, the flesh of the mushroom will be pale white and have a fruity aroma with notes of apricot and peach.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chanterelle.jpg/1920px-Chanterelle.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom07',
    name: 'Straw',
    description: 'These jolly mushrooms are called Volvariella volvacea. Their common name comes from the rice straw on which they are grown.',
    imgUrl: 'https://sc02.alicdn.com/kf/UTB8nXKCvGrFXKJk43Ovq6ybnpXak.jpg_350x350.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom08',
    name: 'Caesar’s',
    description: 'In Italy Amanita caesarea is a very popular edible mushroom and has been so for more than 2000 years.',
    imgUrl: 'https://james-young.org/wp/wp-content/gallery/blog/caesar-mushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom09',
    name: 'Russula',
    description: 'It is globally widespread and is a treasured “edible” mushroom',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mushroom-IMG_3300.JPG/1200px-Mushroom-IMG_3300.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Aspen',
    description: 'It is an edible mushroom with a mild taste. It is known to be high in protein & fibre, iron, and zinc.',
    imgUrl: 'https://live.staticflickr.com/2429/3724512463_4daa72168e_b.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'ShiiTake',
    description: 'Cultivated and consumed in many Asian countries.',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91GOLzvAyEL._AC_SL1500_.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Saffron',
    description: 'Saffron milkcaps, a crunchy, tasty mushroom that have been enjoyed for millenia.',
    imgUrl: 'https://www.first-nature.com/fungi/images/russulaceae/lactarius-deliciosus6.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Gypsy',
    description: 'The flesh is cream-coloured and the flavor mild.',
    imgUrl: 'https://i.pinimg.com/originals/dd/aa/74/ddaa744719ad73c0dbd086a8738793e3.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Champignon',
    description: 'This mushroom is commonly found worldwide in fields and grassy areas following rain',
    imgUrl: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/278/278858/mushrooms-in-a-bowel-on-a-dark-table.jpg?w=1155&h=1734',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Truffle',
    description: 'Edible truffles are highly regarded in French, Italian, Spanish, and Middle Eastern cuisine.',
    imgUrl: 'https://www.pbs.org/food/wp-content/blogs.dir/2/files/2014/04/black-truffles600.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Honey Agaric',
    description: 'They have, as you can imagine, a slightly sweet taste along with a chewy, first texture.',
    imgUrl: 'https://www.first-nature.com/fungi/images/physalacriaceae/armillaria-mellea4.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Penny Bun',
    description: 'No food, fungal or otherwise, comes near it for flavour and texture.',
    imgUrl: 'https://www.first-nature.com/fungi/images/boletaceae/boletus-edulis7.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Oyster',
    description: 'They are one of the most widely consumed mushrooms in the world.',
    imgUrl: 'https://i.etsystatic.com/18376711/r/il/3fbca1/1650899012/il_1588xN.1650899012_mjr2.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Parasol',
    description: 'A choice edible species found on roadside verges, in neglected pastureland and on grassy seaside cliffs',
    imgUrl: 'https://www.first-nature.com/fungi/images/agaricaceae/macrolepiota-procera6.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Hedgehog',
    description: 'Can be found nestling in grass and moss beneath spruce, pine, birch and beech trees',
    imgUrl: 'https://wholeearthharvest.com/wp-content/uploads/2014/06/Hedgehog-500-500x500.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

const basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const emptyBasket = () => {
  basket.length = 0;
};

const removeTwoFromBasket = () => {
  console.log('in remove', basket.length);
  if (basket.length > 0) {
    let index = 0;
    while (index < 2) {
      const mushroom = basket[Math.floor(Math.random() * basket.length)];

      if (mushroom.quantity > 1) {
        console.log('before mushroom.quantity', mushroom.quantity);
        mushroom.quantity -= 1;
        console.log('after mushroom.quantity', mushroom.quantity);
      } else {
        console.log('else mushroom.quantity', mushroom.quantity);
      }

      console.log('after remove', basket.length);
      index += 1;
    }
  }
};

const pickAMushroom = () => {
  const mushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  const sameMushroom = basket.find((x) => x.id === mushroom.id);

  console.log('before remove', basket.length);
  if (mushroom.isPoisonous) {
    removeTwoFromBasket();
  } else if (sameMushroom && sameMushroom.quantity) {
    sameMushroom.quantity += 1;
  } else {
    mushroom.quantity = 1;
    basket.unshift(mushroom);
  }
};

export default { getMushrooms, getBasket, pickAMushroom };
