// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract SecurePass {
    //USER STRUCT
    struct user {
        string email;
        string name;
        string securepassword;
        password[] passwords;
    }

    struct password {
        string topic;
        string username;
        string passwordVal;
    }

    mapping(address => user) userList;

    // mapping (bytes32 => password[]) allPasswords;

    function checkUserExists(address pubkey) public view returns (bool) {
        return bytes(userList[pubkey].email).length > 0;
    }

    function createAccount(
        string calldata email,
        string calldata name,
        string calldata securepassword
    ) external {
        require(checkUserExists(msg.sender) == false, "User already exists");
        require(bytes(email).length > 0, "Email cannot be empty");

        userList[msg.sender].email = email;
        userList[msg.sender].name = name;
        userList[msg.sender].securepassword = securepassword;
    }

    function getUsername(address pubkey) external view returns (string memory) {
        require(checkUserExists(pubkey), "User is not registered");

        return userList[pubkey].email;
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
