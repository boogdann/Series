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
            item.Timeline = arr[i].en.Timeline
        } else {
            item.Name = arr[i].ru.Name
            item.MapInfo = arr[i].ru.MapInfo
            item.Description = arr[i].ru.Description
            item.Timeline = arr[i].ru.Timeline
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
                   `,
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
            Timeline: [
                {
                    Time: "1952–1960",
                    Text: `The establishment of the main families and characters.
                       The development of the main story lines in the context of life in Springfield.`
                },
                {
                    Time: "1960-1970",
                    Text: `The introduction of important events and turn points in the plot.
                       The development of the personal histories of the characters.`
                },
                {
                    Time: "1970-1980",
                    Text: `The connection to social themes and events in the time.
                       The development of the personal histories of the families.`
                },
                {
                    Time: "1980-1990",
                    Text: `The stabilization of the format and the deepening in the plot.
                       The important turn points in the fate of key characters.`
                },
                {
                    Time: "1990-2009",
                    Text: `The conclusion of the series and the closing of the main histories.
                       The last episodes and the conclusion of "Guiding Light" in September 2009.`
                },
            ]
        },

        Dates: "30.06.1952 - 18.09.2009",
        SizonCount: 57,
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "Wh2ayEUrNgI",
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
                         `,
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
        en: {
            Name: "General Hospital",
            MapInfo: "USA",
            Description: ` General Hospital is an American daytime television series that first premiered in
                           aired in 1963. The series centers around the life and events at General Hospital.
                           in the fictional town of Port Charles, New York. The plot includes medical dramas,
                           the personal relationships of the hospital staff, as well as the intrigue and secrets that surround
                           several different characters.
                          `,
            Timeline: [
                {
                    Time: "1963 - 1980",
                    Text: `The series began in 1963.
                       The families of the series include Quartermaine and Spencer.
                       The main story lines include love triangles, family relationships, and medical dramas.`
                },
                {
                    Time: "1981 - 1995",
                    Text: `The first story of the series, "The Sleeping Pill," was released in 1981.
                       The character of Luke Spencer was introduced.
                       The medical drama scenes are more complex.
                       The relationship and intrigue around the main characters.`
                },
                {
                    Time: "1996 - 2005",
                    Text: `The story of the cassette "The Cure" was released in 1996.
                       Manyintrigues and rumors around the main families.
                       The introduction of new characters and their relationships.
                       The events in the hospital and out of it have an effect on the story.`
                },
                {
                    Time: "2006 - 2015",
                    Text: `The series has become increasingly relevant to modern themes and problems.
                       The focus on the young characters and new family groups.
                       The relationship with the medical and social questions.
                       The technology and the change in the community have an effect on the story.`
                },
                {
                    Time: "2016 - ...",
                    Text: `The series has remained relevant in the real world.
                       The evolution of personal and medical histories.
                       The completion or evolution of key narrative lines.
                       The evolution of the characters and the introduction of new dynamics.`
                }
            ],
        },
        SizonCount: 52,
        Dates: "01.04.1932 - ...",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4,
        },
        Video: "_T-ZCirqTnk",
       Photo: "https://previews.dropbox.com/p/thumb/ACFrRtVXMGDgVduzJBO1gs_eImf1TMuMvAoPfSieQuf7USttIkprDIGfmrZTOIB-uoHhF1J9YqTvmGZ8rqV5wreBHpf4k2vD1CqVInndYp4V4pWaciLh8Q0vRc1cTt01rEGzHK7mH66_Z7rWkxeQsmn4X1u0cOpTT1QsY5ouqyxL00kiOvg0VKS6AEgWgQEr4pvXRIWXLqCI-FBKQTQTwnzrnUvX7HMysaNe7iPuyOaIAKHBNruUkpnj8nXSRfAbjb_0rDpMTYz_lYub-PW5UISJjqoVbgOi44MSKcKwYMUwz4XLEt_mPg0s7ZmeJmkQsgKGO-iT8Z1KbnlQnuihssQA/p.jpeg",
        Photos: [
            "https://s.zefirka.net/images/2021-11-15/samye-dolgoigrayushhie-serialy-za-vsyu-istoriyu/samye-dolgoigrayushhie-serialy-za-vsyu-istoriyu-3.jpg",
            "https://i.pinimg.com/originals/1a/82/f1/1a82f1e7104267bd192468d68f838bab.jpg",
            "https://resizer.mail.ru/p/d677a958-cb73-58bf-a2cb-74fb111de933/AAAC4A-5LlZP4DOu0dAys_p01_Xh-eVp8rtuHaTkE7wC5tiJMw2_OEaB3s9myMOyv4YLNiXNSk7V03CEU28ZJpLHyvs.jpg"
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
                         `,
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
            Timeline: [
                {
                    Time: "1956 - 1960",
                    Text: "Launch of the series and introduction of the main characters and plot lines."
                },
                {
                    Time: "1960 - 1975",
                    Text: "The rising of popularity, introduction of new plot lines and characters."
                },
                {
                    Time: "1975 - 1990",
                    Text: "Innovations and accent changes, introduction of new themes and technologies."
                },
                {
                    Time: "1990 - 2005",
                    Text: "The development of plot lines, introduction of new characters, change of dynamics."
                },
                {
                    Time: "2005 - ..",
                    Text: "Modern era of the series, adaptation to changes in television industry and audience preferences."
                }
            ]
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
                         `,
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
        en: {
            Name: "Days of our lives",
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
            Timeline: [
                {
                    Time: "1965",
                    Text: "The premiere of 'Days of Our Lives' on the NBC. The series starts, presenting the audience with a fictional city of Salem and beginning to form the basis of the series."
                },
                {
                    Time: "1960 - 1980",
                    Text: "The beginning of the period when 'Days of Our Lives' is one of the leading daytime operas. The series develops the main characters, and the basis of the series is formed."
                },
                {
                    Time: "1980 - 2000",
                    Text: "The series faces the gold age of television, bringing wide audiences. The storyline is complicated, introducing the characters and the personal drama of the characters."
                },
                {
                    Time: "2000 - 2010",
                    Text: "The series keeps pace with the development of the storyline. The plot is constantly changing, introducing new plot elements and new characters."
                },
                {
                    Time: "2010-...",
                    Text: "The series keeps its popularity, constantly updating the plot and introducing new characters."
                }
            ]
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
        en: {
            Name: "The Young and the Restless",
            MapInfo: "USA",
            Description: `The Young and the Restless is an American daytime soap opera that first premiered in 1973. 
                          The series was created by William J. Bell. Considered one of the most successful and 
                          longest-running soap operas in the history of American television, 'The Young and the 
                          Restless' focuses on the lives of wealthy families in the fictional city of Genoa City. 
                          It pioneered the use of intricate storylines and twists in the soap opera genre.`,
            Timeline: [
                {
                    Time: "1973",
                    Text: "The Young and the Restless premieres on 'The Young and the Restless', " +
                        "giving viewers an insight into the unique style and characters."
                },
                {
                    Time: "1970 - 1980",
                    Text: "The period of growth and development. The series introduces themes of love, " +
                        "intrigue and fighting for the rights of the people. The characters, such as Victor " +
                        "Newman and Caterina Chansell, become central figures and win hearts of fans."
                },
                {
                    Time: "1980 - 1990",
                    Text: "The spread of innovations in the storyline, including the latest themes and " +
                        "new characters. The series supports the success of the ratings and remains popular " +
                        "among the audience. The characters, such as the wealthy families in Genoa City, " +
                        "become new figures and win hearts of fans."
                },
                {
                    Time: "2000 - 2010",
                    Text: "The series continues to the development of the storyline, bringing new themes " +
                        "and new characters. The characters, such as the wealthy families in Genoa City, " +
                        "become new figures and win hearts of fans."
                },
                {
                    Time: "2010 - ...",
                    Text: "The series continues to the development of the storyline, bringing new themes " +
                        "and new characters. The characters, such as the wealthy families in Genoa City, " +
                        "become new figures and win hearts of fans."
                }
            ]
        },
        SizonCount: "45",
        Dates: "1973 - ...",
        Map: {
            center: [39.8283, -98.5795],
            zoom: 4
        },
        Video: "iMnVyE5KvHQ",
        Photo: "https://previews.dropbox.com/p/thumb/ACE-KgvYl1_cUKzYCIhNgLJHMLR9wwWWKPJV-bcugm6juKW0W22nn9gdu-eAu8FeZYtdPUI3w9sahq2hXTGYrQGbcWPOBJZxRBYwFWev7VJFfrMOvIuzUxGdgl3DC20KgCHBLcEPxSQCuWvYQjWNJYkyZZVKC4UNduKDnZe9Bq0-9bVK2-GMVzzoh3KT4ENzv2L31duZCW7VRKpfK-9EllFZ57kWKl2xqbchz3YZqEtuBY-ZEnVt6bqbAG0mfe4kNOTfyNobmEvWAPvsFij6OobXvR_A9hYfjCDkCCPQoscmMhZ6ptzT9uLjhV2f9qNqimv6yL006TKNW7VYixWGvkHL/p.jpeg",
        Photos: [
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/282dee2c-93d6-4398-b860-25296390b080/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/47a20971-5252-4210-8fd3-060a47ca3cee/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/50dccb73-5e9e-4451-9150-a971bef88c88/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/701a57e0-51a6-42ed-ac8e-7315ea2a248c/1920x"
        ],
    },
    {
        id: 6,
        ru: {
            Name: "Улица коронации",
            MapInfo: "Великобритания",
            Description: `Британский телесериал 'Улица коронации' (Coronation Street) является одним из долгоиграющих и 
                          популярных телесериалов в истории. Премьера состоялась в декабре 1960 года, и сериал создан 
                          Тони Уорреном. 'Улица коронации' фокусируется на жизни обитателей вымышленного района Везерфилд, 
                          и он стал важной частью британской культуры, затрагивая разнообразные темы и социальные вопросы.`,
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
        },
        en: {
            Name: "Coronation Street",
            MapInfo: "Place of Origin: United Kingdom",
            Description: `The British television series 'Coronation Street' is one of the longest-running and popular 
                          soap operas in history. It premiered in December 1960 and was created by Tony Warren. 
                          'Coronation Street' focuses on the lives of residents in the fictional Weatherfield 
                          area and has become a significant part of British culture, addressing diverse themes 
                          and social issues.`,
            Timeline: [
                {
                    Time: "1960",
                    Text: "The premiere of 'Coronation Street'. The series starts, representing the rich lives of " +
                        "Weatherfield and beginning its long and storied history."
                },
                {
                    Time: "1960-1970",
                    Text: "The formation and popularity. 'Coronation Street' becomes a key element of British " +
                        "culture, lighting up social changes and family relationships."
                },
                {
                    Time: "1980-1990",
                    Text: "The expansion across Britain. Worldwide audience recognition and top awards."
                },
                {
                    Time: "2000-2010",
                    Text: "The modern themes and actual scenarios. 'Coronation Street' continues to be popular and " +
                        "engages in the development of new generations of audience."
                },
                {
                    Time: "After 2010",
                    Text: "The series retains its status as a cultural and continues active entertainment, " +
                        "deeply examining the modern issues of the world."
                }
            ]
        },
        SizonCount: "60",
        Dates: "02.12.1960 - ...",
        Map: {
            "center": [55.3781, -3.4360],
            "zoom": 6
        },
        Video: "tsT1r2vXXQk",
        Photo: "https://previews.dropbox.com/p/thumb/ACFz8E1WjA4Em63piW5T-OueLXa2Ux3qGgiJNMlxLPQJjDxDDqlLRkj4PwfSnSQfKQ9VQ0SL1-9audGLlKbxdUG3BH-EqaQ_-ZetvSKbkTISdrHxLuJon6OV6IM5RezhknXBhHTE_ITUZK6w7HJ6hjYK6mdJq1G9EDiGSRjec61rNBqkfHzHDVHOrxltSCYdT8vDga9O4EkhqWW4UbSFb6KJd4Ch8220KnyuZiW6w5bNpbBfnUkseWX9K-Yxh4_llHFja3i9miksBtljV7Gv9DBJC4NPQfmLgNWRK6oLV7IvVnIrkqc8BPnMSy7-skyf9d9EH2VzcDHNWd4gxhw-oLV7/p.jpeg",
        Photos: [
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/c89a0de3-8a21-46dd-85f2-5e0c67660c15/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/324a811f-6956-4df6-b42a-d318671e26bc/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/8bd60486-c3c0-4b71-aabe-68ba75aaddb1/1920x",
            "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/77ef4b3c-ee6f-444a-be29-655d17ba7b11/1920x"
        ],
    },
    {
        id: 7,
        ru: {
            Name: "Санта-барбара",
            MapInfo: "США",
            Description: `«Мыло», которое стало синонимом жанра. И странно, что именно «Санта-
                        барбара» выросла до такого культурного феномена: проект длился всего девять лет, 
                        и за это время сняли 2137 эпизодов — в «Путеводном свете» в восемь раз больше.`,
            Timeline: [
                {
                    Time: "1984-1985",
                    Text: "Премьера сериала 'Санта Барбара'. В премьерный сезон (1984—1985) шоу заняло 11 место " +
                        "со средним показателем 3,4," +
                        " поднявшись на одну строчку во втором сезоне с 4,2."
                },
                {
                    Time: "1987-1988",
                    Text: "К 1987 году шоу получило самый высокий рейтинг за историю своего существования 4,9," +
                        " всё ещё занимая 10-ю позицию. Причём сезон 1987—1988 года стал успешным по показателям " +
                        "дневного шоу для канала NBC, который не мог похвастаться такими рейтингами с 1970-х."
                },
                {
                    Time: "1989",
                    Text: "Рейтинги сериала значительно упали летом 1989 года," +
                        "после того, как его покинул первый исполнитель роли Мэйсона Лейн Дэвис."
                },
                {
                    Time: "1990",
                    Text: "Сериал полчил сразу три премии: Daytime Emmy Awards, Soap Opera Digest Awards и Casting Society of America в" +
                        "номинациях Best Casting for TV Soaps, Outstanding Achievement in Lighting Direction for a Drama Series, " +
                        "Outstanding Drama Series"

                },
                {
                    Time: "После 1991",
                    Text: "Сериал продолжает терять рейтинги, а в январе 1993 студия прекратила съёмки."
                }
            ]
        },
        en: {
            Name: "Santa Barbara",
            MapInfo: "USA",
            Description: `"Soap", which has become synonymous with the genre. And it's strange that it was "Santa
                          Barbara" that grew to such a cultural phenomenon: the project lasted only nine years,
                          and during that time 2,137 episodes were shot - in "Guiding Light" eight times more.`,
            Timeline: [
                {
                    Time: "1984-1985",
                    Text: "The premiere of the TV series 'Santa Barbara'. In the premiere season (1984-1985), the show took 11th place " +
                        " with an average of 3.4, " +
                        " rising one place in the second season from 4.2."
                },
                {
                    Time: "1987-1988",
                    Text: "By 1987, the show had received the highest rating in its history of 4.9, "+
                        " still occupying the 10th position. Moreover, the 1987-1988 season was successful in terms of " +
                        "a daytime show for NBC, which has not boasted such ratings since the 1970s."
                },
                {
                    Time: "1989",
                    Text: "The ratings of the series dropped significantly in the summer of 1989, " +
                        " after the first performer of the role of Mason Lane Davis left it."
                },
                {
                    Time: "1990",
                    Text: "The series won three awards at once: Daytime Emmy Awards, Soap Opera Digest Awards and Casting Society of America in" +
                        "nominations Best Casting for TV Soaps, Outstanding Achievement in Lighting Direction for a Drama Series, " +
                        "Outstanding Drama Series"

                },
                {
                    Time: "After 1991",
                    Text: "The series continues to lose ratings, and in January 1993 the studio stopped filming."
                }
                ]
        },
        SizonCount: "9",
        Dates: "1984-1993",
        Map: {
            "center": [38.3586412418132, -77.75796825366668],
            "zoom": 6
        },
        Video: "pOF2XZeAnVI",
        Photo: "https://previews.dropbox.com/p/thumb/ACFFi0q1_kSOXNCtIKbFSQb4U9lsE03e6BoOQ1EgPWFnYnOiV2mcIwHqstFnkytKPf19SEOuBjB4v-Vnw5UWpJgfSiM1B3R0DgYhpzt0WkUXb9C8pWn_BJ7KnKYo09z1nh4h2sSEpl2WNie5Kl1zt6NHJWanSSdGapAOS3Ag_t1yPbYt7ZgKDdTFLjXge_Ffx0CEggRXpjJPaTKgsOuOxYZTfqGk5KDzH_IRXXbHKU1Yym56-j1Clz-OXOnFw-SNA1sBfYhrfHy2YIpZVl52k90s2295ZgCxoOqGE34T1NCPJRLEuSWXp4R1aKFkCS1B7rJcyVEX4W_E_IGSUn51s4ny/p.jpeg",
        Photos: [
            "https://images11.domashnyochag.ru/upload/img_cache/3ff/3ff9d22672c56ba2ff33414d2374689c_cropped_1332x890.jpg",
            "http://images-s.kinorium.com/movie/shot/79840/w1500_38483198.jpg",
            "https://storage.yandexcloud.net/stage01-metronews-transfer/media/20220618/13/21/858x540_46243725_u6lwsx93.jpg",
            "https://kino-bar.com/media/images/Santa-Barbara3.original.jpg"
        ],
    },
    {
        id: 8,
        ru: {
            Name: "Симпсоны",
            MapInfo: "США",
            Description: `Cимпсоны — американский анимационный сериал в жанре ситуационной комедии,
                          созданный мультипликатором и карикатуристом Мэттом Грейнингом для телекомпании Fox Broadcasting Company.
                           «Симпсоны» — самый длинный мультсериал в истории американского телевидения, непрерывно выходящий с 1989 года;
                          в октябре 2023 года началась трансляция 35 сезона сериала.`,
            Timeline: [
                {
                    Time: "1989",
                    Text: "Симпсоны перекочевали в «собственный» сериал, " +
                        "транслируемый телекомпанией FOX Network как еженедельное шоу. " +
                        "Первой показанной серией полной продолжительности была «Simpsons Roasting on an Open Fire»."
                },
                {
                    Time: "1997",
                    Text: "«Симпсоны» превзошли «Флинстоунов» как самый долгоидущий мультипликационный сериал в Америке." +
                          " В 2004 году «Симпсоны» оставили позади «Скуби-Ду» по количеству серий."
                },
                {
                    Time: "2005",
                    Text: "Журнал «Men's Health» признал Гомера Симпсона философом десятилетия."
                },
                {
                    Time: "2010",
                    Text: "На канале «Fox» был показан 40-минутный фильм «The Simpsons 20th Anniversary Special" +
                        " – In 3-D! On Ice!», посвящённый истории знаменитого сериала."
                },
                {
                    Time: "2023",
                    Text: "Мультсериал был продлён до 36 сезона"
                }
            ]
        },
        en: {
            Name: "The Simpsons",
            MapInfo: "Place of Origin: USA",
            Description: `The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company.
                          The series is a satirical depiction of American life, epitomized by the Simpson family, which consists
                          of Homer, Marge, Bart, Lisa, and Maggie. Set in the fictional town of Springfield, it caricatures society,
                          Western culture, television, and the human condition.`,
            Timeline: [
                {
                    Time: "1989",
                    Text: "The Simpsons migrated to its own series " +
                        "broadcast by the FOX Network as a weekly show " +
                        "The first full-length episode shown was «Simpsons Roasting on an Open Fire»."
                },
                {
                    Time: "1997",
                    Text: "The simpsons surpassed The Flintstones as the longest-running animated series in America." +
                        " In 2004, The Simpsons left Scooby-Doo behind in terms of the number of episodes."
                },
                {
                    Time: "2005",
                    Text: "Men's Health magazine recognized Homer Simpson as the philosopher of the decade."
                },
                {
                    Time: "2010",
                    Text: "The 40-minute film 'The Simpsons 20th Anniversary Special– In 3-D was shown on the Fox channel! On Ice!', dedicated to the history of the famous series."
                },
                {
                    Time: "2023",
                    Text: "The animated series has been extended to season 36"
                }
            ]
        },
        SizonCount: "35",
        Dates: "17.01.1989 - ...",
        Map: {
            "center": [38.3586412418132, -77.75796825366668],
            "zoom": 6
        },
        Video: "3R1ebDCv7vM",
        Photo: "https://previews.dropbox.com/p/thumb/ACHAZ_KNRv9Wng-XI42RscSL8FsfVJKonOVbayoFhw1vMlOECD7cp5SKWm1sv-NewPe_2V4p_pw7_-Ztmhb3uRz9SshBGagfcu75QjdzZRqD5s8Gd19NFiGZHzQro6FSb8Fh8J_YL852YiO5jVkbuB5VRIZs_UMU40n0ioNJQwEb7XuId1deWPVPlnabjJvo2qESkdyfHATu4g2VRd4lFxqhiSWr1a-GtElo6FR3cFGg3Pl4-COXaZiaabxcMqexvzpMssSJ1vTdVBDbVy3RANpJrWToaQTAtreKfA9cgy8-ZLd_e3OWa_Gr09TvI6n7jw7xRxK7DWof9KfMvyGD2gYi/p.jpeg",
        Photos: [
            "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65738e17cdd4553c12d62158_65738e6c43f35b297b65ea1a/scale_1200",
            "http://static.kinoafisha.info/k/series_episodes/1920x1080/upload/series/episodes/343707631426.jpg",
            "https://fikiwiki.com/uploads/posts/2022-02/1644861782_20-fikiwiki-com-p-simpsoni-krasivie-kartinki-25.png",
            "https://i.ytimg.com/vi/uSmlbgk5ONA/maxresdefault.jpg"
        ],
    },
    {
        id: 9,
        ru: {
            Name: "Сверхъестественное",
            MapInfo: "США",
            Description: `Финальный аккорд — фэнтези-детектив о братьях Винчестерах. Шутили, 
                          что «Сверхъестественное» будет длиться бесконечно, но 2020-й смог убить даже неубиваемых.
                          По количеству мемов о длительности этот многосерийный убийца времени точно побеждает
                          все другие шоу топа, но по цифрам Винчестеры проигрывают: у сериала всего 15 сезонов за 15 лет и 321 серия.`,
            Timeline: [
                {
                    Time: "2005",
                    Text: "It was first broadcast on September 13, 2005, on The WB," +
                        " and subsequently became part of successor network The CW's lineup." +
                        " Starring Jared Padalecki as Sam Winchester and Jensen Ackles as Dean Winchester" +
                        ", the series follows the two brothers as they hunt demons, ghosts, monsters, " +
                        "and other supernatural beings."
                },
            ]
        },
        en: {
            Name: "Supernatural",
            MapInfo: "Place of Origin: USA",
            Description: `The final chord is a fantasy detective story about the Winchester brothers. They were joking, 
                          that the "Supernatural" would last indefinitely, but 2020 was able to kill even the unkillable.
                          In terms of the number of memes about the duration, this serial time killer definitely beats
                          all other top shows, but in terms of numbers, the Hard Drives lose: the series has only 15 seasons in 15 years and 321 episodes.`,
            Timeline: [
                {
                    Time: "2005",
                    Text: ""
                }
            ]
        },
        SizonCount: "15",
        Dates: "13.09.1989 - 19.11.2020",
        Map: {
            "center": [38.3586412418132, -77.75796825366668],
            "zoom": 6
        },
        Video: "PG5ST2_zCo4",
        Photo: "https://previews.dropbox.com/p/thumb/ACF9WZ3QXzkfD6Ov-_LBj13vsNgf4gbmNo0EpYm_pfu6TVEAOD084Izjvum5W1hwCDficAebA26Dn9SN142wD9Zhz8bCFuESgNXFIP0DYYxbLQs4JdIt8U7DOi5YB2c61_0YSbAAuGqmXDEDWSM7aV4MT7WpmPoNa0kyOa7KQAK4KurkSAZlaKSVwSiM5g5P6pDE4ZjzoEyNuhIxXLLVqiqYrbOggs2DtNCPmvlhty2pZ3NpHsu8BRn1MKzB9ilkPmYlvgmg050TgexZp4U0FX6gPVJfqCt6zmQmTMXLDDb8eFHae8plaT0ZbgXJ1uV4q_k_QEetzRiWs9uKzse78wPs/p.jpeg",
        Photos: [
            "https://rg.ru/uploads/images/166/92/69/kinopoisk.ru-Supernatural-3188926.jpg",
            "https://kinotv.ru/upload/delight.webpconverter/upload/setka-editor/151/0eu3x9iopfsiyv0l99at03pbub88he8k.jpg.webp?1655742822899824",
            "https://img.gazeta.ru/files3/423/13084423/79ca1dba157afc345933b6557c9ea4c6-pic905-895x505-70849.jpg",
            "https://cdnn21.img.ria.ru/images/07e4/08/12/1575928215_0:26:880:522_600x0_80_0_0_ac7569c874b608b0cbd989176df1f9ce.jpg"
        ],
    }

]

