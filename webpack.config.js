const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        products: './src/js/products.js',
        product: './src/js/product.js',
        cart: './src/js/cart.js',
        login: './src/js/login.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
};

module.exports = config;