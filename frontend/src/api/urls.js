
export const urls = {
    BEP2: "https://dex.binance.org/api/v1/account/{walletAddress}",
    BEP20:
      "https://api.bscscan.com/api?module=account&action=balance&apikey=K5F5VT1RBGC5I7PQ8WA5NQ4IN6NU6Y53R7&address={walletAddress}",
    BTC: "https://btc.nownodes.io/api/v2/address/{walletAddress}",
    BCH: "https://bch.nownodes.io/api/v2/address/{walletAddress}",
    DASH: "https://api.blockchair.com/dash/dashboards/address/{walletAddress}",
    DOGE: "https://dogechain.info/api/v1/address/balance/{walletAddress}",
    ERC20:
      "https://api.etherscan.io/api?module=account&action=balance&tag=latest&apikey=PHU9TKPVHW95JVDAUNIUAVPAF7EGEDS66Q&address={walletAddress}",
    LTC: "https://ltcbook.nownodes.io/api/v2/address/{walletAddress}",
    TRC20: "https://apilist.tronscan.org/api/account?address={walletAddress}",
    XRP: "https://api.xrpscan.com/api/v1/account/{walletAddress}",
    TERRA: "",
    ONE: "",
    SOLANA: "",
    getUrl: function (networkType, walletAddress) {
      return this[networkType].replace("{walletAddress}", walletAddress);
    },
  };
  