pragma solidity >=0.4.22 <0.9.0;

contract MathContract {
    /**add */
    function add(uint8 a, uint8 b) public pure returns (uint8) {
        return a + b;
    }

    function sub(uint8 a, uint8 b) public pure returns (uint8) {
        return a - b;
    }
}
