const path = require("path");

module.exports = {
  webpack: {
    alias: {
      // General
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/assets/ts/hooks"),
      "@customHooks": path.resolve(__dirname, "./src/assets/customHooks"),
      "@utils": path.resolve(__dirname, "./src/assets/utils"),

      // Interface Pizza
      "@interfacePizza": path.resolve(__dirname, "./src/assets/ts/interfacePizza"),

      // Store
      "@store": path.resolve(__dirname, "./src/assets/redux/store"),

      // Slices
      "@basketSlice": path.resolve(__dirname, "./src/assets/redux/slices/basketSlice"),
      "@categorySlice": path.resolve(__dirname, "./src/assets/redux/slices/categorySlice"),
      "@pizzasSlice": path.resolve(__dirname, "./src/assets/redux/slices/pizzasSlice"),
      "@searchSlice": path.resolve(__dirname, "./src/assets/redux/slices/searchSlice"),
      "@sortSlice": path.resolve(__dirname, "./src/assets/redux/slices/sortSlice"),

      // API
      "@fetchPizzasAPI": path.resolve(__dirname, "./src/assets/redux/api/fetchPizzasAPI"),

      // Pizzas Data
      "@pizzasData": path.resolve(__dirname, "./src/assets/PizzasData/pizzas.json"),
    },
  }
};