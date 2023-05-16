import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/coin.module.css";
import { fetchData } from "../api/fetchCoins.js";
import { Box } from "@mui/system";

export default function CoinPage({ coin }) {
  const router = useRouter();
  const getDescriptionHtml = () => {
    return { __html: coin.description.en };
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box className={styles.container} maxWidth="80vw">
        <p>
          <Link href="/coins">
            <small>&laquo; Back to all coins</small>
          </Link>
        </p>
        <h2 className={styles.title}>{coin.name}</h2>
        <p>Symbol: {coin.symbol}</p>

        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="0.5rem">
        <PriceBox label="Lowest Price (24h)" value={coin.low_24h.usd  + '$'} />
          <PriceBox label="Current Price" value={coin.market_data.current_price.usd ? coin.market_data.current_price.usd.toString()  + '$' : ''} />
          <PriceBox label="Highest Price (24h)" value={coin.high_24h.usd  + '$'} />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <PriceBox label="Price Change (24h)" value={coin.price_change_percentage_24h} />
          <PriceBox label="Price Change (7d)" value={coin.price_change_percentage_7d} />
          <PriceBox label="Price Change (14d)" value={coin.price_change_percentage_14d} />
          <PriceBox label="Price Change (30d)" value={coin.price_change_percentage_30d} />
          <PriceBox label="Price Change (60d)" value={coin.price_change_percentage_60d} />
          <PriceBox label="Price Change (200d)" value={coin.price_change_percentage_200d} />
          <PriceBox label="Price Change (1y)" value={coin.price_change_percentage_1y} />
        </Box>

        <p>Description: <span dangerouslySetInnerHTML={getDescriptionHtml()} /></p>
        <button className={styles.button} onClick={() => router.push("/coins")}>
          Click me to programmatically navigate or redirect
        </button>
      </Box>
    </Box>
  );
}

// Custom PriceBox component
const PriceBox = ({ label, value }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={1}
      borderRadius={8}
      border="1px solid white" // Add a thin white border
      bgcolor="rgba(255, 255, 255, 0.2)" // Make the box transparent
      width={200} // Adjust the width as needed
      height={60} // Adjust the height as needed
      textAlign="center"
    >
      <p style={{ marginBottom: '0.2rem', fontSize: '14px' }}>{label}</p> {/* Adjust the fontSize value */}
      <p style={{ marginTop: '0.2rem', fontSize: '16px' }}>{value}</p> {/* Adjust the fontSize value */}
    </Box>
  );
};

export async function getStaticPaths() {
  try {
    const coins = await fetchData("coins/markets");
    const paths = coins.map((coin) => {
      return { params: { coinpage: coin.id.toString() }};
    });
    

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching coins:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const coin = await fetchData(`coins/${params.coinpage}`);

    if (!coin) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        coin,
      },
    };
  } catch (error) {
    console.error("Error fetching coin:", error);
    return {
      notFound: true,
    };
  }
}

