from ape import accounts, project

TOKEN = "0x5fA38625dbd065B3e336e7ef627B06a8e6090e8F"
VENDING_MACHINE = "0xE7a39cF061b4Ea39aa534E4F1697AB1696E32349"



def main():
    token = project.Token.at(TOKEN)


    bal = token.balanceOf(VENDING_MACHINE)
    print(bal / 1e6)
