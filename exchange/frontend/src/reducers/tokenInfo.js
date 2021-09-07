const tokenInfoTestData = {
  id: 3,
  tokenName: 'Xeldorado',
  symbol: 'X',
  tokenType: 'Graphics',
  contractAddress: '0xkljsdfn54as5dc54Asd4fg5aD54',
  contractAddressLink:
    'https://etherscan.io/address/0xd02c52f828a35b808ce8335e7f02805dcc380b35',
  maxSupply: '800.0000000',
  tokenCirculation: '495.7826541',
  numberOfHolders: 45000,
  issuer: {
    name: 'Xeldorado Pvt Ltd',
    siteUrl: 'https://nft.xeldorado.live/',
    siteName: 'nf.xeldorado.live',
    telegramUrl: 'https://t.me/xeldorado',
    telegramId: '@Xeldorado',
    discloserUrl: 'https://nft.xeldorado.live/',
  },
  aboutToken:
    'Stacks allocated to the creator/creating team and advisors are subject to a 2 years distribution period. Starting from the end of the TGE, the creators and their advisors will receive 20% of their allocated stacks every 3 months until the distribution is fully completed.',
  buyerAgreementUrl: 'https://nft.xeldorado.live/',
  reDistributionAgreementUrl: 'https://nft.xeldorado.live/',
  marketAllocationData: [100, 200, 300, 400],
  teamAllocationData: [250, 50, 0, 500],
};

export default function tokenInfo() {
  return tokenInfoTestData;
}
