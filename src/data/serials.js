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
            Description: `"Days of Our Lives" is an eagerly anticipated American daytime drama that first premiered in 
                           November 1965 on NBC. Created by Ted and Betty Corday, this series has become one of the 
                           longest-running and most popular soap operas in the history of American television.

                          "Days of Our Lives" is a typical representative of the soap opera genre, offering viewers 
                          intricate plots, intrigues, romance, and a plethora of personal dramas. The plot focuses 
                          on the lives of the inhabitants of the fictional town of Salem, created for the series, and 
                          their relationships over many years.

                          One of the unique features of "Days of Our Lives" is the constant influence of fantasy and 
                          even science fiction elements on the storyline. For example, the plot sometimes includes 
                          mysterious disappearances, conspiracies, memories of reincarnation, supernatural events, 
                          and even time travel.`,
        },
        SizonCount: 1,
        Dates: "08.11.1965 - ...",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "1EpuHGMn7B0",
        Photo: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/1afc57e2-6fd3-4e35-af59-75900edef60b/1920x",
        Photos: [
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/ab40b8e9-a883-49af-9cf0-b43bade5e602/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/1e2957d6-b166-4bbf-8634-31d2fb844fe2/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/db0037e8-c289-48a6-b9ea-ee35befedccd/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/ea2a117e-c006-4999-8520-077e413ab38a/1920x"
        ],
        Timeline: [
            {
                Time: "1965",
                Text: "Премьера 'Days of Our Lives' на канале NBC. Сериал стартует, представляя зрителям вымышленный город Сейлем и начинает формировать базовые элементы своего стиля и сюжета."
            },
            {
                Time: "1960 - 1980",
                Text: "Период начального успеха, когда 'Days of Our Lives' становится одним из ведущих дневных драматических сериалов. В этот период развиваются основные персонажи, и у сериала формируется фанатская база."
            },
            {
                Time: "1980 - 2000",
                Text: "Сериал переживает золотую эпоху, привлекая широкую аудиторию. Сложные сюжеты, романтика и интриги делают 'Days of Our Lives' одним из самых популярных телесериалов, продолжая развивать персональные драмы персонажей."
            },
            {
                Time: "2000 - 2010",
                Text: "Эксперименты с сюжетом включают в себя добавление фэнтезийных и научно-фантастических элементов, таких как загадочные исчезновения, заговоры и даже путешествия во времени. 'Days of Our Lives' продолжает удерживать внимание аудитории и оставаться актуальным."
            },
            {
                Time: "2010-...",
                Text: "Сериал сохраняет свою популярность, постоянно обновляя сюжетные направления и привлекая новых зрителей. 'Days of Our Lives' продолжает быть одним из столпов американской телевизионной драмы, обогащая свою историю новыми событиями и персонажами."
            }
        ]

    },
    {
        id: 5,
        ru: {
            Name: "Молодые и дерзкие",
            MapInfo: "США",
            Description: `Американский дневной драматический сериал 'Молодые и дерзкие', который впервые вышел в эфир в
                          1973 году. Создателем сериала является Уильям Дж. Белл. 'Молодые и дерзкие' считаются одним 
                          из самых успешных и долгоиграющих телесериалов в истории американского телевидения. Сюжет 
                          фокусируется на жизни богатых семей в вымышленном городе Дженова Сити, и 
                          он стал пионером в использовании сложных сюжетов и поворотов в жанре мыльной оперы.`,
        },
        en: {
            Name: "The Young and the Restless",
            MapInfo: "USA",
            Description: `The Young and the Restless is an American daytime soap opera that first premiered in 1973. 
                          The series was created by William J. Bell. Considered one of the most successful and 
                          longest-running soap operas in the history of American television, 'The Young and the 
                          Restless' focuses on the lives of wealthy families in the fictional city of Genoa City. 
                          It pioneered the use of intricate storylines and twists in the soap opera genre.`,
        },
        SizonCount: "45",
        Dates: "1973 - ...",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4
        },
        Video: "iMnVyE5KvHQ",
        Photo: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/7616decf-71a4-42c7-9d4f-ce96a610a258/300x450",
        Photos: [
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/282dee2c-93d6-4398-b860-25296390b080/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/47a20971-5252-4210-8fd3-060a47ca3cee/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/50dccb73-5e9e-4451-9150-a971bef88c88/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/701a57e0-51a6-42ed-ac8e-7315ea2a248c/1920x"
        ],
        Timeline: [
            {
                Time: "1973",
                Text: "Премьера 'Молодые и дерзкие', привлекая внимание зрителей своим уникальным стилем и персонажами."
            },
            {
                Time: "1970 - 1980",
                Text: "Период становления и развития. В сериале внедряются темы любви, интриг и борьбы за власть. " +
                    "Персонажи, такие как Виктор Ньюман и Кэтрин Чэнселор, становятся центральными фигурами и " +
                    "завоевывают любовь зрителей."
            },
            {
                Time: "1980 - 1990",
                Text: "Экспансия на мировой рынок, привлечение международной аудитории. 'Молодые и дерзкие' " +
                    "становятся номинантами и лауреатами престижных " +
                    "телевизионных наград. Истории о семейных интригах, бизнесе и страсти продолжают " +
                    "завоевывать сердца зрителей."
            },
            {
                Time: "2000 - 2010",
                Text: "Инновации в сюжете, включая актуальные темы и развитие новых персонажей. Сериал поддерживает " +
                    "лидерство в рейтингах и остается популярным у разнообразной аудитории. В это время в сюжете " +
                    "появляются новые темы, такие как социальные проблемы и технологические вызовы."
            },
            {
                Time: "2010 - ...",
                Text: "Сериал продолжает активное вещание, привлекая новое поколение зрителей. 'Молодые и дерзкие' " +
                    "остается в числе ведущих дневных драматических сериалов и продолжает эволюционировать с новыми " +
                    "сюжетами и персонажами. Сохраняя традицию долгой истории, сериал продолжает освещать актуальные " +
                    "темы и вызовы, с которыми сталкиваются современные семьи."
            }
        ]
    },
    {
        id: 6,
        ru: {
            Name: "Улица коронации",
            MapInfo: "Великобритания",
            Description: `Британский телесериал 'Улица коронации' (Coronation Street) является одним из долгоиграющих и 
                          популярных телесериалов в истории. Премьера состоялась в декабре 1960 года, и сериал создан 
                          Тони Уорреном. 'Улица коронации' фокусируется на жизни обитателей вымышленного района Везерфилд, 
                          и он стал важной частью британской культуры, затрагивая разнообразные темы и социальные вопросы.`
        },
        en: {
            Name: "Coronation Street",
            MapInfo: "Place of Origin: United Kingdom",
            Description: `The British television series 'Coronation Street' is one of the longest-running and popular 
                          soap operas in history. It premiered in December 1960 and was created by Tony Warren. 
                          'Coronation Street' focuses on the lives of residents in the fictional Weatherfield 
                          area and has become a significant part of British culture, addressing diverse themes 
                          and social issues.`
        },
        SizonCount: "60",
        Dates: "02.12.1960 - ...",
        Map: {
            "center": [55.3781, -3.4360],
            "zoom": 6
        },
        Video: "tsT1r2vXXQk",
        Photo: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/080c785c-43c3-4bac-b0f5-50fb695859e6/300x450",
        Photos: [
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/c89a0de3-8a21-46dd-85f2-5e0c67660c15/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/324a811f-6956-4df6-b42a-d318671e26bc/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/8bd60486-c3c0-4b71-aabe-68ba75aaddb1/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/77ef4b3c-ee6f-444a-be29-655d17ba7b11/1920x"
        ],
        Timeline: [
            {
                Time: "1960",
                Text: "Премьера 'Улицы коронации'. Сериал стартует, представляя обыденные жизни жителей " +
                    "Weatherfield и начиная свою долгую историю."
            },
            {
                Time: "1960-1970",
                Text: "Период формирования и популяризации. 'Улица коронации' становится ключевым элементом " +
                    "британской телекультуры, освещая социальные изменения и семейные взаимоотношения."
            },
            {
                Time: "1980-1990",
                Text: "Экспансия за пределы Великобритании. Завоевание мировой аудитории и престижных " +
                    "телевизионных наград."
            },
            {
                Time: "2000-2010",
                Text: "Современные темы и актуальные сюжеты. 'Улица коронации' продолжает оставаться " +
                    "популярной и привлекать внимание нового поколения зрителей."
            },
            {
                Time: "После 2010",
                Text: "Сериал сохраняет статус культового и продолжает активное вещание, углубляясь " +
                    "в сложные темы и отражая современные вызовы общества."
            }
        ]
    }


]

