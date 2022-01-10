import { IRecipe } from "models/Recipe";

//временная заглушка с рецептами
export const RECIPES_LIST: IRecipe[] = [
    {
        _id: "00fe",
        title: "Картофель жареный",
        private: false,
        kindOfFood: "Второе",
        ingredients: [
            {
                description: "Картоха",
                count: "3кг",
            },
            {
                description: "Масло",
                count: "30г",
            },
            {
                description: "Лук",
                count: "1кг",
            },
        ],
        steps: [
            {
                title: "шаг 1",
                description: "Рыбное филе порезать на мелкие кусочки",
            },
            {
                title: "шаг 2",
                description:
                    "Смешать соевый соус и кетчуп, посыпать измельченным чесноком. Соус поставить в холодильник  ",
            },
            {
                title: "шаг 3",
                description:
                    "Рыбное филе обвалять в муке и соли. Обжарить на сковородке",
            },
        ],
        description: "Рецепт дня",
        cuisine: "Европа",
        rating: 4,
        time: 48,
        author: {id:"10", name:'Test'},
        typeOfMeal: "обед",
        portionsAmount: 2,
        cost: 15,
        createdAt: "31.11.21",
        urlImg: '/img/1.jpg'
    },
    {
      _id: "01fe",
      title: "Макарон",
      private: false,
      ingredients: [
        {
          description: "Макарон",
          count: "3кг",
        },
        {
          description: "Соль",
          count: "3г",
        },
        {
          description: "Рандомный соус",
          count: "1кг",
        },
      ],
      steps: [
        {
          title: "шаг 1",
          description: "Макароши кинуть в воду",
        },
        {
          title: "шаг 2",
          description:
            "Смешать соевый соус и кетчуп, посыпать измельченным чесноком. Соус поставить в холодильник  ",
        },
        {
          title: "шаг 3",
          description: "Смешать с макарошами",
        },
      ],
      description: "Рецепт дня",
      cuisine: "Европа",
      rating: 4,
      time: 15,
      author: {id:"11", name:'Test1'},
      typeOfMeal: "обед",
      portionsAmount: 5,
      cost: 49,
      createdAt: "31.11.21",
      urlImg: '/img/2.jpg'
    },
    {
      _id: "02fe",
      title: "Омлет",
      private: false,
      ingredients: [
        {
          description: "Яйца",
          count: "3шт",
        },
        {
          description: "Молоко",
          count: "300г",
        },
      ],
      steps: [
        {
          title: "шаг 1",
          description: "Рыбное филе порезать на мелкие кусочки",
        },
        {
          title: "шаг 2",
          description:
            "Смешать соевый соус и кетчуп, посыпать измельченным чесноком. Соус поставить в холодильник  ",
        },
        {
          title: "шаг 3",
          description:
            "Рыбное филе обвалять в муке и соли. Обжарить на сковородке",
        },
      ],
      description: "Рецепт дня",
      cuisine: "Европа",
      rating: 4,
      time: 48,
      author: {id:"112", name:'Test3'},
      typeOfMeal: "обед",
      portionsAmount: 3,
      cost: 22,
      createdAt: "31.11.21",
    },
    {
      _id: "14",
      title: "Паста",
      private: false,
      ingredients: [
        {
          description: "макароны",
          count: "300г"
        },
        {
          description: "сливки",
          count: "300г"
        },
        {
          description: "бекон",
          count: "300г"
        },
        {
          description: "соус",
          count: "300г"
        }
      ],
      steps: [
        {
          title: "шаг 1",
          description: "Рыбное филе порезать на мелкие кусочки",
        },
        {
          title: "шаг 2",
          description:
            "Смешать соевый соус и кетчуп, посыпать измельченным чесноком. Соус поставить в холодильник  ",
        },
        {
          title: "шаг 3",
          description:
            "Рыбное филе обвалять в муке и соли. Обжарить на сковородке",
        },
      ],
      description: "Нежнейшая паста карбонара с яйцом и сливками приготовленная по старинному рейепту",
      cuisine: "Европа",
      rating: 5,
      time: 60,
      author: {id:"103", name:'Test3'},
      typeOfMeal: "обед",
      portionsAmount: 3,
      cost: 22,
      createdAt: "31.11.21",
      urlImg: '/img/6.jpg'
    },
    {
      _id: "13",
      title: "Мясо по французски",
      private: false,
      ingredients: [
        {
          description: "картошка",
          count: "300г"
        },
        {
          description: "мясо",
          count: "300г"
        },
        {
          description: "соус",
          count: "300г"
        },
      ],
      steps: [
        {
          title: "шаг 1",
          description: "Рыбное филе порезать на мелкие кусочки",
        },
        {
          title: "шаг 2",
          description:
            "Смешать соевый соус и кетчуп, посыпать измельченным чесноком. Соус поставить в холодильник  ",
        },
        {
          title: "шаг 3",
          description:
            "Рыбное филе обвалять в муке и соли. Обжарить на сковородке",
        },
      ],
      description: "Кортошка с мясом в духовк",
      cuisine: "Европа",
      rating: 5,
      time: 60,
      author: {id:"105", name:'Test5'},
      typeOfMeal: "обед",
      portionsAmount: 3,
      cost: 22,
      createdAt: "31.11.21",
      urlImg: '/img/4.jpg'
    },
];
