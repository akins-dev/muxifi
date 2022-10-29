import Moralis from "moralis";
import { CONFIG } from "src/config";

const evmApi = Moralis.EvmApi;
const { getContractNFTs, getWalletNFTs } = evmApi.nft;

const { CONTRACT_ADDRESSES } = CONFIG.WAGMI;

export const getAlbumsQuery = async ({ pageSize = 30 } = {}) => {
    const { result, pagination, next } = await getContractNFTs({
        address: CONTRACT_ADDRESSES.ALBUM,
        limit: pageSize,
    });
    return { pagination, next, result: result.map((r) => r.toJSON()) };
};

export const getAccountAlbumsQuery = async ({
    account = "",
    pageSize = 30,
} = {}) => {
    const { result, pagination, next } = await getWalletNFTs({
        tokenAddresses: [CONTRACT_ADDRESSES.ALBUM],
        address: account,
        limit: pageSize,
    });
    return { pagination, next, result: result.map((r) => r.toJSON()) };
};
