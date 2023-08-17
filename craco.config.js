const path = require("path");

module.exports = {
  webpack: {
    alias: {
      // General
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks/hooks"),
      "@customHooks": path.resolve(__dirname, "./src/hooks/customHooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),

      // Interface Pizza
      "@interfacePizza": path.resolve(__dirname, "./src/interfaces/interfacePizza"),

      // Store
      "@store": path.resolve(__dirname, "./src/redux/store"),

      // Slices
      "@basketSlice": path.resolve(__dirname, "./src/redux/slices/basketSlice"),
      "@categorySlice": path.resolve(__dirname, "./src/redux/slices/categorySlice"),
      "@pizzasSlice": path.resolve(__dirname, "./src/redux/slices/pizzasSlice"),
      "@searchSlice": path.resolve(__dirname, "./src/redux/slices/searchSlice"),
      "@sortSlice": path.resolve(__dirname, "./src/redux/slices/sortSlice"),

      // API
      "@fetchPizzasAPI": path.resolve(__dirname, "./src/api/fetchPizzasAPI"),

      // Pizzas Data
      "@pizzasData": path.resolve(__dirname, "./src/assets/PizzasData/pizzas.json"),
    },
  }
};