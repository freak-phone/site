const emojiRating = require("@kevingimbel/eleventy-plugin-emoji-rating");


module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("itemLimit", function (array, maximum) {
    return array.slice(0, maximum);
  });

  // file: .eleventy.js
  const fs = require("fs");
  const path = require("path");

  exports.addGalleryCollection = (eleventyConfig) => {
    eleventyConfig.addCollection("albumz", () => {
      const galleryPath = path.resolve(__dirname, "/assets/graphics/about/albums");
      const files = fs.readdirSync(galleryPath);

      return files.map((file) => {
        console.log(`🖼 Adding picture to gallery: ${file}`)
        return {
          name: file.split(".")[0], // Get image name without extension
          src: `/assets/graphics/about/albums/${file}`,
        };  // Array<{name: "Image name", src: "/image.jpg"}>
      });
    });
  };

  const { DateTime } = require("luxon");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("justYear", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy');
  });

  eleventyConfig.addFilter("postDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('MM-dd-yyyy')
  })



  eleventyConfig.addPlugin(emojiRating, {
    max_rating: 10,
    htmlTag: "div",
    emoji: "🙉",
    emoji_inactive: "🙈"
  });

  // Sort with `Array.sort`
  eleventyConfig.addCollection("myCustomSort", function (collectionsApi) {
    return collectionsApi.getAll().sort(function (a, b) {
      //return a.date - b.date; // sort by date - ascending
      return b.date - a.date; // sort by date - descending
      //return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
      //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
    });
  });

  eleventyConfig.addNunjucksShortcode("renderArray", function (dataArray) {
    if (!dataArray || !Array.isArray(dataArray)) {
      return ""; // Handle cases where dataArray is not an array or is empty
    }
    let output = "<ul>";
    dataArray.forEach(item => {
      output += `<li>${item}</li>`;
    });
    output += "</ul>";
    return output;
  });

  eleventyConfig.addShortcode("renderItems", function (itemsArray) {
    let output = "<ul>";
    itemsArray.forEach(item => {
      output += `<li><strong>${item.name}:</strong> ${item.description}</li>`;
    });
    output += "</ul>";
    return output;
  });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy(".htaccess");
  eleventyConfig.addPassthroughCopy("404.html");
  eleventyConfig.configureErrorReporting({ allowMissingExtensions: true });
  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_dist"
    }
  };
};