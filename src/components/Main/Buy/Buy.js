import React from 'react';
import money from '../../../images/Money.svg';
import moneyS from '../../../images/Money_small.svg';
import useDeviceDetect from '../../../hooks/useDeviceDetect';

function Buy() {
  const { isMobile } = useDeviceDetect();

  return (
    <section className='buy' id="how-to-buy">
      <p className='buy__title'>HOW TO BUY</p>
      {
        isMobile ? <img src={moneyS} className='buy__image' alt="Money" /> : <img src={money} className='buy__image' alt="Money" />
      }
      <ul className='buy__text-container'>
        <li className='buy__card buy__card-first'>
          <p className='buy__card-title'>GO TO DEDUST OR STON.FI</p>
          <p className='buy__card-text'>Go to DeDust or STON.fi in Google Chrome, or on the browser inside your <a className='buy__link' href='https://tonkeeper.com/'>TonKeeper</a>
           app. Connect your wallet. Type the name (don’t buy DUREVOLD) or paste $MRBOOST token address, and confirm. When Tonkeeper prompts you for a wallet signature, sign.</p>
        </li>
        <li className='buy__card buy__card-second'>
          <p className='buy__card-title'>BUY $MRBOOST</p>
          <p className='buy__card-text'>Swap TON for $MRBOOST. We have zero taxes so you don’t need to worry about buying with a specific slippage, although you may increase it if your transaction fails.</p>
        </li>
        <li className='buy__card buy__card-third'>
          <p className='buy__card-title'>WHERE TO BUY TON?</p>
          <p className='buy__card-text'>Buy TON with a card in wallets <a className='buy__link' href='https://tonkeeper.com/'>TonKeeper</a> or
          TonSpace. Alternatively, use CEXes such as OKX, Bybit, HTX, KuCoin, etc. Or you can use Uniswap (ETH) or PancakeSwap (BSC). Full list of exchanges is available on <a className='buy__link' href='https://coinmarketcap.com/currencies/toncoin/'>CoinMarketCap</a>.</p>
        </li>
        <li className='buy__card buy__card-fourth'>
          <p className='buy__card-title'>HOW TO BRIDGE TON?</p>
          <p className='buy__card-text'>Bridge from any chain to TON using <a className='buy__link' href='https://bridge.ton.org/'>bridge.ton.org</a>
          , <a className='buy__link' href='https://app.rocketx.exchange/swap'>rocketx</a> or <a className='buy__link' href='https://changenow.io/'>changenow</a> or a CEX.</p>
        </li>
      </ul>
    </section>)
}

export default Buy;