import random
name = input("Enter your name?\n")
print(f"Lets us play the game",name)

game = ['rock', 'paper', 'scissors']
user = input( "Please choose rock or paper or scissor\n")
computer = random.choice(game)
    # print("\nYou chose", user ,"computer chose", computer
if user == computer:
    print("Both players selected" ,user, "It's a tie!")

elif user == game['scissors']:
    if computer == game['paper']:
        print("Scissors cuts paper! You win!")
    else:
        print("Rock smashes scissors! You lose.")
 
elif user == game['rock']:
    if computer == game['scissors']:
        print("Rock smashes scissors! You win!")
    else:
        print("Paper covers rock! You lose.")
 
elif user == game['paper']:
    if computer == game['rock']:
        print("Paper covers rock! You win!")
    else:
        print("Scissors cuts paper! You lose.")