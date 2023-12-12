export let GetSerias = (isEnglish, isFilmOfTheDay) => {
  let data = [];

  let arr = allSerials
  if (isFilmOfTheDay) {
    arr = filmOfTheDay
  }

  for (let i = 0; i < arr.length; i++) {
    let item = {
      id: arr[i].id,
      Photo: arr[i].Photo,
      Name: "",
      MapInfo: "",
      Video: arr[i].Video,
      Map: arr[i].Map,
      Dates: arr[i].Dates,
      SizonCount: arr[i].SizonCount,
      Photos: arr[i].Photos,
      Timeline: arr[i].Timeline,
    }
    if (isEnglish) {
      item.Name = arr[i].en.Name
      item.MapInfo = arr[i].en.MapInfo
      item.Description = arr[i].en.Description
    } else {
      item.Name = arr[i].ru.Name
      item.MapInfo = arr[i].ru.MapInfo
      item.Description = arr[i].ru.Description
    }
    data.push(item)
  }
  return data
}

const allSerials = [
  {
    id: 1,
    ru: {
      Name: "фильм 1",
      MapInfo: "Что за место 1",
      Description: ` "Рандомный фильм" - это захватывающая история о неожиданной встрече двух незнакомцев,
          которая меняет их жизни навсегда. Фильм полон эмоций, напряжения и неожиданных поворотов сюжета.
          "Рандомный фильм" - это захватывающая история о неожиданной встрече двух незнакомцев,
          которая меняет их жизни навсегда. Фильм полон эмоций, напряжения и неожиданных поворотов сюжета.
          "Рандомный фильм" - это захватывающая история о неожиданной встрече двух незнакомцев,
          которая меняет их жизни навсегда. Фильм полон эмоций, напряжения и неожиданных поворотов сюжета.`
    },
    en: {
      Name: "film 1",
      MapInfo: "What the place 1",
      Description: `"A random movie is a captivating story about an unexpected encounter between two 
                    strangers that changes their lives forever. The movie is full of emotions, tension, 
                    and unexpected plot twists."`,
    },
    Dates: "00.00.0000 - 00.00.0000",
    SizonCount: 12,
    Map: {
      center: [55.751574, 37.573856],
      zoom: 10,
    },
    Video: "QdBZY2fkU-0",
    Photo: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg",
    Photos: [
      "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg",
      "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg",
    ],
    Timeline: [
      {
        Time: "00.00.0000 - 00.00.0000",
        Text: `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. 
              Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut 
              nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.`
      },
      {
        Time: "00.00.0000 - 00.00.0000",
        Text: `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. 
              Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut 
              nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.`
      }
    ],
  },
  {
    id: 2,
    ru: {
      Name: "фильм 2",
      MapInfo: "Что за место 2",
      Description: ` "Рандомный фильм" - это захватывающая история о неожиданной встрече двух незнакомцев,
          которая меняет их жизни навсегда. Фильм полон эмоций, напряжения и неожиданных поворотов сюжета.`
    },
    en: {
      Name: "film 2",
      MapInfo: "What the place 2",
      Description: `"A random movie is a captivating story about an unexpected encounter between two 
                    strangers that changes their lives forever. The movie is full of emotions, tension, 
                    and unexpected plot twists."`,
    },
    SizonCount: 12,
    Dates: "00.00.0000 - 00.00.0000",
    Map: {
      center: [55.751574, 37.573856],
      zoom: 10,
    },
    Video: "QdBZY2fkU-0",
    Photo: "https://www.vokrug.tv/pic/product/5/2/a/2/52a27d35a0ffc646b7a25bd8cbf5a120.jpeg",
    Photos: [
      "https://www.vokrug.tv/pic/product/5/2/a/2/52a27d35a0ffc646b7a25bd8cbf5a120.jpeg",
      "https://www.vokrug.tv/pic/product/5/2/a/2/52a27d35a0ffc646b7a25bd8cbf5a120.jpeg",
    ],
    Timeline: [
      {
        Time: "00.00.0000 - 00.00.0000",
        Text: `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. 
              Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut 
              nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.`
      },
      {
        Time: "00.00.0000 - 00.00.0000",
        Text: `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. 
              Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut 
              nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.`
      }
    ],
  }
]


const filmOfTheDay = [
  {
    id: 1,
    ru: {
      Name: "фильм X",
      MapInfo: "Что за место X",
      Description: ` "Рандомный фильм" - это захватывающая история о неожиданной встрече двух незнакомцев,
          которая меняет их жизни навсегда. Фильм полон эмоций, напряжения и неожиданных поворотов сюжета.
          "Рандомный фильм" - это захватывающая история о неожиданной встрече двух незнакомцев,
          которая меняет их жизни навсегда. Фильм полон эмоций, напряжения и неожиданных поворотов сюжета.
          "Рандомный фильм" - это захватывающая история о неожиданной встрече двух незнакомцев,
          которая меняет их жизни навсегда. Фильм полон эмоций, напряжения и неожиданных поворотов сюжета.`
    },
    en: {
      Name: "film X",
      MapInfo: "What the place X",
      Description: `"A random movie is a captivating story about an unexpected encounter between two 
                    strangers that changes their lives forever. The movie is full of emotions, tension, 
                    and unexpected plot twists."`,
    },
    Dates: "00.00.0000 - 00.00.0000",
    SizonCount: 12,
    Map: {
      center: [55.751574, 37.573856],
      zoom: 10,
    },
    Video: "QdBZY2fkU-0",
    Photo: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg",
    Photos: [
      "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg",
      "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg",
    ],
    Timeline: [
      {
        Time: "00.00.0000 - 00.00.0000",
        Text: `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. 
              Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut 
              nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.`
      },
      {
        Time: "00.00.0000 - 00.00.0000",
        Text: `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. 
              Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut 
              nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.`
      }
    ],
  },
]