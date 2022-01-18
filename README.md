# smartswap-dex-contracts

Factory: `0xDd749813a4561100bDD3F50079a07110d148EaF5`  
Router: `0xE714f5768aa7F0F1623064985934FF9e12A9E61e`  
GovernanceToken: `0x47c259DFe165Cef3e429C9B66bf9ce9dc3e68aC2`  
MasterBreeder: `0x14C15BD8ba2854750770D38472dc5633152f70aa`  
Pit: `0x46269c22848738573761eC50a736916272857f83`  
PitBreeder: `0xd842Aae7ed615A4ee936d716Cf0F30aD7cB88849`  

## how to verify
SmartScan.cash lacks contract verification functionality and contractverifier.com has been down for some time so verification must be performed manually.

1. `yarn`
2. `yarn hardhat compile`
3. find `byteCode` in `artifacts/` dir e.g. `artifacts/src/GovernanceToken.json`
4. find contract deployment `transactionHash` in `deployments/` and get Contract Creation Code from SmartScan.cash
5. use diff tool to compare compiled bytecode and contract creation code
6. use https://abi.hashex.org/ to get ABI-encoded constructor args and append to compiled bytecode if necessary

this covers the four primary SmartDex contracts. note that factory and router use different compiler settings making configuration for verification cumbersome. separate repos will be pushed shortly