const filmOfTheDay = [
    {
        id: 1,
        ru: {
            Name: "Теория большого взрыва",
            MapInfo: "США",
            Description: "«Теория большого взрыва» - это захватывающая история о четырех ученых-физиках и их приключениях в мире науки и личных отношений. Сериал полон юмора, неожиданных ситуаций и увлекательных сюжетов. Главные герои, Шелдон Купер и Леонард Хофстедтер, делят не только лабораторию, но и дом, где происходят многочисленные комические ситуации. Отношения Шелдона и его друзей, а также любовные перипетии Леонарда и Пенни составляют основной сюжет сериала.",
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
        },
        en: {
            Name: "The Big Bang Theory",
            MapInfo: "USA",
            "Description": "The Big Bang Theory is an exciting story about four physicists and their adventures in the world of science and personal relationships. The series is full of humor, unexpected situations, and captivating plots. The main characters, Sheldon Cooper and Leonard Hofstadter, not only share a laboratory but also a home where numerous comedic situations unfold. The relationships between Sheldon and his friends, as well as the romantic twists between Leonard and Penny, form the core of the series.",
            Timeline: [
                {
                    Time: "24.09.2007 - 16.05.2019",
                    Text: "The Big Bang Theory began on September 24, 2007, and finished in May 2019 after 12 seasons. The series was ranked among the most popular comed shows in the world."
                },
                {
                    Time: "2008 - 2010",
                    Text: "Leonard and Penny start their relationship, leading to numerous comic situations and miscommunications. This turnaround in the series has brought the show to life."
                },
                {
                    Time: "2013",
                    Text: "Sheldon proposes to Amy to start a relationship. This turns the series into one of the most memorable moments in the series."
                },
                {
                    Time: "2017",
                    Text: "The final season has ended. People have left the series with memories, surprises, and unexpected events. The series is now a cultural phenomenon in the world of TV."
                }
            ]
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
    }
]