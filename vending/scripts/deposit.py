from ape import accounts, convert, project


def main():
    sender = accounts.load("test")

    vending_machine = project.VendingMachine.at("0xE7a39cF061b4Ea39aa534E4F1697AB1696E32349")

    token = project.Token.at("0x5fA38625dbd065B3e336e7ef627B06a8e6090e8F")

    bal = token.balanceOf(sender)
    print("Balance:", bal)

    #amount = 1_000_000 # 84691386
    token.approve(vending_machine.address, bal, sender=sender)

    vending_machine.deposit(bal, sender=sender)


    #vending_machine.buyTokens(value=100, sender=sender)