const filmOfTheDay = [
    {
        id: 1,
        ru: {
            Name: "Теория большого взрыва",
            MapInfo: "США",
            Description: "«Теория большого взрыва» - это захватывающая история о четырех ученых-физиках и их приключениях в мире науки и личных отношений. Сериал полон юмора, неожиданных ситуаций и увлекательных сюжетов. Главные герои, Шелдон Купер и Леонард Хофстедтер, делят не только лабораторию, но и дом, где происходят многочисленные комические ситуации. Отношения Шелдона и его друзей, а также любовные перипетии Леонарда и Пенни составляют основной сюжет сериала."
        },
        en: {
            Name: "The Big Bang Theory",
            MapInfo: "USA",
            "Description": "The Big Bang Theory is an exciting story about four physicists and their adventures in the world of science and personal relationships. The series is full of humor, unexpected situations, and captivating plots. The main characters, Sheldon Cooper and Leonard Hofstadter, not only share a laboratory but also a home where numerous comedic situations unfold. The relationships between Sheldon and his friends, as well as the romantic twists between Leonard and Penny, form the core of the series."
        },
        Dates: "24.09.2007 - 16.05.2019",
        SizonCount: 12,
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "OpECq14wxiM",
        Photo: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/TheBigBangTheoryS9.jpg/274px-TheBigBangTheoryS9.jpg",
        Photos: [
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c3de2cd6-633f-42ee-9f80-6591511a2ba8/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/ca45c6db-4cc8-4428-84a2-16c3ad3ad304/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/00f5b682-07c2-412d-9f66-b76cea0309e3/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/e843c1ee-5b52-4124-a009-0daa13d9882b/1920x"
        ],
        Timeline: [
            {
                Time: "24.09.2007 - 16.05.2019",
                Text: "«Теория большого взрыва» началась 24 сентября 2007 года и завершилась 16 мая 2019 года после 12 сезонов. Сериал получил широкое признание и стал одним из самых популярных комедийных шоу в истории телевидения."
            },
            {
                Time: "2008 - 2010",
                Text: "Леонард и Пенни начинают свои отношения, что приводит к множеству комических ситуаций и недопониманий. В это время Шелдон продолжает развивать свои уникальные привычки, что вызывает смех и удивление у зрителей."
            },
            {
                Time: "2013",
                Text: "Шелдон предложил Ами начать встречаться, открывая новую главу в его жизни и отношениях. Этот поворот событий стал одним из самых запоминающихся моментов в сериале."
            },
            {
                Time: "2017",
                Text: "Финальный сезон завершил историю героев. Зрители прощались с любимыми персонажами и сериалом, который стал культовым в мире телевидения. Последние эпизоды были насыщены эмоциями, воспоминаниями и неожиданными развитиями сюжета."
            }
        ]
    }
]