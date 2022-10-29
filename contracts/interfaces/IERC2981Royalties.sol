// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

/**
 * Barebone for royalties v1
 */
interface IERC2981Royalties {
    function royaltyInfo(uint256 _tokenId, uint256 _value)
        external
        view
        returns (address _receiver, uint256 _royaltyAmount);
}
