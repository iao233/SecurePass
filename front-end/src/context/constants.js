const secureAppJSON = {
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "topic",
          type: "string",
        },
        {
          internalType: "string",
          name: "username",
          type: "string",
        },
        {
          internalType: "string",
          name: "passwordVal",
          type: "string",
        },
      ],
      name: "addPassword",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "pubkey",
          type: "address",
        },
      ],
      name: "checkUserExists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "email",
          type: "string",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "securepassword",
          type: "string",
        },
      ],
      name: "createAccount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getMyPasswords",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "topic",
              type: "string",
            },
            {
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              internalType: "string",
              name: "passwordVal",
              type: "string",
            },
          ],
          internalType: "struct SecurePass.password[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "pubkey",
          type: "address",
        },
      ],
      name: "getUsername",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};

export const SecurePassAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

export const SecurePassABI = secureAppJSON.abi;
