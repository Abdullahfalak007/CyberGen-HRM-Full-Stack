// const path = require("path");

// module.exports = {
//   mode: "production",
//   entry: "./hrm_app/static/js/src/HrmJobs.jsx",
//   output: {
//     path: path.resolve(__dirname, "hrm_app/static/js/dist"),
//     filename: "HrmJobs.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react"],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: "file-loader",
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               name: "[path][name].[ext]",
//             },
//           },
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".json"],
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
// };

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./hrm_app/static/js/src/HrmJobs.jsx",
  output: {
    path: path.resolve(__dirname, "hrm_app/static/js/dist"),
    filename: "HrmJobs.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "public/[name].[ext]",
              outputPath: "static/", // Ensure this matches your Django static structure
              publicPath: "/static/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
};
