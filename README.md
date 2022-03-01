```
// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7 .0 < 0.9 .0;

import "./TOKEN.sol";

contract STAKING {
    TOKEN CBR;
    uint256 round;
    uint256 roundStartTime;
    uint256 roundDuration;
    uint256 currentRate;
    uint256 totalRewardRate = 10000000000;
    uint256 lastUpdateRound = 1;
    uint256 tvl;

    mapping(address => uint256) public stakingBalance;
    mapping(address => bool) public isStaking;
    mapping(address => uint256) public startRate;
    mapping(address => uint256) public startRound;

    constructor(
        address _tokenAddress,
        uint256 _roundStartTime,
        uint256 _currentRate,
        uint256 _roundDuration
    ) {
        CBR = TOKEN(_tokenAddress);
        roundStartTime = block.timestamp;
        currentRate = 20000000000;
        roundDuration = 60;
    }

    function getTVL() public view returns(uint256) {
        return tvl;
    }

    function getLastUpdateRound() public view returns(uint256) {
        return (lastUpdateRound);
    }

    function getLastUpdateBalance() public view returns(uint256) {
        return (stakingBalance[msg.sender]);
    }

    function getRealTimeRate() public view returns(uint256) {
        if (lastUpdateRound != getRealTimeRound()) {
            uint256 additionalRate = 10000000000;
            for (uint256 i = 0; i < getRealTimeRound() - lastUpdateRound; i++) {
                additionalRate = additionalRate * currentRate / (10 ** 10);
            }
            return totalRewardRate * additionalRate / 10 ** 10;
        } else {
            return totalRewardRate;
        }
    }

    function getRealTimeIndRound() public view returns(uint256) {
        require(isStaking[msg.sender] == true);
        return (getRealTimeRound() - startRound[msg.sender]);
    }

    function getRealTimeBalance() public view returns(uint256) {
        if (isStaking[msg.sender])
            return (stakingBalance[msg.sender] * getRealTimeRate() / startRate[msg.sender]);
        else
            return 0;
    }

    function getRealTimeRound() public view returns(uint256) // 절대라운드시간.
    {
        return ((block.timestamp - roundStartTime) / roundDuration + 1);
    }

    function rebaseByOwner() public //주인추가
    {
        if (lastUpdateRound != getRealTimeRound()) {
            for (uint256 i = 0; i < getRealTimeRound() - lastUpdateRound; i++) {
                tvl = tvl * currentRate / 10000000000;
            }
            totalRewardRate = getRealTimeRate();
            lastUpdateRound = getRealTimeRound();
        }
    }

    function deposit(uint256 amount) rebase public { //보안성.
        require(amount > 0 && CBR.balanceOf(msg.sender) >= amount, "You cannot stake zero tokens");

        stakingBalance[msg.sender] += amount;
        startRound[msg.sender] = getRealTimeRound();
        startRate[msg.sender] = getRealTimeRate();
        isStaking[msg.sender] = true;
        tvl += amount;
        CBR.transferFrom(msg.sender, address(this), amount);
        //emit Stake(msg.sender, amount); // 어떻게 사용하는지 배우기
    }

    function unstake(uint256 amount) rebase public { //들어간돈 빼기.
        require(isStaking[msg.sender] == true && stakingBalance[msg.sender] >= amount && (getRealTimeIndRound() > 4));

        stakingBalance[msg.sender] -= amount;

        if (stakingBalance[msg.sender] == 0) {
            isStaking[msg.sender] = false;
        }

        startRound[msg.sender] = getRealTimeRound();
        startRate[msg.sender] = getRealTimeRate();
        tvl -= amount;
        CBR.transfer(msg.sender, amount);
        //emit Unstake(msg.sender, amount);
    }

    modifier rebase() {
        if (lastUpdateRound != getRealTimeRound()) {
            for (uint256 i = 0; i < getRealTimeRound() - lastUpdateRound; i++) {
                tvl = tvl * currentRate / 10000000000;
            }
            totalRewardRate = getRealTimeRate();
            lastUpdateRound = getRealTimeRound();
            stakingBalance[msg.sender] = getRealTimeBalance();
        }
        _;
    }
}
```
