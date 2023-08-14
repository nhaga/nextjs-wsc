from ape import accounts, convert, project

AMOUNT = convert("500000 eth", int)


def main():
    sender = accounts.load("test")
    token = sender.deploy(project.VendingMachine)

