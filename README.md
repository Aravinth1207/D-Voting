# Decentralized Voting (D-Voting)

A decentralized voting system based on [Ethereum blockchain](https://ethereum.org/dapps/) technology.

## Project workflow

A brief explanation on the basic workflow of the application.

- Admin will produce a voting case by launching/ planting the system in a blockchain network (EVM), also produce an election case and start the election with the details of the election filled in ( including contenders for pickers to brio).
- Also the likely pickers connect to the same blockchain network register to come a picker. Once the stoners successfully register, their separate details are transferred/ displayed in the admins' panel ( i.e. verification runner).
  -The admin also will check if the registration information (blockchain account address, name, and phone number) is valid and matches with his record. However, also the admin approves the registered user making them eligible to take part and cast their separate vote in the election, If yes.
  -The registered user ( picker) following the blessing from the admin casts their vote to the candidate of interest (from the voting runner).
- Based on the duration of election , admin will end the election. As that happens the voting is closed and the results are displayed publicizing the winner at the top of the results runner.

---

## Steps to start server

1.Get copy of this repository in your system

2.Open command prompt on the parent directory and run
    ```shell
        npm install -g ganache-cli
        npm install -g truffle
      ```

## To-Do List

Possible features to add/ ameliorate within the app. 
 
- [ ] **Email Verification** — adding email/phone verification (OTP, etc..) while registering for voters.
- [ ] **Automated Verification** — adding an automated verification ( rather than manually approving by the admin) for the registered druggies. This could be grounded on the custom cooperation dispatch, custom list of emails, or custom list of phone figures, etc. 
- [ ] **Report** — option to induce a report at the end of an election. The report could contain a range of information including the number of people that were eligible to bounce, the number of people that shared in the election, a bar- map/ pie- map showing the election statistics, etc. 
- [ ] **Workflow advancements** — overall workflow advancements (eg. option to add campaigners within the election setup runner), with overall GUI advancements. 
- [ ] **Multiple election case** — capability to produce multiple election cases without having tore-deploy the smart contract.

---
