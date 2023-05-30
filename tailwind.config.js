/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-d1": "var(--color-primary-d1)",
        "primary-d2": "var(--color-primary-d2)",
        "primary-d3": "var(--color-primary-d3)",
        "primary-d4": "var(--color-primary-d4)",
        primary: "var(--color-primary)",
        "primary-l1": "var(--color-primary-l1)",
        "primary-l2": "var(--color-primary-l2)",
        "primary-l3": "var(--color-primary-l3)",
        "primary-l4": "var(--color-primary-l4)",

        "accent-d1": "var(--color-accent-d1)",
        "accent-d2": "var(--color-accent-d2)",
        "accent-d3": "var(--color-accent-d3)",
        "accent-d4": "var(--color-accent-d4)",
        accent: "var(--color-accent)",
        "accent-l1": "var(--color-accent-l1)",
        "accent-l2": "var(--color-accent-l2)",
        "accent-l3": "var(--color-accent-l3)",
        "accent-l4": "var(--color-accent-l4)",
        
        "success-d1": "var(--color-success-d1)",
        "success-d2": "var(--color-success-d2)",
        "success-d3": "var(--color-success-d3)",
        "success-d4": "var(--color-success-d4)",
        success: "var(--color-success)",
        "success-l1": "var(--color-success-l1)",
        "success-l2": "var(--color-success-l2)",
        "success-l3": "var(--color-success-l3)",
        "success-l4": "var(--color-success-l4)",

        "alert-d1": "var(--color-alert-d1)",
        "alert-d2": "var(--color-alert-d2)",
        "alert-d3": "var(--color-alert-d3)",
        "alert-d4": "var(--color-alert-d4)",
        alert: "var(--color-alert)",
        "alert-l1": "var(--color-alert-l1)",
        "alert-l2": "var(--color-alert-l2)",
        "alert-l3": "var(--color-alert-l3)",
        "alert-l4": "var(--color-alert-l4)",
        
        "error-d1": "var(--color-error-d1)",
        "error-d2": "var(--color-error-d2)",
        "error-d3": "var(--color-error-d3)",
        "error-d4": "var(--color-error-d4)",
        error: "var(--color-error)",
        "error-l1": "var(--color-error-l1)",
        "error-l2": "var(--color-error-l2)",
        "error-l3": "var(--color-error-l3)",
        "error-l4": "var(--color-error-l4)",

        "ij-gray-d1": "var(--color-gray-d1)",
        "ij-gray-d2": "var(--color-gray-d2)",
        "ij-gray-d3": "var(--color-gray-d3)",
        "ij-gray-d4": "var(--color-gray-d4)",
        "ij-gray": "var(--color-gray)",
        "ij-gray-l1": "var(--color-gray-l1)",
        "ij-gray-l2": "var(--color-gray-l2)",
        "ij-gray-l3": "var(--color-gray-l3)",
        "ij-gray-l4": "var(--color-gray-l4)",


        "ij-white": "var(--color-white)",
        "ij-black": "var(--color-black)",
        "gray-l4": "var(--color-gray-l4)",
        
      },
      boxShadow: {
        "ij-s": "var(--shadow-s)",
        "ij-m": "var(--shadow-m)",
        "ij-l": "var(--shadow-l)",
        "ij-base": "var(--shadow-base)",
        "ij-mult": "var(--shadow-mult)",
        "ij-focus": "var(--shadow-focus)",
      },
    },
    plugins: [],
  },
};
