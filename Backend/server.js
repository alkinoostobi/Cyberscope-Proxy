const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());

// Custom middleware to log request information
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.originalUrl}`);
    console.log('Request Body:', req.body);
    console.log('Query Parameters:', req.query);
    next();
});

// Proxy endpoint for /coins/markets
app.get('/coins/markets', async(req, res) => {
    try {
        const response = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
                params: req.query,
            }
        );

        const coins = response.data.map((coin) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            current_price: coin.current_price,
            highestPrice: coin.high_24h,
            lowestPrice: coin.low_24h,
            priceChange: coin.price_change_percentage_24h,
        }));

        res.json(coins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Proxy endpoint for /coins/:id
app.get('/coins/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);

        const coin = {
            id: response.data.id,
            name: response.data.name,
            symbol: response.data.symbol,
            market_data: {
                current_price: response.data.market_data.current_price,
                market_cap: response.data.market_data.market_cap,
            },
            description: response.data.description,
            price_change_percentage_24h: response.data.market_data.price_change_percentage_24h,
            price_change_percentage_7d: response.data.market_data.price_change_percentage_7d,
            price_change_percentage_14d: response.data.market_data.price_change_percentage_14d,
            price_change_percentage_30d: response.data.market_data.price_change_percentage_30d,
            price_change_percentage_60d: response.data.market_data.price_change_percentage_60d,
            price_change_percentage_200d: response.data.market_data.price_change_percentage_200d,
            price_change_percentage_1y: response.data.market_data.price_change_percentage_1y,
            high_24h: response.data.market_data.high_24h,
            low_24h: response.data.market_data.low_24h,
        };

        res.json(coin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});