module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    return {
        passthroughFilecopy: true
    }
}