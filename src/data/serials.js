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
            Name: "Путеводный свет",
            MapInfo: "США",
            Description: `  Этот сериал пустил свои корни ещё в 30-х годах прошлого века! 
                      За это время он претерпел много изменений. Первые 20 сезонов он выходил в 
                      формате радиоэфира, актёрский состав и главные герои, конечно же, тоже менялись не раз.

                      Сюжет значительно отличается от современных сериалов. Во главу ставится духовная составляющая, 
                      а не деньги. Сценаристы постарались снять сериал так, чтобы за развитием истории 
                      было интересно наблюдать целых 70 лет. Ну а на просмотр без перерывов понадобится около года.
                      
                      На протяжении стольких лет в сериале сменилось множество семей, вокруг которых крутился 
                      причудливо переплетающий судьбы сюжет. Это были Бауэры, Рутерленджи, Робертсы и 
                      Холдены, Гранты, Норрисы, Флетчеры, Мейсоны, Торп, Мерлеры, Сполдинги и многие другие.
                   `
        },
        en: {
            Name: "Guiding Light",
            MapInfo: "USA",
            Description: `This series took root back in the 30s of the last century!
                      During this time it has undergone many changes. For the first 20 seasons it aired in
                      radio format, the cast and main characters, of course, also changed more than once.  
                      
                      The plot is significantly different from modern TV series. The spiritual component is put at the forefront,
                      not money. The writers tried to film the series in such a way that the development of the story
                      it was interesting to watch for 70 years. Well, it will take about a year to watch without interruptions.
                      
                      Over the course of so many years, the series has seen many families around which it revolved.
                      a plot that intricately intertwines fates. These were the Bowers, the Rutherlenjis, the Robertses and
                      Holdens, Grants, Norrises, Fletchers, Masons, Thorpe, Merlers, Spaldings and many others.
                    `,
        },
        Dates: "30.06.1952 - 18.09.2009",
        SizonCount: 57,
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "QdBZY2fkU-0",
        Photo: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/99e1053b-7b90-494a-bcb7-7bad0d9e0696/300x450",
        Photos: [
            "https://www.film.ru/sites/default/files/movies/frames/3715525-1356227.jpg",
            "https://www.film.ru/sites/default/files/movies/frames/3715525-1356225.jpg",
            "https://www.film.ru/sites/default/files/movies/frames/3715525-1356228.jpg",
            "https://www.film.ru/sites/default/files/movies/frames/3715525-1356229.jpg",
            "https://www.film.ru/sites/default/files/movies/frames/3715525-1356230.jpg",
            "https://www.film.ru/sites/default/files/movies/frames/3715525-1356231.jpg",
            "https://www.film.ru/sites/default/files/movies/frames/3715525-1356235.jpg",
            "https://www.film.ru/sites/default/files/movies/frames/3715525-1356232.jpg"
        ],
        Timeline: [
            {
                Time: "1952–1960",
                Text: `Установление основных семей и персонажей.
                       Развитие основных сюжетных линий в контексте жизни в Springfield.`
            },
            {
                Time: "1960-1970",
                Text: `Введение важных событий и поворотных точек в сюжете.
                       Развитие персональных историй персонажей.`
            },
            {
                Time: "1970-1980",
                Text: `Обращение к социальным темам и событиям времени.
                       Дальнейшее развитие персональных и семейных историй.`
            },
            {
                Time: "1980-1990",
                Text: `Стабилизация формата и углубление в сюжеты.
                       Важные повороты в судьбах ключевых персонажей.`
            },
            {
                Time: "1990-2009",
                Text: `Подведение итогов сюжетов и закрытие основных историй.
                       Последние эпизоды и завершение "Guiding Light" в сентябре 2009 года.`
            },
        ],
    },
    {
        id: 2,
        ru: {
            Name: "Главный госпиталь",
            MapInfo: "США",
            Description: ` "General Hospital" - американский дневной телесериал, который первоначально вышел в 
                           эфир в 1963 году. Сериал сосредотачивается вокруг жизни и событий в больнице "General Hospital" 
                           в вымышленном городе Порт Чарльз в штате Нью-Йорк. Сюжет включает в себя медицинские драмы, 
                           личные отношения персонала больницы, а также интриги и тайны, которые охватывают 
                           несколько поколений персонажей.
                         `
        },
        en: {
            Name: "General Hospital",
            MapInfo: "USA",
            Description: ` General Hospital is an American daytime television series that first premiered in
                           aired in 1963. The series centers around the life and events at General Hospital.
                           in the fictional town of Port Charles, New York. The plot includes medical dramas,
                           the personal relationships of the hospital staff, as well as the intrigue and secrets that surround
                           several different characters.
                          `,
        },
        SizonCount: 52,
        Dates: "01.04.1932 - ...",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "_T-ZCirqTnk",
        Photo: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/93990220-3d5c-4255-af3b-7c696e5daafd/300x450",
        Photos: [
            "https://s.zefirka.net/images/2021-11-15/samye-dolgoigrayushhie-serialy-za-vsyu-istoriyu/samye-dolgoigrayushhie-serialy-za-vsyu-istoriyu-3.jpg",
            "https://i.pinimg.com/originals/1a/82/f1/1a82f1e7104267bd192468d68f838bab.jpg",
            "https://resizer.mail.ru/p/d677a958-cb73-58bf-a2cb-74fb111de933/AAAC4A-5LlZP4DOu0dAys_p01_Xh-eVp8rtuHaTkE7wC5tiJMw2_OEaB3s9myMOyv4YLNiXNSk7V03CEU28ZJpLHyvs.jpg"
        ],
        Timeline: [
            {
                Time: "1963 - 1980",
                Text: `Сериал стартует в 1963 году.
                       Вводятся основные семьи, такие как Quartermaine и Spencer.
                       Основные сюжетные линии включают любовные треугольники, семейные интриги и медицинские драмы.`
            },
            {
                Time: "1981 - 1995",
                Text: `Знаменитый сюжет о «Леденцовой купельни» (1981).
                       Введение персонажа Люка Спенсера.
                       Медицинские и детективные сюжеты становятся более сложными.
                       Развитие отношений и интриг вокруг основных персонажей.`
            },
            {
                Time: "1996 - 2005",
                Text: `Сюжет о кассетах с Лорджеком (1996).
                       Множество интриг и заговоров вокруг основных семей.
                       Введение новых персонажей и углубление их связей.
                       События в больнице и вне её оказывают влияние на сюжет.`
            },
            {
                Time: "2006 - 2015",
                Text: `Переход к современным темам и проблемам.
                       Фокус на молодых персонажах и новых семейных династиях.
                       Взаимодействие с медицинскими и общественными вопросами.
                       Развитие технологий и изменения в обществе оказывают влияние на повествование.`
            },
            {
                Time: "2016 - ...",
                Text: `Сериал оставался актуальным с учетом событий в реальном мире.
                       Развитие персональных и медицинских историй.
                       Завершение или развитие ключевых сюжетных линий.
                       Продолжение эволюции персонажей и внедрение новых динамик.`
            }
        ],
    },
    {
        id: 3,
        ru: {
            Name: "Крутясь в мире",
            MapInfo: "США",
            Description: ` "As the World Turns" был создан в формате мыльной оперы и фокусировался на жизнях 
                            обитателей вымышленного города Октябрьское. Сериал был уникален своей способностью 
                            отражать реальные общественные и социокультурные изменения. Истории крутились вокруг 
                            нескольких ключевых семей и их взаимоотношений, проблем любви, предательства, интриг 
                            и медицинских драм.

                            Одним из отличительных черт "As the World Turns" было внимание к развитию персональных 
                            историй персонажей на протяжении многих лет. Зрители следили за их жизненными изменениями, 
                            от радостей до трудностей, и наблюдали за тем, как персонажи развиваются и сталкиваются с 
                            новыми вызовами.
                         `
        },
        en: {
            Name: "As the World Turns",
            MapInfo: "USA",
            Description: ` "As the World Turns" was created in a soap opera format and focused on the lives of the 
                            inhabitants of the fictional town of Oktyabrskoye. The series was unique in its ability 
                            to reflect real social and sociocultural changes. The stories revolved around 
                            several key families and their relationships, issues of love, betrayal, intrigue 
                            and medical drama.

                            One of the hallmarks of As the World Turns was its focus on developing the characters' 
                            personal stories over the years. Viewers followed their life changes, from joys to 
                            difficulties, and watched as the characters developed and faced new challenges.
                          `,
        },
        SizonCount: 54,
        Dates: "02.04.1956 - 17.09.2010",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "QZ4IMJfnmLw",
        Photo: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/b0a70998-a2e8-4f1c-8c0c-265ad0b1fc99/300x450",
        Photos: [
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/f2a27cf1-194d-4c4e-972a-d7145070d67d/x252",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/718ea200-d048-47ca-9833-76aae38bea45/x178",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/5d8caeba-e7a7-4bc0-a74e-b42caf06d16b/x252",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/781df706-6b56-4c72-8ed6-d74b170d1c54/x252"


        ],
        Timeline: [
            {
                Time: "1956 - 1960",
                Text: "Запуск сериала и введение основных персонажей и сюжетных линий."
            },
            {
                Time: "1960 - 1975",
                Text: "Расцвет популярности, внедрение новых сюжетов и персонажей."
            },
            {
                Time: "1975 - 1990",
                Text: "Инновации и смена акцентов, внедрение новых тем и технологий."
            },
            {
                Time: "1990 - 2005",
                Text: "Развитие сюжетных линий, внедрение новых персонажей, изменение динамики."
            },
            {
                Time: "2005 - ..",
                Text: "Современная эпоха сериала, адаптация к изменениям в телевизионной индустрии и зрительских предпочтениях."
            }
        ]
    },
    {
        id: 4,
        ru: {
            Name: "Дни наших жизней",
            MapInfo: "США",
            Description: `"Days of Our Lives" (Дни наших жизней) — американская долгожданная дневная драма, 
                           впервые вышедшая в эфир в ноябре 1965 года на канале NBC. Этот сериал, созданный 
                           Тедом и Бетси Кордэй, стал одним из самых долгоиграющих и популярных телесериалов в 
                           истории американского телевидения.

                           "Days of Our Lives" является типичным представителем жанра мыльной оперы, предоставляя 
                           зрителям замысловатые сюжеты, интриги, романтику и множество персональных драм. Сюжет 
                           фокусируется на жизни жителей вымышленного города Сейлем, придуманного для сериала, и их 
                           взаимоотношениях в течение многих лет.

                           Одной из уникальных черт "Days of Our Lives" является постоянное влияние фэнтезийных и 
                           даже научно-фантастических элементов на сюжет. К примеру, сюжет иногда включает в себя 
                           загадочные исчезновения, заговоры, память о перерождении, сверхъестественные события и 
                           даже путешествия во времени.
                         `
        },
        en: {
            Name: "",
            MapInfo: "USA",
            Description: ``,
        },
        SizonCount: 54,
        Dates: "",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "",
        Photo: "",
        Photos: [

        ],
        Timeline: [
            {
                Time: "",
                Text: ``
            },

        ]
    },
    {
        id: 5,
        ru: {
            Name: "Дни наших жизней",
            MapInfo: "США",
            Description: `
                         `
        },
        en: {
            Name: "",
            MapInfo: "USA",
            Description: ``,
        },
        SizonCount: 54,
        Dates: "",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "",
        Photo: "",
        Photos: [

        ],
        Timeline: [
            {
                Time: "",
                Text: ``
            },

        ]
    },
    {
        id: 6,
        ru: {
            Name: "Дни наших жизней",
            MapInfo: "США",
            Description: `
                         `
        },
        en: {
            Name: "",
            MapInfo: "USA",
            Description: ``,
        },
        SizonCount: 54,
        Dates: "",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "",
        Photo: "",
        Photos: [

        ],
        Timeline: [
            {
                Time: "",
                Text: ``
            },

        ]
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