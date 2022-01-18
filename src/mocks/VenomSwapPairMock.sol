// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@smartswap/core/contracts/UniswapV2Pair.sol";

contract VenomSwapPairMock is UniswapV2Pair {
    constructor() public UniswapV2Pair() {}
}
