async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const HelloWorld = await ethers.getContractFactory("MyContract");
  const helloWorld = await HelloWorld.deploy();

  console.log("HelloWorld contract address:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
