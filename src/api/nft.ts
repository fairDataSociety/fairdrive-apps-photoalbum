import '@babel/polyfill';
import SwarmNFT from 'swarm-nft/SwarmNFT.min';
import { Bee } from '@ethersphere/bee-js';
import { providers } from 'ethers';
const bee = new Bee(process.env.NEXT_PUBLIC_GATEWAYURL);
declare let window: any;

export const switchNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x64' }],
    });
  } catch (error) {
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x64',
              chainName: 'xDai',
              rpcUrls: ['https://rpc.xdaichain.com/'],
            },
          ],
        });
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
};

export const mintNFT = async (imageResponse: any, title: string) => {
  if (window.ethereum) {
    try {
      const provider = new providers.Web3Provider(window.ethereum, 'any');
      const signer = provider.getSigner();
      const instance = new SwarmNFT(bee, provider, signer, {
        erc721Address: process.env.NEXT_PUBLIC_CONTRACT,
      });
      instance.setGatewayPostageBatchId();
      instance.setGatewayUrlTemplate(process.env.NEXT_PUBLIC_GATEWAYTEMPLATE);
      const addresses = await provider.send('eth_requestAccounts', []);
      const file = new File([imageResponse], 'image.jpg');
      const result = await instance.uploadNFT(file, '.jpg', {
        title: title,
      });
      const nftResult = await instance.mintNFT(addresses[0], result.metaUrl);
      await nftResult.wait();
      return nftResult;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};
