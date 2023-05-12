// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract SecurePass {
    //USER STRUCT
    struct user {
        address userAddress;
        password[] passwords;
    }

    struct password {
        string topic;
        string username;
        string passwordVal;
    }

    mapping(address => user) userList;

    function checkUserExists(address pubkey) public view returns (bool) {
        return userList[pubkey].userAddress != address(0);
    }

    function createAccount() external {
        require(checkUserExists(msg.sender) == false, "User already exists");
        userList[msg.sender].userAddress = msg.sender; 
    }

    function addPassword(
        string calldata topic,
        string calldata username,
        string calldata passwordVal
    ) external {
        require(checkUserExists(msg.sender), "Create an account first");

        _addPassword(msg.sender, topic, username, passwordVal);
    }

    function _addPassword(
        address me,
        string memory topic,
        string memory username,
        string memory passwordVal
    ) internal {
        password memory newPassword = password(topic, username, passwordVal);

        userList[me].passwords.push(newPassword);
    }

    function getMyPasswords() external view returns (password[] memory) {
        return userList[msg.sender].passwords;
    }
}
