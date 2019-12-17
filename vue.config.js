module.exports = {
    productionSourceMap: false,
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "styles/var.scss";`
            }
        }
    }
}