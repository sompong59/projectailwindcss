 /** @type {import('tailwindcss').Config} */
 export default {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ໃຫ້ແນ່ໃຈວ່າຕັ້ງຄ່າເປັນ 'class'
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // ຫຼືເສັ້ນທາງໄປຫາໄຟລ໌ HTML ແລະ JavaScript ຂອງທ່ານ
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}