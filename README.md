# Crypto Dashboard

A real-time cryptocurrency dashboard built with Next.js that displays detailed information about various cryptocurrencies, including price data, charts, and trending coins.

## Features

- 🔄 Real-time cryptocurrency price updates
- 📊 TradingView charts integration
- 🔥 Trending coins section
- 💱 Multiple currency support (USD, INR)
- 📱 Fully responsive design
- ⚡ Dynamic routing for different cryptocurrencies

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Charts:** TradingView Widget
- **Icons:** Lucide React
- **API:** CoinGecko
- **Carousel:** Swiper.js
- **HTTP Client:** Axios
- **Language:** TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- The homepage automatically redirects to `/bitcoin` showing Bitcoin's data
- To view other cryptocurrencies, simply change the URL path to the coin's id
  - Example: `/ethereum` for Ethereum, `/dogecoin` for Dogecoin
- The trending section shows the top trending cryptocurrencies in the last 24 hours
- Each cryptocurrency page shows:
  - Current price in USD and INR
  - 24-hour price change
  - Real-time TradingView chart
  - Market cap rank
  - Related trending coins

## API Integration

The dashboard uses the following CoinGecko API endpoints:

- `/coins/{id}` - Get current data for a specific coin
- `/search/trending` - Get trending coins data

## Project Structure

```
src/
├── app/
│   ├── [coinId]/
│   │   └── page.tsx    # Dynamic coin page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page (redirects to /bitcoin)
├── components/
│   ├── CoinCard.tsx    # Coin price and info card
│   ├── CoinCarousel.tsx # Horizontal scrollable coin list
│   ├── TradingViewChart.tsx # Price chart component
│   └── TrendingCoins.tsx # Trending coins sidebar
├── lib/
│   └── api.ts          # API integration functions
└── types/
    └── index.ts        # TypeScript type definitions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.