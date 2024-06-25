const path = require("path");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    HrmJobs: "./hrm_app/static/js/src/HrmJobs.jsx",
  },
  output: {
    path: path.resolve(__dirname, "hrm_app/static/js/dist"),
    filename: "[name].js",
    libraryTarget: "var", // This ensures the output is compatible with the browser
    library: "[name]",
    publicPath: "/static/js/dist/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"], // Ensure postcss-loader is included
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
    ],
  },
};
