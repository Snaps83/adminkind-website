window.GROCERY_DATA = {
  supermarkets: [
    { id: "tesco", name: "Tesco" },
    { id: "sainsburys", name: "Sainsbury's" },
    { id: "aldi", name: "Aldi" },
    { id: "lidl", name: "Lidl" },
    { id: "asda", name: "Asda" },
    { id: "morrisons", name: "Morrisons" },
    { id: "ocado", name: "Ocado" },
    { id: "waitrose", name: "Waitrose" },
    { id: "iceland", name: "Iceland" }
  ],
  products: [
    {
      id: "bananas",
      name: "Bananas",
      size: "Loose / 1kg equivalent",
      aliases: ["banana", "bananas"],
      offers: {
        tesco: { price: 0.78, unit: "78p/kg", label: "Loose bananas" },
        sainsburys: { price: 0.79, unit: "79p/kg", label: "Loose bananas" },
        aldi: { price: 0.75, unit: "75p/kg", label: "Loose bananas" },
        lidl: { price: 0.76, unit: "76p/kg", label: "Loose bananas" },
        asda: { price: 0.77, unit: "77p/kg", label: "Loose bananas" },
        morrisons: { price: 0.82, unit: "82p/kg", label: "Loose bananas" },
        ocado: { price: 0.85, unit: "85p/kg", label: "Loose bananas" },
        waitrose: { price: 0.92, unit: "92p/kg", label: "Loose bananas" },
        iceland: { price: 1.00, unit: "£1/pack", label: "Banana pack" }
      }
    },
    {
      id: "milk",
      name: "Semi-skimmed milk",
      size: "2 pints",
      aliases: ["milk", "semi skimmed milk", "semi-skimmed milk"],
      offers: {
        tesco: { price: 1.25, unit: "62.5p/pt", label: "Semi-skimmed 2pt" },
        sainsburys: { price: 1.25, unit: "62.5p/pt", label: "Semi-skimmed 2pt" },
        aldi: { price: 1.19, unit: "59.5p/pt", label: "Semi-skimmed 2pt" },
        lidl: { price: 1.19, unit: "59.5p/pt", label: "Semi-skimmed 2pt" },
        asda: { price: 1.25, unit: "62.5p/pt", label: "Semi-skimmed 2pt" },
        morrisons: { price: 1.25, unit: "62.5p/pt", label: "Semi-skimmed 2pt" },
        ocado: { price: 1.30, unit: "65p/pt", label: "Semi-skimmed 2pt" },
        waitrose: { price: 1.35, unit: "67.5p/pt", label: "Semi-skimmed 2pt" },
        iceland: { price: 1.30, unit: "65p/pt", label: "Semi-skimmed 2pt" }
      }
    },
    {
      id: "bread",
      name: "White bread",
      size: "800g loaf",
      aliases: ["bread", "white bread", "loaf"],
      offers: {
        tesco: { price: 0.75, unit: "9.4p/100g", label: "White loaf 800g" },
        sainsburys: { price: 0.75, unit: "9.4p/100g", label: "White loaf 800g" },
        aldi: { price: 0.45, unit: "5.6p/100g", label: "Everyday white loaf" },
        lidl: { price: 0.45, unit: "5.6p/100g", label: "White loaf 800g" },
        asda: { price: 0.75, unit: "9.4p/100g", label: "White loaf 800g" },
        morrisons: { price: 0.79, unit: "9.9p/100g", label: "White loaf 800g" },
        ocado: { price: 0.85, unit: "10.6p/100g", label: "White loaf 800g" },
        waitrose: { price: 0.95, unit: "11.9p/100g", label: "White loaf 800g" },
        iceland: { price: 0.79, unit: "9.9p/100g", label: "White loaf 800g" }
      }
    },
    {
      id: "eggs",
      name: "Free range eggs",
      size: "6 medium",
      aliases: ["eggs", "free range eggs", "medium eggs"],
      offers: {
        tesco: { price: 1.65, unit: "27.5p/egg", label: "Free range medium 6pk" },
        sainsburys: { price: 1.65, unit: "27.5p/egg", label: "Free range medium 6pk" },
        aldi: { price: 1.45, unit: "24.2p/egg", label: "Free range medium 6pk" },
        lidl: { price: 1.49, unit: "24.8p/egg", label: "Free range medium 6pk" },
        asda: { price: 1.60, unit: "26.7p/egg", label: "Free range medium 6pk" },
        morrisons: { price: 1.70, unit: "28.3p/egg", label: "Free range medium 6pk" },
        ocado: { price: 1.85, unit: "30.8p/egg", label: "Free range medium 6pk" },
        waitrose: { price: 2.00, unit: "33.3p/egg", label: "Free range medium 6pk" },
        iceland: { price: 1.75, unit: "29.2p/egg", label: "Free range medium 6pk" }
      }
    },
    {
      id: "chicken-breast",
      name: "Chicken breast fillets",
      size: "600g",
      aliases: ["chicken", "chicken breast", "chicken breasts", "chicken fillets"],
      offers: {
        tesco: { price: 4.40, unit: "73p/100g", label: "Chicken breast fillets 600g" },
        sainsburys: { price: 4.50, unit: "75p/100g", label: "Chicken breast fillets 600g" },
        aldi: { price: 4.15, unit: "69p/100g", label: "Chicken breast fillets 600g" },
        lidl: { price: 4.19, unit: "70p/100g", label: "Chicken breast fillets 600g" },
        asda: { price: 4.35, unit: "72.5p/100g", label: "Chicken breast fillets 600g" },
        morrisons: { price: 4.60, unit: "76.7p/100g", label: "Chicken breast fillets 600g" },
        ocado: { price: 5.20, unit: "86.7p/100g", label: "Chicken breast fillets 600g" },
        waitrose: { price: 5.75, unit: "95.8p/100g", label: "Chicken breast fillets 600g" },
        iceland: { price: 4.25, unit: "70.8p/100g", label: "Chicken breast fillets 600g" }
      }
    },
    {
      id: "pasta",
      name: "Penne pasta",
      size: "500g",
      aliases: ["pasta", "penne", "spaghetti"],
      offers: {
        tesco: { price: 0.85, unit: "17p/100g", label: "Penne 500g" },
        sainsburys: { price: 0.85, unit: "17p/100g", label: "Penne 500g" },
        aldi: { price: 0.75, unit: "15p/100g", label: "Penne 500g" },
        lidl: { price: 0.75, unit: "15p/100g", label: "Penne 500g" },
        asda: { price: 0.85, unit: "17p/100g", label: "Penne 500g" },
        morrisons: { price: 0.90, unit: "18p/100g", label: "Penne 500g" },
        ocado: { price: 0.95, unit: "19p/100g", label: "Penne 500g" },
        waitrose: { price: 1.10, unit: "22p/100g", label: "Penne 500g" },
        iceland: { price: 1.00, unit: "20p/100g", label: "Penne 500g" }
      }
    },
    {
      id: "tomatoes",
      name: "Tomatoes",
      size: "6 pack",
      aliases: ["tomato", "tomatoes", "salad tomatoes"],
      offers: {
        tesco: { price: 1.10, unit: "18.3p each", label: "Tomatoes 6pk" },
        sainsburys: { price: 1.15, unit: "19.2p each", label: "Tomatoes 6pk" },
        aldi: { price: 0.95, unit: "15.8p each", label: "Tomatoes 6pk" },
        lidl: { price: 0.99, unit: "16.5p each", label: "Tomatoes 6pk" },
        asda: { price: 1.05, unit: "17.5p each", label: "Tomatoes 6pk" },
        morrisons: { price: 1.20, unit: "20p each", label: "Tomatoes 6pk" },
        ocado: { price: 1.30, unit: "21.7p each", label: "Tomatoes 6pk" },
        waitrose: { price: 1.50, unit: "25p each", label: "Tomatoes 6pk" },
        iceland: { price: 1.25, unit: "20.8p each", label: "Tomatoes 6pk" }
      }
    },
    {
      id: "cheddar",
      name: "Mature cheddar",
      size: "400g",
      aliases: ["cheese", "cheddar", "mature cheddar"],
      offers: {
        tesco: { price: 2.75, unit: "68.8p/100g", label: "Mature cheddar 400g" },
        sainsburys: { price: 2.85, unit: "71.3p/100g", label: "Mature cheddar 400g" },
        aldi: { price: 2.49, unit: "62.3p/100g", label: "Mature cheddar 400g" },
        lidl: { price: 2.55, unit: "63.8p/100g", label: "Mature cheddar 400g" },
        asda: { price: 2.70, unit: "67.5p/100g", label: "Mature cheddar 400g" },
        morrisons: { price: 2.90, unit: "72.5p/100g", label: "Mature cheddar 400g" },
        ocado: { price: 3.25, unit: "81.3p/100g", label: "Mature cheddar 400g" },
        waitrose: { price: 3.50, unit: "87.5p/100g", label: "Mature cheddar 400g" },
        iceland: { price: 2.85, unit: "71.3p/100g", label: "Mature cheddar 400g" }
      }
    },
    {
      id: "rice",
      name: "Basmati rice",
      size: "1kg",
      aliases: ["rice", "basmati rice"],
      offers: {
        tesco: { price: 1.95, unit: "19.5p/100g", label: "Basmati rice 1kg" },
        sainsburys: { price: 2.00, unit: "20p/100g", label: "Basmati rice 1kg" },
        aldi: { price: 1.79, unit: "17.9p/100g", label: "Basmati rice 1kg" },
        lidl: { price: 1.79, unit: "17.9p/100g", label: "Basmati rice 1kg" },
        asda: { price: 1.90, unit: "19p/100g", label: "Basmati rice 1kg" },
        morrisons: { price: 2.10, unit: "21p/100g", label: "Basmati rice 1kg" },
        ocado: { price: 2.25, unit: "22.5p/100g", label: "Basmati rice 1kg" },
        waitrose: { price: 2.60, unit: "26p/100g", label: "Basmati rice 1kg" },
        iceland: { price: 2.00, unit: "20p/100g", label: "Basmati rice 1kg" }
      }
    },
    {
      id: "beans",
      name: "Baked beans",
      size: "400g tin",
      aliases: ["beans", "baked beans"],
      offers: {
        tesco: { price: 0.45, unit: "11.3p/100g", label: "Baked beans 400g" },
        sainsburys: { price: 0.45, unit: "11.3p/100g", label: "Baked beans 400g" },
        aldi: { price: 0.32, unit: "8p/100g", label: "Baked beans 400g" },
        lidl: { price: 0.35, unit: "8.8p/100g", label: "Baked beans 400g" },
        asda: { price: 0.45, unit: "11.3p/100g", label: "Baked beans 400g" },
        morrisons: { price: 0.49, unit: "12.3p/100g", label: "Baked beans 400g" },
        ocado: { price: 0.55, unit: "13.8p/100g", label: "Baked beans 400g" },
        waitrose: { price: 0.65, unit: "16.3p/100g", label: "Baked beans 400g" },
        iceland: { price: 0.50, unit: "12.5p/100g", label: "Baked beans 400g" }
      }
    }
  ]
};
